import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setError('')
    try{
      const res = await api.post('/customer/auth/login', {
        phone_or_email: phoneOrEmail,
        password
      })
      const token = res.data?.access_token || res.data?.token || res.data?.data?.access_token
      if(token){
        localStorage.setItem('ohcargo_token', token)
        navigate('/request-ride')
      } else {
        setError('Login succeeded but token not found in response')
      }
    }catch(err){
      setError(err?.response?.data?.message || 'Login failed')
    }finally{ setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex mb-4">
            <img src="/logo.png" alt="OhCargo" className="h-20 w-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600">Sign in to continue your journey</p>
        </div>
        
        <div className="card p-8">
          {/* Google Sign In Button */}
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone or Email</label>
              <input 
                value={phoneOrEmail} 
                onChange={e=>setPhoneOrEmail(e.target.value)} 
                placeholder="+2547... or email@example.com" 
                className="input-field" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={e=>setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="input-field" 
              />
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Forgot password?</a>
            </div>
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account? <a href="/register" className="text-primary-600 hover:text-primary-700 font-semibold">Create account</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
