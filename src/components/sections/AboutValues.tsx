'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { CheckCircle2, Users, Lightbulb, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: CheckCircle2,
    tag: 'Accuracy',
    title: 'Precision Over Speed',
    body: 'Getting it right matters more than getting it fast. We hold every engagement to a high standard of accuracy — because bad numbers lead to bad decisions.',
  },
  {
    icon: Users,
    tag: 'Partnership',
    title: 'Relationships First',
    body: 'We are not a transactional firm. We build long-term relationships with our clients and think of ourselves as a part of your team, not a vendor.',
  },
  {
    icon: Lightbulb,
    tag: 'Clarity',
    title: 'Plain Language Always',
    body: 'Financial complexity should not create confusion. We translate numbers into clear language and recommendations you can act on immediately.',
  },
  {
    icon: ShieldCheck,
    tag: 'Integrity',
    title: 'Honest, Always',
    body: 'We tell you what you need to hear, not what you want to hear. Our advice is objective, independent, and always in your best interest.',
  },
]

export function AboutValues() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-value-card]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.12,
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
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={2} label="Our Values" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.tag}
                data-value-card=""
                className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-4"
              >
                <Icon size={28} strokeWidth={1.5} className="text-midnight-ink" />
                <Tag variant="default">{v.tag}</Tag>
                <h3 className="text-[20px] font-medium text-midnight-ink leading-snug">{v.title}</h3>
                <p className="text-muted-stone text-sm leading-relaxed">{v.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
