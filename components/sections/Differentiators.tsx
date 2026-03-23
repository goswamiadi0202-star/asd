'use client'

import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import styles from './Differentiators.module.css'

const items = [
  {
    number: '01',
    title: 'Custom Code, Not Templates',
    description:
      'Every site is built from scratch. No WordPress. No Wix. No drag-and-drop builders. Just clean, fast, custom code.',
  },
  {
    number: '02',
    title: 'Launched in 7–14 Days',
    description:
      'Most agencies take 6–8 weeks. We deliver in days because our build process is faster than anyone else\'s.',
  },
  {
    number: '03',
    title: 'You Own Everything',
    description:
      'Your code. Your design. Your domain. No hostage situations. Pay in full and it\'s 100% yours.',
  },
]

export default function Differentiators() {
  return (
    <section className={styles.section}>
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            tag="Why Us"
            title="How We're Different"
            goldText="Different"
            description="We're not another cookie-cutter agency. Here's what sets us apart."
          />
        </RevealOnScroll>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <RevealOnScroll key={item.number} delay={i * 150}>
              <div className={styles.card}>
                <span className={styles.number}>{item.number}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
