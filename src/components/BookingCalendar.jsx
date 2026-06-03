import React, { useMemo, useState } from 'react'

const availability = [
  '2026-06-18',
  '2026-06-21',
  '2026-06-28',
  '2026-07-03',
  '2026-07-12',
]

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(availability[0])

  const nextDates = useMemo(() => availability.slice(0, 5), [])

  return (
    <section id="booking" className="section" aria-label="Booking calendar">
      <div className="container">
        <div className="section-head">
          <h2>Book your next date</h2>
          <p>Preview upcoming availability and choose a planning window that fits your timeline.</p>
        </div>

        <div className="booking-grid">
          <article className="booking-card">
            <div className="booking-label">Available dates</div>
            <div className="booking-dates">
              {nextDates.map((date) => (
                <button
                  key={date}
                  type="button"
                  className={`booking-pill ${selectedDate === date ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </button>
              ))}
            </div>
          </article>

          <aside className="booking-card booking-summary">
            <div className="booking-label">Selected consultation</div>
            <h3>{new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
            <p>We’ll confirm venue access, planning scope, and your preferred event style for this date.</p>
            <button type="button" className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Reserve this date
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
