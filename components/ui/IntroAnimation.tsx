'use client'

import { useState, useEffect } from 'react'
import styles from './IntroAnimation.module.css'

export default function IntroAnimation() {
  const [phase, setPhase] = useState(0) // 0=dark, 1=lines, 2=logo, 3=tagline, 4=exit
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),   // horizontal lines sweep in
      setTimeout(() => setPhase(2), 700),   // logo fades up
      setTimeout(() => setPhase(3), 1600),  // tagline appears
      setTimeout(() => setPhase(4), 2800),  // begin exit
      setTimeout(() => setDone(true), 3600), // remove from DOM
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  if (done) return null

  return (
    <div className={`${styles.overlay} ${phase >= 4 ? styles.exit : ''}`}>
      {/* Ambient light */}
      <div className={`${styles.ambientGlow} ${phase >= 2 ? styles.glowVisible : ''}`} />

      {/* Horizontal reveal lines */}
      <div className={`${styles.revealLine} ${styles.lineTop} ${phase >= 1 ? styles.lineIn : ''}`} />
      <div className={`${styles.revealLine} ${styles.lineBottom} ${phase >= 1 ? styles.lineIn : ''}`} />

      {/* Center content */}
      <div className={styles.center}>
        {/* Logo mark */}
        <div className={`${styles.logoMark} ${phase >= 2 ? styles.logoIn : ''}`}>
          <svg viewBox="60 100 560 560" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="intro-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A853" />
                <stop offset="50%" stopColor="#F0D68A" />
                <stop offset="100%" stopColor="#C4943A" />
              </linearGradient>
              <clipPath id="intro-clip">
                <circle cx="340" cy="380" r="280" />
              </clipPath>
            </defs>

            {/* Outer ring - draws in */}
            <circle
              className={`${styles.outerRing} ${phase >= 2 ? styles.ringDraw : ''}`}
              cx="340" cy="380" r="290"
              fill="none" stroke="#D4A853" strokeWidth="1.5"
            />

            {/* Inner circle */}
            <circle cx="340" cy="380" r="280" fill="#0C1A2E" />
            <circle cx="340" cy="380" r="270" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.15" />

            <g clipPath="url(#intro-clip)">
              {/* Decorative lines */}
              <line x1="60" y1="340" x2="130" y2="340" stroke="#D4A853" strokeWidth="0.8" opacity="0.12" />
              <line x1="550" y1="340" x2="620" y2="340" stroke="#D4A853" strokeWidth="0.8" opacity="0.12" />

              {/* Letters — overlapping like actual logo */}
              <text x="115" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="url(#intro-gold)" opacity="0.75">A</text>
              <text x="330" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="none" stroke="url(#intro-gold)" strokeWidth="3" opacity="0.6">D</text>
              <text x="195" y="500" fontFamily="'Playfair Display',serif" fontWeight="900" fontSize="320" fill="url(#intro-gold)">S</text>

              {/* Rule line + diamond */}
              <line x1="140" y1="570" x2="540" y2="570" stroke="#D4A853" strokeWidth="0.8" opacity="0.2" />
              <polygon points="340,560 345,570 340,580 335,570" fill="#D4A853" opacity="0.35" />

              {/* DIGITAL */}
              <text x="340" y="625" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontWeight="600" fontSize="24" letterSpacing="16" fill="#D4A853" opacity="0.45">DIGITAL</text>
            </g>
          </svg>
        </div>

        {/* Tagline */}
        <div className={`${styles.tagline} ${phase >= 3 ? styles.taglineIn : ''}`}>
          <span>Websites</span>
          <span className={styles.dot} />
          <span>Ads</span>
          <span className={styles.dot} />
          <span>Growth</span>
        </div>
      </div>

      {/* Vertical wipe curtains */}
      <div className={`${styles.curtain} ${styles.curtainLeft} ${phase >= 4 ? styles.curtainOut : ''}`} />
      <div className={`${styles.curtain} ${styles.curtainRight} ${phase >= 4 ? styles.curtainOut : ''}`} />
    </div>
  )
}
