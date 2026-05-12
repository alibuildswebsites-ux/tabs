import type { ServiceStep } from '@/lib/services'

interface ServiceProcessProps {
  steps: ServiceStep[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-16 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-[40px] font-medium text-[rgba(0,0,0,0.08)] leading-none">
                {step.number}
              </span>
              <div className="w-6 h-px bg-sunbeam-yellow" />
              <h3 className="text-[18px] font-medium text-midnight-ink">{step.title}</h3>
              <p className="text-sm text-muted-stone leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
