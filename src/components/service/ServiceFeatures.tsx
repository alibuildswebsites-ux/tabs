import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { ServiceFeature } from '@/lib/services'

interface ServiceFeaturesProps {
  features: ServiceFeature[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[f.icon] ?? Icons.Circle
            return (
              <Card key={f.title} padding="md" className="flex flex-col gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,0,0,0.04)] rounded-[12px]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-medium text-midnight-ink">{f.title}</h3>
                <p className="text-sm text-muted-stone leading-relaxed">{f.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
