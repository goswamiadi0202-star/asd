import type { CtaSection as CtaSectionType } from '@/lib/types'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import styles from './CtaSection.module.css'

interface CtaSectionProps {
  cta: CtaSectionType
}

export default function CtaSection({ cta }: CtaSectionProps) {
  const titleParts = cta.title.split(cta.goldWord)

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <RevealOnScroll>
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>
              {titleParts[0]}
              <span className="gold">{cta.goldWord}</span>
              {titleParts[1] || ''}
            </h2>
            <p className={styles.ctaDesc}>{cta.description}</p>
            <Button href="#contact">{cta.buttonText}</Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
