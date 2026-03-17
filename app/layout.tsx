import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'ASD Digital | Websites. Ads. Growth.',
  description: 'Premium websites, high-converting ads, and scalable growth strategies. We turn ambitious businesses into market leaders.',
  openGraph: {
    title: 'ASD Digital | Websites. Ads. Growth.',
    description: 'Premium websites, high-converting ads, and scalable growth strategies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" />
          <input name="email" />
          <input name="service" />
          <textarea name="message" />
        </form>
        {children}
      </body>
    </html>
  )
}
