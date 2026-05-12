import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
  subhead = 'Book a free 30-minute consultation and see what financial clarity actually feels like.',
  primaryLabel = 'Book a Free Call',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryHref = '/services',
}: CTABandProps) {
  return (
    <section className="py-32 px-8 border-t border-black/[0.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-black rounded-[24px] px-10 py-16 md:px-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-[36px] md:text-[48px] font-medium text-white leading-[1.1] tracking-[-1px]">
              {headline}
            </h2>
            <p className="text-[16px] text-white/55 leading-[1.6]">{subhead}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-leafy-green text-black font-medium text-[15px] px-6 py-3.5 rounded-[12px] hover:bg-[#85d9ae] transition-colors duration-150 select-none group"
            >
              {primaryLabel}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-medium text-[15px] px-6 py-3.5 rounded-[12px] hover:bg-white/[0.06] transition-colors duration-150 select-none"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
