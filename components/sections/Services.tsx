'use client'

import { useRef, useCallback } from 'react'
import { Service } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WebsiteIcon, ShopifyIcon, MegaphoneIcon, Star, Mail, ScalingIcon } from '@/components/icons'
import styles from './Services.module.css'

interface ServicesProps {
  services: Service[]
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(201, 168, 76, 0.15), transparent 60%)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    glow.style.background = 'transparent'
  }, [])

  return (
    <div
      ref={cardRef}
      className={styles.tiltWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className={styles.tiltGlow} />
      {children}
    </div>
  )
}

const serviceCards = [
  {
    id: 'websites',
    icon: WebsiteIcon,
    title: 'Website Design & Development',
    description:
      'Custom websites built to get your phone ringing. Mobile-first, fast loading, SEO-ready.',
    price: 'Starting at $997',
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
    title: 'E-Commerce (Shopify)',
    description:
      'Full Shopify store setup, branded, launch-ready. Products loaded, payments configured, training included.',
    price: 'Starting at $1,997',
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
    title: 'Paid Advertising',
    description:
      'Google Ads, Facebook, Instagram, TikTok, Nextdoor. Custom landing pages and monthly reporting included.',
    price: 'Starting at $497/mo',
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
                <TiltCard>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTopLine} />
                    <div className={styles.serviceIcon}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className={styles.serviceTitle}>{card.title}</h3>
                    <p className={styles.servicePrice}>{card.price}</p>
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
                </TiltCard>
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
