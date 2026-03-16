'use client'

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
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}>
        <ParticleField />
        <div className={styles.heroGradient} />
      </div>

      <div className={styles.heroContent}>
        <RevealOnScroll>
          <div className={styles.heroBadge}>
            <span className="diamond">&#9670;</span>
            {hero.badge}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h1 className={styles.heroTitle}>
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
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className={styles.heroCta}>
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
