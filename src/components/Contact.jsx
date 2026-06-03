import React, { useMemo, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: 'Wedding', date: '', message: '' })
  const [status, setStatus] = useState('')

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    return form.name.trim().length >= 2 && emailOk && form.message.trim().length >= 10
  }, [form])

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!isValid) {
      setStatus('Please complete the required fields (name, a valid email, and a message).')
      return
    }

    // Demo behavior: no backend. Shows a confirmation.
    setStatus(
      `Thanks, ${form.name.split(' ')[0] || form.name}! Your request has been prepared. (Demo form—connect to your backend/API to send.)`,
    )
  }

  return (
    <section id="contact" className="section" aria-label="Contact Savella">
      <div className="container">
        <div className="section-head">
          <h2>Request a quote</h2>
          <p>Tell us about your event-we’ll respond with next steps and a tailored plan.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                Full name*
                <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
              </label>
              <label>
                Email*
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Optional" />
              </label>
              <label>
                Event type
                <select name="eventType" value={form.eventType} onChange={onChange}>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Charity / Gala</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Target date
                <input name="date" value={form.date} onChange={onChange} type="date" />
              </label>
            </div>

            <label>
              Message*
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Share venue ideas, guest count, budget range, and what you want to feel on the day..."
                required
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={!isValid}>
                Send request
              </button>
              <div className="form-note">* Required</div>
            </div>

            {status && <div className={status.startsWith('Thanks') ? 'alert alert-success' : 'alert'}>{status}</div>}
          </form>

          <aside className="contact-side">
            <div className="contact-card">
              <div className="contact-card-title">Savella Events</div>
              <div className="contact-line">Event management • Planning • Production</div>
              <div className="contact-line">Email: hello@savella.example</div>
              <div className="contact-line">Phone: +1 (555) 012-3456</div>
              <div className="contact-line">Hours: Mon–Sat, 9am–6pm</div>
            </div>
            <div className="contact-card">
              <div className="contact-card-title">What happens next?</div>
              <ol className="steps">
                <li>We review your details.</li>
                <li>We recommend a plan + budget range.</li>
                <li>We confirm a date and begin scheduling.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

