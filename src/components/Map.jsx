import React, { useEffect, useRef } from 'react';
import * as atlas from 'azure-maps-control';
import 'azure-maps-control/dist/atlas.min.css';

// Azure Maps Configuration
const AZURE_MAPS_CLIENT_ID = import.meta.env.VITE_AZURE_MAPS_CLIENT_ID;
const AZURE_MAPS_SUBSCRIPTION_KEY = import.meta.env.VITE_AZURE_MAPS_KEY;

// Nairobi, Kenya default coordinates
const DEFAULT_CENTER = [-1.2921, 36.8219]; // [latitude, longitude]

const MapComponent = ({ pickup, destination, height = '100%' }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const dataSourceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = new atlas.Map(mapRef.current, {
      center: [36.8219, -1.2921], // [longitude, latitude] for Azure Maps - Nairobi center
      zoom: 11,
      minZoom: 6, // Prevent zooming out too far to see globe
      maxZoom: 18,
      language: 'en-US',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: AZURE_MAPS_SUBSCRIPTION_KEY,
        clientId: AZURE_MAPS_CLIENT_ID
      },
      style: 'road',
      showFeedbackLink: false,
      showLogo: false,
      renderWorldCopies: false // Prevent showing multiple earth copies
    });

    mapInstanceRef.current = map;

    // Wait for map to be ready
    map.events.add('ready', () => {
      console.log('Azure Maps loaded successfully');
      
      // Add zoom control
      map.controls.add(new atlas.control.ZoomControl(), {
        position: 'top-right'
      });

      // Add data source for markers and routes
      const dataSource = new atlas.source.DataSource();
      map.sources.add(dataSource);
      dataSourceRef.current = dataSource;

      // Add a layer for rendering line data (route)
      const lineLayer = new atlas.layer.LineLayer(dataSource, null, {
        strokeColor: '#7D0E0E', // Brand maroon color
        strokeWidth: 6,
        strokeOpacity: 1,
        lineJoin: 'round',
        lineCap: 'round'
      });
      map.layers.add(lineLayer);
      
      console.log('Map layers and data source added');
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.dispose();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers and route when pickup/destination changes
  useEffect(() => {
    if (!mapInstanceRef.current || !dataSourceRef.current) return;

    const map = mapInstanceRef.current;
    const dataSource = dataSourceRef.current;

    // Clear existing markers
    markersRef.current.forEach(marker => map.markers.remove(marker));
    markersRef.current = [];
    
    // Clear existing data
    dataSource.clear();

    // Add pickup marker
    if (pickup && pickup.latitude && pickup.longitude) {
      // Create custom HTML marker for pickup
      const pickupHtmlMarker = new atlas.HtmlMarker({
        position: [pickup.longitude, pickup.latitude],
        htmlContent: '<div style="background-color: #16489b; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); border: 4px solid white;">P</div>',
        anchor: 'center'
      });
      map.markers.add(pickupHtmlMarker);
      markersRef.current.push(pickupHtmlMarker);

      // Center map on pickup if no destination
      if (!destination || !destination.latitude || !destination.longitude) {
        map.setCamera({
          center: [pickup.longitude, pickup.latitude],
          zoom: 13,
          duration: 500
        });
      }
    }

    // Add destination marker
    if (destination && destination.latitude && destination.longitude) {
      // Create custom HTML marker for destination
      const destHtmlMarker = new atlas.HtmlMarker({
        position: [destination.longitude, destination.latitude],
        htmlContent: '<div style="background-color: #EF4444; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); border: 4px solid white;">D</div>',
        anchor: 'center'
      });
      map.markers.add(destHtmlMarker);
      markersRef.current.push(destHtmlMarker);

      // If both markers exist, fetch and display route from Azure Maps Route API
      if (pickup && pickup.latitude && pickup.longitude) {
        fetchRoute(pickup, destination, dataSource, map);
      }
    }
  }, [pickup, destination]);

  // Fetch route from Azure Maps Route API
  const fetchRoute = async (pickup, destination, dataSource, map) => {
    try {
      console.log('Fetching route from', pickup, 'to', destination);
      
      const url = `https://atlas.microsoft.com/route/directions/json?api-version=1.0&subscription-key=${AZURE_MAPS_SUBSCRIPTION_KEY}&query=${pickup.latitude},${pickup.longitude}:${destination.latitude},${destination.longitude}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const coordinates = [];
        
        // Extract route coordinates
        route.legs.forEach(leg => {
          leg.points.forEach(point => {
            coordinates.push([point.longitude, point.latitude]);
          });
        });

        console.log('Route coordinates:', coordinates.length, 'points');

        // Create route line
        const routeLine = new atlas.data.LineString(coordinates);
        dataSource.add(routeLine);

        // Fit map to show entire route with optimal zoom
        const bbox = atlas.data.BoundingBox.fromData(routeLine);
        map.setCamera({
          bounds: bbox,
          padding: { top: 80, bottom: 80, left: 80, right: 80 },
          duration: 1000 // Smooth animation
        });
        
        console.log('Route added to map successfully');
      } else {
        console.warn('No route found, drawing straight line');
        drawStraightLine(pickup, destination, dataSource, map);
      }
    } catch (error) {
      console.error('Error fetching route:', error);
      // Fallback to straight line if route API fails
      drawStraightLine(pickup, destination, dataSource, map);
    }
  };

  // Draw straight line between two points
  const drawStraightLine = (pickup, destination, dataSource, map) => {
    const routeLine = new atlas.data.LineString([
      [pickup.longitude, pickup.latitude],
      [destination.longitude, destination.latitude]
    ]);
    dataSource.add(routeLine);

    // Fit map to show both markers with good zoom
    const bbox = atlas.data.BoundingBox.fromData(routeLine);
    map.setCamera({
      bounds: bbox,
      padding: { top: 80, bottom: 80, left: 80, right: 80 },
      duration: 1000
    });
    
    console.log('Straight line route added');
  };

  if (!AZURE_MAPS_SUBSCRIPTION_KEY && !AZURE_MAPS_CLIENT_ID) {
    return (
      <div
        style={{
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #800020 0%, #0a1e3d 100%)',
          borderRadius: '12px',
          color: 'white',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <div>
          <p className="text-lg font-semibold mb-2">Azure Maps Configuration Missing</p>
          <p className="text-sm opacity-90">
            Please add Azure Maps credentials to your .env file
          </p>
          <p className="text-xs opacity-75 mt-2">
            VITE_AZURE_MAPS_CLIENT_ID and VITE_AZURE_MAPS_KEY
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height, 
        width: '100%',
        borderRadius: '12px', 
        overflow: 'hidden' 
      }}
    />
  );
};

export default MapComponent;
