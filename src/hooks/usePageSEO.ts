import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../lib/seo';

export interface PageSEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalTag(url: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLdScript(data: unknown) {
  const SCRIPT_ID = 'vyrobytex-jsonld';
  let el = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = SCRIPT_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

export const usePageSEO = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  robots = 'index, follow',
  structuredData,
}: PageSEOProps) => {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // 2. Canonical URL
    const cleanPath = canonicalPath
      ? canonicalPath.startsWith('/')
        ? canonicalPath
        : `/${canonicalPath}`
      : window.location.pathname;
    const fullCanonicalUrl = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
    setCanonicalTag(fullCanonicalUrl);

    // 3. Meta Description
    if (description) {
      setMetaTag('name', 'description', description);
    }

    // 4. Robots Directives
    setMetaTag('name', 'robots', robots);

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    if (description) {
      setMetaTag('property', 'og:description', description);
    }
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 6. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    if (description) {
      setMetaTag('name', 'twitter:description', description);
    }
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. Structured Data (JSON-LD)
    if (structuredData) {
      setJsonLdScript(structuredData);
    }

    return () => {
      // Optional cleanup on page change
    };
  }, [title, description, canonicalPath, ogType, ogImage, robots, structuredData]);
};
