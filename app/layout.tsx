import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-W6Z926F3H9'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ASD Digital | Custom Web Design, Shopify & Paid Ads Agency',
  description: 'ASD Digital builds custom websites, Shopify stores, and runs high-converting Google Ads, Meta Ads & TikTok campaigns. Get a free marketing audit today.',
  keywords: [
    'custom web design', 'website development', 'Shopify store setup', 'e-commerce website',
    'Google Ads management', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads',
    'digital marketing agency', 'paid advertising', 'landing page design',
    'SEO services', 'online store', 'small business website', 'lead generation',
  ],
  metadataBase: new URL('https://asd-digital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASD Digital | Custom Web Design, Shopify & Paid Ads Agency',
    description: 'Custom websites, Shopify stores, and paid ad campaigns that bring real customers. Free marketing audit available.',
    url: 'https://asd-digital.com',
    siteName: 'ASD Digital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASD Digital | Websites. Ads. Growth.',
    description: 'Custom websites, Shopify stores, and paid ad campaigns that bring real customers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vxwf9wyh57");
          `}
        </Script>
      </head>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ASD Digital',
              url: 'https://asd-digital.com',
              logo: 'https://asd-digital.com/logo.svg',
              description: 'Digital marketing agency specializing in custom web design, Shopify e-commerce, and paid advertising on Google, Meta, and TikTok.',
              telephone: '(602) 725-8949',
              email: 'aditya.goswami@asd-digital.com',
              sameAs: ['https://www.instagram.com/asddigital_'],
              serviceType: [
                'Web Design', 'Web Development', 'Shopify E-Commerce',
                'Google Ads Management', 'Facebook Advertising', 'Instagram Advertising',
                'TikTok Advertising', 'SEO', 'Landing Page Design',
              ],
            }),
          }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ASD Digital',
              url: 'https://asd-digital.com',
            }),
          }}
        />
        {/* Intro animation — renders before React hydration */}
        <div
          id="intro-overlay"
          dangerouslySetInnerHTML={{
            __html: `
              <div class="io-glow"></div>
              <div class="io-line io-lt"></div>
              <div class="io-line io-lb"></div>
              <div class="io-center">
                <div class="io-logo">
                  <svg viewBox="60 100 560 560" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#D4A853"/>
                        <stop offset="50%" stop-color="#F0D68A"/>
                        <stop offset="100%" stop-color="#C4943A"/>
                      </linearGradient>
                      <clipPath id="ic"><circle cx="340" cy="380" r="280"/></clipPath>
                    </defs>
                    <circle class="io-ring" cx="340" cy="380" r="290" fill="none" stroke="#D4A853" stroke-width="1.5"/>
                    <circle cx="340" cy="380" r="280" fill="#0C1A2E"/>
                    <circle cx="340" cy="380" r="270" fill="none" stroke="#D4A853" stroke-width="0.5" opacity="0.15"/>
                    <g clip-path="url(#ic)">
                      <line x1="60" y1="340" x2="130" y2="340" stroke="#D4A853" stroke-width="0.8" opacity="0.12"/>
                      <line x1="550" y1="340" x2="620" y2="340" stroke="#D4A853" stroke-width="0.8" opacity="0.12"/>
                      <text x="115" y="500" font-family="'Playfair Display',serif" font-weight="900" font-size="320" fill="url(#ig)" opacity="0.75">A</text>
                      <text x="330" y="500" font-family="'Playfair Display',serif" font-weight="900" font-size="320" fill="none" stroke="url(#ig)" stroke-width="3" opacity="0.6">D</text>
                      <text x="195" y="500" font-family="'Playfair Display',serif" font-weight="900" font-size="320" fill="url(#ig)">S</text>
                      <line x1="140" y1="570" x2="540" y2="570" stroke="#D4A853" stroke-width="0.8" opacity="0.2"/>
                      <polygon points="340,560 345,570 340,580 335,570" fill="#D4A853" opacity="0.35"/>
                      <text x="340" y="625" text-anchor="middle" font-family="'Cormorant Garamond',serif" font-weight="600" font-size="24" letter-spacing="16" fill="#D4A853" opacity="0.45">DIGITAL</text>
                    </g>
                  </svg>
                </div>
                <div class="io-tag">
                  <span>Websites</span><span class="io-dot"></span><span>Ads</span><span class="io-dot"></span><span>Growth</span>
                </div>
              </div>
              <div class="io-curtain io-cl"></div>
              <div class="io-curtain io-cr"></div>
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
