import React from 'react'
import deliveryImage from '../assets/putting-your-package-in-your-hands-2025-04-06-01-05-32-utc.jpg'

export default function TrustSection() {
  return (
    <div className="mt-12 overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={deliveryImage} 
            alt="Reliable delivery service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative py-16 px-8 lg:px-16 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            On-Time, Every Time
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            We understand how important your deliveries are. That's why we guarantee timely pickups and safe delivery of your goods, tracked every step of the way.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h3 className="font-bold text-white text-lg">Real-Time Tracking</h3>
              </div>
              <p className="text-white/90 text-sm">Monitor your delivery from pickup to drop-off</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="font-bold text-white text-lg">Secure Handling</h3>
              </div>
              <p className="text-white/90 text-sm">Your packages handled with care and professionalism</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h3 className="font-bold text-white text-lg">Reliable Service</h3>
              </div>
              <p className="text-white/90 text-sm">99% on-time delivery rate across Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
