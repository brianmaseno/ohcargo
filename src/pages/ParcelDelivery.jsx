import React from 'react'
import { Link } from 'react-router-dom'
import parcelImg from '../assets/cheerful-afro-woman-hugging-carton-parcel-receivi-2025-03-18-18-25-45-utc.jpg'
import deliveryImg from '../assets/shot-of-a-young-postal-worker-delivering-a-package-2025-04-06-11-41-36-utc.jpg'
import happyCustomer from '../assets/happy-young-shop-assistant-passing-paperbag-with-f-2025-03-13-15-00-58-utc.jpg'

export default function ParcelDelivery() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Processing',
      description: 'Quick pickup and delivery within 24 hours in major cities'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Secure Packaging',
      description: 'Professional handling with insurance coverage available'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Real-Time Updates',
      description: 'Track your parcel every step of the journey'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable Rates',
      description: 'Competitive pricing with no hidden charges'
    }
  ]

  const serviceTypes = [
    {
      name: 'Standard Delivery',
      time: '2-3 Days',
      price: 'From KES 300',
      features: ['Nationwide coverage', 'Door-to-door service', 'Package tracking']
    },
    {
      name: 'Express Delivery',
      time: '24 Hours',
      price: 'From KES 600',
      features: ['Same-day option available', 'Priority handling', 'SMS notifications']
    },
    {
      name: 'Overnight Delivery',
      time: 'Next Day',
      price: 'From KES 450',
      features: ['Morning delivery', 'Signature required', 'Safe handling']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-[#7D0E0E] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Parcel Delivery Services
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Safe & Reliable Parcel Delivery
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Send packages across Kenya with confidence. Professional handling, real-time tracking, and doorstep delivery guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/" className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-all shadow-lg">
                  Send a Parcel
                </Link>
                <Link to="/track-parcel" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  Track Delivery
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={parcelImg} 
                alt="Parcel Delivery" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Parcel Service</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine speed, security, and affordability to deliver your packages safely
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all">
                <div className="bg-[#7D0E0E] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Types Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Delivery Options</h2>
            <p className="text-lg text-gray-600">Choose the service that fits your timeline and budget</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#7D0E0E]">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-[#7D0E0E]">{service.price}</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-2 mb-6">
                  <p className="text-sm text-gray-600">Delivery Time</p>
                  <p className="text-lg font-bold text-gray-900">{service.time}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/" className="block w-full bg-[#7D0E0E] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-colors">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + Content Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4">
                <span className="text-sm font-bold text-[#7D0E0E] uppercase tracking-wider">Professional Service</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Parcels, Our Priority
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every package is handled with care by our trained professionals. From delicate items to important documents, we ensure safe transit and timely delivery to your recipient's doorstep.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Temperature-Controlled Options</h3>
                    <p className="text-gray-600">For perishable items and sensitive goods</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fragile Item Handling</h3>
                    <p className="text-gray-600">Special care for breakable packages</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Proof of Delivery</h3>
                    <p className="text-gray-600">Digital confirmation with signature capture</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={deliveryImg} 
                alt="Professional delivery" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Send Your Parcel?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Get instant quotes and book your delivery in minutes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Book Delivery Now
            </Link>
            <Link to="/business" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Business Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
