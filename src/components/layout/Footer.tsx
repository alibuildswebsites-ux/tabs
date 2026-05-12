import Link from 'next/link'

const serviceLinks = [
  { label: 'Accounting & Bookkeeping', href: '/services/accounting' },
  { label: 'Tax Planning & Filing', href: '/services/tax-planning' },
  { label: 'Fractional CFO', href: '/services/fractional-cfo' },
  { label: 'Financial Reporting', href: '/services/financial-reporting' },
  { label: 'M&A Support', href: '/services/mergers-acquisitions' },
  { label: 'Payroll Management', href: '/services/payroll' },
  { label: 'System Integration', href: '/services/system-integration' },
  { label: 'Business Advisory', href: '/services/advisory' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-ghostly-gray border-t border-[rgba(0,0,0,0.08)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 font-medium text-midnight-ink text-lg mb-3">
              <span className="inline-block w-7 h-7 bg-sunbeam-yellow rounded-[8px]" aria-hidden="true" />
              Tabs Consultants
            </div>
            <p className="text-muted-stone text-sm leading-relaxed max-w-56">
              Financial clarity for businesses that mean business. Remote-first consulting since 2017.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-midnight-ink mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-stone hover:text-midnight-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-midnight-ink mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-stone hover:text-midnight-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-midnight-ink mb-4 uppercase tracking-wide">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@tabsconsultants.com"
                className="text-sm text-muted-stone hover:text-midnight-ink transition-colors duration-150"
              >
                hello@tabsconsultants.com
              </a>
              <p className="text-sm text-muted-stone">Remote-first — serving clients nationwide</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-stone">
            &copy; {new Date().getFullYear()} Tabs Consultants. All rights reserved.
          </p>
          <p className="text-sm text-muted-stone">Founded 2017 &mdash; Remote-First Financial Consulting</p>
        </div>
      </div>
    </footer>
  )
}
