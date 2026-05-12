'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Please enter your company or business name'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please tell us a little more (at least 10 characters)'),
})

type FormValues = z.infer<typeof schema>

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'accounting', label: 'Accounting & Bookkeeping' },
  { value: 'tax-planning', label: 'Tax Planning & Filing' },
  { value: 'fractional-cfo', label: 'Fractional CFO' },
  { value: 'financial-reporting', label: 'Financial Reporting & Forecasting' },
  { value: 'mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { value: 'payroll', label: 'Payroll Management' },
  { value: 'system-integration', label: 'System Integration & Process Improvement' },
  { value: 'advisory', label: 'Business Advisory & Compliance' },
  { value: 'other', label: 'Not sure yet' },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(_data: FormValues) {
    // Simulate async submission — replace with actual API endpoint
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
        <CheckCircle2 size={48} strokeWidth={1.5} className="text-leafy-green" />
        <h3 className="text-2xl font-medium text-midnight-ink">
          We&apos;ve received your message
        </h3>
        <p className="text-muted-stone max-w-sm leading-relaxed">
          A member of our team will be in touch within one business day. We look forward to
          speaking with you.
        </p>
        <Button href="/" variant="outline" size="md">
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Your Name"
          placeholder="Jane Smith"
          autoComplete="name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Input
        label="Company / Business Name"
        placeholder="Acme Construction LLC"
        autoComplete="organization"
        error={errors.company?.message}
        {...register('company')}
      />

      {/* Service select — mirrors Input styling */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-base font-normal text-midnight-ink">
          Service You&apos;re Interested In
        </label>
        <select
          id="service"
          className={`w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink rounded-[6px] px-3 py-2.5 text-base font-normal focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150 appearance-none cursor-pointer ${errors.service ? 'ring-[1.5px] ring-red-500' : ''}`}
          {...register('service')}
        >
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ''}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p role="alert" className="text-sm text-red-600">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message textarea — mirrors Input styling */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-base font-normal text-midnight-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us a bit about your business and what you need help with..."
          className={`w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink placeholder:text-muted-stone rounded-[6px] px-3 py-2.5 text-base font-normal focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150 resize-y ${errors.message ? 'ring-[1.5px] ring-red-500' : ''}`}
          {...register('message')}
        />
        {errors.message && (
          <p role="alert" className="text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="self-start"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
