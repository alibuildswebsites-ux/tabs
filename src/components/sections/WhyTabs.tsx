'use client'

import { useEffect, useRef } from 'react'
import { Wifi, Fingerprint, LineChart } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'

const reasons = [
  {
    icon: Wifi,
    tag: 'Remote-First',
    title: 'Work With Experts Anywhere',
    body: 'Our remote-first model means you get access to top financial talent without geographic limits — and we adapt to how you work.',
  },
  {
    icon: Fingerprint,
    tag: 'Personalized',
    title: 'No Cookie-Cutter Solutions',
    body: 'Every engagement is designed around your specific business, industry, and goals. We build lasting relationships, not transactional ones.',
  },
  {
    icon: LineChart,
    tag: 'Strategic',
    title: 'Beyond the Numbers',
    body: 'We connect financial data to business strategy. You will never just get a report — you will get insight and a path forward.',
  },
]

export function WhyTabs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-why-card]'),
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
    <section className="py-24 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={2} label="Why Tabs" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          The Tabs Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.tag} data-why-card="" className="bg-canvas rounded-[24px] p-8 flex flex-col gap-4">
                <Icon size={28} strokeWidth={1.5} className="text-midnight-ink" />
                <Tag variant="green">{r.tag}</Tag>
                <h3 className="text-[22px] font-medium text-midnight-ink">{r.title}</h3>
                <p className="text-muted-stone text-base leading-relaxed">{r.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
