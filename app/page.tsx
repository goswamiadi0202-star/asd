import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'
import { fallbackData } from '@/lib/fallback-data'
import type { HomePageData } from '@/lib/types'
import IntroAnimation from '@/components/ui/IntroAnimation'
import CursorGlow from '@/components/ui/CursorGlow'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Differentiators from '@/components/sections/Differentiators'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Packages from '@/components/sections/Packages'
import CtaSection from '@/components/sections/CtaSection'
import FoundingOffer from '@/components/sections/FoundingOffer'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

async function getData(): Promise<HomePageData> {
  try {
    if (!client) return fallbackData
    const data = await client.fetch<HomePageData>(homePageQuery, {}, { next: { revalidate: 60 } })
    if (!data.hero) return fallbackData
    return data
  } catch {
    return fallbackData
  }
}

export default async function HomePage() {
  const data = await getData()

  return (
    <>
      <IntroAnimation />
      <CursorGlow />
      <Navbar logoText={data.settings.logoText} logoSub={data.settings.logoSub} />
      <main>
        <Hero hero={data.hero} />
        <Marquee />
        <Services services={data.services} />
        <Differentiators />
        <Portfolio projects={data.projects} />
        <Packages />
        <Process steps={data.processSteps} />
        <CtaSection cta={data.cta} />
        <FoundingOffer />
        <Contact settings={data.settings} />
      </main>
      <Footer settings={data.settings} />
    </>
  )
}
