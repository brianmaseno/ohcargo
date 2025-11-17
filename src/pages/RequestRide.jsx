import React, { useState, useRef } from 'react'
import api from '../api'
import Map from '../components/Map'

export default function RequestRide(){
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [pickupCoords, setPickupCoords] = useState({ longitude: 36.8219, latitude: -1.2921 })
  const [destinationCoords, setDestinationCoords] = useState(null)
  const [scheduleRide, setScheduleRide] = useState(false)
  const [scheduledTime, setScheduledTime] = useState('')
  const [showVehicleOptions, setShowVehicleOptions] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [matchedDriver, setMatchedDriver] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [gettingLocation, setGettingLocation] = useState(false)
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false)
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false)
  const [pickupLocked, setPickupLocked] = useState(false)
  const [destinationLocked, setDestinationLocked] = useState(false)
  
  const pickupInputRef = useRef(null)
  const destinationInputRef = useRef(null)
  const searchTimeoutRef = useRef(null)
  
  // Azure Maps API Key
  const AZURE_MAPS_KEY = import.meta.env.VITE_AZURE_MAPS_KEY || 'your-azure-maps-key'
  
  // Helper to parse coordinate strings like "[36.8219, -1.2921]"
  const parseCoords = (coordStr) => {
    if (!coordStr) return null
    try {
      const cleaned = coordStr.replace(/[\[\]]/g, '').trim()
      const [lng, lat] = cleaned.split(',').map(s => parseFloat(s.trim()))
      if (isNaN(lng) || isNaN(lat)) return null
      return { longitude: lng, latitude: lat }
    } catch {
      return null
    }
  }

  // Search for places using Azure Maps Search API
  const searchPlaces = async (query, isPickup) => {
    if (!query || query.length < 3) {
      if (isPickup) {
        setPickupSuggestions([])
        setShowPickupSuggestions(false)
      } else {
        setDestinationSuggestions([])
        setShowDestinationSuggestions(false)
      }
      return
    }

    try {
      // Use Azure Maps Fuzzy Search API
      const url = `https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&query=${encodeURIComponent(query)}&subscription-key=${AZURE_MAPS_KEY}&countrySet=KE&limit=5`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.results && data.results.length > 0) {
        const suggestions = data.results.map(result => ({
          address: result.address.freeformAddress || result.poi?.name || query,
          coordinates: {
            longitude: result.position.lon,
            latitude: result.position.lat
          }
        }))
        
        if (isPickup) {
          setPickupSuggestions(suggestions)
          setShowPickupSuggestions(true)
        } else {
          setDestinationSuggestions(suggestions)
          setShowDestinationSuggestions(true)
        }
      } else {
        if (isPickup) {
          setPickupSuggestions([])
          setShowPickupSuggestions(false)
        } else {
          setDestinationSuggestions([])
          setShowDestinationSuggestions(false)
        }
      }
    } catch (error) {
      console.error('Error searching places:', error)
      if (isPickup) {
        setPickupSuggestions([])
        setShowPickupSuggestions(false)
      } else {
        setDestinationSuggestions([])
        setShowDestinationSuggestions(false)
      }
    }
  }

  // Get current location
  const getCurrentLocation = async (isPickup) => {
    setGettingLocation(true)
    setMessage('')
    
    try {
      if (!navigator.geolocation) {
        setMessage('Geolocation is not supported by your browser')
        setGettingLocation(false)
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const coords = { longitude, latitude }
          
          // Reverse geocode to get address using Azure Maps
          try {
            const url = `https://atlas.microsoft.com/search/address/reverse/json?api-version=1.0&query=${latitude},${longitude}&subscription-key=${AZURE_MAPS_KEY}`
            const response = await fetch(url)
            const data = await response.json()
            
            let address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
            
            if (data.addresses && data.addresses.length > 0) {
              address = data.addresses[0].address.freeformAddress || address
            }
            
            if (isPickup) {
              setPickup(address)
              setPickupCoords(coords)
              setPickupLocked(true)
            } else {
              setDestination(address)
              setDestinationCoords(coords)
              setDestinationLocked(true)
            }
            setMessage('Location set successfully!')
            setTimeout(() => setMessage(''), 2000)
          } catch (err) {
            console.error('Reverse geocoding error:', err)
            const address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
            if (isPickup) {
              setPickup(address)
              setPickupCoords(coords)
              setPickupLocked(true)
            } else {
              setDestination(address)
              setDestinationCoords(coords)
              setDestinationLocked(true)
            }
          }
          
          setGettingLocation(false)
        },
        (error) => {
          setMessage('Unable to get your location. Please enter it manually.')
          setGettingLocation(false)
        }
      )
    } catch (err) {
      setMessage('Error getting location')
      setGettingLocation(false)
    }
  }

  // Select a suggestion
  const selectSuggestion = (suggestion, isPickup) => {
    if (isPickup) {
      setPickup(suggestion.address)
      setPickupCoords(suggestion.coordinates)
      setShowPickupSuggestions(false)
      setPickupSuggestions([])
      setPickupLocked(true)
    } else {
      setDestination(suggestion.address)
      setDestinationCoords(suggestion.coordinates)
      setShowDestinationSuggestions(false)
      setDestinationSuggestions([])
      setDestinationLocked(true)
    }
  }

  async function handleRequestRide(e){
    e.preventDefault()
    if (!pickup || !destination) {
      setMessage('Please enter both pickup and destination')
      return
    }
    setShowVehicleOptions(true)
    setMessage('')
  }

  async function handleSelectVehicle(vehicle){
    setSelectedVehicle(vehicle)
    setLoading(true)
    setMessage('')
    try{
      const payload = {
        pickup_coordinates: pickup || '[34.1234, -1.2345]',
        destination_coordinates: destination || '[34.2234, -1.3345]',
        customer_coordinates: pickup || '[34.1234, -1.2345]',
        estimated_time: 900,
        estimated_distance: 10,
        estimated_fare: vehicle.price,
        pickup_address: pickup || 'Pickup location',
        destination_address: destination || 'Destination',
        type: 'ride_request',
        vehicle_category_id: vehicle.id,
        scheduled_time: scheduleRide ? scheduledTime : null
      }
      const res = await api.post('/customer/ride/create', payload, { headers: { zoneId: (import.meta.env.VITE_ZONE_ID || '') } })
      
      // Simulate driver match (in real app, this would come from backend/websocket)
      setTimeout(() => {
        setMatchedDriver({
          name: 'John Kamau',
          rating: 4.8,
          vehicle: vehicle.name,
          plate: 'KCB 123A',
          eta: '3 mins',
          photo: null
        })
        setMessage('Driver found! Your ride is on the way.')
      }, 2000)
    }catch(err){
      setMessage(err?.response?.data?.message || 'Could not create ride')
    }finally{ setLoading(false) }
  }

  const vehicleOptions = [
    { id: 1, name: 'Bike', description: 'Quick & affordable', price: 250, eta: '2-3 mins', icon: '/src/assets/bodadelivery1.png' },
    { id: 2, name: 'Van', description: 'More space for cargo', price: 800, eta: '5-7 mins', icon: '/src/assets/van.svg' }
  ]

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book your ride</h1>
          <p className="text-gray-600">Enter your pickup and destination, then choose your vehicle</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left sidebar - Ride form */}
          <div className="lg:col-span-2">
            <div className="card p-6 sticky top-24">
              {!matchedDriver ? (
                <>
                  <form onSubmit={handleRequestRide} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#16489b]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="4"/></svg>
                        Pickup location
                      </label>
                      
                      {/* Use Current Location Button - Only show when pickup is not locked */}
                      {!pickupLocked && (
                        <button
                          type="button"
                          onClick={() => getCurrentLocation(true)}
                          disabled={gettingLocation}
                          className="w-full mb-3 px-4 py-3 bg-gradient-to-r from-[#16489b] to-[#1056b8] text-white rounded-xl font-semibold hover:from-[#1056b8] hover:to-[#0d3a7a] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {gettingLocation ? (
                            <>
                              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Getting location...
                            </>
                          ) : (
                            <>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Use Current Location
                            </>
                          )}
                        </button>
                      )}
                      
                      {/* Show pickup address as read-only when location is locked */}
                      {pickupLocked ? (
                        <div className="relative">
                          <div className="w-full px-4 py-3 pr-12 border-2 border-[#16489b] bg-[#e6f0ff] rounded-xl text-gray-900 font-medium flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#16489b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="flex-1">{pickup}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPickup('')
                              setPickupCoords({ longitude: 36.8219, latitude: -1.2921 })
                              setPickupSuggestions([])
                              setPickupLocked(false)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-[#e6f0ff] rounded-lg transition-colors"
                            title="Clear and choose different location"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <input 
                            ref={pickupInputRef}
                            value={pickup} 
                            onChange={e => {
                              const val = e.target.value
                              setPickup(val)
                              
                              // Clear previous timeout
                              if (searchTimeoutRef.current) {
                                clearTimeout(searchTimeoutRef.current)
                              }
                              
                              // If empty, clear suggestions
                              if (!val || val.length < 3) {
                                setPickupSuggestions([])
                                setShowPickupSuggestions(false)
                                return
                              }
                              
                              // Debounce search
                              searchTimeoutRef.current = setTimeout(() => {
                                searchPlaces(val, true)
                              }, 300)
                            }}
                            onFocus={() => {
                              // Show suggestions if we have any and there's text
                              if (pickup && pickup.length >= 3) {
                                if (pickupSuggestions.length > 0) {
                                  setShowPickupSuggestions(true)
                                } else {
                                  // Re-trigger search
                                  searchPlaces(pickup, true)
                                }
                              }
                            }}
                            onBlur={() => {
                              // Delay hiding to allow click on suggestion
                              setTimeout(() => setShowPickupSuggestions(false), 200)
                            }}
                            placeholder="Or type to search address..." 
                            className="input-field" 
                          />
                          
                          {/* Suggestions Dropdown */}
                          {showPickupSuggestions && pickupSuggestions.length > 0 && (
                            <div className="absolute z-50 w-full mt-2 bg-white border-2 border-[#16489b] rounded-xl shadow-xl max-h-64 overflow-y-auto">
                              {pickupSuggestions.map((suggestion, index) => (
                                <div
                                  key={index}
                                  onClick={() => selectSuggestion(suggestion, true)}
                                  className="px-4 py-3 hover:bg-[#e6f0ff] cursor-pointer border-b last:border-b-0 transition-colors"
                                >
                                  <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#16489b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-gray-900 font-medium">{suggestion.address}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Destination
                      </label>
                      <div className="relative">
                        <input 
                          ref={destinationInputRef}
                          value={destination} 
                          onChange={e => {
                            const val = e.target.value
                            setDestination(val)
                            
                            // Clear previous timeout
                            if (searchTimeoutRef.current) {
                              clearTimeout(searchTimeoutRef.current)
                            }
                            
                            // Debounce search
                            searchTimeoutRef.current = setTimeout(() => {
                              searchPlaces(val, false)
                            }, 300)
                          }}
                          onFocus={() => {
                            if (destinationSuggestions.length > 0) {
                              setShowDestinationSuggestions(true)
                            }
                          }}
                          onBlur={() => {
                            // Delay hiding to allow click on suggestion
                            setTimeout(() => setShowDestinationSuggestions(false), 200)
                          }}
                          placeholder="Enter destination address or search..." 
                          className="input-field pr-12" 
                        />
                        <button
                          type="button"
                          onClick={() => getCurrentLocation(false)}
                          disabled={gettingLocation}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Use current location"
                        >
                          {gettingLocation ? (
                            <svg className="animate-spin h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </button>
                        
                        {/* Suggestions Dropdown */}
                        {showDestinationSuggestions && destinationSuggestions.length > 0 && (
                          <div className="absolute z-50 w-full mt-2 bg-white border-2 border-red-500 rounded-xl shadow-xl max-h-64 overflow-y-auto">
                            {destinationSuggestions.map((suggestion, index) => (
                              <div
                                key={index}
                                onClick={() => selectSuggestion(suggestion, false)}
                                className="px-4 py-3 hover:bg-red-50 cursor-pointer border-b last:border-b-0 transition-colors"
                              >
                                <div className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                  </svg>
                                  <span className="text-sm text-gray-900 font-medium">{suggestion.address}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <input 
                          type="checkbox" 
                          id="scheduleRide"
                          checked={scheduleRide}
                          onChange={e => setScheduleRide(e.target.checked)}
                          className="w-4 h-4 text-primary-600 rounded"
                        />
                        <label htmlFor="scheduleRide" className="text-sm font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Schedule ride for later
                        </label>
                      </div>

                      {scheduleRide && (
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">
                            Pick date & time
                          </label>
                          <input 
                            type="datetime-local"
                            value={scheduledTime}
                            onChange={e => setScheduledTime(e.target.value)}
                            className="input-field text-sm"
                            min={new Date().toISOString().slice(0, 16)}
                          />
                        </div>
                      )}
                    </div>

                    {message && (
                      <div className={`px-4 py-3 rounded-xl text-sm ${message.includes('found') || message.includes('way') ? 'bg-[#e6f0ff] border border-[#16489b] text-[#16489b]' : 'bg-amber-50 border border-amber-200 text-amber-700'}`}>
                        {message}
                      </div>
                    )}

                    {!showVehicleOptions && (
                      <button 
                        type="submit"
                        className="btn-primary w-full py-3.5 text-base font-semibold" 
                        disabled={loading || !pickup || !destination}
                      >
                        {loading ? 'Processing...' : 'Request Ride'}
                      </button>
                    )}
                  </form>

                  {showVehicleOptions && !selectedVehicle && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="mb-4">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Choose your ride</h3>
                        <p className="text-sm text-gray-500">Select a vehicle type to continue</p>
                      </div>
                      <div className="space-y-3">
                        {vehicleOptions.map(vehicle => (
                          <div 
                            key={vehicle.id}
                            onClick={() => handleSelectVehicle(vehicle)}
                            className="group p-5 border-2 border-gray-200 hover:border-primary-600 bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 rounded-xl cursor-pointer transition-all shadow-sm hover:shadow-md"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <img src={vehicle.icon} alt={vehicle.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                  <div className="font-bold text-gray-900 text-lg">{vehicle.name}</div>
                                  <div className="text-sm text-gray-500">{vehicle.description}</div>
                                  <div className="text-xs text-gray-400 mt-1">ETA: {vehicle.eta}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary-700 group-hover:text-primary-800">KES {vehicle.price}</div>
                                <div className="text-xs text-gray-500 mt-1">Estimated fare</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setShowVehicleOptions(false)}
                        className="mt-4 w-full py-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
                      >
                        ← Back to edit pickup/destination
                      </button>
                    </div>
                  )}

                  {loading && selectedVehicle && (
                    <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-3"></div>
                      <p className="text-sm text-gray-700 font-medium">Finding nearby drivers...</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="w-20 h-20 bg-[#e6f0ff] rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-10 h-10 text-[#16489b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Driver Found!</h3>
                    <p className="text-sm text-gray-600">Your {selectedVehicle?.name} is on the way</p>
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                        👤
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">{matchedDriver.name}</h4>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold">{matchedDriver.rating}</span>
                          <span className="text-gray-500">• {matchedDriver.vehicle}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Plate Number</p>
                        <p className="font-bold text-gray-900">{matchedDriver.plate}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Arrives in</p>
                        <p className="font-bold text-primary-700">{matchedDriver.eta}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-500 mb-1">Total Fare</p>
                      <p className="text-2xl font-bold text-gray-900">KES {selectedVehicle?.price}</p>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-white text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        📞 Call Driver
                      </button>
                      <button className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Cancel Ride
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                      <div className="flex-1">
                        <p className="text-gray-500 text-xs">Pickup</p>
                        <p className="text-gray-900 font-medium">{pickup || 'Pickup location'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                      <div className="flex-1">
                        <p className="text-gray-500 text-xs">Destination</p>
                        <p className="text-gray-900 font-medium">{destination || 'Destination'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Map */}
          <div className="lg:col-span-3">
            <div className="card p-0 overflow-hidden h-[600px] sticky top-24">
              <Map 
                pickup={pickupCoords} 
                destination={destinationCoords}
                height="100%" 
              />
            </div>
          </div>
        </div>

        {/* Safety & On-Time Delivery Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#e6f0ff] to-[#d0e4ff] rounded-2xl overflow-hidden border border-[#16489b]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Safe & On-Time, Every Time
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Your safety and satisfaction are our top priorities. We guarantee secure handling of your parcels and timely deliveries, so you can track your package with peace of mind.
                </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#16489b] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">100% Safe Delivery</h3>
                      <p className="text-gray-600 text-sm">All our riders are verified and trained for secure parcel handling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Always On Time</h3>
                      <p className="text-gray-600 text-sm">Real-time tracking and optimized routes ensure prompt delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Our customer care team is always ready to assist you</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <img 
                  src="/src/assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg" 
                  alt="Safe and On-Time Delivery" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Download Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get the OhCargo App
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Download our mobile app for a seamless experience. Track your deliveries, book rides, and manage everything on the go!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Screenshot */}
            <div className="relative flex justify-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/src/assets/customerapp/Splash.png" 
                  alt="OhCargo App - Splash Screen" 
                  className="w-full max-w-md rounded-2xl shadow-2xl border-8 border-gray-800"
                />
              </div>
            </div>

            {/* Download CTA */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-primary-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Download Now & Get Started
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience the convenience of booking rides and tracking parcels right from your phone. Available now on Google Play Store!
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#16489b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Real-time package tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#16489b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Instant ride booking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#16489b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Secure payment options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#16489b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Delivery history & receipts</span>
                  </div>
                </div>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.ohcargo.customer&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 group">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-90">GET IT ON</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
