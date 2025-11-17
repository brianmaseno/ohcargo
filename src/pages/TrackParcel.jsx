import React, { useState } from 'react';
import deliveryBg from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg';

export default function TrackParcel() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulate API call - replace with actual tracking API
    setTimeout(() => {
      setTrackingResult({
        trackingId: trackingNumber,
        status: 'In Transit',
        currentLocation: 'Nairobi Distribution Center',
        estimatedDelivery: 'Tomorrow, 2:00 PM',
        timeline: [
          { status: 'Order Placed', date: 'Nov 12, 2025 - 10:30 AM', completed: true },
          { status: 'Package Picked Up', date: 'Nov 12, 2025 - 2:15 PM', completed: true },
          { status: 'In Transit', date: 'Nov 13, 2025 - 9:00 AM', completed: true, current: true },
          { status: 'Out for Delivery', date: 'Nov 14, 2025 - 8:00 AM', completed: false },
          { status: 'Delivered', date: 'Expected: Nov 14, 2025', completed: false },
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background - DHL Style */}
      <div className="relative bg-white overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${deliveryBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">Track Your Delivery</h1>
            <p className="text-xl text-white mb-12">
              Enter your tracking number to get real-time updates on your delivery
            </p>

            {/* Tracking Form */}
            <form onSubmit={handleTrack} className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number(s)"
                  className="flex-1 px-6 py-5 border-0 focus:ring-0 focus:outline-none text-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#7D0E0E] text-white px-12 py-5 font-bold text-lg hover:bg-[#9D1E1E] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Tracking...' : 'Track'}
                </button>
              </div>
              {error && (
                <div className="px-6 py-3 bg-red-50 border-t border-red-100">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}
            </form>

            <p className="text-white text-sm mt-6 opacity-90">
              Tip: You can track multiple deliveries by separating tracking numbers with commas
            </p>
          </div>
        </div>
      </div>

      {/* Tracking Results */}
      {trackingResult && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Status Header */}
            <div className="border-b pb-6 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Tracking ID: {trackingResult.trackingId}
                  </h2>
                  <p className="text-gray-600">Current Status: <span className="font-semibold text-[#7D0E0E]">{trackingResult.status}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="text-2xl font-bold text-gray-900">{trackingResult.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Delivery Progress</h3>
              
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {trackingResult.timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                    {/* Status Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                      item.completed 
                        ? item.current 
                          ? 'bg-[#7D0E0E] border-[#7D0E0E]' 
                          : 'bg-green-500 border-green-500'
                        : 'bg-white border-gray-300'
                    }`}>
                      {item.completed && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>

                    {/* Status Details */}
                    <div className={`flex-1 pb-8 ${item.current ? 'bg-red-50 -ml-6 pl-12 pr-6 py-4 rounded-r-xl border-l-4 border-[#7D0E0E]' : ''}`}>
                      <h4 className={`text-lg font-bold ${item.current ? 'text-[#7D0E0E]' : item.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                        {item.status}
                      </h4>
                      <p className={`text-sm ${item.current ? 'text-gray-700' : 'text-gray-500'}`}>
                        {item.date}
                      </p>
                      {item.current && (
                        <p className="text-sm text-gray-600 mt-2">
                          Location: {trackingResult.currentLocation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#7D0E0E]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Contact our support team</p>
              <p className="font-semibold text-[#7D0E0E]">+254 708 304 927</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Delivery Details</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">View delivery information</p>
              <button className="text-blue-600 font-semibold hover:underline">View Details</button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Reschedule</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Change delivery time</p>
              <button className="text-green-600 font-semibold hover:underline">Reschedule Delivery</button>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      {!trackingResult && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Track your parcel in real-time with accurate location updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery across Kenya</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Safe</h3>
              <p className="text-gray-600">Your packages are handled with care and security</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
