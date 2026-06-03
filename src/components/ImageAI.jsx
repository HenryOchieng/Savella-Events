import React from 'react'

export default function ImageAI({ alt, className }) {
  // Deterministic “AI-like” placeholder image (no external dependency).
  // Replace `src` with your own AI image URLs later.
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#0F2D52'/>
          <stop offset='55%' stop-color='#D4AF37' stop-opacity='0.95'/>
          <stop offset='100%' stop-color='#FFFFFF' stop-opacity='0.65'/>
        </linearGradient>
        <filter id='n' x='-20%' y='-20%' width='140%' height='140%'>
          <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>
          <feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0'/>
        </filter>
      </defs>
      <rect width='1200' height='800' fill='#0F2D52'/>
      <rect x='60' y='60' width='1080' height='680' rx='36' fill='url(#g)' opacity='0.18'/>
      <g opacity='0.95'>
        <rect x='110' y='120' width='980' height='140' rx='24' fill='url(#g)' opacity='0.28'/>
        <rect x='110' y='290' width='540' height='120' rx='24' fill='url(#g)' opacity='0.22'/>
        <rect x='690' y='290' width='400' height='120' rx='24' fill='url(#g)' opacity='0.18'/>
        <rect x='110' y='430' width='980' height='220' rx='28' fill='url(#g)' opacity='0.18'/>
      </g>
      <g filter='url(#n)'>
        <rect width='1200' height='800' fill='#000' opacity='0.25'/>
      </g>
      <g opacity='0.9'>
        <text x='120' y='260' font-family='ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' font-size='44' fill='#FFFFFF' fill-opacity='0.92' font-weight='800'>AI-Generated Visual</text>
        <text x='120' y='320' font-family='ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' font-size='22' fill='#FFFFFF' fill-opacity='0.75'>Replace with real AI images whenever ready</text>
      </g>
    </svg>
  `)}`

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  )
}

