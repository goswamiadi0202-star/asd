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
          <span className={styles.logoText}>{logoText}</span>
          <span className={styles.logoSub}>{logoSub}</span>
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
