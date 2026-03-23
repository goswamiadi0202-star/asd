import styles from './Marquee.module.css'

const INDUSTRIES = [
  'Landscapers', 'Plumbers', 'HVAC', 'Electricians', 'Auto Detailers',
  'Contractors', 'Dentists', 'Restaurants', 'Real Estate', 'Fitness',
  'Roofing', 'Cleaning Services', 'E-Commerce',
]

export default function Marquee() {
  const items = [...INDUSTRIES, ...INDUSTRIES]

  return (
    <section className={styles.section}>
      <div className={styles.track}>
        <div className={styles.inner}>
          {items.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
              <span className={styles.dot}>&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
