export interface HeroSection {
  badge: string
  titleLines: { text: string; isGold: boolean; italicWord?: string }[]
  subtitle: string
  primaryCtaText: string
  secondaryCtaText: string
  stats: { number: number; suffix: string; label: string }[]
}

export interface Service {
  _id: string
  title: string
  description: string
  features: string[]
  icon: 'website' | 'advertising' | 'scaling'
  isFeatured: boolean
  featuredBadgeText?: string
  order: number
}

export interface Project {
  _id: string
  title: string
  category: string
  description: string
  stats: { label: string }[]
  gradientFrom: string
  gradientTo: string
  mockupLayout: 'ecommerce' | 'dashboard' | 'landing'
  order: number
}

export interface ProcessStep {
  _id: string
  stepNumber: string
  title: string
  description: string
  order: number
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  initials: string
  rating: number
  quote: string
  order: number
}

export interface CtaSection {
  title: string
  goldWord: string
  description: string
  buttonText: string
}

export interface SiteSettings {
  logoText: string
  logoSub: string
  footerTagline: string
  contactEmail: string
  contactPhone: string
  socialLinks: { platform: 'instagram' | 'linkedin' | 'twitter'; url: string }[]
  contactFormHeading: string
  contactFormDescription: string
}

export interface HomePageData {
  hero: HeroSection
  services: Service[]
  projects: Project[]
  processSteps: ProcessStep[]
  testimonials: Testimonial[]
  cta: CtaSection
  settings: SiteSettings
}
