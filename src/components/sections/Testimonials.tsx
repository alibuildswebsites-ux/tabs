'use client'

import React from 'react'
import { motion } from 'motion/react'

/* ── Testimonial data ── */
const testimonials = [
  {
    text: 'Tabs cleaned up three years of messy books in under a month. I finally know what my business is actually worth — and it is a lot more than I thought.',
    name: 'Marcus T.',
    role: 'Owner, BluePeak Construction',
    initials: 'MT',
    color: 'bg-leafy-green',
  },
  {
    text: 'Having a fractional CFO from Tabs helped us close our Series A. They built our financial model, prepped our data room, and were in every investor call. Invaluable.',
    name: 'Priya S.',
    role: 'CEO, Nova Ventures',
    initials: 'PS',
    color: 'bg-sunbeam-yellow',
  },
  {
    text: 'Our payroll used to take a full day every two weeks. Now I approve it in minutes. The team set everything up perfectly and are always available when we need them.',
    name: 'James R.',
    role: 'Director of Operations, Summit Enterprises',
    initials: 'JR',
    color: 'bg-sunbeam-yellow',
  },
  {
    text: 'As a real estate investor with a complex portfolio, I needed someone who actually understood the numbers. Tabs gets it — they speak my language and make reporting effortless.',
    name: 'Sandra K.',
    role: 'Principal, Meridian Real Estate',
    initials: 'SK',
    color: 'bg-leafy-green',
  },
  {
    text: 'Tax planning with Tabs saved us over $40,000 last year through entity restructuring alone. Best financial decision we made. Wish we had done it sooner.',
    name: 'Daniel W.',
    role: 'Founder, Apex Development',
    initials: 'DW',
    color: 'bg-sunbeam-yellow',
  },
  {
    text: 'The financial dashboard they set up changed how we run our weekly leadership meetings. Everyone is looking at the same numbers and making faster, smarter decisions.',
    name: 'Rachel L.',
    role: 'COO, Cornerstone Group',
    initials: 'RL',
    color: 'bg-sunbeam-yellow',
  },
  {
    text: 'We switched from a big regional firm to Tabs and the difference is night and day. Responsive, proactive, and they actually understand our construction business.',
    name: 'Tom A.',
    role: 'President, Frontier Capital Builders',
    initials: 'TA',
    color: 'bg-leafy-green',
  },
  {
    text: 'Tabs handled our M&A due diligence from start to finish. They found issues the seller had glossed over and saved us from a bad deal. Worth every penny.',
    name: 'Elise M.',
    role: 'Managing Partner, BluePeak Realty',
    initials: 'EM',
    color: 'bg-sunbeam-yellow',
  },
  {
    text: 'I was drowning in compliance tasks before Tabs. Now I have one call a month, a clean compliance calendar, and zero surprises. It has completely changed my stress level.',
    name: 'Kevin B.',
    role: 'CEO, GreenPath Startups',
    initials: 'KB',
    color: 'bg-sunbeam-yellow',
  },
]

/* Split testimonials into 3 columns */
const col1 = testimonials.filter((_, i) => i % 3 === 0)
const col2 = testimonials.filter((_, i) => i % 3 === 1)
const col3 = testimonials.filter((_, i) => i % 3 === 2)

/* ── Single scrolling column ── */
const TestimonialsColumn = ({
  items,
  duration = 14,
  className = '',
}: {
  items: typeof testimonials
  duration?: number
  className?: string
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      animate={{ translateY: '-50%' }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-4"
    >
      {[0, 1].map((pass) => (
        <React.Fragment key={pass}>
          {items.map(({ text, name, role, initials, color }, i) => (
            <div
              key={`${pass}-${i}`}
              className="bg-beige rounded-[24px] p-7 flex flex-col gap-5 border border-black/[0.06]"
            >
              {/* Quote mark */}
              <span className="text-[36px] leading-none text-black/15 font-medium select-none">
                &ldquo;
              </span>

              <p className="text-[14px] text-black/65 leading-[1.7]">{text}</p>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.07]">
                <div
                  className={`w-9 h-9 rounded-full ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-[11px] font-medium text-black">{initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-black leading-tight">{name}</span>
                  <span className="text-[12px] text-black/40 leading-tight">{role}</span>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

/* ── Main section export ── */
export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-8 border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="nummeration">
              <span className="num">01</span>
              <span className="w-4 h-px bg-black/20 inline-block" />
              <span>HAPPY CLIENTS</span>
            </div>
            <h2 className="text-heading-sm md:text-heading font-medium text-midnight-ink leading-heading tracking-heading">
              Businesses That Trusted the Numbers
            </h2>
          </div>
          <p className="text-body text-muted-stone max-w-xs md:text-right leading-body tracking-body">
            200+ businesses have made smarter financial decisions with Tabs by their side.
          </p>
        </div>

        {/* 3-column infinite scroll — fade top & bottom edges */}
        <div
          className="relative"
          style={{
            height: '580px',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {/* Column 1 — slowest */}
            <TestimonialsColumn items={col1} duration={18} />

            {/* Column 2 — medium, offset start (hidden on mobile) */}
            <TestimonialsColumn
              items={col2}
              duration={14}
              className="hidden md:block"
            />

            {/* Column 3 — fastest, hidden on tablet and below */}
            <TestimonialsColumn
              items={col3}
              duration={22}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
