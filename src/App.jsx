import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import RequestRide from './pages/RequestRide'
import BusinessOnboarding from './pages/BusinessOnboarding'
import TrackParcel from './pages/TrackParcel'
import GetQuote from './pages/GetQuote'
import AboutUs from './pages/AboutUs'
import ParcelDelivery from './pages/ParcelDelivery'
import CargoTransport from './pages/CargoTransport'
import DoorstepPickup from './pages/DoorstepPickup'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import HowItWorks from './pages/HowItWorks'

export default function App(){
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RequestRide/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/our-services" element={<OurServices/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/business" element={<BusinessOnboarding/>} />
          <Route path="/track-parcel" element={<TrackParcel/>} />
          <Route path="/get-quote" element={<GetQuote/>} />
          <Route path="/parcel-delivery" element={<ParcelDelivery/>} />
          <Route path="/cargo-transport" element={<CargoTransport/>} />
          <Route path="/pickup" element={<DoorstepPickup/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
