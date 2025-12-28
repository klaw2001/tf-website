import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/onboarding', '/recruiter-onboarding', '/signup'],
    },
    sitemap: 'https://talentflip.com/sitemap.xml',
  }
}
