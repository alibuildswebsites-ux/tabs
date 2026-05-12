import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/services'

interface RelatedServicesProps {
  services: Service[]
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <div className="bg-ghostly-gray rounded-[24px] p-6 flex items-center justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 group">
                <div>
                  <h3 className="text-[16px] font-medium text-midnight-ink">{s.name}</h3>
                  <p className="text-sm text-muted-stone mt-1">{s.tagline}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted-stone group-hover:text-midnight-ink group-hover:translate-x-1 transition-all duration-150"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
