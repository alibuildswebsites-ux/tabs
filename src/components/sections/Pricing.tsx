'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Essentials',
    tagline: 'For small businesses getting their books in order',
    price: 'From $799/mo',
    color: 'bg-beige',
    highlight: false,
    features: [
      'Monthly bookkeeping',
      'Bank reconciliation',
      'P&L + balance sheet',
      'Email support',
      'QuickBooks / Xero included',
    ],
    cta: { label: 'Get Started', href: '/contact' },
  },
  {
    name: 'Growth',
    tagline: 'For scaling businesses that need more',
    price: 'From $1,899/mo',
    color: 'bg-sunbeam-yellow',
    highlight: true,
    features: [
      'Everything in Essentials',
      'Tax planning & filing',
      'Payroll management',
      'Financial reporting & forecasting',
      'Monthly strategy call',
      'Priority support',
    ],
    cta: { label: 'Get Started', href: '/contact' },
  },
  {
    name: 'Enterprise',
    tagline: 'For complex operations that need a full financial team',
    price: 'Custom pricing',
    color: 'bg-beige',
    highlight: false,
    features: [
      'Everything in Growth',
      'Fractional CFO services',
      'M&A support',
      'System integration',
      'Business advisory & compliance',
      'Dedicated account lead',
    ],
    cta: { label: 'Talk to Us', href: '/contact' },
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-pricing-card]'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-8 bg-beige border-t border-black/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="nummeration">
            <span className="num">08</span>
            <span className="w-4 h-px bg-black/20 inline-block" />
            <span>PRICING</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-heading-sm md:text-heading font-medium text-midnight-ink leading-heading tracking-heading">
              Simple, Transparent Pricing
            </h2>
            <p className="text-body text-muted-stone max-w-xs md:text-right leading-body tracking-body">
              No hidden fees. No surprise invoices. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              data-pricing-card=""
              className={`${p.color} rounded-[24px] p-8 flex flex-col gap-7 ${
                p.highlight ? 'ring-2 ring-black/10' : ''
              }`}
            >
              {/* Plan name + tag */}
              <div className="flex flex-col gap-2">
                {p.highlight && (
                  <span className="inline-flex self-start text-[11px] font-medium uppercase tracking-wider bg-black text-white rounded-full px-3 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[22px] font-medium text-black">{p.name}</h3>
                <p className="text-[14px] text-black/50 leading-snug">{p.tagline}</p>
              </div>

              {/* Price */}
              <div className="text-[32px] font-medium text-black leading-none">{p.price}</div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="text-black/50 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[14px] text-black/70 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={p.cta.href}
                className={`inline-flex items-center justify-center gap-2 text-[15px] font-medium px-6 py-3 rounded-[12px] transition-all duration-150 select-none group ${
                  p.highlight
                    ? 'bg-midnight-ink text-white hover:bg-midnight-ink/90'
                    : 'bg-white text-midnight-ink border border-midnight-ink/12 hover:border-midnight-ink/25'
                }`}
              >
                {p.cta.label}
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 transition-transform duration-150"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[13px] text-black/35">
          All plans include a free 30-minute intro call. Prices vary by business size and scope.
          <Link href="/contact" className="text-black/60 hover:text-black underline underline-offset-2 ml-1">
            Talk to us for a custom quote.
          </Link>
        </p>
      </div>
    </section>
  )
}
