'use client'

import { useEffect } from 'react'

export default function IntroAnimation() {
  useEffect(() => {
    const overlay = document.getElementById('intro-overlay')
    if (!overlay || overlay.classList.contains('io-go')) return

    overlay.classList.add('io-go')
    document.body.classList.add('page-loaded')

    setTimeout(() => {
      overlay.style.display = 'none'
    }, 3200)
  }, [])

  return null
}
