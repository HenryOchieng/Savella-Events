import React, { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'events', label: 'Events' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const ids = links.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -60% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button
          className="brand"
          type="button"
          onClick={() => {
            setMobileOpen(false)
            scrollToId('home')
          }}
          aria-label="Savella home"
        >
          <span className="brand-mark" aria-hidden>
            S
          </span>
          <span className="brand-name">Savella Events</span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className={active === l.id ? 'nav-link active' : 'nav-link'}
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile" role="dialog" aria-label="Mobile menu">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className={active === l.id ? 'nav-mobile-link active' : 'nav-mobile-link'}
              onClick={() => {
                setMobileOpen(false)
                scrollToId(l.id)
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

