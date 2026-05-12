'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function animate() {
      const { gsap } = await import('@/lib/gsap')
      const container = containerRef.current
      if (!container) return

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo(
        container.querySelectorAll('[data-hero-item]'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }
      )
    }

    animate()
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Tag data-hero-item variant="default">
          Financial Consulting Since 2017
        </Tag>

        <h1
          data-hero-item
          className="text-5xl md:text-[64px] font-medium leading-[1.25] tracking-[-0.016px] text-midnight-ink"
        >
          Financial Clarity for Businesses That Mean Business
        </h1>

        <p
          data-hero-item
          className="text-lg md:text-xl text-muted-stone max-w-2xl leading-relaxed"
        >
          Tabs Consultants is a remote-first financial consulting firm helping construction companies, real estate investors, startups, and growing enterprises gain clarity, maintain compliance, and scale with confidence.
        </p>

        <div data-hero-item className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Call
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
