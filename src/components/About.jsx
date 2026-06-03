import React from 'react'

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Savella">
      <div className="container">
        <div className="section-head">
          <h2>Crafted planning. Flawless execution.</h2>
          <p>
            We’re a dedicated team that coordinates every detail-so you can enjoy the moment.
            Our approach blends elegant design, operational clarity, and hands-on leadership.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">✦</div>
            <h3>Creative direction</h3>
            <p>Concepts, themes, décor styling, and branding-tailored to your vision.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">✓</div>
            <h3>Operational precision</h3>
            <p>Timelines, vendors, logistics, and run-of-show management.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">❤</div>
            <h3>Personal attention</h3>
            <p>Responsive communication from planning to final applause.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

