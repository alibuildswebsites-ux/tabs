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
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Tag variant="default">What We Do</Tag>
          <h1 className="mt-4 text-heading-sm md:text-heading lg:text-display font-medium leading-display tracking-display text-midnight-ink">
            Financial Services Designed for Growth
          </h1>
          <p className="mt-4 text-body md:text-body-lg text-muted-stone max-w-xl leading-body-lg tracking-body-lg">
            Eight core services — each built to give your business more clarity, compliance, and confidence.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <div className="bg-ghostly-gray rounded-cards p-8 h-full cursor-pointer hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-3">
                <Tag variant="green">{s.tagline}</Tag>
                <h2 className="text-subheading font-medium text-midnight-ink leading-subheading tracking-subheading">{s.name}</h2>
                <p className="text-body text-muted-stone leading-body tracking-body">{s.subhead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
