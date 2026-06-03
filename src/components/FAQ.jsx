import React, { useState } from 'react'

const faqs = [
  {
    question: 'Do you plan events of all sizes?',
    answer:
      'Yes. We design experiences for intimate gatherings, large celebrations, and everything in between, with the same attention to detail.',
  },
  {
    question: 'Can you help with styling and logistics?',
    answer:
      'Absolutely. We coordinate décor direction, vendor management, timelines, and on-site flow so the day feels seamless.',
  },
  {
    question: 'How early should we book?',
    answer:
      'For peak seasons, booking 2–4 months ahead is ideal. We are happy to discuss timelines and availability for your date.',
  },
  {
    question: 'Do you offer custom packages?',
    answer:
      'Yes. Every event is tailored to your goals, guest count, and budget so the final plan feels personal and practical.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section" aria-label="Frequently asked questions">
      <div className="container">
        <div className="section-head">
          <h2>Frequently asked questions</h2>
          <p>
            A quick look at how we plan, style, and support your special occasion from start to finish.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <strong>{isOpen ? '−' : '+'}</strong>
                </button>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
