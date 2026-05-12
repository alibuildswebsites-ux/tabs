'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      'Tabs cleaned up three years of messy books in under a month. I finally know what my business is actually worth — and it is a lot more than I thought.',
    name: 'Marcus T.',
    role: 'Owner, BluePeak Construction',
    initials: 'MT',
    color: 'bg-leafy-green',
  },
  {
    quote:
      'Having a fractional CFO from Tabs helped us close our Series A. They built our financial model, prepped our data room, and were in every investor call. Invaluable.',
    name: 'Priya S.',
    role: 'CEO, Nova Ventures',
    initials: 'PS',
    color: 'bg-sunbeam-yellow',
  },
  {
    quote:
      'Our payroll used to take a full day every two weeks. Now I approve it in minutes. The team at Tabs set everything up perfectly and are always available when we need them.',
    name: 'James R.',
    role: 'Director of Operations, Summit Enterprises',
    initials: 'JR',
    color: 'bg-orange',
  },
  {
    quote:
      'As a real estate investor with a complex portfolio, I needed someone who actually understood the numbers. Tabs gets it — they speak my language and make the reporting effortless.',
    name: 'Sandra K.',
    role: 'Principal, Meridian Real Estate',
    initials: 'SK',
    color: 'bg-leafy-green',
  },
  {
    quote:
      'Tax planning with Tabs saved us over $40,000 last year through entity restructuring alone. Best financial decision we made. Wish we had done it sooner.',
    name: 'Daniel W.',
    role: 'Founder, Apex Development',
    initials: 'DW',
    color: 'bg-sunbeam-yellow',
  },
  {
    quote:
      'The financial dashboard they set up changed how we run our weekly leadership meetings. Everyone is looking at the same numbers and making faster, smarter decisions.',
    name: 'Rachel L.',
    role: 'COO, Cornerstone Group',
    initials: 'RL',
    color: 'bg-orange',
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return

      gsap.fromTo(
        section.querySelectorAll('[data-testimonial]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.07,
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
      className="py-32 px-8 border-t border-black/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="nummeration">
            <span className="num">07</span>
            <span className="w-4 h-px bg-black/20 inline-block" />
            <span>HAPPY CLIENTS</span>
          </div>
          <h2 className="text-[40px] md:text-[52px] font-medium text-black leading-[1.1] tracking-[-1px] max-w-xl">
            Businesses That Trusted the Numbers
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-testimonial=""
              className="bg-beige rounded-[24px] p-7 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <span className="text-[40px] leading-none text-black/20 font-medium select-none">&ldquo;</span>

              <p className="text-[15px] text-black/70 leading-[1.65] flex-1">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.07]">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-[11px] font-medium text-black">{t.initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-black">{t.name}</span>
                  <span className="text-[12px] text-black/45">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
