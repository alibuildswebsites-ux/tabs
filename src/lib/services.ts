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
        description: "We examine the target's books so there are no surprises post-close.",
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
