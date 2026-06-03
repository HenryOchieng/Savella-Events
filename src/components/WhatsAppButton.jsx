import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phone = '254790238118'
  const message = encodeURIComponent('Hi Savella Events, I would like to request a quote for my event.')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Contact Savella on WhatsApp"
    >
      <FaWhatsapp />
      <span>WhatsApp</span>
    </a>
  )
}
