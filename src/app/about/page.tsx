import type { Metadata } from 'next'
import { CTABand } from '@/components/sections/CTABand'
import { AboutHero } from '@/components/sections/AboutHero'
import { AboutStory } from '@/components/sections/AboutStory'
import { AboutValues } from '@/components/sections/AboutValues'
import { AboutStats } from '@/components/sections/AboutStats'

export const metadata: Metadata = {
  title: 'About Tabs Consultants | Our Story & Mission',
  description:
    'Founded in 2017, Tabs Consultants is a remote-first financial consulting firm built to give growing businesses access to expert financial guidance — without the overhead of a full in-house team.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <CTABand
        headline="Work With a Team That Cares About Your Numbers"
        subhead="Book a free 30-minute call and see what it feels like to have a real financial partner."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  )
}
