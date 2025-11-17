import React from 'react'
import { Link } from 'react-router-dom'
import deliveryImg from '../assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg'
import courierImg from '../assets/smiling-african-courier-handing-over-a-package-to-2025-03-07-07-13-07-utc.jpg'
import parcelImg from '../assets/cheerful-afro-woman-hugging-carton-parcel-receivi-2025-03-18-18-25-45-utc.jpg'
import cargoImg from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg'
import shoppingImg from '../assets/happy-young-shop-assistant-passing-paperbag-with-f-2025-03-13-15-00-58-utc.jpg'
import trackingImg from '../assets/your-service-never-disappoints-2025-04-06-08-56-54-utc.jpg'
import heroImg from '../assets/portrait-courier-and-black-woman-with-a-package-2025-04-06-08-53-12-utc.jpg'

export default function OurServices() {
  const services = [
    {
      title: 'Ride Booking',
      description: 'Quick and affordable transportation for your daily commute across Kenya. Book instantly and get matched with nearby drivers.',
      image: deliveryImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/'
    },
    {
      title: 'Parcel Delivery',
      description: 'Fast and secure parcel delivery services with real-time tracking. From documents to packages, we handle it all with care.',
      image: parcelImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      link: '/parcel-delivery'
    },
    {
      title: 'Heavy Goods Transport',
      description: 'Professional cargo transport solutions for bulk and heavy goods. Get custom quotes for construction materials, equipment, and more.',
      image: cargoImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      link: '/get-quote'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your deliveries from pickup to drop-off with our advanced GPS tracking system. Stay informed every step of the way.',
      image: trackingImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: '/track-parcel'
    },
    {
      title: 'Scheduled Deliveries',
      description: 'Plan ahead with our scheduled delivery service. Choose your preferred pickup time and ensure timely deliveries.',
      image: shoppingImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/'
    },
    {
      title: 'Corporate Solutions',
      description: 'Tailored logistics solutions for businesses. Volume discounts, dedicated support, and priority service for corporate clients.',
      image: courierImg,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/business'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Grid */}
      <section className="py-16 lg:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#7D0E0E] font-semibold text-sm uppercase tracking-wider mb-3">WHAT WE OFFER</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The services we offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick ride bookings to heavy cargo transport, we provide reliable, efficient, and affordable logistics solutions for everyone
            </p>
          </div>

          {/* Alternating Layout */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <div className="w-20 h-1 bg-[#7D0E0E]"></div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[350px] lg:h-[450px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={courierImg}
                alt="Professional delivery service"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <p className="text-[#7D0E0E] font-semibold text-sm uppercase tracking-wider mb-3">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Efficient and reliable delivery solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At OhCargo, we combine cutting-edge technology with a commitment to excellence to provide seamless logistics experiences. Our platform connects you with trusted delivery partners, ensuring your goods reach their destination safely and on time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">99% On-Time Delivery</h4>
                    <p className="text-gray-600">Reliable service you can count on</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Secure & Insured</h4>
                    <p className="text-gray-600">Your goods are protected every step of the way</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7D0E0E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Affordable Pricing</h4>
                    <p className="text-gray-600">Transparent rates with no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers across Kenya who trust OhCargo for their delivery needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#9D1E1E] transition-all shadow-lg hover:shadow-xl">
              Book a Ride
            </Link>
            <Link to="/get-quote" className="bg-white text-[#7D0E0E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
