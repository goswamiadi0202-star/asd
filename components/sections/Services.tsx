'use client'

import { Service } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WebsiteIcon, AdvertisingIcon, ScalingIcon } from '@/components/icons'
import styles from './Services.module.css'

interface ServicesProps {
  services: Service[]
}

const iconMap = {
  website: WebsiteIcon,
  advertising: AdvertisingIcon,
  scaling: ScalingIcon,
} as const

export default function Services({ services }: ServicesProps) {
  const sorted = [...services].sort((a, b) => a.order - b.order)

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <SectionHeader
          tag="What We Do"
          title="Services That Drive Growth"
          goldText="Growth"
          description="We combine strategy, design, and technology to deliver digital experiences that convert visitors into customers."
        />

        <div className={styles.servicesGrid}>
          {sorted.map((service, i) => {
            const IconComponent = iconMap[service.icon]
            return (
              <RevealOnScroll key={service._id} delay={i * 100}>
                <div
                  className={`${styles.serviceCard} ${service.isFeatured ? styles.featured : ''}`}
                >
                  {service.isFeatured && service.featuredBadgeText && (
                    <div className={styles.featuredBadge}>{service.featuredBadgeText}</div>
                  )}

                  <div className={styles.serviceIcon}>
                    <IconComponent size={28} />
                  </div>

                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, fi) => (
                      <li key={fi}>{feature}</li>
                    ))}
                  </ul>

                  <button className={styles.serviceLink}>
                    Learn More
                    <span className={styles.serviceLinkArrow}>&#8594;</span>
                  </button>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
