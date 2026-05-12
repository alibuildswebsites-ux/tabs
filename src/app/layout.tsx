import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tabsconsultants.com'),
  title: {
    default: 'Tabs Consultants — Financial Consulting for Growing Businesses',
    template: '%s | Tabs Consultants',
  },
  description:
    'Tabs Consultants provides expert accounting, tax planning, fractional CFO, payroll, and business advisory services for construction, real estate, startups, and growing enterprises.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Tabs Consultants',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Tabs Consultants',
  url: 'https://tabsconsultants.com',
  foundingDate: '2017',
  description:
    'Remote-first financial consulting firm providing accounting, tax planning, fractional CFO, payroll, financial reporting, M&A support, system integration, and business advisory services.',
  areaServed: 'US',
  serviceType: [
    'Accounting & Bookkeeping',
    'Tax Planning & Filing',
    'Fractional CFO',
    'Financial Reporting & Forecasting',
    'Mergers & Acquisitions',
    'Payroll Management',
    'System Integration',
    'Business Advisory & Compliance',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@tabsconsultants.com',
    contactType: 'customer support',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-dm-sans bg-canvas text-midnight-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
