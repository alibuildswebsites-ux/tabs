'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Clients Served' },
  { value: 8, suffix: '', label: 'Core Services' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (numRef.current) numRef.current.textContent = `${value}${suffix}`
      return
    }

    async function setup() {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap')
      const el = numRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => {
          if (triggered.current) return
          triggered.current = true
          const counter = { val: 0 }
          gsap.to(counter, {
            val: value,
            duration: 1.2,
            ease: 'power1.out',
            onUpdate: () => {
              if (el) el.textContent = `${Math.round(counter.val)}${suffix}`
            },
          })
        },
      })
    }

    setup()
  }, [value, suffix])

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[48px] font-medium text-midnight-ink leading-none">
        <span ref={numRef}>0{suffix}</span>
      </span>
      <span className="text-muted-stone text-base">{label}</span>
    </div>
  )
}

export function StatStrip() {
  return (
    <section className="border-t border-b border-[rgba(0,0,0,0.06)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-16 justify-items-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
