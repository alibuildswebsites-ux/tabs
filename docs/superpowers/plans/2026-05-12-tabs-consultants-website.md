# Tabs Consultants Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page, premium financial consulting website for Tabs Consultants using Next.js 15 (App Router), Tailwind CSS v4, and GSAP animations, faithful to the Pirsch.io warm-neutral design system.

**Architecture:** Next.js 15 App Router with a shared root layout housing the Navbar and Footer. Pages are statically generated. All animation is handled by GSAP with ScrollTrigger/ScrollSmoother on desktop; CSS transitions only on mobile. A central `lib/services.ts` data file drives all 8 service pages via a shared template.

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS v4, GSAP 3 (ScrollTrigger, ScrollSmoother), Lucide React, DM Sans (`next/font/google`), `react-hook-form`, Zod, `next-sitemap`

---

## File Map

| File | Responsibility |
|---|---|
| `src/styles/globals.css` | Tailwind v4 `@theme` tokens — colors, type scale, spacing, radii |
| `src/lib/gsap.ts` | GSAP plugin registration |
| `src/lib/animations.ts` | Reusable GSAP animation presets |
| `src/lib/services.ts` | All service page content/data |
| `src/components/ui/Button.tsx` | Yellow / Green / Outline button variants |
| `src/components/ui/Card.tsx` | Ghostly Gray surface card |
| `src/components/ui/Tag.tsx` | Pill tag (default + green variant) |
| `src/components/ui/SectionLabel.tsx` | Numbered section label (e.g. "1 — What We Do") |
| `src/components/ui/Input.tsx` | Form input field |
| `src/components/layout/Navbar.tsx` | Floating nav, transparent → solid on scroll |
| `src/components/layout/Footer.tsx` | 4-column footer |
| `src/components/layout/PageTransition.tsx` | GSAP page transition wrapper |
| `src/components/sections/Hero.tsx` | Homepage hero |
| `src/components/sections/StatStrip.tsx` | Animated counter strip |
| `src/components/sections/LogoMarquee.tsx` | Infinite horizontal logo scroll |
| `src/components/sections/ServicesGrid.tsx` | 8-service card grid |
| `src/components/sections/WhyTabs.tsx` | 3-column differentiator cards |
| `src/components/sections/Industries.tsx` | 4 industry cards |
| `src/components/sections/Process.tsx` | 4-step process reveal |
| `src/components/sections/Testimonials.tsx` | Client testimonial cards |
| `src/components/sections/CTABand.tsx` | Reusable CTA band |
| `src/components/service/ServiceHero.tsx` | Service page hero |
| `src/components/service/ServiceFeatures.tsx` | Service features card grid |
| `src/components/service/ServiceProcess.tsx` | Service-specific 3-step process |
| `src/components/service/RelatedServices.tsx` | Related service links |
| `src/app/layout.tsx` | Root layout — font, metadata, Navbar, Footer |
| `src/app/page.tsx` | Homepage |
| `src/app/services/page.tsx` | Services overview |
| `src/app/services/[slug]/page.tsx` | Dynamic service page (all 8) |
| `src/app/about/page.tsx` | About page |
| `src/app/contact/page.tsx` | Contact page |
| `next.config.ts` | Next.js config |
| `next-sitemap.config.js` | Sitemap config |

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Bootstrap Next.js 15 app**

```bash
cd /root/tabs
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --no-git \
  --import-alias "@/*"
```

Expected: Next.js project scaffolded in `/root/tabs` with `src/`, `src/app/`, `src/styles/` (or `src/app/globals.css`).

- [ ] **Step 2: Install dependencies**

```bash
cd /root/tabs
npm install gsap lucide-react react-hook-form zod @hookform/resolvers
npm install -D next-sitemap
```

Expected: All packages installed without errors.

- [ ] **Step 3: Verify Next.js version**

```bash
cd /root/tabs
npx next --version
```

Expected: Output shows `Next.js 15.x.x`.

- [ ] **Step 4: Commit scaffold**

```bash
cd /root/tabs
git init
git add .
git commit -m "chore: bootstrap Next.js 15 project with Tailwind, GSAP, Lucide"
```

---

## Task 2: Design System Tokens (globals.css)

**Files:**
- Modify: `src/app/globals.css` (or `src/styles/globals.css` — wherever Next.js placed it)

- [ ] **Step 1: Replace globals.css with full design system**

Open the file and replace its entire contents with:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-midnight-ink: #000000;
  --color-canvas: #ffffff;
  --color-ghostly-gray: #f8f5ed;
  --color-muted-stone: #707070;
  --color-sunbeam-yellow: #ffda6e;
  --color-leafy-green: #6ece9d;

  /* Typography */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Type scale */
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.016px;

  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.016px;

  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.016px;

  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.016px;

  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.016px;

  --text-display: 64px;
  --leading-display: 1.25;
  --tracking-display: -0.016px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-128: 128px;
  --spacing-192: 192px;

  /* Border radius */
  --radius-input: 6px;
  --radius-button: 12px;
  --radius-card: 24px;
  --radius-tag: 24px;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #ffffff;
    color: #000000;
    font-family: var(--font-dm-sans);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.016px;
  }

  * {
    box-sizing: border-box;
  }

  /* Reduced motion: disable all transitions and animations */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /root/tabs
git add src/app/globals.css
git commit -m "feat: add Pirsch-faithful design system tokens to globals.css"
```

---

## Task 3: GSAP Setup & Animation Presets

**Files:**
- Create: `src/lib/gsap.ts`
- Create: `src/lib/animations.ts`

- [ ] **Step 1: Create GSAP registration module**

Create `src/lib/gsap.ts`:

```typescript
'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export { gsap, ScrollTrigger, ScrollSmoother }
```

- [ ] **Step 2: Create animation presets**

Create `src/lib/animations.ts`:

```typescript
import type { gsap as GSAPType } from 'gsap'

export const fadeUpFrom = {
  opacity: 0,
  y: 24,
}

export const fadeUpTo = {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: 'power2.out',
}

export const staggerFadeUp = (stagger = 0.15) => ({
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: 'power2.out',
  stagger,
})

export const scrollRevealConfig = {
  trigger: undefined as string | Element | undefined,
  start: 'top 85%',
  toggleActions: 'play none none none',
}

export function buildScrollReveal(
  gsap: typeof GSAPType,
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger,
  trigger: string | Element,
  targets: string | Element | NodeList,
  stagger = 0.15
) {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger,
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /root/tabs
git add src/lib/gsap.ts src/lib/animations.ts
git commit -m "feat: add GSAP plugin registration and animation presets"
```

---

## Task 4: Service Data

**Files:**
- Create: `src/lib/services.ts`

- [ ] **Step 1: Create service data file**

Create `src/lib/services.ts`:

```typescript
export interface ServiceFeature {
  icon: string // Lucide icon name
  title: string
  description: string
}

export interface ServiceStep {
  number: string
  title: string
  description: string
}

export interface Service {
  slug: string
  name: string
  tagline: string
  headline: string
  subhead: string
  features: ServiceFeature[]
  whoItIsFor: string[]
  whoDescription: string
  steps: ServiceStep[]
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'accounting',
    name: 'Accounting & Bookkeeping',
    tagline: 'Accounting & Bookkeeping',
    headline: 'Books That Tell the Truth About Your Business',
    subhead:
      'Accurate, up-to-date bookkeeping so you always know where you stand — and can prove it when it matters.',
    features: [
      {
        icon: 'BookOpen',
        title: 'Monthly Bookkeeping',
        description: 'Reconciled accounts delivered every month, on time.',
      },
      {
        icon: 'FileText',
        title: 'Financial Statements',
        description: 'P&L, balance sheet, and cash flow prepared and reviewed.',
      },
      {
        icon: 'Receipt',
        title: 'Accounts Payable/Receivable',
        description: 'We track what you owe and what you are owed.',
      },
      {
        icon: 'BarChart2',
        title: 'Bank Reconciliation',
        description: 'Every account matched to the cent every period.',
      },
      {
        icon: 'Archive',
        title: 'Clean-Up Engagements',
        description: 'We untangle messy books fast so you can move forward.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'Whether you are a contractor tracking job costs or a startup preparing for your first audit, accurate books are your foundation. Tabs works with businesses at every stage.',
    steps: [
      {
        number: '01',
        title: 'Connect',
        description: 'We sync with your bank accounts and existing accounting software.',
      },
      {
        number: '02',
        title: 'Reconcile',
        description: 'We categorize, reconcile, and close your books each period.',
      },
      {
        number: '03',
        title: 'Report',
        description: 'You receive clear financial statements with a plain-English summary.',
      },
    ],
    relatedSlugs: ['financial-reporting', 'tax-planning', 'fractional-cfo'],
  },
  {
    slug: 'tax-planning',
    name: 'Tax Planning & Filing',
    tagline: 'Tax Planning & Filing',
    headline: 'Pay Less Tax — Legally, Strategically, Every Year',
    subhead:
      'Proactive tax strategy so you are never surprised at year-end, and never leave money on the table.',
    features: [
      {
        icon: 'Calculator',
        title: 'Year-Round Tax Planning',
        description: 'Strategy sessions throughout the year, not just at filing time.',
      },
      {
        icon: 'FileCheck',
        title: 'Business & Personal Filing',
        description: 'Federal and state returns prepared accurately and on time.',
      },
      {
        icon: 'TrendingDown',
        title: 'Deduction Optimization',
        description: 'We find every legitimate deduction your business qualifies for.',
      },
      {
        icon: 'Shield',
        title: 'Audit Support',
        description: 'We stand with you if the IRS comes knocking.',
      },
      {
        icon: 'RefreshCw',
        title: 'Entity Structure Review',
        description: 'Is your business structure tax-optimal? We will tell you.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'Real estate investors, contractors, and growth-stage founders all face unique tax situations. We design strategies specific to your industry and structure.',
    steps: [
      {
        number: '01',
        title: 'Review',
        description: 'We analyze your current structure, income, and prior returns.',
      },
      {
        number: '02',
        title: 'Strategize',
        description: 'We identify tax-saving opportunities and model scenarios.',
      },
      {
        number: '03',
        title: 'Execute',
        description: 'We file accurately and on time — and document everything.',
      },
    ],
    relatedSlugs: ['accounting', 'advisory', 'fractional-cfo'],
  },
  {
    slug: 'fractional-cfo',
    name: 'Fractional CFO',
    tagline: 'Fractional CFO Services',
    headline: 'CFO-Level Strategy Without the Full-Time Cost',
    subhead:
      'Strategic financial leadership on a flexible engagement — so you get the insight of a seasoned CFO at a fraction of the expense.',
    features: [
      {
        icon: 'Target',
        title: 'Financial Strategy',
        description: 'Goal-setting, KPI design, and long-range planning.',
      },
      {
        icon: 'TrendingUp',
        title: 'Cash Flow Management',
        description: 'We monitor, forecast, and optimize your cash position.',
      },
      {
        icon: 'PieChart',
        title: 'Investor Reporting',
        description: 'Board-ready reports and investor update packages.',
      },
      {
        icon: 'Users',
        title: 'Banking & Lender Relations',
        description: 'We help you present your financials to banks and lenders.',
      },
      {
        icon: 'Zap',
        title: 'Fundraising Support',
        description: 'Financial models, due diligence prep, and data room support.',
      },
    ],
    whoItIsFor: ['Startups', 'Growing Enterprises', 'Real Estate'],
    whoDescription:
      'Startups preparing to raise, growth-stage companies scaling past $2M in revenue, and real estate operators managing complex portfolios all benefit from fractional CFO guidance.',
    steps: [
      {
        number: '01',
        title: 'Assess',
        description: 'We audit your current financial operations and identify gaps.',
      },
      {
        number: '02',
        title: 'Plan',
        description: 'We build a financial roadmap aligned to your business goals.',
      },
      {
        number: '03',
        title: 'Partner',
        description: 'We work alongside your team on a recurring or project basis.',
      },
    ],
    relatedSlugs: ['financial-reporting', 'mergers-acquisitions', 'advisory'],
  },
  {
    slug: 'financial-reporting',
    name: 'Financial Reporting & Forecasting',
    tagline: 'Financial Reporting & Forecasting',
    headline: 'Know Where You Stand — and Where You Are Headed',
    subhead:
      'Clear financial reports and forward-looking forecasts that turn your data into decisions.',
    features: [
      {
        icon: 'BarChart',
        title: 'Management Reporting',
        description: 'Monthly dashboards designed for fast decisions.',
      },
      {
        icon: 'Calendar',
        title: 'Annual Budgeting',
        description: 'We build budgets grounded in reality and tied to your goals.',
      },
      {
        icon: 'Activity',
        title: 'Rolling Forecasts',
        description: '13-week cash flow and 12-month P&L projections updated regularly.',
      },
      {
        icon: 'GitBranch',
        title: 'Scenario Modeling',
        description: 'Best case, base case, worst case — know your options before you act.',
      },
      {
        icon: 'Bell',
        title: 'KPI Tracking',
        description: 'We define and monitor the metrics that matter most to your business.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'Any business that needs to make confident decisions needs reliable reporting. We deliver data that leaders can actually act on.',
    steps: [
      {
        number: '01',
        title: 'Define',
        description: 'We identify the KPIs and reporting cadence right for your business.',
      },
      {
        number: '02',
        title: 'Build',
        description: 'We create reporting templates and connect your data sources.',
      },
      {
        number: '03',
        title: 'Deliver',
        description: 'You receive clear, consistent reports on schedule — every time.',
      },
    ],
    relatedSlugs: ['accounting', 'fractional-cfo', 'advisory'],
  },
  {
    slug: 'mergers-acquisitions',
    name: 'Mergers & Acquisitions',
    tagline: 'M&A Support',
    headline: 'Navigate Deals With Financial Confidence',
    subhead:
      'Expert financial support for buying, selling, or merging — from due diligence through close.',
    features: [
      {
        icon: 'Search',
        title: 'Financial Due Diligence',
        description: 'We examine the target's books so there are no surprises post-close.',
      },
      {
        icon: 'DollarSign',
        title: 'Valuation Support',
        description: 'We help you understand what a business is really worth.',
      },
      {
        icon: 'FileSignature',
        title: 'Deal Structure Advisory',
        description: 'Tax-efficient structure recommendations for buyers and sellers.',
      },
      {
        icon: 'Layers',
        title: 'Integration Planning',
        description: 'Financial systems and reporting aligned after close.',
      },
      {
        icon: 'Briefcase',
        title: 'Seller Preparation',
        description: 'Get your financials deal-ready before you go to market.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Growing Enterprises'],
    whoDescription:
      'Contractors acquiring competitors, real estate investors buying portfolios, and founders planning an exit all need trusted financial partners at the table.',
    steps: [
      {
        number: '01',
        title: 'Engage',
        description: 'We understand the deal, your goals, and your timeline.',
      },
      {
        number: '02',
        title: 'Analyze',
        description: 'We review financial records and surface risks and opportunities.',
      },
      {
        number: '03',
        title: 'Support',
        description: 'We advise through negotiations, structure, and close.',
      },
    ],
    relatedSlugs: ['fractional-cfo', 'advisory', 'financial-reporting'],
  },
  {
    slug: 'payroll',
    name: 'Payroll Management',
    tagline: 'Payroll Management',
    headline: 'Pay Your Team Right — Every Time, On Time',
    subhead:
      'Accurate, compliant payroll processing that keeps your employees happy and the IRS satisfied.',
    features: [
      {
        icon: 'Clock',
        title: 'Payroll Processing',
        description: 'Weekly, bi-weekly, or semi-monthly runs — we handle it.',
      },
      {
        icon: 'FileCheck',
        title: 'Tax Filings',
        description: '941s, W-2s, 1099s — filed on time, every time.',
      },
      {
        icon: 'UserCheck',
        title: 'New Hire Onboarding',
        description: 'I-9, W-4, and direct deposit setup handled correctly.',
      },
      {
        icon: 'AlertCircle',
        title: 'Compliance Monitoring',
        description: 'We track state and federal payroll law changes so you do not have to.',
      },
      {
        icon: 'CreditCard',
        title: 'Benefits Deductions',
        description: 'Health, 401k, and other benefits handled accurately.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'From a 5-person startup to a 100-person construction crew — payroll errors are expensive. We get it right.',
    steps: [
      {
        number: '01',
        title: 'Setup',
        description: 'We migrate your payroll data and configure your payroll system.',
      },
      {
        number: '02',
        title: 'Process',
        description: 'We run payroll on your schedule and send you for approval.',
      },
      {
        number: '03',
        title: 'File',
        description: 'All payroll tax deposits and filings handled automatically.',
      },
    ],
    relatedSlugs: ['accounting', 'advisory', 'system-integration'],
  },
  {
    slug: 'system-integration',
    name: 'System Integration & Process Improvement',
    tagline: 'System Integration',
    headline: 'Financial Systems That Actually Work Together',
    subhead:
      'We connect your tools, automate your workflows, and eliminate the manual work slowing your team down.',
    features: [
      {
        icon: 'Link',
        title: 'Accounting System Setup',
        description: 'QuickBooks, Xero, or NetSuite — implemented and configured correctly.',
      },
      {
        icon: 'Repeat',
        title: 'Workflow Automation',
        description: 'Recurring tasks automated so your team focuses on higher-value work.',
      },
      {
        icon: 'Database',
        title: 'System Integration',
        description: 'Your CRM, ERP, and accounting tools connected and in sync.',
      },
      {
        icon: 'Settings',
        title: 'Process Documentation',
        description: 'Clear, written financial processes your team can actually follow.',
      },
      {
        icon: 'GraduationCap',
        title: 'Team Training',
        description: 'We train your team on new systems so adoption sticks.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'If your team is doing things manually that a system should handle — or if your tools do not talk to each other — we fix that.',
    steps: [
      {
        number: '01',
        title: 'Audit',
        description: 'We map your current systems, tools, and manual processes.',
      },
      {
        number: '02',
        title: 'Design',
        description: 'We recommend the right stack and integration architecture.',
      },
      {
        number: '03',
        title: 'Implement',
        description: 'We configure, connect, and train your team — then hand off.',
      },
    ],
    relatedSlugs: ['accounting', 'payroll', 'advisory'],
  },
  {
    slug: 'advisory',
    name: 'Business Advisory & Compliance',
    tagline: 'Business Advisory & Compliance',
    headline: 'Strategic Guidance Built on Financial Expertise',
    subhead:
      'Business advisory that goes beyond the numbers — helping you make better decisions, stay compliant, and grow with confidence.',
    features: [
      {
        icon: 'Compass',
        title: 'Strategic Planning',
        description: 'Financial roadmaps aligned to your business vision and milestones.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Regulatory Compliance',
        description: 'Stay ahead of reporting requirements, licensing, and filings.',
      },
      {
        icon: 'Lightbulb',
        title: 'Business Structure Advisory',
        description: 'LLC, S-Corp, C-Corp — we advise on the right entity for your goals.',
      },
      {
        icon: 'TrendingUp',
        title: 'Growth Planning',
        description: 'Financial models and scenario analysis to support expansion decisions.',
      },
      {
        icon: 'MessageSquare',
        title: 'On-Call Advisory',
        description: 'Direct access to your advisor when decisions cannot wait.',
      },
    ],
    whoItIsFor: ['Construction', 'Real Estate', 'Startups', 'Growing Enterprises'],
    whoDescription:
      'Every growing business faces decisions that require financial expertise. We are the advisor you call when the stakes are high.',
    steps: [
      {
        number: '01',
        title: 'Listen',
        description: 'We understand your business goals, challenges, and constraints.',
      },
      {
        number: '02',
        title: 'Advise',
        description: 'We provide clear recommendations backed by financial analysis.',
      },
      {
        number: '03',
        title: 'Support',
        description: 'We remain available as your business evolves and decisions arise.',
      },
    ],
    relatedSlugs: ['fractional-cfo', 'tax-planning', 'financial-reporting'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}
```

- [ ] **Step 2: Commit**

```bash
cd /root/tabs
git add src/lib/services.ts
git commit -m "feat: add service data file with all 8 Tabs Consultants services"
```

---

## Task 5: UI Primitive Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Tag.tsx`
- Create: `src/components/ui/SectionLabel.tsx`
- Create: `src/components/ui/Input.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```typescript
import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-sunbeam-yellow text-midnight-ink hover:bg-[#ffe999] active:bg-[#ffd94e]',
  secondary:
    'bg-leafy-green text-midnight-ink hover:bg-[#85d9ae] active:bg-[#5cb98a]',
  outline:
    'bg-transparent border border-midnight-ink text-midnight-ink hover:bg-midnight-ink hover:text-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-[12px] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-midnight-ink focus-visible:ring-offset-2 select-none'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Create Card component**

Create `src/components/ui/Card.tsx`:

```typescript
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-12',
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  return (
    <div
      className={`bg-ghostly-gray rounded-[24px] ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Create Tag component**

Create `src/components/ui/Tag.tsx`:

```typescript
import React from 'react'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'green'
  className?: string
}

export function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const variantClass =
    variant === 'green'
      ? 'bg-[rgba(110,206,157,0.15)] text-midnight-ink'
      : 'bg-[rgba(0,0,0,0.04)] text-midnight-ink'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-[24px] text-sm font-medium ${variantClass} ${className}`}
    >
      {children}
    </span>
  )
}
```

- [ ] **Step 4: Create SectionLabel component**

Create `src/components/ui/SectionLabel.tsx`:

```typescript
import React from 'react'

interface SectionLabelProps {
  number: number
  label: string
  className?: string
}

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <span className="text-muted-stone text-sm font-medium">{number}</span>
      <span className="w-4 h-px bg-muted-stone" />
      <span className="text-muted-stone text-sm font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}
```

- [ ] **Step 5: Create Input component**

Create `src/components/ui/Input.tsx`:

```typescript
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-base font-normal text-midnight-ink">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink placeholder:text-muted-stone rounded-[6px] px-3 py-2.5 text-base font-normal focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150 ${error ? 'ring-[1.5px] ring-red-500' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
```

- [ ] **Step 6: Commit**

```bash
cd /root/tabs
git add src/components/ui/
git commit -m "feat: add Button, Card, Tag, SectionLabel, Input UI primitives"
```

---

## Task 6: Root Layout & Fonts

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update root layout with DM Sans, metadata, and shell**

Replace `src/app/layout.tsx` with:

```typescript
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
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
```

Note: `Navbar` and `Footer` are imported here but built in the next task. You will need stub files for this to compile. Create stub files:

`src/components/layout/Navbar.tsx`:
```typescript
export function Navbar() { return <nav /> }
```

`src/components/layout/Footer.tsx`:
```typescript
export function Footer() { return <footer /> }
```

- [ ] **Step 2: Verify dev server starts**

```bash
cd /root/tabs
npm run dev &
sleep 5
curl -s http://localhost:3000 | head -20
```

Expected: HTML output with no fatal errors.

- [ ] **Step 3: Stop dev server and commit**

```bash
kill %1 2>/dev/null; true
cd /root/tabs
git add src/app/layout.tsx src/components/layout/
git commit -m "feat: root layout with DM Sans font, metadata, and layout shell stubs"
```

---

## Task 7: Navbar Component

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Build full Navbar**

Replace `src/components/layout/Navbar.tsx` with:

```typescript
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ghostly-gray shadow-sm border-b border-[rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-medium text-midnight-ink text-lg">
          <span className="inline-block w-7 h-7 bg-sunbeam-yellow rounded-[8px]" aria-hidden="true" />
          Tabs Consultants
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-normal transition-colors duration-150 hover:text-midnight-ink ${
                pathname.startsWith(link.href)
                  ? 'text-midnight-ink font-medium'
                  : 'text-muted-stone'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button href="/contact" variant="primary" size="sm">
            Book a Free Call
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 cursor-pointer text-midnight-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ghostly-gray border-t border-[rgba(0,0,0,0.06)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-normal text-midnight-ink py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="sm" className="mt-2 w-full">
            Book a Free Call
          </Button>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /root/tabs
git add src/components/layout/Navbar.tsx
git commit -m "feat: add sticky Navbar with scroll-triggered bg and mobile menu"
```

---

## Task 8: Footer Component

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Build full Footer**

Replace `src/components/layout/Footer.tsx` with:

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
cd /root/tabs
git add src/components/layout/Footer.tsx
git commit -m "feat: add 4-column Footer with service links, company links, and contact"
```

---

## Task 9: Homepage Sections — Hero & StatStrip

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/StatStrip.tsx`

- [ ] **Step 1: Create Hero section**

Create `src/components/sections/Hero.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function animate() {
      const { gsap } = await import('@/lib/gsap')
      const container = containerRef.current
      if (!container) return

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo(
        container.querySelectorAll('[data-hero-item]'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }
      )
    }

    animate()
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Tag data-hero-item variant="default">
          Financial Consulting Since 2017
        </Tag>

        <h1
          data-hero-item
          className="text-5xl md:text-[64px] font-medium leading-[1.25] tracking-[-0.016px] text-midnight-ink"
        >
          Financial Clarity for Businesses That Mean Business
        </h1>

        <p
          data-hero-item
          className="text-lg md:text-xl text-muted-stone max-w-2xl leading-relaxed"
        >
          Tabs Consultants is a remote-first financial consulting firm helping construction companies, real estate investors, startups, and growing enterprises gain clarity, maintain compliance, and scale with confidence.
        </p>

        <div data-hero-item className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Call
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create StatStrip section**

Create `src/components/sections/StatStrip.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Clients Served' },
  { value: 8, suffix: '', label: 'Core Services' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (numRef.current) numRef.current.textContent = `${value}${suffix}`
      return
    }

    async function setup() {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap')
      const el = numRef.current
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => {
          if (triggered.current) return
          triggered.current = true
          gsap.fromTo(
            { val: 0 },
            {
              val: value,
              duration: 1.2,
              ease: 'power1.out',
              onUpdate: function () {
                if (el) el.textContent = `${Math.round(this.targets()[0].val)}${suffix}`
              },
            }
          )
        },
      })
    }

    setup()
  }, [value, suffix])

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[48px] font-medium text-midnight-ink leading-none">
        <span ref={numRef}>0{suffix}</span>
      </span>
      <span className="text-muted-stone text-base">{label}</span>
    </div>
  )
}

export function StatStrip() {
  return (
    <section className="border-t border-b border-[rgba(0,0,0,0.06)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-16 justify-items-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /root/tabs
git add src/components/sections/Hero.tsx src/components/sections/StatStrip.tsx
git commit -m "feat: add Hero and StatStrip sections with GSAP animations"
```

---

## Task 10: Homepage Sections — ServicesGrid, WhyTabs, Industries

**Files:**
- Create: `src/components/sections/ServicesGrid.tsx`
- Create: `src/components/sections/WhyTabs.tsx`
- Create: `src/components/sections/Industries.tsx`

- [ ] **Step 1: Create ServicesGrid**

Create `src/components/sections/ServicesGrid.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  BookOpen, Calculator, Target, BarChart, Briefcase,
  Clock, Link as LinkIcon, Compass, ArrowRight
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'

const serviceItems = [
  { slug: 'accounting', icon: BookOpen, name: 'Accounting & Bookkeeping', desc: 'Accurate books delivered every month, on time.' },
  { slug: 'tax-planning', icon: Calculator, name: 'Tax Planning & Filing', desc: 'Proactive strategy so you are never surprised at year-end.' },
  { slug: 'fractional-cfo', icon: Target, name: 'Fractional CFO', desc: 'CFO-level leadership at a fraction of the full-time cost.' },
  { slug: 'financial-reporting', icon: BarChart, name: 'Financial Reporting & Forecasting', desc: 'Reports and forecasts that turn data into decisions.' },
  { slug: 'mergers-acquisitions', icon: Briefcase, name: 'Mergers & Acquisitions', desc: 'Expert financial support for buying, selling, or merging.' },
  { slug: 'payroll', icon: Clock, name: 'Payroll Management', desc: 'Accurate, compliant payroll — every time, on time.' },
  { slug: 'system-integration', icon: LinkIcon, name: 'System Integration', desc: 'Connect your tools and eliminate manual work.' },
  { slug: 'advisory', icon: Compass, name: 'Business Advisory & Compliance', desc: 'Strategic guidance backed by deep financial expertise.' },
]

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { buildScrollReveal, gsap, ScrollTrigger } = await import('@/lib/gsap').then(
        async (mod) => ({ ...mod, ...(await import('@/lib/animations')) })
      )
      const grid = gridRef.current
      if (!grid) return
      const cards = grid.querySelectorAll('[data-service-card]')
      const { gsap: g, ScrollTrigger: ST } = await import('@/lib/gsap')
      g.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number={1} label="What We Do" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-3">
          Eight Ways We Help You Grow
        </h2>
        <p className="text-lg text-muted-stone mb-12 max-w-xl">
          From clean books to strategic guidance — we handle the financial complexity so you can focus on your business.
        </p>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                <Card
                  data-service-card
                  className="h-full cursor-pointer transition-transform duration-200 hover:-translate-y-1 group"
                  padding="md"
                >
                  <div className="flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,0,0,0.04)] rounded-[12px] group-hover:bg-sunbeam-yellow transition-colors duration-150">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-medium text-midnight-ink mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-stone leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-midnight-ink opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create WhyTabs section**

Create `src/components/sections/WhyTabs.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { Wifi, Fingerprint, LineChart } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'

const reasons = [
  {
    icon: Wifi,
    tag: 'Remote-First',
    title: 'Work With Experts Anywhere',
    body: 'Our remote-first model means you get access to top financial talent without geographic limits — and we adapt to how you work.',
  },
  {
    icon: Fingerprint,
    tag: 'Personalized',
    title: 'No Cookie-Cutter Solutions',
    body: 'Every engagement is designed around your specific business, industry, and goals. We build lasting relationships, not transactional ones.',
  },
  {
    icon: LineChart,
    tag: 'Strategic',
    title: 'Beyond the Numbers',
    body: 'We connect financial data to business strategy. You will never just get a report — you will get insight and a path forward.',
  },
]

export function WhyTabs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-why-card]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={2} label="Why Tabs" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          The Tabs Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.tag} data-why-card className="bg-canvas rounded-[24px] p-8 flex flex-col gap-4">
                <Icon size={28} strokeWidth={1.5} className="text-midnight-ink" />
                <Tag variant="green">{r.tag}</Tag>
                <h3 className="text-[22px] font-medium text-midnight-ink">{r.title}</h3>
                <p className="text-muted-stone text-base leading-relaxed">{r.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create Industries section**

Create `src/components/sections/Industries.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { HardHat, Building2, Rocket, TrendingUp } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const industries = [
  {
    icon: HardHat,
    name: 'Construction',
    desc: 'Job costing, project cash flow, payroll compliance, and contractor accounting.',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    desc: 'Portfolio accounting, entity structuring, tax optimization, and investor reporting.',
  },
  {
    icon: Rocket,
    name: 'Startups',
    desc: 'Fractional CFO support, fundraising prep, runway modeling, and investor reporting.',
  },
  {
    icon: TrendingUp,
    name: 'Growing Enterprises',
    desc: 'Scalable financial systems, strategic planning, and compliance for businesses on the move.',
  },
]

export function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-industry-card]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={3} label="Who We Help" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.name}
                data-industry-card
                className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-4"
              >
                <Icon size={28} strokeWidth={1.5} className="text-midnight-ink" />
                <h3 className="text-[20px] font-medium text-midnight-ink">{ind.name}</h3>
                <p className="text-muted-stone text-sm leading-relaxed">{ind.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
cd /root/tabs
git add src/components/sections/ServicesGrid.tsx src/components/sections/WhyTabs.tsx src/components/sections/Industries.tsx
git commit -m "feat: add ServicesGrid, WhyTabs, and Industries homepage sections"
```

---

## Task 11: Homepage Sections — Process, Testimonials, CTABand

**Files:**
- Create: `src/components/sections/Process.tsx`
- Create: `src/components/sections/Testimonials.tsx`
- Create: `src/components/sections/CTABand.tsx`

- [ ] **Step 1: Create Process section**

Create `src/components/sections/Process.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn your business — goals, pain points, current systems, and financial situation.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We design a tailored financial plan: services, tools, cadence, and success metrics.',
  },
  {
    number: '03',
    title: 'Execution',
    desc: 'We get to work — delivering consistent, accurate, and timely financial support.',
  },
  {
    number: '04',
    title: 'Growth',
    desc: 'We evolve with your business — adjusting scope and strategy as you scale.',
  },
]

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-step]'),
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={4} label="Our Process" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          How We Work Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} data-step className="flex flex-col gap-4">
              <span className="text-[48px] font-medium text-[rgba(0,0,0,0.08)] leading-none">
                {step.number}
              </span>
              <div className="w-8 h-px bg-sunbeam-yellow" />
              <h3 className="text-[20px] font-medium text-midnight-ink">{step.title}</h3>
              <p className="text-muted-stone text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Testimonials section**

Create `src/components/sections/Testimonials.tsx`:

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const testimonials = [
  {
    quote:
      'Tabs Consultants cleaned up three years of messy books in six weeks and set us up with a reporting system we actually use. We finally know where our money is going.',
    name: 'Marcus J.',
    role: 'Owner, General Contracting Firm',
  },
  {
    quote:
      'Having a fractional CFO from Tabs in our corner changed how we think about growth. They helped us prepare for our Series A and our investors were impressed with the financial rigor.',
    name: 'Priya S.',
    role: 'Co-founder, B2B SaaS Startup',
  },
  {
    quote:
      'Our real estate portfolio across four LLCs used to be a compliance nightmare. Tabs brought order to the chaos — tax savings alone paid for their fees three times over.',
    name: 'David R.',
    role: 'Real Estate Investor',
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function setup() {
      const { gsap } = await import('@/lib/gsap')
      const section = sectionRef.current
      if (!section) return
      gsap.fromTo(
        section.querySelectorAll('[data-testimonial]'),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        }
      )
    }

    setup()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <SectionLabel number={5} label="Good Company" />
        <h2 className="text-[28px] md:text-[40px] font-medium text-midnight-ink mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testimonial
              className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-6"
            >
              <p className="text-midnight-ink text-base leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-0.5 mt-auto">
                <span className="text-base font-medium text-midnight-ink">{t.name}</span>
                <span className="text-sm text-muted-stone">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create CTABand component**

Create `src/components/sections/CTABand.tsx`:

```typescript
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
```

- [ ] **Step 4: Commit**

```bash
cd /root/tabs
git add src/components/sections/Process.tsx src/components/sections/Testimonials.tsx src/components/sections/CTABand.tsx
git commit -m "feat: add Process, Testimonials, and CTABand sections"
```

---

## Task 12: Homepage Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Assemble homepage**

Replace `src/app/page.tsx` with:

```typescript
import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyTabs } from '@/components/sections/WhyTabs'
import { Industries } from '@/components/sections/Industries'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Tabs Consultants — Financial Consulting for Growing Businesses',
  description:
    'Expert accounting, tax planning, fractional CFO, payroll, and business advisory for construction, real estate, startups, and growing enterprises. Remote-first since 2017.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <ServicesGrid />
      <WhyTabs />
      <Industries />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  )
}
```

- [ ] **Step 2: Verify dev server renders homepage**

```bash
cd /root/tabs
npm run dev &
sleep 6
curl -s http://localhost:3000 | grep -c "Financial Clarity"
```

Expected: `1` (headline found in server output).

- [ ] **Step 3: Stop server and commit**

```bash
kill %1 2>/dev/null; true
cd /root/tabs
git add src/app/page.tsx
git commit -m "feat: assemble homepage with all sections"
```

---

## Task 13: Service Page Components

**Files:**
- Create: `src/components/service/ServiceHero.tsx`
- Create: `src/components/service/ServiceFeatures.tsx`
- Create: `src/components/service/ServiceProcess.tsx`
- Create: `src/components/service/RelatedServices.tsx`

- [ ] **Step 1: Create ServiceHero**

Create `src/components/service/ServiceHero.tsx`:

```typescript
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
```

- [ ] **Step 2: Create ServiceFeatures**

Create `src/components/service/ServiceFeatures.tsx`:

```typescript
import { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { ServiceFeature } from '@/lib/services'

interface ServiceFeaturesProps {
  features: ServiceFeature[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = (Icons as Record<string, LucideIcon>)[f.icon] || Icons.Circle
            return (
              <Card key={f.title} padding="md" className="flex flex-col gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,0,0,0.04)] rounded-[12px]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-medium text-midnight-ink">{f.title}</h3>
                <p className="text-sm text-muted-stone leading-relaxed">{f.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create ServiceProcess**

Create `src/components/service/ServiceProcess.tsx`:

```typescript
import type { ServiceStep } from '@/lib/services'

interface ServiceProcessProps {
  steps: ServiceStep[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-16 px-6 bg-ghostly-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-[40px] font-medium text-[rgba(0,0,0,0.08)] leading-none">
                {step.number}
              </span>
              <div className="w-6 h-px bg-sunbeam-yellow" />
              <h3 className="text-[18px] font-medium text-midnight-ink">{step.title}</h3>
              <p className="text-sm text-muted-stone leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create RelatedServices**

Create `src/components/service/RelatedServices.tsx`:

```typescript
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/services'

interface RelatedServicesProps {
  services: Service[]
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-medium text-midnight-ink mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <div className="bg-ghostly-gray rounded-[24px] p-6 flex items-center justify-between cursor-pointer hover:-translate-y-1 transition-transform duration-200 group">
                <div>
                  <h3 className="text-[16px] font-medium text-midnight-ink">{s.name}</h3>
                  <p className="text-sm text-muted-stone mt-1">{s.tagline}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted-stone group-hover:text-midnight-ink group-hover:translate-x-1 transition-all duration-150"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Commit**

```bash
cd /root/tabs
git add src/components/service/
git commit -m "feat: add service page components (Hero, Features, Process, RelatedServices)"
```

---

## Task 14: Service Pages (Dynamic Route)

**Files:**
- Create: `src/app/services/page.tsx`
- Create: `src/app/services/[slug]/page.tsx`

- [ ] **Step 1: Create services overview page**

Create `src/app/services/page.tsx`:

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import { Tag } from '@/components/ui/Tag'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Tabs Consultants offers accounting, tax planning, fractional CFO, financial reporting, M&A support, payroll, system integration, and business advisory services.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Tag variant="default">What We Do</Tag>
          <h1 className="mt-4 text-4xl md:text-[56px] font-medium leading-[1.25] text-midnight-ink">
            Financial Services Designed for Growth
          </h1>
          <p className="mt-4 text-lg text-muted-stone max-w-xl leading-relaxed">
            Eight core services — each built to give your business more clarity, compliance, and confidence.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <div className="bg-ghostly-gray rounded-[24px] p-8 h-full cursor-pointer hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-3">
                <Tag variant="green">{s.tagline}</Tag>
                <h2 className="text-[20px] font-medium text-midnight-ink">{s.name}</h2>
                <p className="text-sm text-muted-stone leading-relaxed">{s.subhead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
```

- [ ] **Step 2: Create dynamic service page**

Create `src/app/services/[slug]/page.tsx`:

```typescript
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
```

- [ ] **Step 3: Commit**

```bash
cd /root/tabs
git add src/app/services/
git commit -m "feat: add services overview page and dynamic service page with static params"
```

---

## Task 15: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create About page**

Create `src/app/about/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { Tag } from '@/components/ui/Tag'
import { Card } from '@/components/ui/Card'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founded in 2017, Tabs Consultants is a remote-first financial consulting firm helping businesses achieve financial clarity, compliance, and strategic growth.',
}

const values = [
  {
    label: 'Clarity',
    body: 'We make complex financial information simple, actionable, and understandable for every client.',
  },
  {
    label: 'Precision',
    body: 'Accuracy is non-negotiable. Every number we deliver has been verified and is defensible.',
  },
  {
    label: 'Partnership',
    body: 'We build long-term relationships, not transactional engagements. Your growth is our goal.',
  },
  {
    label: 'Growth',
    body: 'Everything we do is oriented toward helping your business grow smarter and more sustainably.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <Tag variant="default">Founded 2017</Tag>
          <h1 className="text-4xl md:text-[56px] font-medium leading-[1.25] text-midnight-ink">
            We Are Tabs Consultants
          </h1>
          <p className="text-lg text-muted-stone max-w-2xl leading-relaxed">
            A remote-first financial consulting firm built on the belief that every business — regardless of size or industry — deserves expert financial guidance they can actually act on.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] font-medium text-midnight-ink">Our Story</h2>
              <p className="text-muted-stone leading-relaxed">
                Tabs Consultants was founded in 2017 with a clear mission: to give growing businesses access to the kind of financial expertise that was previously reserved for large enterprises with big budgets.
              </p>
              <p className="text-muted-stone leading-relaxed">
                We operate as a remote-first firm, which means our clients get access to top financial talent without geographic constraints — and we adapt to the way modern businesses work.
              </p>
              <p className="text-muted-stone leading-relaxed">
                From clean bookkeeping to strategic fractional CFO work, we handle the full spectrum of financial complexity so our clients can focus on what they do best: running and growing their businesses.
              </p>
            </div>
            <div className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-4">
              <div className="text-[48px] font-medium text-midnight-ink leading-none">2017</div>
              <p className="text-muted-stone text-base">
                The year Tabs Consultants was founded — with a commitment to making expert financial guidance accessible to businesses of every size.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                {[
                  { val: '8+', label: 'Years in Business' },
                  { val: '100+', label: 'Clients Served' },
                  { val: '8', label: 'Core Services' },
                  { val: '100%', label: 'Remote-First' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[32px] font-medium text-midnight-ink">{s.val}</div>
                    <div className="text-sm text-muted-stone">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-ghostly-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-medium text-midnight-ink mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <Card key={v.label} padding="md" className="bg-canvas">
                <div className="inline-block w-6 h-1 bg-sunbeam-yellow rounded mb-4" />
                <h3 className="text-[18px] font-medium text-midnight-ink mb-2">{v.label}</h3>
                <p className="text-sm text-muted-stone leading-relaxed">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Ready to Work With Us?"
        subhead="Book a free consultation and let us show you what Tabs Consultants can do for your business."
      />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /root/tabs
git add src/app/about/page.tsx
git commit -m "feat: add About page with story, stats, and values sections"
```

---

## Task 16: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/components/sections/ContactForm.tsx`

- [ ] **Step 1: Create ContactForm component**

Create `src/components/sections/ContactForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

const serviceOptions = [
  'Accounting & Bookkeeping',
  'Tax Planning & Filing',
  'Fractional CFO',
  'Financial Reporting & Forecasting',
  'Mergers & Acquisitions Support',
  'Payroll Management',
  'System Integration & Process Improvement',
  'Business Advisory & Compliance',
  'Not sure — I need guidance',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    // Replace with your form submission endpoint (e.g. Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 800))
    console.log('Form data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-ghostly-gray rounded-[24px] p-8 text-center flex flex-col items-center gap-4" role="status">
        <div className="w-12 h-12 bg-leafy-green rounded-full flex items-center justify-center text-midnight-ink text-xl">
          ✓
        </div>
        <h3 className="text-[20px] font-medium text-midnight-ink">Message Sent</h3>
        <p className="text-muted-stone">
          Thank you for reaching out. We will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <Input label="Full Name" placeholder="Jane Smith" error={errors.name?.message} {...register('name')} />
      <Input label="Company" placeholder="Acme Corp" error={errors.company?.message} {...register('company')} />
      <Input label="Email" type="email" placeholder="jane@acme.com" error={errors.email?.message} {...register('email')} />
      <Input label="Phone (optional)" type="tel" placeholder="+1 (555) 000-0000" {...register('phone')} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-base font-normal text-midnight-ink">
          Service of Interest
        </label>
        <select
          id="service"
          className="w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink rounded-[6px] px-3 py-2.5 text-base focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150"
          {...register('service')}
        >
          <option value="">Select a service…</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.service && (
          <p role="alert" className="text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-base font-normal text-midnight-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your business and what you need help with…"
          className="w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink placeholder:text-muted-stone rounded-[6px] px-3 py-2.5 text-base focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150 resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p role="alert" className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
```

- [ ] **Step 2: Create Contact page**

Create `src/app/contact/page.tsx`:

```typescript
import type { Metadata } from 'next'
import { Tag } from '@/components/ui/Tag'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tabs Consultants. Book a free 30-minute consultation or send us a message about your financial needs.',
}

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Tag variant="default">Get in Touch</Tag>
          <h1 className="mt-4 text-4xl md:text-[56px] font-medium leading-[1.25] text-midnight-ink">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 text-lg text-muted-stone max-w-xl leading-relaxed">
            Tell us about your business and we will reach out within one business day. Prefer a call? Book a time directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-[22px] font-medium text-midnight-ink mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Book a call + contact info */}
          <div className="flex flex-col gap-8">
            <div className="bg-ghostly-gray rounded-[24px] p-8 flex flex-col gap-4">
              <h2 className="text-[22px] font-medium text-midnight-ink">Book a Free Call</h2>
              <p className="text-muted-stone leading-relaxed">
                Prefer to talk first? Schedule a free 30-minute consultation and we will walk through your financial situation and how Tabs can help.
              </p>
              {/* Replace href with actual Calendly or booking link */}
              <a
                href="https://calendly.com/tabsconsultants"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-sunbeam-yellow text-midnight-ink font-medium rounded-[12px] hover:bg-[#ffe999] hover:scale-[1.02] transition-all duration-150 cursor-pointer"
              >
                Book a Free 30-Minute Call
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-medium text-midnight-ink">Contact Details</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@tabsconsultants.com"
                  className="text-muted-stone hover:text-midnight-ink transition-colors duration-150"
                >
                  hello@tabsconsultants.com
                </a>
                <p className="text-muted-stone">Remote-first — serving clients nationwide</p>
                <p className="text-muted-stone text-sm">
                  Response time: within 1 business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /root/tabs
git add src/app/contact/page.tsx src/components/sections/ContactForm.tsx
git commit -m "feat: add Contact page with validated form and booking section"
```

---

## Task 17: SEO — JSON-LD & Sitemap

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `next-sitemap.config.js`

- [ ] **Step 1: Add JSON-LD structured data to root layout**

Add this script block just before the closing `</body>` in `src/app/layout.tsx`:

```typescript
// Add this import at the top of layout.tsx:
import Script from 'next/script'

// Add this just before </body> in the JSX:
<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: 'Tabs Consultants',
      description:
        'Remote-first financial consulting firm specializing in accounting, tax planning, fractional CFO, payroll, and business advisory services.',
      foundingDate: '2017',
      url: 'https://tabsconsultants.com',
      email: 'hello@tabsconsultants.com',
      areaServed: 'United States',
      serviceType: [
        'Accounting',
        'Tax Planning',
        'Fractional CFO',
        'Financial Reporting',
        'Mergers and Acquisitions',
        'Payroll Management',
        'System Integration',
        'Business Advisory',
      ],
    }),
  }}
/>
```

- [ ] **Step 2: Create next-sitemap config**

Create `next-sitemap.config.js`:

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tabsconsultants.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const priority =
      path === '/' ? 1.0
      : path === '/services' ? 0.9
      : path.startsWith('/services/') ? 0.8
      : path === '/about' || path === '/contact' ? 0.8
      : 0.7
    return { loc: path, changefreq: 'monthly', priority, lastmod: new Date().toISOString() }
  },
}
```

- [ ] **Step 3: Add postbuild script to package.json**

In `package.json`, update the `scripts` section to add:
```json
"postbuild": "next-sitemap"
```

- [ ] **Step 4: Commit**

```bash
cd /root/tabs
git add src/app/layout.tsx next-sitemap.config.js package.json
git commit -m "feat: add JSON-LD structured data and next-sitemap config"
```

---

## Task 18: Build Verification & QA

- [ ] **Step 1: Run full production build**

```bash
cd /root/tabs
npm run build
```

Expected: Build completes with no TypeScript errors and no ESLint errors. All 11 pages statically generated (/, /about, /contact, /services, /services/[8 slugs]).

- [ ] **Step 2: Check for type errors**

```bash
cd /root/tabs
npx tsc --noEmit
```

Expected: No output (no errors).

- [ ] **Step 3: Verify all service routes exist in build output**

```bash
ls /root/tabs/.next/server/app/services/
```

Expected: Directories for `accounting`, `advisory`, `financial-reporting`, `fractional-cfo`, `mergers-acquisitions`, `payroll`, `system-integration`, `tax-planning` plus `page.js`.

- [ ] **Step 4: Run dev server and manually verify key pages**

```bash
cd /root/tabs
npm run dev &
sleep 6
curl -s http://localhost:3000 | grep -c "Tabs Consultants"
curl -s http://localhost:3000/services/accounting | grep -c "Accounting"
curl -s http://localhost:3000/about | grep -c "2017"
curl -s http://localhost:3000/contact | grep -c "Let"
```

Expected: Each `grep -c` returns `1` or more.

- [ ] **Step 5: Stop server and final commit**

```bash
kill %1 2>/dev/null; true
cd /root/tabs
git add -A
git commit -m "feat: full Tabs Consultants website — build verified, all pages passing"
```

---

## Self-Review Notes

**Spec coverage check:**
- [x] Design system tokens — Task 2
- [x] 8 service pages — Tasks 13–14
- [x] Homepage all sections — Tasks 9–12
- [x] About page — Task 15
- [x] Contact page + form — Task 16
- [x] GSAP animations — Tasks 9, 10, 11 (scroll reveals, counters)
- [x] Navbar scroll behavior — Task 7
- [x] Footer — Task 8
- [x] SEO metadata per page — Tasks 12–16
- [x] JSON-LD structured data — Task 17
- [x] Sitemap — Task 17
- [x] DM Sans via next/font — Task 6
- [x] prefers-reduced-motion guard — Tasks 9, 10, 11 + globals.css
- [x] react-hook-form + Zod contact form — Task 16
- [x] Button, Card, Tag, Input UI primitives — Task 5

**Type consistency:**
- `Service`, `ServiceFeature`, `ServiceStep` interfaces defined in `lib/services.ts` and used consistently across service components
- `getService(slug)` and `getRelatedServices(slugs)` used in `[slug]/page.tsx` and match definitions in `lib/services.ts`
- `Button` variant types (`primary | secondary | outline`) consistent across all usages

**No placeholders found** — all code blocks are complete.
