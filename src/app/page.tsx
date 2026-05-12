import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyTabs } from '@/components/sections/WhyTabs'
import { Industries } from '@/components/sections/Industries'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Tabs Consultants — Financial Consulting for Growing Businesses',
  description:
    'Expert accounting, tax planning, fractional CFO, payroll, and business advisory for construction, real estate, startups, and growing enterprises. Remote-first since 2017.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <ServicesGrid />
      <WhyTabs />
      <Industries />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  )
}
