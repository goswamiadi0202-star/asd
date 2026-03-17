'use client'

import { useState, useEffect } from 'react'
import styles from './IntroAnimation.module.css'

export default function IntroAnimation() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true)
    }, 3100)
    return () => clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.logoWrap}>
        <svg viewBox="60 100 560 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="intro-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A853" />
              <stop offset="50%" stopColor="#F0D68A" />
              <stop offset="100%" stopColor="#C4943A" />
            </linearGradient>
            <clipPath id="intro-circle-clip">
              <circle cx="340" cy="380" r="280" />
            </clipPath>
          </defs>

          {/* Outer ring - stroke draw animation */}
          <circle
            className={styles.outerRing}
            cx="340"
            cy="380"
            r="290"
            fill="none"
            stroke="#D4A853"
            strokeWidth="1"
            opacity="0.2"
          />

          {/* Inner filled circle */}
          <circle
            className={styles.innerCircle}
            cx="340"
            cy="380"
            r="280"
            fill="#0C1A2E"
          />

          {/* Decorative inner rings */}
          <circle
            className={styles.innerRingA}
            cx="340"
            cy="380"
            r="270"
            fill="none"
            stroke="#D4A853"
            strokeWidth="0.5"
            opacity="0.12"
          />
          <circle
            className={styles.innerRingB}
            cx="340"
            cy="380"
            r="262"
            fill="none"
            stroke="#D4A853"
            strokeWidth="0.5"
            opacity="0.06"
          />

          <g clipPath="url(#intro-circle-clip)">
            {/* Decorative lines */}
            <line
              className={styles.decoLineLeft1}
              x1="60" y1="340" x2="130" y2="340"
              stroke="#D4A853" strokeWidth="0.8" opacity="0.12"
            />
            <line
              className={styles.decoLineLeft2}
              x1="60" y1="348" x2="115" y2="348"
              stroke="#D4A853" strokeWidth="0.4" opacity="0.08"
            />
            <line
              className={styles.decoLineRight1}
              x1="550" y1="340" x2="620" y2="340"
              stroke="#D4A853" strokeWidth="0.8" opacity="0.12"
            />
            <line
              className={styles.decoLineRight2}
              x1="565" y1="348" x2="620" y2="348"
              stroke="#D4A853" strokeWidth="0.4" opacity="0.08"
            />

            {/* Letter A - behind, left side */}
            <text
              className={styles.letterA}
              x="115" y="500"
              fontFamily="'Playfair Display',serif"
              fontWeight="900"
              fontSize="320"
              fill="url(#intro-gold-gradient)"
              opacity="0.75"
            >
              A
            </text>

            {/* Letter D (outline) - right side, behind S */}
            <text
              className={styles.letterD}
              x="330" y="500"
              fontFamily="'Playfair Display',serif"
              fontWeight="900"
              fontSize="320"
              fill="none"
              stroke="url(#intro-gold-gradient)"
              strokeWidth="3"
              opacity="0.6"
            >
              D
            </text>

            {/* Letter S - on top, overlapping center */}
            <text
              className={styles.letterS}
              x="195" y="500"
              fontFamily="'Playfair Display',serif"
              fontWeight="900"
              fontSize="320"
              fill="url(#intro-gold-gradient)"
            >
              S
            </text>

            {/* Rule lines */}
            <line
              className={styles.ruleLine}
              x1="140" y1="570" x2="540" y2="570"
              stroke="#D4A853" strokeWidth="0.8" opacity="0.2"
            />
            <line
              className={styles.ruleLineInner}
              x1="175" y1="563" x2="505" y2="563"
              stroke="#D4A853" strokeWidth="0.4" opacity="0.1"
            />

            {/* Diamond */}
            <polygon
              className={styles.diamond}
              points="340,560 345,570 340,580 335,570"
              fill="#D4A853" opacity="0.35"
            />

            {/* DIGITAL text */}
            <text
              className={styles.digitalText}
              x="340" y="625"
              textAnchor="middle"
              fontFamily="'Cormorant Garamond',serif"
              fontWeight="600"
              fontSize="24"
              letterSpacing="16"
              fill="#D4A853"
              opacity="0.45"
            >
              DIGITAL
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
