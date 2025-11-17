import React, { useState } from 'react';
import truckImg from '../assets/delivery-concept-handsome-african-american-deliv-2025-03-06-21-47-15-utc.jpg';
import cargoImg from '../assets/shot-of-a-postal-worker-delivering-a-package-to-a-2025-04-05-22-11-33-utc.jpg';
import courierImg from '../assets/smiling-african-courier-handing-over-a-package-to-2025-03-07-07-13-07-utc.jpg';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    goodsType: '',
    weight: '',
    pickupLocation: '',
    deliveryLocation: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const goodsCategories = [
    'Construction Materials',
    'Furniture & Appliances',
    'Industrial Equipment',
    'Agricultural Products',
    'Bulk Food Items',
    'Electronics & Technology',
    'Medical Equipment',
    'Other Heavy Goods'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your interest in OhCargo's heavy goods transportation services. 
            Our team will review your requirements and send you a detailed quote within 24 hours.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Confirmation sent to:</strong> {formData.email}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Reference Number:</strong> QT-{Date.now().toString().slice(-8)}
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-[#7D0E0E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${truckImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Get a Custom Quote</h1>
            <p className="text-xl text-white/90">
              Need to transport heavy goods or bulk cargo? Request a customized quote for your specific requirements. We provide competitive pricing for large-scale deliveries across Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[#7D0E0E] font-semibold text-sm uppercase tracking-wider mb-3">HEAVY CARGO SOLUTIONS</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Heavy Goods Transport
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're moving construction materials, industrial equipment, or bulk cargo, OhCargo provides reliable heavy goods transportation with competitive rates and professional handling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fleet of Heavy-Duty Trucks</h4>
                    <p className="text-gray-600">Access to various truck sizes for any cargo volume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experienced Handlers</h4>
                    <p className="text-gray-600">Professional team trained in heavy cargo logistics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600">Best rates with transparent pricing structure</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cargoImg}
                alt="Heavy cargo transportation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#7D0E0E] rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Heavy goods delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left sidebar with image and info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <img 
                src={courierImg}
                alt="Professional courier service"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <div className="bg-gradient-to-br from-[#7D0E0E] to-red-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24-hour quote turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No hidden fees or charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Insured cargo protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time tracking available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Request Your Custom Quote</h2>
            <p className="text-gray-600">
              Fill in the details below and our logistics team will provide you with a competitive quote within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7D0E0E]">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7D0E0E]">
                Package Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Goods <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="goodsType"
                    required
                    value={formData.goodsType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  >
                    <option value="">Select goods category</option>
                    {goodsCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Weight <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      name="weight"
                      required
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="Enter weight"
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                    />
                    <select className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all">
                      <option>Kilograms (kg)</option>
                      <option>Tons</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7D0E0E]">
                Locations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    required
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="Enter delivery location"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D0E0E] focus:border-[#7D0E0E] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#9D1E1E] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Get Quote'}
              </button>
            </div>
          </form>
        </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">24-Hour Response</h3>
            <p className="text-sm text-gray-600">Fast quote turnaround time</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Best Rates</h3>
            <p className="text-sm text-gray-600">Competitive pricing guaranteed</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#7D0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Insured Transport</h3>
            <p className="text-sm text-gray-600">Full cargo protection</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600">Professional logistics support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
