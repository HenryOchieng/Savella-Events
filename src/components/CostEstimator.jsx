import React, { useMemo, useState } from 'react'

const packages = {
  wedding: { base: 1800, guestRate: 18 },
  corporate: { base: 1600, guestRate: 16 },
  private: { base: 900, guestRate: 12 },
  gala: { base: 2200, guestRate: 20 },
}

const extras = [
  { id: 'decor', label: 'Décor styling', price: 350 },
  { id: 'lighting', label: 'Lighting & AV', price: 450 },
  { id: 'coordination', label: 'On-site coordination', price: 300 },
]

export default function CostEstimator() {
  const [eventType, setEventType] = useState('wedding')
  const [guests, setGuests] = useState(80)
  const [selectedExtras, setSelectedExtras] = useState(['decor'])

  const estimate = useMemo(() => {
    const pkg = packages[eventType]
    const extraTotal = selectedExtras.reduce((sum, id) => {
      const item = extras.find((entry) => entry.id === id)
      return sum + (item?.price || 0)
    }, 0)

    const guestTotal = guests * pkg.guestRate
    const total = pkg.base + guestTotal + extraTotal

    return {
      total,
      breakdown: [
        { label: 'Planning base', value: pkg.base },
        { label: 'Guest support', value: guestTotal },
        { label: 'Selected extras', value: extraTotal },
      ],
    }
  }, [eventType, guests, selectedExtras])

  function toggleExtra(id) {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section id="estimator" className="section" aria-label="Cost estimator">
      <div className="container">
        <div className="section-head">
          <h2>Interactive cost estimator</h2>
          <p>Explore a quick planning estimate based on your event type, guest count, and preferred extras.</p>
        </div>

        <div className="estimator-grid">
          <article className="estimator-card">
            <label>
              Event type
              <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="gala">Charity / Gala</option>
              </select>
            </label>

            <label>
              Guest count
              <input
                type="range"
                min="20"
                max="300"
                step="5"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
              <span className="range-value">{guests} guests</span>
            </label>

            <div>
              <div className="estimator-label">Add-ons</div>
              <div className="extras-grid">
                {extras.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`extra-chip ${selectedExtras.includes(item.id) ? 'selected' : ''}`}
                    onClick={() => toggleExtra(item.id)}
                  >
                    {item.label} +${item.price}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <aside className="estimator-card estimator-summary">
            <p className="estimator-label">Estimated planning investment</p>
            <h3 className="estimate-price">${estimate.total}</h3>
            <p className="estimate-note">This is a planning estimate for a tailored event package.</p>

            <ul className="estimate-breakdown">
              {estimate.breakdown.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>${item.value}</strong>
                </li>
              ))}
            </ul>

            <button type="button" className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a quote
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
