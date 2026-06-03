import React from 'react'

const testimonials = [
  {
    quote:
      'Savella handled every detail with calm confidence. Our guests couldn’t stop talking about the atmosphere.',
    name: 'Amira K.',
    role: 'Wedding client',
  },
  {
    quote:
      'The run-of-show was flawless, and the staging looked incredible. Communication was fast and clear.',
    name: 'Daniel R.',
    role: 'Product launch lead',
  },
  {
    quote:
      'From décor to vendor coordination, everything felt intentional. We felt fully supported from day one.',
    name: 'Nadia S.',
    role: 'Corporate gala organizer',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" aria-label="Client testimonials">
      <div className="container">
        <div className="section-head">
          <h2>Clients who felt taken care of</h2>
          <p>Real feedback from teams and families we’ve supported.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="t-name">{t.name}</span>
                <span className="t-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

