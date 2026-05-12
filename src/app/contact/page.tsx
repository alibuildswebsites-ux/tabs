import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Tabs Consultants | Book a Free Consultation',
  description:
    'Get in touch with Tabs Consultants. Book a free 30-minute consultation or send us a message — we respond within one business day.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@tabsconsultants.com',
    href: 'mailto:hello@tabsconsultants.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote-First · Serving clients nationwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within one business day',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <Tag variant="default">Get in Touch</Tag>
          <h1 className="text-5xl md:text-[56px] font-medium leading-[1.2] text-midnight-ink">
            Let&apos;s Talk About Your Finances
          </h1>
          <p className="text-lg text-muted-stone leading-relaxed">
            Whether you have a specific question or just want to explore how Tabs can help, we
            would love to hear from you. No pressure, no sales pitch — just a real conversation.
          </p>
        </div>
      </section>

      {/* Main content — form + sidebar */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Form — takes up 3 cols */}
          <div className="lg:col-span-3 bg-ghostly-gray rounded-[24px] p-8 md:p-12">
            <h2 className="text-2xl font-medium text-midnight-ink mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Sidebar — takes up 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Calendly */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium text-midnight-ink">Prefer to Book a Call?</h2>
              <p className="text-muted-stone text-base leading-relaxed">
                Skip the back-and-forth. Book a free 30-minute intro call directly on our calendar
                and we will come prepared.
              </p>
              <Button
                href="https://calendly.com/tabsconsultants"
                variant="primary"
                size="md"
                external
              >
                Book on Calendly
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.08)]" />

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {contactDetails.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <Icon size={20} strokeWidth={1.5} className="text-muted-stone" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm text-muted-stone">{d.label}</span>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-midnight-ink font-medium hover:underline underline-offset-2"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="text-midnight-ink font-medium">{d.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.08)]" />

            {/* Trust signal */}
            <div className="bg-sunbeam-yellow rounded-[16px] p-6 flex flex-col gap-2">
              <p className="text-midnight-ink font-medium text-base">No obligation, ever.</p>
              <p className="text-midnight-ink/70 text-sm leading-relaxed">
                Our initial consultation is completely free. We will tell you honestly whether we
                are the right fit for your business — and if not, we will point you in the right
                direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="py-12" />
    </>
  )
}
