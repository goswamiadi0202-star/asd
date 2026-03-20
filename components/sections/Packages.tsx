import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionHeader from '@/components/ui/SectionHeader'
import styles from './Packages.module.css'

export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          tag="Our Packages"
          title="Packages for Every Budget"
          goldText="Every"
          description="Whether you're just getting started or ready to dominate your market, we have a plan that fits. Book a free call and we'll build a custom recommendation for your business."
        />

        <RevealOnScroll>
          <div className={styles.ctaWrap}>
            <a href="#contact" className={styles.cta}>Book a Free Consultation</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
