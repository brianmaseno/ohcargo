import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/flogo.png'
import deliveryImg from '../assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg'
import parcelImg from '../assets/cheerful-afro-woman-hugging-carton-parcel-receivi-2025-03-18-18-25-45-utc.jpg'
import courierImg from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg'
import shoppingImg from '../assets/happy-young-shop-assistant-passing-paperbag-with-f-2025-03-13-15-00-58-utc.jpg'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)

  const services = [
    { 
      name: 'Express Delivery', 
      path: '/',
      description: 'Same-day delivery for urgent packages',
      icon: '⚡',
      image: deliveryImg
    },
    { 
      name: 'Parcel Delivery', 
      path: '/parcel-delivery',
      description: 'Secure package delivery across Kenya',
      icon: '📦',
      image: parcelImg
    },
    { 
      name: 'Cargo Transport', 
      path: '/cargo-transport',
      description: 'Heavy-duty freight solutions',
      icon: '🚚',
      image: courierImg
    },
    { 
      name: 'Doorstep Pickup', 
      path: '/pickup',
      description: 'Convenient collection from your location',
      icon: '🏠',
      image: shoppingImg
    },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="OhCargo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#7D0E0E] font-semibold transition-colors">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px]">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="mb-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Our Services</h3>
                        <p className="text-sm text-gray-600">Choose the service that fits your needs</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="group flex gap-3 p-4 rounded-lg transition-all border border-gray-100 hover:border-[#7D0E0E] hover:bg-red-50 hover:shadow-md"
                          >
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={service.image} 
                                alt={service.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-[#7D0E0E] transition-colors mb-1 text-sm">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-600 leading-snug line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-200 flex justify-between items-center gap-3">
                        <p className="text-sm text-gray-600">Need help choosing?</p>
                        <div className="flex gap-2">
                          <Link 
                            to="/our-services"
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                          >
                            View All
                          </Link>
                          <Link 
                            to="/get-quote" 
                            className="bg-[#7D0E0E] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#9D1E1E] transition-colors"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#7D0E0E] font-semibold transition-colors">
                More
                <svg className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* More Dropdown Menu */}
              {isMoreDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="py-2">
                      <Link
                        to="/our-services"
                        onClick={() => setIsMoreDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors group"
                      >
                        <svg className="w-5 h-5 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#7D0E0E] font-medium">All Services</span>
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() => setIsMoreDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors group"
                      >
                        <svg className="w-5 h-5 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#7D0E0E] font-medium">Blog</span>
                      </Link>
                      <Link
                        to="/how-it-works"
                        onClick={() => setIsMoreDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors group"
                      >
                        <svg className="w-5 h-5 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#7D0E0E] font-medium">How OhCargo Works</span>
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => setIsMoreDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors group"
                      >
                        <svg className="w-5 h-5 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-[#7D0E0E] font-medium">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-[#7D0E0E] font-semibold transition-colors">
              About Us
            </Link>
            <Link to="/track-parcel" className="flex items-center gap-2 text-gray-700 hover:text-[#7D0E0E] font-semibold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Track Parcel
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className="text-gray-700 font-semibold hover:text-[#7D0E0E] transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-[#7D0E0E] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#9D1E1E] shadow-md hover:shadow-lg transition-all">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t">
            <div className="flex flex-col gap-1 pt-4">
              {/* Services - Mobile */}
              <div className="px-4 py-2">
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-semibold"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* More - Mobile */}
              <div className="px-4 py-2">
                <button 
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-semibold"
                >
                  More
                  <svg className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMoreDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      to="/our-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      All Services
                    </Link>
                    <Link
                      to="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/how-it-works"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      How OhCargo Works
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-50">
                About Us
              </Link>
              <Link to="/track-parcel" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Track Parcel
              </Link>
              <div className="border-t my-2"></div>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-50">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="mx-4 py-2.5 bg-[#7D0E0E] text-white text-center rounded-lg font-semibold">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
