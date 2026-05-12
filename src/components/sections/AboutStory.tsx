'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-story-item]'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={1} label="Our Story" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mt-8">
          <div data-story-item>
            <h2 className="text-heading-sm md:text-heading font-medium text-midnight-ink leading-heading tracking-heading">
              We Started Because Growing Businesses Deserved Better
            </h2>
          </div>
          <div data-story-item className="flex flex-col gap-5 text-muted-stone text-body leading-body tracking-body">
            <p>
              Tabs Consultants was founded in 2017 with a straightforward belief: businesses at
              every stage deserve access to expert financial guidance — not just the ones large
              enough to afford a full-time CFO or accounting department.
            </p>
            <p>
              We built our firm remote-first by design. That means our clients gain access to
              experienced financial professionals regardless of location, and our team can focus
              entirely on delivering great work rather than managing real estate.
            </p>
            <p>
              Since then we have worked alongside construction companies managing complex job costs,
              real estate investors scaling their portfolios, startups preparing to raise, and
              enterprises navigating rapid growth. The common thread is the same in every case: when
              you have the right financial foundation, everything else gets easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
