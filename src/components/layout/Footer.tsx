import Link from 'next/link'

const services = [
  { label: 'Accounting & Bookkeeping', href: '/services/accounting' },
  { label: 'Tax Planning & Filing', href: '/services/tax-planning' },
  { label: 'Fractional CFO', href: '/services/fractional-cfo' },
  { label: 'Financial Reporting', href: '/services/financial-reporting' },
  { label: 'Mergers & Acquisitions', href: '/services/mergers-acquisitions' },
  { label: 'Payroll Management', href: '/services/payroll' },
  { label: 'System Integration', href: '/services/system-integration' },
  { label: 'Business Advisory', href: '/services/advisory' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Call', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-beige border-t border-black/[0.07]">
      <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-black/[0.07]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="font-medium text-[20px] text-black tracking-tight">
              Tabs<span className="text-leafy-green">.</span>
            </Link>
            <p className="text-[14px] text-black/50 leading-[1.65] max-w-[220px]">
              Remote-first financial consulting for construction, real estate, startups, and
              growing enterprises.
            </p>
            <address className="not-italic text-[13px] text-black/35">Founded 2017 · USA</address>
          </div>

          {/* Services col 1 */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/35">
              Services
            </span>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 4).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[14px] text-black/60 hover:text-black transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/35">
              &nbsp;
            </span>
            <ul className="flex flex-col gap-2.5">
              {services.slice(4).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[14px] text-black/60 hover:text-black transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/35">
              Company
            </span>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-[14px] text-black/60 hover:text-black transition-colors duration-150"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-1">
              <a
                href="mailto:hello@tabsconsultants.com"
                aria-label="Email Tabs Consultants"
                className="text-[14px] text-black/60 hover:text-black transition-colors duration-150"
              >
                hello@tabsconsultants.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-black/35">
            © {new Date().getFullYear()} Tabs Consultants. All rights reserved.
          </p>
          <p className="text-[13px] text-black/35">
            Privacy-forward · Remote-first · No lock-in
          </p>
        </div>
      </div>
    </footer>
  )
}
