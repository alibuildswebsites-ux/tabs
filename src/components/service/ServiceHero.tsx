import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'

interface ServiceHeroProps {
  tagline: string
  headline: string
  subhead: string
}

export function ServiceHero({ tagline, headline, subhead }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <Tag variant="green">{tagline}</Tag>
        <h1 className="text-4xl md:text-[56px] font-medium leading-[1.25] tracking-[-0.016px] text-midnight-ink">
          {headline}
        </h1>
        <p className="text-lg text-muted-stone max-w-2xl leading-relaxed">{subhead}</p>
        <div className="mt-2">
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
