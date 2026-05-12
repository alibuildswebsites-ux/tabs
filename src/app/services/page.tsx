import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import { Tag } from '@/components/ui/Tag'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Tabs Consultants offers accounting, tax planning, fractional CFO, financial reporting, M&A support, payroll, system integration, and business advisory services.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Tag variant="default">What We Do</Tag>
          <h1 className="mt-4 text-4xl md:text-[56px] font-medium leading-[1.25] text-midnight-ink">
            Financial Services Designed for Growth
          </h1>
          <p className="mt-4 text-lg text-muted-stone max-w-xl leading-relaxed">
            Eight core services — each built to give your business more clarity, compliance, and confidence.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <div className="bg-ghostly-gray rounded-[24px] p-8 h-full cursor-pointer hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-3">
                <Tag variant="green">{s.tagline}</Tag>
                <h2 className="text-[20px] font-medium text-midnight-ink">{s.name}</h2>
                <p className="text-sm text-muted-stone leading-relaxed">{s.subhead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
