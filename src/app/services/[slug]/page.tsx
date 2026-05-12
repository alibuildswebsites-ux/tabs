import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getService, getRelatedServices } from '@/lib/services'
import { ServiceHero } from '@/components/service/ServiceHero'
import { ServiceFeatures } from '@/components/service/ServiceFeatures'
import { ServiceProcess } from '@/components/service/ServiceProcess'
import { RelatedServices } from '@/components/service/RelatedServices'
import { CTABand } from '@/components/sections/CTABand'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.subhead,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedSlugs)

  return (
    <>
      <ServiceHero
        tagline={service.tagline}
        headline={service.headline}
        subhead={service.subhead}
      />
      <ServiceFeatures features={service.features} />
      <ServiceProcess steps={service.steps} />
      <RelatedServices services={related} />
      <CTABand />
    </>
  )
}
