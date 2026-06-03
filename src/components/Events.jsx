import React, { useEffect, useState } from 'react'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'

const events = [
  { title: 'Corporate Gala', tag: 'Brand Experience', color: 'a', img: img1 },
  { title: 'Modern Wedding', tag: 'Décor + Planning', color: 'b', img: img2 },
  { title: 'Launch Night', tag: 'Production', color: 'c', img: img3 },
  { title: 'Birthday Soirée', tag: 'Private Party', color: 'd', img: img1 },
  { title: 'Charity Evening', tag: 'Run-of-Show', color: 'e', img: img2 },
  { title: 'Engagement Celebration', tag: 'Coordination', color: 'f', img: img3 },

]

function getCountdownTarget() {
  const target = new Date()
  target.setDate(target.getDate() + 45)
  target.setHours(18, 0, 0, 0)
  return target
}

function getTimeLeft(targetDate) {
  const difference = targetDate.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Events() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(getCountdownTarget()))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(getCountdownTarget()))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="events" className="section" aria-label="Past events">
      <div className="container">
        <div className="section-head">
          <h2>Recent moments</h2>
          <p>
            A glimpse into the energy we create—balanced, stylish, and smoothly managed.
          </p>
        </div>

        <div className="countdown-banner" aria-label="Next event countdown">
          <div>
            <p className="countdown-label">Next signature event</p>
            <h3>Luxury planning, curated for your next celebration.</h3>
            <p className="countdown-copy">Our next showcase experience begins in:</p>
          </div>
          <div className="countdown-grid">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div className="countdown-card" key={unit}>
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery">
          {events.map((e) => (
            <div key={e.title} className={`gallery-item g-${e.color}`}>
              <img className="event-img" src={e.img} alt="" loading="lazy" decoding="async" />
              <div className="gallery-top">
                <div className="gallery-tag">{e.tag}</div>
              </div>
              <div className="gallery-title">{e.title}</div>
            </div>

          ))}
        </div>


        <div className="events-cta">
          <div>
            <div className="events-cta-title">Want your event to look like this?</div>
            <div className="events-cta-sub">We’ll curate a plan and budget that fits.</div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start planning
          </button>
        </div>
      </div>
    </section>
  )
}

