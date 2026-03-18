'use client'

import { useRef, useCallback } from 'react'
import { HeroSection } from '@/lib/types'
import ParticleField from '@/components/ui/ParticleField'
import CounterAnimation from '@/components/ui/CounterAnimation'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

interface HeroProps {
  hero: HeroSection
}

export default function Hero({ hero }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const content = contentRef.current
    if (!content) return

    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2

    content.style.transform = `translate3d(${x * -8}px, ${y * -5}px, 0)`

    const layers = content.querySelectorAll<HTMLElement>('[data-depth]')
    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth || '1')
      layer.style.transform = `translate3d(${x * -12 * depth}px, ${y * -8 * depth}px, ${depth * 20}px)`
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const content = contentRef.current
    if (!content) return
    content.style.transform = 'translate3d(0, 0, 0)'
    content.style.transition = 'transform 0.5s ease-out'

    const layers = content.querySelectorAll<HTMLElement>('[data-depth]')
    layers.forEach((layer) => {
      layer.style.transform = 'translate3d(0, 0, 0)'
      layer.style.transition = 'transform 0.5s ease-out'
    })

    setTimeout(() => {
      if (content) content.style.transition = ''
      layers.forEach((layer) => { layer.style.transition = '' })
    }, 500)
  }, [])

  return (
    <section id="home" className={styles.hero} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={styles.heroBg}>
        <ParticleField />
        <div className={styles.heroGradient} />
      </div>

      <div className={styles.heroContent} ref={contentRef} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
        <RevealOnScroll>
          <div className={styles.heroBadge} data-depth="0.3">
            <span className="diamond">&#9670;</span>
            {hero.badge}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h1 className={styles.heroTitle} data-depth="0.6">
            {hero.titleLines.map((line, i) => (
              <span key={i} className={styles.line}>
                {line.italicWord ? (
                  <>
                    {line.text.split(line.italicWord)[0]}
                    {line.isGold ? (
                      <em className={styles.gold}>{line.italicWord}</em>
                    ) : (
                      <em>{line.italicWord}</em>
                    )}
                    {line.text.split(line.italicWord)[1] || ''}
                  </>
                ) : line.isGold ? (
                  <span className={styles.gold}>{line.text}</span>
                ) : (
                  line.text
                )}
              </span>
            ))}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className={styles.heroSubtitle} data-depth="0.4">{hero.subtitle}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className={styles.heroCta} data-depth="0.2">
            <Button variant="primary" size="large" href="#contact">
              {hero.primaryCtaText}
              <span style={{ fontSize: '0.85em' }}>&#8594;</span>
            </Button>
            <Button variant="secondary" size="large" href="#services">
              {hero.secondaryCtaText}
            </Button>
          </div>
        </RevealOnScroll>

        {hero.stats.length > 0 && (
          <RevealOnScroll delay={400}>
            <div className={styles.heroStats}>
              {hero.stats.map((stat, i) => (
                <div key={i} style={{ display: 'contents' }}>
                  {i > 0 && <div className={styles.statDivider} />}
                  <div className={styles.stat}>
                    <CounterAnimation target={stat.number} suffix={stat.suffix} />
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        )}
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
