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
          </div>

          <div className={styles.footerLinksGrid}>
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <a href="#services">Web Design</a>
              <a href="#services">Paid Ads</a>
              <a href="#services">Business Scaling</a>
              <a href="#contact">Strategy</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 {settings.logoText}. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
