'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const testimonials = [
  {
    quote:
      'Tabs Consultants cleaned up three years of messy books in six weeks and set us up with a reporting system we actually use. We finally know where our money is going.',
    name: 'Marcus J.',
    role: 'Owner, General Contracting Firm',
  },
  {
    quote:
      'Having a fractional CFO from Tabs in our corner changed how we think about growth. They helped us prepare for our Series A and our investors were impressed with the financial rigor.',
    name: 'Priya S.',
    role: 'Co-founder, B2B SaaS Startup',
  },
  {
    quote:
      'Our real estate portfolio across four LLCs used to be a compliance nightmare. Tabs brought order to the chaos — tax savings alone paid for their fees three times over.',
    name: 'David R.',
    role: 'Real Estate Investor',
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-testimonial]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={5} label="Good Company" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testimonial=""
              className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-6"
            >
              <p className="text-midnight-ink text-base leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-0.5 mt-auto">
                <span className="text-base font-medium text-midnight-ink">{t.name}</span>
                <span className="text-sm text-muted-stone">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
