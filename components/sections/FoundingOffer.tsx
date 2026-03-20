import RevealOnScroll from '@/components/ui/RevealOnScroll'
import styles from './FoundingOffer.module.css'

export default function FoundingOffer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <RevealOnScroll>
          <div className={styles.banner}>
            <div className={styles.bannerGlow} />
            <div className={styles.content}>
              <div className={styles.badge}>Limited Offer</div>
              <h3 className={styles.title}>3 Founding Client Spots Available</h3>
              <div className={styles.details}>
                <p className={styles.price}>
                  <span className={styles.priceAmount}>$500</span> website build +{' '}
                  <span className={styles.priceAmount}>$250/mo</span> management
                </p>
                <p className={styles.terms}>Phoenix area only. Video testimonial required.</p>
              </div>
              <a href="#contact" className={styles.cta}>
                Claim Your Spot &rarr;
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
