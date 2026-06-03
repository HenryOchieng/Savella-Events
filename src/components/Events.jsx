import React from 'react'



const events = [

  { title: 'Corporate Gala', tag: 'Brand Experience', color: 'a' },
  { title: 'Modern Wedding', tag: 'Décor + Planning', color: 'b' },
  { title: 'Launch Night', tag: 'Production', color: 'c' },
  { title: 'Birthday Soirée', tag: 'Private Party', color: 'd' },
  { title: 'Charity Evening', tag: 'Run-of-Show', color: 'e' },
  { title: 'Engagement Celebration', tag: 'Coordination', color: 'f' },
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

