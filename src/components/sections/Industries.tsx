'use client'

import { useEffect, useRef } from 'react'
import { HardHat, Building2, Rocket, TrendingUp } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const industries = [
  {
    icon: HardHat,
    name: 'Construction',
    desc: 'Job costing, project cash flow, payroll compliance, and contractor accounting.',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    desc: 'Portfolio accounting, entity structuring, tax optimization, and investor reporting.',
  },
  {
    icon: Rocket,
    name: 'Startups',
    desc: 'Fractional CFO support, fundraising prep, runway modeling, and investor reporting.',
  },
  {
    icon: TrendingUp,
    name: 'Growing Enterprises',
    desc: 'Scalable financial systems, strategic planning, and compliance for businesses on the move.',
  },
]

export function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-industry-card]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={3} label="Who We Help" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.name}
                data-industry-card=""
                className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-4"
              >
                <Icon size={28} strokeWidth={1.5} className="text-midnight-ink" />
                <h3 className="text-[20px] font-medium text-midnight-ink">{ind.name}</h3>
                <p className="text-muted-stone text-sm leading-relaxed">{ind.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
