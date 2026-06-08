import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import CostEstimator from './components/CostEstimator.jsx'
import BookingCalendar from './components/BookingCalendar.jsx'
import Newsletter from './components/Newsletter.jsx'
import Events from './components/Events.jsx'
import FAQ from './components/FAQ.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Chatbot from './components/Chatbot.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CostEstimator />
        <BookingCalendar />
        <Newsletter />
        <Events />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  )
}

