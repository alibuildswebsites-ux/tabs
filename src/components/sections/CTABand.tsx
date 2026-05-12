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
  headline = 'Ready to Take Control of Your Finances?',
  subhead = 'Book a free 30-minute consultation and let us show you what financial clarity looks like.',
  primaryLabel = 'Book a Free Call',
  primaryHref = '/contact',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTABandProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink">
          {headline}
        </h2>
        <p className="text-lg text-muted-stone max-w-xl">{subhead}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
