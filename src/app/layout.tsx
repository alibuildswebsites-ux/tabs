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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-dm-sans bg-canvas text-midnight-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
