'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn your business — goals, pain points, current systems, and financial situation.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We design a tailored financial plan: services, tools, cadence, and success metrics.',
  },
  {
    number: '03',
    title: 'Execution',
    desc: 'We get to work — delivering consistent, accurate, and timely financial support.',
  },
  {
    number: '04',
    title: 'Growth',
    desc: 'We evolve with your business — adjusting scope and strategy as you scale.',
  },
]

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-step]'),
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={4} label="Our Process" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          How We Work Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} data-step="" className="flex flex-col gap-4">
              <span className="text-[48px] font-medium text-[rgba(0,0,0,0.08)] leading-none">
                {step.number}
              </span>
              <div className="w-8 h-px bg-sunbeam-yellow" />
              <h3 className="text-[20px] font-medium text-midnight-ink">{step.title}</h3>
              <p className="text-muted-stone text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
