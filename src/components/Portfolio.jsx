import React from 'react'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'

const portfolio = [
  { title: 'Golden Hour Lounge', before: 'Plain setup', after: 'Layered lighting + floral styling', image: img1 },
  { title: 'Modern Gala', before: 'Standard banquet', after: 'Branded stage + curated guest flow', image: img2 },
  { title: 'City Soirée', before: 'Minimal décor', after: 'Statement tablescape and ambiance', image: img3 },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" aria-label="Before and after portfolio">
      <div className="container">
        <div className="section-head">
          <h2>Before & after transformation</h2>
          <p>See how thoughtful styling and planning elevate the overall event experience.</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article key={item.title} className="portfolio-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-copy">
                <h3>{item.title}</h3>
                <p><strong>Before:</strong> {item.before}</p>
                <p><strong>After:</strong> {item.after}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
