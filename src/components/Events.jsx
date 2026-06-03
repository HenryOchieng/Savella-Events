import React from 'react'
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

export default function Events() {
  return (
    <section id="events" className="section" aria-label="Past events">
      <div className="container">
        <div className="section-head">
          <h2>Recent moments</h2>
          <p>
            A glimpse into the energy we create—balanced, stylish, and smoothly managed.
          </p>
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

