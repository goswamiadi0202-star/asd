import type { HomePageData } from './types'

export const fallbackData: HomePageData = {
  hero: {
    badge: 'Digital Growth Agency',
    titleLines: [
      { text: 'We Build Brands', isGold: false },
      { text: 'That Dominate', isGold: true, italicWord: 'Dominate' },
      { text: 'The Digital Space', isGold: false },
    ],
    subtitle: 'Custom web design. Shopify stores. Google Ads, Meta Ads & TikTok campaigns. We build and manage everything your business needs to grow online.',
    primaryCtaText: 'Start Your Project',
    secondaryCtaText: 'See What We Do',
    stats: [],
  },
  services: [
    {
      _id: '1',
      title: 'Custom Web Design & Development',
      description: 'Custom-built websites designed to convert visitors into customers. Mobile-responsive, SEO-optimized, and fast-loading — no templates.',
      features: ['Custom Website Design', 'Mobile-First Development', 'SEO Optimization', 'Landing Page Design'],
      icon: 'website',
      isFeatured: false,
      order: 1,
    },
    {
      _id: '2',
      title: 'Google Ads, Meta Ads & TikTok Advertising',
      description: 'We run paid ad campaigns on Google, Facebook, Instagram, and TikTok that bring real leads and customers to your business.',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'TikTok Ad Campaigns', 'Retargeting & Conversion Tracking'],
      icon: 'advertising',
      isFeatured: true,
      featuredBadgeText: 'Most Popular',
      order: 2,
    },
    {
      _id: '3',
      title: 'Shopify E-Commerce & Online Stores',
      description: 'Full Shopify store setup with custom branding, payment integration, and training so you can sell products online 24/7.',
      features: ['Shopify Store Setup', 'Custom Store Design', 'Payment & Shipping Config', 'Store Management Training'],
      icon: 'scaling',
      isFeatured: false,
      order: 3,
    },
  ],
  projects: [],
  processSteps: [
    { _id: '1', stepNumber: '01', title: 'Discovery & Strategy', description: 'We dive deep into your business, audience, and goals to craft a tailored digital strategy that aligns with your vision.', order: 1 },
    { _id: '2', stepNumber: '02', title: 'Design & Development', description: 'We create stunning, high-performance digital assets that reflect your brand and convert visitors into customers.', order: 2 },
    { _id: '3', stepNumber: '03', title: 'Launch & Optimize', description: 'We launch your campaigns and continuously optimize through data-driven decisions to maximize your return on investment.', order: 3 },
    { _id: '4', stepNumber: '04', title: 'Scale & Grow', description: 'With proven results, we scale what works and identify new growth opportunities to keep your business ahead of the competition.', order: 4 },
  ],
  testimonials: [],
  cta: {
    title: 'Ready to Grow Your Business?',
    goldWord: 'Grow',
    description: 'Get a free website and marketing audit. See how we can help you get more leads, sales, and customers online.',
    buttonText: 'Book Free Consultation',
  },
  settings: {
    logoText: 'ASD',
    logoSub: 'DIGITAL',
    footerTagline: 'Websites. Ads. Growth.',
    contactEmail: 'aditya.goswami@asd-digital.com',
    contactPhone: '(602) 725-8949',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/asddigital_' },
    ],
    contactFormHeading: "Let's Build Something Great",
    contactFormDescription: "Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours.",
  },
}
