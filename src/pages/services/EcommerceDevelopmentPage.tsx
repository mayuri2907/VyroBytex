import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, XCircle, ShoppingBag, CreditCard, Zap, ShieldCheck, Globe2 } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { usePageSEO } from '../../hooks/usePageSEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SITE_URL, buildBreadcrumbSchema, buildFAQSchema } from '../../lib/seo';
import './ServiceDetailPage.css';

const ECOMMERCE_FAQS = [
  {
    question: 'Why build headless or custom e-commerce instead of a standard Shopify theme?',
    answer:
      'Standard themes quickly get dragged down by 15–20 installed Shopify apps, which slows mobile load times down to 5+ seconds and destroys conversion rates. Headless architecture separates your fast frontend (React/Next.js) from your Shopify backend, delivering instant sub-second page flips, custom product configurators, and complete design freedom.',
  },
  {
    question: 'How do we manage products, inventory, and order fulfillment?',
    answer:
      'You continue using your familiar Shopify or Stripe dashboard. Adding products, managing discount codes, fulfilling orders, and tracking inventory remains unchanged. Only the customer-facing frontend is custom-engineered for speed and brand uniqueness.',
  },
  {
    question: 'What does a custom e-commerce store project cost?',
    answer:
      'Storefront builds typically range from $3,000 to $7,500 depending on catalog size, custom product bundle builders, and international checkout requirements. We provide a guaranteed milestone estimate after reviewing your SKU structure and design goals.',
  },
  {
    question: 'Do you support international currencies and localized checkout?',
    answer:
      'Yes. We configure automatic geolocation detection, multi-currency price rendering (USD, GBP, EUR, CAD, AUD), localized tax/VAT handling, and native regional payment methods including Apple Pay, Google Pay, and Klarna.',
  },
];

export const EcommerceDevelopmentPage: React.FC = () => {
  usePageSEO({
    title: 'Custom E-commerce Store Development | Vyrobytex',
    description:
      'High-speed digital storefronts, custom Shopify setups, and headless e-commerce built for conversion and scalability in the US, UK, and worldwide.',
    canonicalPath: '/services/ecommerce-development',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'E-commerce Solutions', url: '/services/ecommerce-development' },
        ]),
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/ecommerce-development#service`,
          name: 'Custom E-commerce Development Services',
          serviceType: 'E-commerce Solutions',
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
          description:
            'High-converting online store engineering, bespoke product catalogues, frictionless drawer carts, and secure payment integrations for direct-to-consumer and retail brands.',
          areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Global'],
        },
        buildFAQSchema(ECOMMERCE_FAQS),
      ],
    },
  });

  const heroRef = useScrollReveal({ yOffset: 20 });
  const contentRef = useScrollReveal();

  return (
    <div className="service-page-wrapper">
      {/* Hero Section */}
      <section ref={heroRef} className="service-hero-section">
        <div className="container">
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link to={ROUTES.HOME}>Home</Link>
            <span className="service-breadcrumbs-sep">/</span>
            <Link to={ROUTES.SERVICES}>Services</Link>
            <span className="service-breadcrumbs-sep">/</span>
            <span aria-current="page">E-commerce Solutions</span>
          </nav>

          <div className="service-hero-badges">
            <Badge variant="concept">Engineering Discipline // 03</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Fast Storefronts, Zero Lag, and Checkout Flows Built to Sell
          </h1>

          <p className="service-hero-desc">
            Sluggish checkout kills sales. Every 100ms delay on mobile drops conversion rates by up to 7%.
            We build high-speed headless stores and tailored Shopify experiences that handle real traffic spikes,
            render products instantly, and turn more browsers into paying customers.
          </p>

          <div className="tech-pills-row">
            <span className="tech-pill highlight"><ShoppingBag size={13} /> Shopify Storefront API</span>
            <span className="tech-pill highlight"><Zap size={13} /> Next.js / React 19 Frontend</span>
            <span className="tech-pill"><CreditCard size={13} /> Stripe & 1-Click Express Pay</span>
            <span className="tech-pill"><Globe2 size={13} /> Multi-Currency & Localized Tax</span>
            <span className="tech-pill"><ShieldCheck size={13} /> PCI-DSS Compliant Security</span>
          </div>

          <div className="service-hero-actions" style={{ marginTop: '2rem' }}>
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Discuss Your Store Build
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              Explore Storefront Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* Before / After: Bloated Store vs Clean Custom Storefront */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">The Real Problem</span>
            <h2 className="service-section-title">Why Generic Store Themes Bleed Conversions</h2>
            <p className="service-section-subtext">
              Store owners stack 25 third-party Shopify apps for reviews, upsells, and popups.
              The result is a sluggish 6-second mobile nightmare where frustrated shoppers abandon carts.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card pain">
              <span className="comparison-badge pain">The App-Bloated Theme Trap</span>
              <h3 className="comparison-title">Laggy Carts & Frustrating Friction</h3>
              <ul className="comparison-points">
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>5+ second mobile load times:</strong> 20 installed app scripts fighting for the browser main thread, causing severe cart abandonment.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Jarring full-page reloads:</strong> Clicking "Add to Cart" triggers full page refresh or broken sliding drawers on mobile Safari.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>$300–$600/month recurring app fees:</strong> Endless monthly app subscriptions just to get basic variant swatches and bundle discounts.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Generic checkout experience:</strong> Clunky form fields that force buyers to type shipping addresses manually instead of using Apple Pay.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-card gain">
              <span className="comparison-badge gain">The Vyrobytex Approach</span>
              <h3 className="comparison-title">Sub-Second Speed & Frictionless Checkout</h3>
              <ul className="comparison-points">
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Sub-second product pages:</strong> Instant client-side routing and optimized image CDNs that keep mobile shoppers flowing smoothly.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Instant drawer cart:</strong> Fluid slide-out cart with real-time inventory validation, free shipping progress bars, and zero reload delay.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>1-Click express checkout:</strong> Seamless Apple Pay, Google Pay, and Shop Pay integration that converts mobile traffic in 2 taps.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Native custom features:</strong> Custom bundle builders, color swatches, and size guides coded cleanly into the core theme without monthly fees.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Concrete Scenarios */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Commerce Scenarios</span>
            <h2 className="service-section-title">E-Commerce Experiences We Build</h2>
            <p className="service-section-subtext">
              Engineered to increase Average Order Value (AOV) and reduce cart drop-off.
            </p>
          </div>

          <div className="scenario-grid">
            <div className="scenario-card">
              <div>
                <span className="scenario-tag">01 // DTC BRAND STOREFRONTS</span>
                <h3 className="scenario-heading">High-End Direct-to-Consumer Flagships</h3>
                <p className="scenario-desc">
                  For premium lifestyle, fashion, wellness, and consumer electronics brands.
                  Editorial storytelling, high-resolution lookbooks, and instant product switching that command higher price points.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> Brand prestige, visual art direction, and seamless mobile purchasing.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">02 // CUSTOM PRODUCT CONFIGURATORS</span>
                <h3 className="scenario-heading">Interactive Bundle & Customizer Engines</h3>
                <p className="scenario-desc">
                  Allow customers to mix-and-match bundles, choose custom engraving, or configure bespoke orders with real-time price calculation
                  and visual preview before checkout.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> Higher Average Order Value (AOV) and higher customer engagement.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">03 // HIGH-VOLUME FLASH SALES</span>
                <h3 className="scenario-heading">Stores Engineered for Black Friday Spikes</h3>
                <p className="scenario-desc">
                  Static-first edge architecture built to withstand massive viral traffic surges from influencer drops,
                  TikTok viral campaigns, and Black Friday sales without crashing or slowing down.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> 100% uptime under extreme load with zero checkout latency.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">04 // GLOBAL LOCALIZATION</span>
                <h3 className="scenario-heading">Multi-Currency & Regional Tax Optimization</h3>
                <p className="scenario-desc">
                  Sell across the US, UK, Canada, and Europe seamlessly. Dynamic currency switching, automatic VAT/sales tax calculation,
                  and localized regional payment options (Klarna, iDEAL, Bancontact).
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> International conversion optimization and cross-border expansion.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Store Delivery Sprint</span>
            <h2 className="service-section-title">How We Build and Launch Your Store</h2>
            <p className="service-section-subtext">
              From product catalog structuring to payment gateway testing.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Catalog & SKU Plan</h3>
              <p className="process-step-desc">
                We organize your product variants, categories, inventory sync rules, and checkout requirements before design begins.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Bespoke Storefront UI</h3>
              <p className="process-step-desc">
                We design custom product detail pages, collection filters, and drawer cart interactions optimized for mobile conversion.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Frontend Engineering</h3>
              <p className="process-step-desc">
                We code clean React components, integrate Shopify Storefront API or Stripe, and test instant cart drawer transitions.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Testing & Go-Live</h3>
              <p className="process-step-desc">
                We run live test transactions, verify email receipts, configure Google Analytics 4 e-commerce events, and launch.
              </p>
            </div>
          </div>

          <div className="pricing-note-box">
            <strong>Guaranteed Conversion Architecture:</strong> Every build includes frictionless express checkout, automated transactional email templates, and Google Merchant Center / Schema product markup as standard.
          </div>
        </div>
      </section>

      {/* Relevant Project Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Commerce Prototype</span>
            <h2 className="service-section-title">Concept Showcase: E-Commerce Architecture</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/nexus-core.jpg"
                alt="E-commerce digital storefront interface showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // High-Volume Digital Commerce</span>
              <h3 className="case-study-callout-title">Modern Digital Storefront</h3>
              <p className="case-study-callout-desc">
                A streamlined e-commerce concept featuring instant client-side product filtering, slide-out drawer cart,
                and seamless multi-currency price conversion for international retail shoppers.
              </p>
              <Button
                to={ROUTES.WORK}
                variant="secondary"
                size="sm"
                icon={<ArrowUpRight size={14} />}
                iconPosition="up-right"
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer-focused FAQ Section */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Direct Answers</span>
            <h2 className="service-section-title">Frequently Asked Questions</h2>
            <p className="service-section-subtext">
              Direct answers to questions regarding headless setups, inventory management, and pricing.
            </p>
          </div>

          <div className="two-col-grid">
            {ECOMMERCE_FAQS.map((faq, idx) => (
              <div key={idx} className="feature-box">
                <h3 className="feature-box-title" style={{ fontSize: '1.125rem' }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual Links to Related Services */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Explore Other Disciplines</span>
            <h2 className="service-section-title">Explore Related Solutions</h2>
          </div>

          <div className="related-services-grid">
            <Link to={ROUTES.SERVICES_WEB} className="related-service-card">
              <span className="related-service-num">01 // WEBSITES</span>
              <div className="related-service-title">
                Website Development <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Fast marketing websites, corporate flagship platforms, and bespoke React interfaces.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_SOFTWARE} className="related-service-card">
              <span className="related-service-num">02 // SOFTWARE</span>
              <div className="related-service-title">
                Custom Software <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Internal dashboards, client portals, and bespoke web apps built for your team.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_AI} className="related-service-card">
              <span className="related-service-num">04 // AI</span>
              <div className="related-service-title">
                AI Solutions & Automation <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Grounded document search assistants, lead qualification bots, and workflow pipelines.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <ContactCTA />
    </div>
  );
};

export default EcommerceDevelopmentPage;
