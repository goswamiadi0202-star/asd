'use client'

import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import styles from './Packages.module.css'

const packages = [
  {
    name: 'Starter',
    from: '$997',
    monthly: '$250/mo',
    popular: false,
  },
  {
    name: 'Growth',
    from: '$2,497',
    monthly: '$350/mo',
    popular: true,
  },
  {
    name: 'Premium',
    from: '$4,997',
    monthly: '$500/mo',
    popular: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          tag="Our Packages"
          title="Packages for Every Budget"
          goldText="Every"
          description="From startups to established businesses, we have a plan that fits. Book a free consultation and we'll recommend the right package for you."
        />

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <RevealOnScroll key={pkg.name} delay={i * 150}>
              <div className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}>
                {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.cardTopLine} />
                <h3 className={styles.name}>{pkg.name}</h3>
                <div className={styles.pricing}>
                  <span className={styles.from}>from {pkg.from}</span>
                  <span className={styles.divider}>|</span>
                  <span className={styles.monthly}>{pkg.monthly}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={500}>
          <p className={styles.note}>
            All packages include monthly management, hosting, backups, and support.
          </p>
          <div className={styles.ctaWrap}>
            <a href="#contact" className={styles.cta}>Get a Free Quote</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
