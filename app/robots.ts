import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/onboarding', '/recruiter-onboarding', '/signup'],
    },
    sitemap: 'https://talentflow.com/sitemap.xml',
  }
}
