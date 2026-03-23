'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Only on desktop
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let lenis: any

    async function init() {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 0,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Support smooth scroll anchor clicks
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const href = (anchor as HTMLAnchorElement).getAttribute('href')
          if (!href || href === '#') return
          const target = document.querySelector(href)
          if (target) {
            e.preventDefault()
            lenis.scrollTo(target)
          }
        })
      })
    }

    init()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return null
}
