'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/* Industry/client "logo" placeholders — styled as text wordmarks */
const logos = [
  'BuildRight Construction',
  'Meridian Real Estate',
  'Nova Ventures',
  'Summit Enterprises',
  'Cornerstone Group',
  'Apex Development',
  'Frontier Capital',
  'BluePeak Realty',
]

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
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
      )
    }

    animate()
  }, [])

  return (
    <section className="relative overflow-hidden pt-[88px]">
      {/* Background gradient blobs — Pirsch style */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Green blob — top right */}
        <div
          className="gradient-blob gradient-blob-green"
          style={{
            width: '600px',
            height: '600px',
            top: '-80px',
            right: '-120px',
          }}
        />
        {/* Yellow blob — bottom left */}
        <div
          className="gradient-blob gradient-blob-yellow"
          style={{
            width: '440px',
            height: '440px',
            bottom: '80px',
            left: '-100px',
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="relative max-w-[1280px] mx-auto px-8 pt-20 pb-16 flex flex-col items-center text-center gap-8"
      >
        {/* Pill label — Pirsch has a small label above h1 */}
        <div
          data-hero-item
          className="inline-flex items-center gap-2 bg-beige border border-black/[0.08] rounded-full px-4 py-1.5 text-[13px] font-medium text-black/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-leafy-green inline-block" />
          Financial Consulting Since 2017 · Remote-First
        </div>

        {/* H1 — Pirsch uses ~96px on desktop, but we follow design.md 64px display or slightly larger for hero impact but balanced */}
        <h1
          data-hero-item
          className="text-heading-sm md:text-heading lg:text-display font-medium leading-display tracking-display text-midnight-ink max-w-4xl"
        >
          Master Your Numbers, Scale Your Business
        </h1>

        {/* Subhead */}
        <p
          data-hero-item
          className="text-body md:text-body-lg text-muted-stone max-w-xl leading-body-lg tracking-body-lg"
        >
          Expert accounting, tax strategy, and fractional CFO guidance built specifically for
          construction, real estate, and high-growth startups.
        </p>

        {/* CTA row */}
        <div data-hero-item className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Button
            href="/contact"
            variant="primary"
            className="gap-2"
          >
            Book a Free Call
            <ArrowRight size={16} strokeWidth={2} />
          </Button>
          <Button
            href="/services"
            variant="outline"
            className="gap-2"
          >
            Explore Services
          </Button>
        </div>

        {/* Social proof line */}
        <p data-hero-item className="text-[13px] text-black/40 mt-1">
          Trusted by 200+ businesses · No lock-in contracts
        </p>

        {/* Dashboard mock card — the big visual Pirsch has */}
        <div
          data-hero-item
          className="w-full mt-8 rounded-[24px] bg-beige border border-black/[0.07] overflow-hidden"
          style={{ minHeight: '340px' }}
        >
          <div className="p-6 flex flex-col gap-4">
            {/* Fake dashboard header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-black/10" />
                <div className="w-3 h-3 rounded-full bg-black/10" />
                <div className="w-3 h-3 rounded-full bg-black/10" />
              </div>
              <div className="w-20 h-5 rounded-full bg-black/[0.05]" />
            </div>
            {/* Fake chart grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {[
                { label: 'Monthly Revenue', value: '$284,500', color: 'bg-leafy-green', pct: '78%' },
                { label: 'Net Profit', value: '$61,200', color: 'bg-sunbeam-yellow', pct: '62%' },
                { label: 'Cash on Hand', value: '$142,800', color: 'bg-sunbeam-yellow', pct: '45%' },
                { label: 'Outstanding AR', value: '$38,400', color: 'bg-red-soft', pct: '28%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-[16px] p-4 flex flex-col gap-3">
                  <span className="text-[11px] text-black/40 font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-[22px] font-medium text-black">{stat.value}</span>
                  <div className="w-full h-1.5 rounded-full bg-black/[0.06]">
                    <div
                      className={`h-full rounded-full ${stat.color}`}
                      style={{ width: stat.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Fake bar chart */}
            <div className="bg-white rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-black/40 font-medium uppercase tracking-wide">Revenue vs. Expenses — 2025</span>
                <span className="text-[11px] text-leafy-green font-medium">↑ 24% YoY</span>
              </div>
              <div className="flex items-end gap-1.5 md:gap-2 h-[80px]">
                {[55, 72, 65, 80, 58, 90, 76, 88, 95, 82, 100, 97].map((h, i) => (
                  <div key={i} className={`flex-1 flex flex-col gap-1 items-center justify-end h-full ${i > 5 ? 'hidden sm:flex' : 'flex'}`}>
                    <div
                      className="w-full rounded-t-[4px] bg-leafy-green opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                  <span key={m} className={`text-[10px] text-black/25 flex-1 text-center ${i > 5 ? 'hidden sm:inline' : 'inline'}`}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo / client strip */}
      <div className="relative overflow-hidden py-10 border-t border-black/[0.06]">
        <p className="text-center text-[12px] text-black/30 font-medium uppercase tracking-[0.1em] mb-6">
          Trusted by businesses across industries
        </p>
        <div className="marquee-mask overflow-hidden">
          <div
            className="flex gap-12 items-center"
            style={{
              animation: 'marquee 28s linear infinite',
              width: 'max-content',
            }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-[14px] font-medium text-black/20 whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
