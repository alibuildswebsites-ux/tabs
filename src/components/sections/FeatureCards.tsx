'use client'

import { useEffect, useRef } from 'react'
import {
  Wifi,
  Fingerprint,
  Shield,
  Clock,
  LineChart,
  Globe,
} from 'lucide-react'

const features = [
  {
    icon: Wifi,
    color: 'bg-leafy-green',
    title: 'Remote-First by Design',
    body: 'Work with expert financial talent anywhere in the country. Our remote model means no geographic limits — and we adapt to how your team works.',
  },
  {
    icon: Fingerprint,
    color: 'bg-sunbeam-yellow',
    title: 'Built Around Your Business',
    body: 'No templates. No one-size-fits-all packages. Every engagement is designed around your specific industry, stage, and goals.',
  },
  {
    icon: Shield,
    color: 'bg-sunbeam-yellow',
    title: 'Compliance Without Stress',
    body: 'We stay on top of regulatory changes, filing deadlines, and audit requirements — so you never have to worry about what you might be missing.',
  },
  {
    icon: Clock,
    color: 'bg-leafy-green',
    title: 'Always On Time',
    body: 'Books closed on schedule. Reports delivered when promised. Tax filings submitted early. Reliability is not a feature — it is our baseline.',
  },
  {
    icon: LineChart,
    color: 'bg-sunbeam-yellow',
    title: 'Strategy, Not Just Reporting',
    body: 'We connect your financial data to business decisions. Every report comes with plain-language insight — not just numbers on a page.',
  },
  {
    icon: Globe,
    color: 'bg-sunbeam-yellow',
    title: 'Industry Expertise That Applies',
    body: 'Construction job costing. Real estate portfolio analysis. Startup runway modeling. We speak your industry\'s financial language.',
  },
]

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-feature-card]'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.08,
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
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-8 bg-beige border-t border-black/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="nummeration">
              <span className="num">06</span>
              <span className="w-4 h-px bg-black/20 inline-block" />
              <span>GOOD COMPANY</span>
            </div>
            <h2 className="text-heading-sm md:text-heading font-medium text-midnight-ink leading-heading tracking-heading">
              Everything You Need, Nothing You Don&apos;t
            </h2>
          </div>
          <p className="text-body text-muted-stone leading-body tracking-body max-w-sm md:text-right">
            Purpose-built for growing businesses that want expert financial partnership — without the overhead.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                data-feature-card=""
                className="bg-white rounded-[24px] p-8 flex flex-col gap-5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-shadow duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-[10px] ${f.color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={18} strokeWidth={1.5} className="text-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-medium text-black leading-snug">{f.title}</h3>
                  <p className="text-[15px] text-black/55 leading-[1.6]">{f.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
