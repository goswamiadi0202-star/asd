'use client'

import { useRef, useCallback } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import styles from './PortfolioPreview.module.css'

const mockups = [
  {
    id: 1,
    title: 'HVAC Company',
    type: 'Website Design',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #0d2137 100%)',
  },
  {
    id: 2,
    title: 'Auto Detailing',
    type: 'Website + Ads',
    gradient: 'linear-gradient(135deg, #2d1f3d 0%, #1a1225 100%)',
  },
  {
    id: 3,
    title: 'Landscaping Co.',
    type: 'Full Package',
    gradient: 'linear-gradient(135deg, #1c3a2a 0%, #0f2118 100%)',
  },
  {
    id: 4,
    title: 'Dental Practice',
    type: 'Shopify Store',
    gradient: 'linear-gradient(135deg, #3a2a1c 0%, #211808 100%)',
  },
]

function TiltCard({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }, [])

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{ background: gradient }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default function PortfolioPreview() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Work"
            title="Sites We've Built"
            goldText="Built"
            description="Custom-built, no templates, launched in under 14 days."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {mockups.map((mockup, i) => (
            <RevealOnScroll key={mockup.id} delay={i * 150}>
              <TiltCard gradient={mockup.gradient}>
                <div className={styles.mockupContent}>
                  <div className={styles.browserBar}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.mockupBody}>
                    <div className={styles.mockupNav} />
                    <div className={styles.mockupHero}>
                      <div className={styles.mockupLine} style={{ width: '60%' }} />
                      <div className={styles.mockupLine} style={{ width: '80%' }} />
                      <div className={styles.mockupLine} style={{ width: '40%', background: 'var(--gold)', opacity: 0.4 }} />
                    </div>
                    <div className={styles.mockupCards}>
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                    </div>
                  </div>
                </div>
                <div className={styles.overlay}>
                  <span className={styles.viewText}>View Project</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3>{mockup.title}</h3>
                  <span>{mockup.type}</span>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
