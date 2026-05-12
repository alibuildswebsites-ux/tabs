'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  BookOpen, Calculator, Target, BarChart, Briefcase,
  Clock, Link as LinkIcon, Compass, ArrowRight
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'

const serviceItems = [
  { slug: 'accounting', icon: BookOpen, name: 'Accounting & Bookkeeping', desc: 'Accurate books delivered every month, on time.' },
  { slug: 'tax-planning', icon: Calculator, name: 'Tax Planning & Filing', desc: 'Proactive strategy so you are never surprised at year-end.' },
  { slug: 'fractional-cfo', icon: Target, name: 'Fractional CFO', desc: 'CFO-level leadership at a fraction of the full-time cost.' },
  { slug: 'financial-reporting', icon: BarChart, name: 'Financial Reporting & Forecasting', desc: 'Reports and forecasts that turn data into decisions.' },
  { slug: 'mergers-acquisitions', icon: Briefcase, name: 'Mergers & Acquisitions', desc: 'Expert financial support for buying, selling, or merging.' },
  { slug: 'payroll', icon: Clock, name: 'Payroll Management', desc: 'Accurate, compliant payroll — every time, on time.' },
  { slug: 'system-integration', icon: LinkIcon, name: 'System Integration', desc: 'Connect your tools and eliminate manual work.' },
  { slug: 'advisory', icon: Compass, name: 'Business Advisory & Compliance', desc: 'Strategic guidance backed by deep financial expertise.' },
]

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const grid = gridRef.current
      if (!grid) return
      const cards = grid.querySelectorAll('[data-service-card]')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number={1} label="What We Do" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-3">
          Eight Ways We Help You Grow
        </h2>
        <p className="text-lg text-muted-stone mb-12 max-w-xl">
          From clean books to strategic guidance — we handle the financial complexity so you can focus on your business.
        </p>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                <Card
                  data-service-card=""
                  className="h-full cursor-pointer transition-transform duration-200 hover:-translate-y-1 group"
                  padding="md"
                >
                  <div className="flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,0,0,0.04)] rounded-[12px] group-hover:bg-sunbeam-yellow transition-colors duration-150">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-medium text-midnight-ink mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-stone leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-midnight-ink opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
