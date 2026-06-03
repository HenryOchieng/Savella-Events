import React from 'react'

export default function EventMedia({ src, alt, className }) {
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

