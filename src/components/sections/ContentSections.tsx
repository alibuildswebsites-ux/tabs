'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calculator, TrendingUp, Users, Settings } from 'lucide-react'

const sections = [
  {
    num: '01',
    tag: 'EASY START',
    headline: 'Set Up Your Financial Foundation in Days',
    body: 'We plug into your existing accounts, tools, and workflows — then take it from there. No lengthy onboarding. No painful migrations. Just accurate books from day one.',
    color: 'bg-leafy-green',
    icon: BookOpen,
    cta: { label: 'Accounting & Bookkeeping', href: '/services/accounting' },
    features: ['Bank sync & reconciliation', 'QuickBooks / Xero setup', 'Chart of accounts review', 'First-month clean-up'],
  },
  {
    num: '02',
    tag: 'INSTANT OUTPUT',
    headline: 'Unlock Key Insights From Your Numbers',
    body: 'Stop guessing and start knowing. Our financial reports turn raw data into clear, plain-language summaries that tell you exactly where your business stands — and where it is going.',
    color: 'bg-sunbeam-yellow',
    icon: TrendingUp,
    cta: { label: 'Financial Reporting', href: '/services/financial-reporting' },
    features: ['Monthly P&L + balance sheet', 'Rolling 13-week cash flow', 'KPI dashboard', 'Scenario modeling'],
  },
  {
    num: '03',
    tag: 'ADVANCED STRATEGY',
    headline: 'Plan Smarter With a CFO on Your Side',
    body: 'Get CFO-level strategic guidance without the full-time cost. We bring financial leadership to your board meetings, fundraises, and growth decisions — exactly when you need it.',
    color: 'bg-sunbeam-yellow',
    icon: Calculator,
    cta: { label: 'Fractional CFO', href: '/services/fractional-cfo' },
    features: ['Financial strategy & KPIs', 'Investor reporting', 'Cash flow management', 'Fundraising support'],
  },
  {
    num: '04',
    tag: 'SMART TEAMWORK',
    headline: 'Empower Your Business With Compliance',
    body: 'Stay compliant, reduce risk, and make bold decisions backed by expert guidance. Our advisory services keep you ahead of regulation changes and positioned for what comes next.',
    color: 'bg-leafy-green',
    icon: Users,
    cta: { label: 'Business Advisory', href: '/services/advisory' },
    features: ['Regulatory compliance', 'Entity structure review', 'On-call advisory access', 'Growth planning'],
  },
  {
    num: '05',
    tag: 'CREATIVE FREEDOM',
    headline: 'Financial Systems That Work the Way You Do',
    body: 'We connect your tools, automate your workflows, and eliminate the manual work slowing your team down. Your stack, optimised — so your finance team can focus on what matters.',
    color: 'bg-sunbeam-yellow',
    icon: Settings,
    cta: { label: 'System Integration', href: '/services/system-integration' },
    features: ['QuickBooks / Xero / NetSuite', 'Workflow automation', 'CRM + ERP integration', 'Team training'],
  },
]

function MockCard({
  features,
  color,
  icon: Icon,
}: {
  features: string[]
  color: string
  icon: React.ElementType
}) {
  return (
    <div className="rounded-[24px] bg-beige border border-black/[0.07] overflow-hidden p-6 flex flex-col gap-5">
      {/* Card header */}
      <div className={`w-10 h-10 rounded-[10px] ${color} flex items-center justify-center`}>
        <Icon size={18} strokeWidth={1.5} className="text-black" />
      </div>
      {/* Feature list */}
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
            <span className="text-[14px] text-black/70">{f}</span>
          </li>
        ))}
      </ul>
      {/* Fake chart bar */}
      <div className="mt-auto pt-4 border-t border-black/[0.06] flex flex-col gap-2">
        {[80, 60, 95, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-black/[0.06]">
              <div className={`h-full rounded-full ${color} opacity-70`} style={{ width: `${w}%` }} />
            </div>
            <span className="text-[10px] text-black/25 w-6 text-right">{w}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContentSections() {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')

      refs.current.forEach((section) => {
        if (!section) return
        gsap.fromTo(
          section.querySelectorAll('[data-content-item]'),
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }

    setup()
  }, [])

  return (
    <>
      {sections.map((s, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={s.num}
            ref={(el) => { refs.current[i] = el }}
            className="py-16 md:py-24 px-8 border-t border-black/[0.06]"
          >
            <div className="max-w-[1280px] mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                {/* Text column */}
                <div className="flex flex-col gap-7">
                  {/* Nummeration — exact Pirsch pattern */}
                  <div data-content-item className="nummeration">
                    <span className="num">{s.num}</span>
                    <span className="w-4 h-px bg-black/20 inline-block" />
                    <span>{s.tag}</span>
                  </div>

                  <h2
                    data-content-item
                    className="text-heading-sm md:text-heading font-medium text-midnight-ink leading-heading tracking-heading"
                  >
                    {s.headline}
                  </h2>

                  <p data-content-item className="text-body text-muted-stone leading-body tracking-body max-w-md">
                    {s.body}
                  </p>

                  <Link
                    data-content-item
                    href={s.cta.href}
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-black hover:gap-3 transition-all duration-150 group"
                  >
                    {s.cta.label}
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                    />
                  </Link>
                </div>

                {/* Visual card column */}
                <div data-content-item>
                  <MockCard features={s.features} color={s.color} icon={s.icon} />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
