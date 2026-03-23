'use client'

import { useEffect } from 'react'

export default function IntroAnimation() {
  useEffect(() => {
    const overlay = document.getElementById('intro-overlay')
    if (!overlay || overlay.classList.contains('io-go')) return

    // Trigger animations
    overlay.classList.add('io-go')
    document.body.style.overflow = 'hidden'
    document.body.classList.add('page-loaded')

    setTimeout(() => {
      overlay.style.display = 'none'
      document.body.style.overflow = ''
    }, 4500)

    // No cleanup — let the animation finish regardless of React strict mode
  }, [])

  return null
}
