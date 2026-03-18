import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-W6Z926F3H9'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
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
        {children}
      </body>
    </html>
  )
}
