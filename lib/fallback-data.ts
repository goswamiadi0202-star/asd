import type { HomePageData } from './types'

export const fallbackData: HomePageData = {
  hero: {
    badge: 'Digital Growth Agency',
    titleLines: [
      { text: 'We Build Brands', isGold: false },
      { text: 'That Dominate', isGold: true, italicWord: 'Dominate' },
      { text: 'The Digital Space', isGold: false },
    ],
    subtitle: 'Premium websites. High-converting ads. Scalable growth strategies. Your business deserves a digital presence that works as hard as you do.',
    primaryCtaText: 'Start Your Project',
    secondaryCtaText: 'See What We Do',
    stats: [],
  },
  services: [
    {
      _id: '1',
      title: 'Website Design & Development',
      description: 'Stunning, conversion-focused websites that captivate your audience and turn visitors into customers. Custom-built for performance.',
      features: ['Custom UI/UX Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration'],
      icon: 'website',
      isFeatured: false,
      order: 1,
    },
    {
      _id: '2',
      title: 'Paid Advertising & Media Buying',
      description: 'Data-driven ad campaigns across Google, Meta, and TikTok that maximize ROI and scale your customer acquisition profitably.',
      features: ['Google & Meta Ads', 'Campaign Optimization', 'Retargeting Strategies', 'Performance Analytics'],
      icon: 'advertising',
      isFeatured: true,
      featuredBadgeText: 'Most Popular',
      order: 2,
    },
    {
      _id: '3',
      title: 'Business Scaling & Strategy',
      description: 'Comprehensive growth strategies that align your marketing, sales, and operations to achieve sustainable, scalable revenue growth.',
      features: ['Growth Strategy', 'Conversion Optimization', 'Funnel Development', 'Analytics & Reporting'],
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
    description: 'Book a free strategy call and let us show you what we can build together',
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
