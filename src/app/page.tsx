import { Hero } from '@/components/sections/Hero'
import { ContentSections } from '@/components/sections/ContentSections'
import { FeatureCards } from '@/components/sections/FeatureCards'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTABand } from '@/components/sections/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContentSections />
      <FeatureCards />
      <Testimonials />
      <Pricing />
      <CTABand />
    </>
  )
}
