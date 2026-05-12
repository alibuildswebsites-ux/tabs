'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stats = [
  { value: '2017', label: 'Year Founded' },
  { value: '200+', label: 'Businesses Served' },
  { value: '100%', label: 'Remote-First Since Day One' },
  { value: '8', label: 'Core Service Areas' },
]

export function AboutStats() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-stat-item]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6 bg-midnight-ink text-white">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={3} label="By the Numbers" className="[&_span]:text-white/40" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-8">
          {stats.map((s) => (
            <div key={s.label} data-stat-item="" className="flex flex-col gap-2">
              <span className="text-[48px] md:text-[64px] font-medium leading-none text-sunbeam-yellow">
                {s.value}
              </span>
              <span className="text-white/60 text-sm leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
