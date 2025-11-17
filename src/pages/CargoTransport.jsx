import React from 'react'
import { Link } from 'react-router-dom'
import cargoImg from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg'
import deliveryImg from '../assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg'

export default function CargoTransport() {
  const features = [
    {
      icon: '🚛',
      title: 'Heavy-Duty Fleet',
      description: 'Modern trucks equipped for all cargo types and sizes'
    },
    {
      icon: '📍',
      title: 'Nationwide Coverage',
      description: 'Reliable freight services across all regions of Kenya'
    },
    {
      icon: '⏱️',
      title: 'Flexible Scheduling',
      description: 'Choose pickup and delivery times that work for you'
    },
    {
      icon: '🔒',
      title: 'Cargo Insurance',
      description: 'Full protection for your valuable packages'
    }
  ]

  const cargoTypes = [
    {
      name: 'Commercial Goods',
      description: 'Business inventory, retail products, and wholesale items',
      weight: 'Up to 10 tons'
    },
    {
      name: 'Construction Materials',
      description: 'Building supplies, equipment, and raw materials',
      weight: 'Up to 15 tons'
    },
    {
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and manufacturing components',
      weight: 'Custom solutions'
    },
    {
      name: 'Bulk Deliveries',
      description: 'Large-volume cargo requiring special handling',
      weight: 'Custom solutions'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="bg-[#7D0E0E] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Cargo & Freight Solutions
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Heavy-Duty Transport Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Move large cargo efficiently with our professional cargo transport services. From commercial goods to industrial equipment, we handle it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/business" className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-all shadow-lg">
                Get Quote
              </Link>
              <a href="tel:1-800-458-56987" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cargo Service</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional freight solutions backed by years of logistics expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border-2 border-transparent hover:border-[#7D0E0E]">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cargo Types Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Transport</h2>
            <p className="text-lg text-gray-600">Specialized solutions for every type of cargo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cargoTypes.map((cargo, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{cargo.name}</h3>
                  <span className="bg-[#7D0E0E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cargo.weight}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{cargo.description}</p>
                <Link to="/business" className="text-[#7D0E0E] font-semibold hover:underline inline-flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Content Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={deliveryImg} 
                alt="Cargo delivery" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold text-[#7D0E0E] uppercase tracking-wider">Our Process</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Simple & Efficient Cargo Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We make freight logistics straightforward. Our dedicated team handles every aspect of your cargo transport, from loading to final delivery.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Request a Quote</h3>
                    <p className="text-gray-600">Tell us your cargo details and delivery requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Schedule Pickup</h3>
                    <p className="text-gray-600">Choose a convenient time for cargo collection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#7D0E0E] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Track Delivery</h3>
                    <p className="text-gray-600">Monitor your cargo in real-time until delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need to Move Heavy Cargo?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Get a custom quote for your freight requirements today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/business" className="bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Request Quote
            </Link>
            <a href="tel:1-800-458-56987" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Call: 1-800-458-56987
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
