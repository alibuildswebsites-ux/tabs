import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CTABandProps {
  headline?: string
  subhead?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABand({
  headline = 'Ready to Professionalize Your Finance Function?',
  subhead = 'Book a free 30-minute intro call. We will discuss your goals, identify bottlenecks, and see if we are the right fit.',
  primaryLabel = 'Book a Free Call',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryHref = '/services',
}: CTABandProps) {
  return (
    <section className="py-16 md:py-24 px-8 border-t border-black/[0.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-midnight-ink rounded-[24px] px-10 py-16 md:px-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-heading-sm md:text-heading font-medium text-white leading-heading tracking-heading">
              {headline}
            </h2>
            <p className="text-body text-white/55 leading-body tracking-body">{subhead}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              href={primaryHref}
              variant="primary"
              className="gap-2 group"
            >
              {primaryLabel}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/[0.06]"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
