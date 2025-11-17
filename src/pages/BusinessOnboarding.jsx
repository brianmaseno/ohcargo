import React, { useState } from 'react'
import api from '../api'

export default function BusinessOnboarding(){
  const [company, setCompany] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try{
      const res = await api.post('/business/onboard', { company, contact, email, address })
      setMessage(res.data?.message || 'Business enquiry submitted. Our team will contact you.')
    }catch(err){
      setMessage(err?.response?.data?.message || 'Could not submit')
    }finally{ setLoading(false) }
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            🏢 Enterprise Solutions
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Built for <span className="bg-gradient-to-r from-primary-600 to-brand-teal bg-clip-text text-transparent">business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your company's transportation with corporate accounts, centralized billing, and dedicated support.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="feature-card">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Team management</h3>
            <p className="text-gray-600">Add employees, set ride policies, and manage permissions from one dashboard.</p>
          </div>
          
          <div className="feature-card">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Centralized billing</h3>
            <p className="text-gray-600">One invoice, detailed reports, and flexible payment terms for your business.</p>
          </div>
          
          <div className="feature-card">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Priority support</h3>
            <p className="text-gray-600">Dedicated account manager and 24/7 priority support for your team.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get started today</h2>
            <p className="text-gray-600 mb-6">Fill out this form and our team will contact you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company name *</label>
                <input 
                  value={company} 
                  onChange={e=>setCompany(e.target.value)} 
                  className="input-field" 
                  placeholder="Acme Corporation"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact person *</label>
                <input 
                  value={contact} 
                  onChange={e=>setContact(e.target.value)} 
                  placeholder="John Doe (+254712345678)" 
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business email *</label>
                <input 
                  type="email"
                  value={email} 
                  onChange={e=>setEmail(e.target.value)} 
                  placeholder="contact@acme.com" 
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company address</label>
                <input 
                  value={address} 
                  onChange={e=>setAddress(e.target.value)} 
                  className="input-field"
                  placeholder="Nairobi, Kenya"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated monthly rides</label>
                <select className="input-field">
                  <option>10-50 rides</option>
                  <option>50-200 rides</option>
                  <option>200-500 rides</option>
                  <option>500+ rides</option>
                </select>
              </div>

              {message && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                  {message}
                </div>
              )}

              <button className="btn-primary w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Submitting...
                  </span>
                ) : 'Request demo →'}
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4">What you get</h3>
              <ul className="space-y-3">
                {[
                  'Dedicated account dashboard',
                  'Corporate billing & invoicing',
                  'Employee ride management',
                  'Real-time tracking & reporting',
                  'Priority booking & support',
                  'Custom pricing for volume',
                  'API integration available',
                  'Monthly analytics reports'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-brand-teal rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Trusted by leading companies</h3>
              <p className="text-primary-100 mb-4">Join 100+ businesses already using ohcargo for their transportation needs.</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-white/90">and many more...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
