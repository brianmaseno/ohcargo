import React from 'react'
import TrustSection from '../components/TrustSection'
import deliveryTruck from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${deliveryTruck})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Moving Kenya Forward, <span className="text-[#FF6B6B]">One Delivery at a Time</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              OhCargo is Kenya's premier logistics and delivery platform, connecting customers with reliable transportation solutions across the nation. We're committed to making delivery simple, fast, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="w-16 h-16 bg-[#7D0E0E] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To revolutionize logistics in Kenya by providing reliable, affordable, and technology-driven delivery solutions that empower businesses and individuals to move goods seamlessly across the country.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become East Africa's most trusted logistics platform, known for exceptional service, innovative technology, and a commitment to connecting communities through reliable delivery solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">How We Started</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              OhCargo was founded with a simple yet powerful vision: to transform how goods move across Kenya. Recognizing the challenges faced by businesses and individuals in finding reliable, affordable transportation, we set out to create a platform that bridges the gap between those who need to move goods and trusted delivery partners.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Starting in Nairobi, we've grown to serve customers across Kenya, from small businesses delivering products to customers sending parcels to loved ones. Our technology-driven approach combines real-time tracking, transparent pricing, and a vetted network of drivers to ensure every delivery meets the highest standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, OhCargo is proud to be part of Kenya's digital economy, supporting thousands of businesses and creating opportunities for delivery partners nationwide. We're more than just a logistics platform—we're building the infrastructure that helps Kenya move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                We keep our promises. Every delivery matters, and we're committed to getting your goods where they need to be, when they need to be there.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage cutting-edge technology to make logistics simple, efficient, and accessible to everyone across Kenya.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We listen to our customers and continuously improve to meet and exceed expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparency and honesty guide everything we do. From pricing to delivery, you can trust OhCargo to do the right thing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We're building more than a business—we're creating opportunities and strengthening communities across Kenya.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every delivery, interaction, and innovation. Good isn't good enough—we aim for great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-[#7D0E0E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">OhCargo by the Numbers</h2>
            <p className="text-xl text-white/90">Making an impact across Kenya</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">10,000+</div>
              <p className="text-white/90 text-lg">Deliveries Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99%</div>
              <p className="text-white/90 text-lg">On-Time Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-white/90 text-lg">Trusted Partners</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
              <p className="text-white/90 text-lg">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <TrustSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience the OhCargo Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers across Kenya who trust us with their deliveries.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/" className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#9D1E1E] transition-all shadow-lg hover:shadow-xl">
              Book a Ride Now
            </a>
            <a href="/get-quote" className="bg-white text-[#7D0E0E] border-2 border-[#7D0E0E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
