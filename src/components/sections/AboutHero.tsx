'use client'

import { useEffect, useRef } from 'react'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function animate() {
      const { gsap } = await import('@/lib/gsap')
      const container = containerRef.current
      if (!container) return

      gsap.fromTo(
        container.querySelectorAll('[data-about-hero-item]'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12 }
      )
    }

    animate()
  }, [])

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Tag data-about-hero-item variant="default">
          Founded 2017 · Remote-First
        </Tag>

        <h1
          data-about-hero-item
          className="text-heading-sm md:text-heading lg:text-display font-medium leading-display tracking-display text-midnight-ink"
        >
          Financial Expertise, <br className="hidden md:block" />
          Built for Growth
        </h1>

        <p
          data-about-hero-item
          className="text-body md:text-body-lg text-muted-stone max-w-2xl leading-body-lg tracking-body-lg"
        >
          Tabs Consultants is a remote-first financial consulting firm dedicated to helping
          construction companies, real estate investors, startups, and growing enterprises build
          financial clarity from the ground up.
        </p>

        <div data-about-hero-item className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Call
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
