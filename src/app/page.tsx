import { Hero } from '@/components/sections/Hero'
import { ContentSections } from '@/components/sections/ContentSections'
import { FeatureCards } from '@/components/sections/FeatureCards'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTABand } from '@/components/sections/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tabs Consultants | Expert Financial Consulting for Growth',
  description: 'Remote-first financial consulting for construction, real estate, startups, and growing enterprises. Accounting, tax planning, fractional CFO, and business advisory.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <ContentSections />
      <FeatureCards />
      <Pricing />
      <CTABand />
    </>
  )
}
