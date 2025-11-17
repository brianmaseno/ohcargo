import React from 'react'

export default function Landing(){
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block mb-4 px-4 py-2 bg-primary-100 text-maroon rounded-full text-sm font-semibold">
                 Now live across Kenya
              </div>
              <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Move Smart <span className="bg-gradient-to-r from-maroon to-deep-blue bg-clip-text text-transparent">Move Ohcargo</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Smart, reliable rides and parcel delivery across Kenya. Book instantly from web or mobile.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/" className="btn-primary inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Book a ride
                </a>
                <a href="/business" className="btn-secondary">
                  Business solutions →
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#16489b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  10k+ rides completed
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#16489b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  4.9★ rating
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-100 via-white to-blue-100 p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 opacity-30"></div>
                  <div className="relative text-center p-8">
                    <svg className="w-32 h-32 mx-auto mb-4 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 font-medium">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose ohcargo?</h2>
            <p className="text-xl text-gray-600">Built for speed, reliability, and your peace of mind</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant booking</h3>
              <p className="text-gray-600">Get matched with nearby drivers in seconds. No waiting, just moving.</p>
            </div>
            <div className="feature-card">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified drivers, GPS tracking, and 24/7 support for your safety.</p>
            </div>
            <div className="feature-card">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair pricing</h3>
              <p className="text-gray-600">Transparent rates with no hidden fees. Pay cash or digital wallet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card p-12 text-center bg-gradient-to-br from-maroon to-deep-blue text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Built for business</h2>
              <p className="text-xl mb-8 opacity-90">Streamline your company's transportation with corporate accounts, fleet management, and priority support.</p>
              <a href="/business" className="inline-flex items-center gap-2 bg-white text-maroon px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Get started with business →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
