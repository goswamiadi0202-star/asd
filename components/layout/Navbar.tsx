'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './Navbar.module.css'

interface NavbarProps {
  logoText: string
  logoSub: string
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
]

export default function Navbar({ logoText, logoSub }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'services', 'process', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileOpen(false)
    },
    []
  )

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a
          href="#home"
          className={styles.navLogo}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <svg className={styles.logoSvg} viewBox="60 100 560 560" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nav-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A853" />
                <stop offset="50%" stopColor="#F0D68A" />
                <stop offset="100%" stopColor="#C4943A" />
              </linearGradient>
              <clipPath id="nav-circle-clip">
                <circle cx="340" cy="380" r="280" />
              </clipPath>
            </defs>
            <circle cx="340" cy="380" r="290" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.2" />
            <circle cx="340" cy="380" r="280" fill="#0C1A2E" />
            <circle cx="340" cy="380" r="270" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.12" />
            <circle cx="340" cy="380" r="262" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.06" />
            <g clipPath="url(#nav-circle-clip)">
              <line x1="60" y1="340" x2="130" y2="340" stroke="#D4A853" strokeWidth="0.8" opacity="0.12" />
              <line x1="60" y1="348" x2="115" y2="348" stroke="#D4A853" strokeWidth="0.4" opacity="0.08" />
              <line x1="550" y1="340" x2="620" y2="340" stroke="#D4A853" strokeWidth="0.8" opacity="0.12" />
              <line x1="565" y1="348" x2="620" y2="348" stroke="#D4A853" strokeWidth="0.4" opacity="0.08" />
              <text x="115" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="url(#nav-gold-gradient)" opacity="0.75">A</text>
              <text x="330" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="none" stroke="url(#nav-gold-gradient)" strokeWidth="3" opacity="0.6">D</text>
              <text x="195" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="url(#nav-gold-gradient)">S</text>
              <line x1="140" y1="570" x2="540" y2="570" stroke="#D4A853" strokeWidth="0.8" opacity="0.2" />
              <line x1="175" y1="563" x2="505" y2="563" stroke="#D4A853" strokeWidth="0.4" opacity="0.1" />
              <polygon points="340,560 345,570 340,580 335,570" fill="#D4A853" opacity="0.35" />
              <text x="340" y="625" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontWeight="600" fontSize="24" letterSpacing="16" fill="#D4A853" opacity="0.45">DIGITAL</text>
            </g>
          </svg>
        </a>

        <button
          className={`${styles.navToggle} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.overlay} ${mobileOpen ? styles.overlayVisible : ''}`}
          onClick={() => setMobileOpen(false)}
        />

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.navLinksOpen : ''}`}>
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${activeSection === sectionId ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="#contact"
              className={styles.ctaLink}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get Started
              <span style={{ fontSize: '0.75em' }}>&#8594;</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
