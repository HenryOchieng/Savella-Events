import React from 'react'

const services = [
  {
    title: 'Corporate Events',
    desc: 'Conferences, product launches, team celebrations, and brand experiences.',
  },
  {
    title: 'Weddings & Celebrations',
    desc: 'From venue planning to décor and guest flow—romantic, organized, memorable.',
  },
  {
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, and milestone gatherings designed around you.',
  },
  {
    title: 'Full-Service Production',
    desc: 'Run-of-show, vendor coordination, staging, lighting, and on-site management.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section" aria-label="Services">
      <div className="container">
        <div className="section-head">
          <h2>Services that scale with your vision</h2>
          <p>Choose full-service or modular support-we’ll meet you where you are.</p>
        </div>

        <div className="cards-grid">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

