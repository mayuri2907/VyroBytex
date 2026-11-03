import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShoppingBag, TrendingUp } from 'lucide-react';
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
    question: 'What factors determine the cost of developing a custom e-commerce website?',
    answer:
      'Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Key cost factors include product catalogue volume, custom variant configurators, third-party payment gateway setups, international multi-currency handling, and transactional email automation.',
  },
  {
    question: 'Which features are essential for a modern high-converting online store?',
    answer:
      'Essential features include instant client-side product filtering, responsive mobile-first navigation, frictionless drawer carts, transparent shipping and tax calculators, multi-currency options for international buyers, and automated order confirmations.',
  },
  {
    question: 'How can checkout friction be reduced to improve e-commerce conversion rates?',
    answer:
      'Friction is minimized by eliminating mandatory multi-step account creation, offering express payment methods (Apple Pay, Google Pay, Stripe), preventing jarring full-page reloads with instant drawer carts, and keeping checkout form fields to an absolute minimum.',
  },
  {
    question: 'How should an established brand or retailer plan a new e-commerce build?',
    answer:
      'Start by cataloguing your SKU inventory and product attributes, selecting your preferred payment processors and fulfillment methods, defining your visual art direction, and ensuring your technical specifications prioritize fast mobile loading and reliable customer data privacy.',
  },
];

export const EcommerceDevelopmentPage: React.FC = () => {
  usePageSEO({
    title: 'E-commerce Development Company | Vyrobytex',
    description:
      'Vyrobytex engineers custom digital storefronts, high-converting product experiences, and scalable e-commerce platforms for online brands in the US, UK, and worldwide.',
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
            <span aria-current="page">E-commerce Development</span>
          </nav>

          <div className="service-hero-badges">
            <Badge variant="concept">Service Discipline // 03</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Custom E-commerce Development for Online Brands & Retailers
          </h1>

          <p className="service-hero-desc">
            We engineer tailored digital storefronts and commerce platforms designed to highlight product value,
            eliminate checkout abandonment, and convert casual visitors into loyal repeat customers.
          </p>

          <div className="service-hero-actions">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Discuss Your E-commerce Project
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              Explore Commerce Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solved & Who Benefits */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Commerce Optimization</span>
            <h2 className="service-section-title">Engineered to Drive Transactional Momentum</h2>
            <p className="service-section-subtext">
              Clunky generic store templates and slow mobile checkout flows destroy customer trust.
              We craft commerce experiences that feel instantaneous and effortless.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">
                <TrendingUp size={20} className="feature-check-icon" />
                Problems We Solve
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Cart abandonment spikes</strong> triggered by sluggish page reloads and complicated multi-step checkouts.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Generic storefront templates</strong> that look identical to competitors and fail to communicate premium product craftsmanship.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Clunky mobile variant pickers</strong> that frustrate smartphone shoppers trying to select sizes, colors, or bundles.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Slow catalogue filtering</strong> that forces customers to wait several seconds between category clicks.</span>
                </li>
              </ul>
            </div>

            <div className="feature-box">
              <h3 className="feature-box-title">
                <ShoppingBag size={20} className="feature-check-icon" />
                Who Benefits Most
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Direct-to-consumer (DTC) brands</strong> seeking an editorial, premium shopping experience tailored to their visual identity.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Specialty retail businesses</strong> transitioning from brick-and-mortar storefronts to international digital commerce.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>B2B wholesale merchants</strong> requiring structured catalogue browsing, custom quote workflows, and bulk inquiry paths.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Growing product companies</strong> expanding sales across North America, the UK, Europe, and Australia.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables & Technical Scope */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Technical Scope</span>
            <h2 className="service-section-title">Core E-commerce Deliverables</h2>
            <p className="service-section-subtext">
              Every commerce platform is built for speed, secure transactional data, and intuitive navigation.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-card-num">01 // FRONTEND</span>
              <h3 className="spec-card-title">Bespoke Storefront Interface</h3>
              <p className="spec-card-desc">
                Editorial layouts, responsive product grids, micro-interactions, and instant client-side category filtering.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">02 // TRANSACTIONS</span>
              <h3 className="spec-card-title">Payment Gateway Integrations</h3>
              <p className="spec-card-desc">
                Secure checkout integrations with trusted international payment providers (Stripe, Apple Pay, Google Pay).
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">03 // MERCHANDISING</span>
              <h3 className="spec-card-title">Interactive Product Detail Pages</h3>
              <p className="spec-card-desc">
                High-definition image galleries, fluid variant selectors, stock badge indicators, and instant drawer cart addition.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">04 // ANALYTICS</span>
              <h3 className="spec-card-title">Conversion & Event Tracking</h3>
              <p className="spec-card-desc">
                Clean event tracking hooks for product views, cart additions, and checkout steps without compromising page load speeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development & International Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Delivery Framework</span>
            <h2 className="service-section-title">How We Build Your Storefront</h2>
            <p className="service-section-subtext">
              A structured 4-phase process focused on conversion optimization and technical stability.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Catalogue & Flow Audit</h3>
              <p className="process-step-desc">
                Analyzing SKU structures, product variant combinations, payment requirements, and customer purchasing journeys.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Interactive Wireframes</h3>
              <p className="process-step-desc">
                Designing mobile-first product detail pages, instant cart drawers, and frictionless checkout mockups.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Custom Development</h3>
              <p className="process-step-desc">
                Building responsive frontend components, setting up payment gateway APIs, and implementing conversion hooks.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Pre-Launch Testing</h3>
              <p className="process-step-desc">
                Rigorous end-to-end checkout testing, mobile performance audits, SSL encryption validation, and live payment verification.
              </p>
            </div>
          </div>

          {/* Pricing Disclaimer Box */}
          <div className="pricing-note-box">
            <strong>Transparent Pricing Notice:</strong> Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Note that payment processor fees, domain registrations, and third-party SaaS subscriptions involve separate costs.
          </div>
        </div>
      </section>

      {/* Relevant Concept Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Commerce Prototype</span>
            <h2 className="service-section-title">Concept Showcase: Aura Studio</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/aura-studio.jpg"
                alt="Aura Studio concept showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // Editorial Commerce Experience</span>
              <h3 className="case-study-callout-title">Aura Studio Luxury E-Commerce</h3>
              <p className="case-study-callout-desc">
                An editorial direct-to-consumer store concept demonstrating instantaneous drawer carts, fluid product previews,
                and zero Cumulative Layout Shift across mobile and desktop.
              </p>
              <Button
                to={ROUTES.WORK_DETAIL.replace(':id', 'aura-studio')}
                variant="secondary"
                size="sm"
                icon={<ArrowUpRight size={14} />}
                iconPosition="up-right"
              >
                Inspect Case Study
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
              Direct, factual answers for retailers and brands planning an e-commerce platform.
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
            <span className="service-section-eyebrow">Complementary Capabilities</span>
            <h2 className="service-section-title">Explore Related Solutions</h2>
          </div>

          <div className="related-services-grid">
            <Link to={ROUTES.SERVICES_WEB} className="related-service-card">
              <span className="related-service-num">01 // WEBSITES</span>
              <div className="related-service-title">
                Website Development <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Custom marketing websites, creative portfolio presences, and corporate flagship sites.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_SOFTWARE} className="related-service-card">
              <span className="related-service-num">02 // SOFTWARE</span>
              <div className="related-service-title">
                Custom Software <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Bespoke web applications, internal operational tools, and customer portals.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_AI} className="related-service-card">
              <span className="related-service-num">04 // INTELLIGENCE</span>
              <div className="related-service-title">
                AI Solutions <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Practical workflow automation pipelines and knowledge-grounded AI features.
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
