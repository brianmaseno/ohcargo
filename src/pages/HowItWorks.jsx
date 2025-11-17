import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"
import Image1 from '../assets/customerapp/Splash.png'
import Image2 from '../assets/customerapp/Location.png'
import Image3 from '../assets/customerapp/means.png'
import Image4 from '../assets/customerapp/confirm.png'
import Image5 from '../assets/customerapp/track.png'
import deliveryImg from '../assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg'

export default function HowItWorks() {
  const slides = [
    {
      title: "Download & Install the Ohcargo Customer App",
      description: "Install the Ohcargo App from the Google Play Store and complete the registration on the app.",
      image: Image1,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      step: "01"
    },
    {
      title: "Select Location",
      description: "Select the load pickup point and offloading point of the goods.",
      image: Image2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      step: "02"
    },
    {
      title: "Select the appropriate truck type & add a note",
      description: "Choose means, check estimated cost and add optional cargo details.",
      image: Image3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      step: "03"
    },
    {
      title: "Find a Rider",
      description: "Choose the best bid from available riders to move your cargo.",
      image: Image4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      step: "04"
    },
    {
      title: "Confirm and Track Your Cargo",
      description: "Send the code to the driver to confirm pickup, then track your cargo in real-time.",
      image: Image5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      step: "05"
    }
  ]

  const features = [
    {
      title: 'Instant Booking',
      description: 'Request a ride or delivery in seconds through our web or mobile app.',
      icon: '⚡'
    },
    {
      title: 'Verified Drivers',
      description: 'All our drivers and couriers are background-checked and trained.',
      icon: '✓'
    },
    {
      title: 'Live Tracking',
      description: 'Track your delivery or ride in real-time with GPS technology.',
      icon: '📍'
    },
    {
      title: 'Secure Payments',
      description: 'Multiple payment options with encrypted transactions.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service for any assistance you need.',
      icon: '💬'
    },
    {
      title: 'Affordable Rates',
      description: 'Transparent pricing with no hidden fees or surge charges.',
      icon: '💰'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden pt-32 md:pt-40">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${deliveryImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How OhCargo Works
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Simple, fast, and reliable logistics at your fingertips. Here's how we make moving goods and people effortless.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 mb-4 text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
              <span className="font-bold text-[#7D0E0E]">OHCARGO</span> is a leading logistics provider, leveraging advanced technology to drive innovation. 
              We offer scalable solutions for efficient and reliable transportation and supply chain services.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center overflow-hidden" style={{ minHeight: '70vh' }}>
          <Swiper
            centeredSlides={true}
            pagination={false}
            effect={"coverflow"}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}  
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            className="w-full h-full"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
              1280: { slidesPerView: 2.5 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="flex w-full justify-center relative">
                <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-[360px] h-full flex flex-col transition-all duration-300">
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 z-20 w-14 h-14 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{slide.step}</span>
                  </div>

                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[450px] object-contain bg-gray-900 transition-transform duration-500 hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content Card */}
                  <div className="relative -mt-12 mx-4 bg-white rounded-xl shadow-xl p-6 z-10 border border-gray-100">
                    {/* Icon */}
                    <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center shadow-lg text-white">
                      {slide.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 mb-3 pt-6 leading-tight text-sm">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {slide.description}
                    </p>

                    {/* Button */}
                    <Link
                      to="/"
                      className="block w-full bg-gradient-to-r from-[#7D0E0E] to-[#9D1E1E] hover:from-[#9D1E1E] hover:to-[#7D0E0E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CSS for opacity and smooth transitions */}
        <style>{`
          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.5;
            transform: scale(0.85);
          }

          .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 10;
          }

          .swiper-slide {
            transition: all 0.5s ease;
          }
        `}</style>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#7D0E0E] font-semibold text-sm uppercase tracking-wider mb-3">WHY CHOOSE US</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What makes us different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technology, reliability, and customer service to deliver exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Booking</h3>
              <p className="text-gray-600 leading-relaxed">Request a ride or delivery in seconds through our web or mobile app.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Drivers</h3>
              <p className="text-gray-600 leading-relaxed">All our drivers and couriers are background-checked and trained.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Track your delivery or ride in real-time with GPS technology.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">Multiple payment options with encrypted transactions.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock customer service for any assistance you need.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D0E0E] to-[#9D1E1E] rounded-lg flex items-center justify-center mb-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Rates</h3>
              <p className="text-gray-600 leading-relaxed">Transparent pricing with no hidden fees or surge charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to experience seamless logistics?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers who trust OhCargo for their delivery needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#9D1E1E] transition-all shadow-lg hover:shadow-xl">
              Book a Ride Now
            </Link>
            <Link to="/parcel-delivery" className="bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Send a Parcel
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
