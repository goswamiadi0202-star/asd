'use client'

import { Service } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WebsiteIcon, ShopifyIcon, MegaphoneIcon, Star, Mail, ScalingIcon } from '@/components/icons'
import styles from './Services.module.css'

interface ServicesProps {
  services: Service[]
}

const serviceCards = [
  {
    id: 'websites',
    icon: WebsiteIcon,
    title: 'Websites That Convert',
    description:
      'Custom-built websites designed to turn visitors into customers. Fast, mobile-friendly, and built to make your phone ring.',
    features: [
      'Custom design, no templates',
      'Mobile-first & lightning fast',
      'SEO built in from day one',
      'Ongoing support & updates',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShopifyIcon,
    title: 'E-Commerce That Sells',
    description:
      'Full online stores powered by Shopify. We set it up, you run it. Sell products 24/7 with zero headaches.',
    features: [
      'Complete Shopify setup',
      'Custom branded design',
      'Payment & shipping handled',
      'Training so you can manage it yourself',
    ],
  },
  {
    id: 'advertising',
    icon: MegaphoneIcon,
    title: 'Ads That Bring Customers',
    description:
      'We run ads on Google, Facebook, Instagram, TikTok, and more. Your business shows up exactly where your customers are looking.',
    features: [
      'Google, Meta, TikTok & more',
      'Custom landing pages for every campaign',
      'Monthly reporting you can actually understand',
      'We manage it all, you get the leads',
    ],
  },
]

const growthItems = [
  {
    id: 'gbp',
    label: 'Google Business Profile',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4.13 5 11 5 11s5-6.87 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'reviews',
    label: 'Review Management',
    icon: <Star size={20} />,
  },
  {
    id: 'email',
    label: 'Email Marketing',
    icon: <Mail size={20} />,
  },
  {
    id: 'audit',
    label: 'Free Marketing Audit',
    icon: <ScalingIcon size={20} />,
  },
]

export default function Services({}: ServicesProps) {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <SectionHeader
          tag="What We Do"
          title="Everything Your Business Needs to Grow Online"
          goldText="Grow"
          description="We handle the tech so you can focus on running your business."
        />

        <div className={styles.servicesGrid}>
          {serviceCards.map((card, i) => {
            const IconComponent = card.icon
            return (
              <RevealOnScroll key={card.id} delay={i * 150}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardTopLine} />
                  <div className={styles.serviceIcon}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className={styles.serviceTitle}>{card.title}</h3>
                  <p className={styles.serviceDesc}>{card.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {card.features.map((feature, fi) => (
                      <li key={fi}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={styles.serviceLink}>
                    Learn more
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={500}>
          <div className={styles.growthStrip}>
            {growthItems.map((item) => (
              <div key={item.id} className={styles.growthItem}>
                <span className={styles.growthItemIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
