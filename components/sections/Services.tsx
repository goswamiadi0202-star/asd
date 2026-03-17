'use client'

import { Service } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WebsiteIcon, ShopifyIcon, MegaphoneIcon, RocketIcon } from '@/components/icons'
import styles from './Services.module.css'

interface ServicesProps {
  services: Service[]
}

const serviceCategories = [
  {
    id: 'web-design',
    icon: WebsiteIcon,
    title: 'Website Design & Development',
    description:
      'Custom-built websites designed to convert visitors into customers. No templates \u2014 every site is crafted from scratch.',
    items: [
      'Custom website design (built from scratch, no templates)',
      'Mobile-first responsive development',
      'Landing page design (for ad campaigns)',
      'Website redesigns (modernizing outdated sites)',
      'Speed optimization & performance tuning',
      'SEO-ready structure (title tags, meta descriptions, headers, sitemaps)',
      'Google Analytics & Search Console setup',
      'Contact forms & click-to-call integration',
      'Google Maps embedding',
      'Ongoing website maintenance & support',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShopifyIcon,
    title: 'E-Commerce (Shopify)',
    description:
      'Full-service Shopify store setup \u2014 from custom design to launch. We build stores that sell.',
    items: [
      'Full Shopify store setup & configuration',
      'Custom theme design & branding',
      'Product page creation with SEO-optimized descriptions',
      'Payment & shipping configuration',
      'Inventory management setup',
      'Collections & navigation structure',
      'App integrations (email marketing, reviews, loyalty programs)',
      'Checkout flow optimization',
      'Client training (how to manage their own store)',
      'Ongoing store optimization & support',
    ],
  },
  {
    id: 'paid-ads',
    icon: MegaphoneIcon,
    title: 'Paid Advertising (Multi-Platform)',
    description:
      'Data-driven ad campaigns across every major platform. We find your customers wherever they spend their time online.',
    items: [
      'Google Ads (Search, Local Service Ads, Display, Shopping, YouTube)',
      'Meta Ads (Facebook & Instagram \u2014 lead gen, traffic, conversions, retargeting, catalog/shopping ads)',
      'TikTok Ads (short-form video campaigns for visual businesses)',
      'Nextdoor Ads (hyperlocal neighborhood targeting)',
      'LinkedIn Ads (B2B and professional services)',
      'Keyword research & audience targeting strategy',
      'Custom landing page creation for every campaign',
      'A/B testing (ad copy, creative, audiences)',
      'Conversion tracking setup (Google Tag Manager, Meta Pixel, TikTok Pixel)',
      'Retargeting campaigns across all platforms',
      'Monthly performance reporting & strategy optimization',
    ],
  },
]

const growthServices = {
  id: 'growth',
  icon: RocketIcon,
  title: 'Growth Services',
  description:
    'Additional services to accelerate your growth and maximize your online presence.',
  items: [
    'Google Business Profile setup & optimization',
    'Reputation management (review generation strategy)',
    'Email marketing setup (welcome sequences, follow-up automation)',
    'Content strategy & social media guidance',
    'Competitor analysis',
    'Free website & marketing audit',
  ],
}

export default function Services({ }: ServicesProps) {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <SectionHeader
          tag="What We Do"
          title="What We Do"
          goldText="Do"
          description="We combine strategy, design, and technology to deliver digital experiences that convert visitors into customers."
        />

        <div className={styles.servicesGrid}>
          {serviceCategories.map((category, i) => {
            const IconComponent = category.icon
            return (
              <RevealOnScroll key={category.id} delay={i * 150}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardTopLine} />
                  <div className={styles.serviceIcon}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className={styles.serviceTitle}>{category.title}</h3>
                  <p className={styles.serviceDesc}>{category.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {category.items.map((item, fi) => (
                      <li key={fi}>{item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={500}>
          <div className={styles.growthCard}>
            <div className={styles.growthInner}>
              <div className={styles.growthHeader}>
                <div className={styles.growthIconWrap}>
                  <RocketIcon size={28} />
                </div>
                <div>
                  <h3 className={styles.growthTitle}>{growthServices.title}</h3>
                  <p className={styles.growthDesc}>{growthServices.description}</p>
                </div>
              </div>
              <ul className={styles.growthFeatures}>
                {growthServices.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
