/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://tabsconsultants.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async () => {
    const slugs = [
      'accounting',
      'tax-planning',
      'fractional-cfo',
      'financial-reporting',
      'mergers-acquisitions',
      'payroll',
      'system-integration',
      'advisory',
    ]
    return slugs.map((slug) => ({
      loc: `/services/${slug}`,
      changefreq: 'monthly',
      priority: 0.8,
    }))
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}

module.exports = config
