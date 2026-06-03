import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'

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
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://youtube.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Youtube"
            >
              <FaYoutube size={24} />
            </a>

          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Savella Events. All rights reserved.</div>
        </div>
      </div>
    </footer>

  )
}

