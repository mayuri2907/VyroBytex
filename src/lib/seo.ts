/**
 * VYROBYTEX — SEO, GEO & AEO CENTRAL CONFIGURATION & SCHEMA GENERATORS
 * Canonical Production Domain: https://vyro-bytex.vercel.app
 */

export const SITE_URL = 'https://vyro-bytex.vercel.app';
export const SITE_NAME = 'Vyrobytex';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
  url?: string;
}

export interface CaseStudySchemaInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  category: string;
  year?: string;
}

/**
 * Organization Schema (JSON-LD)
 * Factual description using verified company information.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: 'chaudharynax27@gmail.com',
    telephone: '+918155952384',
    description:
      'Vyrobytex is an independent digital solutions company specializing in custom website development, e-commerce solutions, bespoke software development, AI solutions, and cloud technology services.',
    founder: {
      '@type': 'Person',
      name: 'Navin Chaudhary',
      jobTitle: 'Founder',
    },
    sameAs: [
      'https://www.instagram.com/astralxxixnax?vrfl=cXplb2RjcXN3NGVr',
      'https://wa.me/918155952384',
      'https://github.com/mayuri2907/VyroBytex',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+918155952384',
        contactType: 'customer service',
        email: 'chaudharynax27@gmail.com',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
  };
}

/**
 * WebSite Schema (JSON-LD)
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Vyrobytex builds modern business websites, e-commerce platforms, custom software, and AI-powered digital solutions to help businesses grow.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * BreadcrumbList Schema (JSON-LD)
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Services List Schema (JSON-LD)
 */
export function buildServicesListSchema(services: ServiceSchemaInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.name,
      description: service.description,
      serviceType: service.serviceType,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      url: service.url || `${SITE_URL}/services`,
    })),
  };
}

/**
 * FAQPage Schema (JSON-LD for AEO / Search Engines)
 */
export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Case Study / CreativeWork Schema (JSON-LD)
 */
export function buildCaseStudySchema(study: CaseStudySchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    headline: study.title,
    description: study.description,
    url: study.url,
    image: study.image ? (study.image.startsWith('http') ? study.image : `${SITE_URL}${study.image}`) : DEFAULT_OG_IMAGE,
    creator: {
      '@id': `${SITE_URL}/#organization`,
    },
    genre: study.category,
    dateCreated: study.year || '2025',
    inLanguage: 'en-US',
  };
}
