'use client'

import type { SiteSettings } from '@/lib/types'
import styles from './Footer.module.css'

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              {settings.logoText}
              <span className={styles.footerLogoSub}>{settings.logoSub}</span>
            </div>
            <p className={styles.footerTagline}>{settings.footerTagline}</p>
            <div className={styles.footerContact}>
              <p>ASD Digital LLC</p>
              <p>Phoenix, Arizona</p>
              <a href="tel:+16027258949">(602) 725-8949</a>
              <a href="mailto:aditya.goswami@asd-digital.com">aditya.goswami@asd-digital.com</a>
              <a href="https://asd-digital.com">asd-digital.com</a>
            </div>
          </div>

          <div className={styles.footerLinksGrid}>
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <a href="#services">Web Design</a>
              <a href="#services">E-Commerce</a>
              <a href="#services">Paid Ads</a>
              <a href="#packages">Packages</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
              <a href="https://www.instagram.com/asddigital_" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 ASD Digital. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path d="M8 13V3M3 7l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
