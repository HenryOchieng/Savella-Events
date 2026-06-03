import React from 'react'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'

export default function Hero() {

  return (
    <section id="home" className="section hero" aria-label="Savella hero">
      <div className="container hero-grid">
        <div className="hero-copy">

          <div className="pill">Event management • Design • Execution</div>
          <h1 className="hero-title">
            Savella makes every occasion feel
            <span className="gradient-text"> effortlessly special</span>.
          </h1>
          <p className="hero-subtitle">
            From corporate conferences to weddings and private celebrations, we plan with
            precision, build with creativity, and deliver with confidence.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a quote
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View past events
            </button>
          </div>

          <div className="hero-metrics" role="list" aria-label="Highlights">
            <div className="metric" role="listitem">
              <div className="metric-num">50+</div>
              <div className="metric-label">Events delivered</div>
            </div>
            <div className="metric" role="listitem">
              <div className="metric-num">10+ yrs</div>
              <div className="metric-label">Industry experience</div>
            </div>
            <div className="metric" role="listitem">
              <div className="metric-num">4.9★</div>
              <div className="metric-label">Client satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-media" aria-hidden>
          <img className="hero-img hero-img-1" src={img1} alt="" />
          <img className="hero-img hero-img-2" src={img2} alt="" />
          <img className="hero-img hero-img-3" src={img3} alt="" />
          <div className="media-overlay">
            <div className="media-badge">Next available date: 3 weeks</div>
          </div>
        </div>


      </div>
    </section>
  )
}

