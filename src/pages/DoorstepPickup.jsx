import React from 'react'
import { Link } from 'react-router-dom'
import pickupImg from '../assets/smiling-african-courier-handing-over-a-package-to-2025-03-07-07-13-07-utc.jpg'
import happyCustomer from '../assets/your-service-never-disappoints-2025-04-06-08-56-54-utc.jpg'
import shoppingImg from '../assets/portrait-courier-and-black-woman-with-a-package-2025-04-06-08-53-12-utc.jpg'

export default function DoorstepPickup() {
  const benefits = [
    {
      icon: '🏠',
      title: 'Convenient Collection',
      description: 'We come to you - no need to visit a drop-off location'
    },
    {
      icon: '⏰',
      title: 'Flexible Timing',
      description: 'Choose a pickup time that suits your schedule'
    },
    {
      icon: '📦',
      title: 'Free Packaging',
      description: 'Complimentary packaging materials for fragile items'
    },
    {
      icon: '✅',
      title: 'Instant Confirmation',
      description: 'Get immediate receipt and tracking number'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Book Online',
      description: 'Schedule a pickup through our website or mobile app in seconds'
    },
    {
      step: '2',
      title: 'Prepare Package',
      description: 'Pack your items or request our free packaging assistance'
    },
    {
      step: '3',
      title: 'We Collect',
      description: 'Our courier arrives at your doorstep at the scheduled time'
    },
    {
      step: '4',
      title: 'Track Delivery',
      description: 'Monitor your package until it reaches the destination'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-[#7D0E0E] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-white text-[#7D0E0E] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Pickup Service
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Pick Up From Your Doorstep
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Save time and hassle with our convenient doorstep pickup service. Schedule a collection and we'll come to you - it's that simple.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/" className="bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
                  Schedule Pickup
                </Link>
                <Link to="/track-parcel" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Track Package
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={pickupImg} 
                alt="Doorstep pickup service" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Doorstep Pickup</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy the convenience of having your packages collected from wherever you are
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Four simple steps to hassle-free pickup</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all h-full">
                  <div className="bg-[#7D0E0E] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + Content Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold text-[#7D0E0E] uppercase tracking-wider">Available Everywhere</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pickup Service Across Kenya
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're in Nairobi, Mombasa, Kisumu, or any other city, our doorstep pickup service is available to make your delivery experience seamless and convenient.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Available 6 days a week (Monday - Saturday)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Same-day pickup slots available</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">No minimum package size required</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">Free pickup for business accounts</span>
                </div>
              </div>
              <Link to="/" className="inline-block bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-all">
                Book Your Pickup
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={happyCustomer} 
                alt="Happy customer" 
                className="rounded-2xl shadow-lg"
              />
              <img 
                src={shoppingImg} 
                alt="Shopping delivery" 
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for Pickup?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Schedule a convenient time and we'll handle the rest
          </p>
          <Link to="/" className="inline-block bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  )
}
