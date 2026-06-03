import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden>
              S
            </span>
            <span> Savella</span>
          </div>
          <div className="footer-sub">Event management company — crafted with care.</div>
        </div>
        <div className="footer-links">
          <a href="#home" onClick={(e) => (e.preventDefault(), document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }))}>
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => (e.preventDefault(), document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }))}
          >
            Services
          </a>
          <a
            href="#events"
            onClick={(e) => (e.preventDefault(), document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }))}
          >
            Events
          </a>
          <a
            href="#contact"
            onClick={(e) => (e.preventDefault(), document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
          >
            Contact
          </a>
        </div>
        <div>
          <div className="footer-social" aria-label="Social links">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span aria-hidden>🟢</span>
              <span className="sr-only"></span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span aria-hidden>📷</span>
              <span className="sr-only"></span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span aria-hidden>👍</span>
              <span className="sr-only"></span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span aria-hidden>🎵</span>
              <span className="sr-only"></span>
            </a>

          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Savella. All rights reserved.</div>
        </div>
      </div>
    </footer>

  )
}

