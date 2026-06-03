import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage('Please enter a valid email address.')
      return
    }

    setMessage('Thank you for subscribing. We’ll send updates and event inspiration soon.')
    setEmail('')
  }

  return (
    <section id="newsletter" className="section" aria-label="Newsletter signup">
      <div className="container">
        <div className="newsletter-card">
          <div>
            <div className="booking-label">Stay in the loop</div>
            <h2>Get event ideas, planning tips, and seasonal inspiration.</h2>
            <p>Subscribe for boutique event updates, styling inspiration, and booking news.</p>
          </div>
          <form className="newsletter-form" onSubmit={onSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
            {message && <p className="newsletter-message">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
