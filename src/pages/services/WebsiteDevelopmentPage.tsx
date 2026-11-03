import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Globe, Zap } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { usePageSEO } from '../../hooks/usePageSEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SITE_URL, buildBreadcrumbSchema, buildFAQSchema } from '../../lib/seo';
import './ServiceDetailPage.css';

const WEB_FAQS = [
  {
    question: 'How much does a business website cost to develop?',
    answer:
      'Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Rather than arbitrary flat fees, Vyrobytex reviews your requirements personally and provides a transparent, tailored estimate based on your exact deliverables.',
  },
  {
    question: 'How long does custom website development take from kickoff to launch?',
    answer:
      'Timelines typically range between three to six weeks depending on total page count, custom interaction requirements, and content readiness. Projects are executed in disciplined stages: technical discovery, UI design architecture, bespoke frontend development, cross-device testing, and launch.',
  },
  {
    question: 'What essential elements should a modern business website include?',
    answer:
      'A successful business website requires a clear value proposition, responsive mobile layout, sub-2.5-second Core Web Vitals performance, accessible semantic HTML, transparent contact channels, and an organized technical SEO foundation so customers and search engines can discover your services.',
  },
  {
    question: 'When should an established business invest in a website redesign?',
    answer:
      'A redesign is recommended when your existing site suffers from slow mobile loading speeds, poor conversion rates, rigid templates that cannot accommodate new services, or an outdated visual presence that does not reflect your current market credibility.',
  },
];

export const WebsiteDevelopmentPage: React.FC = () => {
  usePageSEO({
    title: 'Custom Website Development Company | Vyrobytex',
    description:
      'Vyrobytex builds modern business websites, bespoke responsive frontends, and high-performance digital platforms for companies in the US, UK, and worldwide.',
    canonicalPath: '/services/website-development',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Website Development', url: '/services/website-development' },
        ]),
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/website-development#service`,
          name: 'Custom Website Development Services',
          serviceType: 'Website Development',
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
          description:
            'Bespoke business websites engineered with modern light editorial aesthetics, high-speed responsiveness, and clean SEO architecture for international clients.',
          areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Global'],
        },
        buildFAQSchema(WEB_FAQS),
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
            <span aria-current="page">Website Development</span>
          </nav>

          <div className="service-hero-badges">
            <Badge variant="concept">Service Discipline // 01</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Custom Website Development for Growing Businesses
          </h1>

          <p className="service-hero-desc">
            We engineer bespoke, high-performance business websites designed to build digital authority,
            turn visitors into qualified inquiries, and provide an intuitive experience across all devices.
          </p>

          <div className="service-hero-actions">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Request a Project Estimate
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              View Concept Showcases
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solved & Target Audience */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Strategic Value</span>
            <h2 className="service-section-title">Engineered to Solve Real Business Bottlenecks</h2>
            <p className="service-section-subtext">
              Generic website builders and cluttered themes often compromise performance and dilute brand value.
              We build clean, tailored codebases designed specifically for business growth.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">
                <Zap size={20} className="feature-check-icon" />
                Problems We Solve
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Slow loading speeds & bloated scripts</strong> that hurt Core Web Vitals scores and increase bounce rates.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Rigid website templates</strong> that restrict your custom branding and cannot adapt to evolving operational needs.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Poor mobile responsiveness</strong> that frustrates decision-makers browsing from tablets and smartphones.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Weak search discoverability</strong> caused by poor semantic hierarchy, missing canonical tags, or sub-optimal SEO markup.</span>
                </li>
              </ul>
            </div>

            <div className="feature-box">
              <h3 className="feature-box-title">
                <Globe size={20} className="feature-check-icon" />
                Who Benefits Most
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Small & medium businesses</strong> seeking a distinctive digital identity that outperforms generic industry competitors.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Founders & venture startups</strong> launching flagship digital presences to present their solutions to investors and enterprise buyers.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Professional service companies</strong> requiring structured inquiry pathways, polished presentation, and credible case study layouts.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>International brands</strong> needing reliable technical stewardship, fast CDN delivery, and cross-browser accessibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables & Tech Specs */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Technical Scope</span>
            <h2 className="service-section-title">Core Deliverables & Standards</h2>
            <p className="service-section-subtext">
              Every website is built with contemporary engineering practices, accessible markup, and clean design tokens.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-card-num">01 // CODEBASE</span>
              <h3 className="spec-card-title">Custom Frontend Architecture</h3>
              <p className="spec-card-desc">
                Hand-crafted React and TypeScript codebases. No bulky page builders or unneeded plugins that slow down page execution.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">02 // PERFORMANCE</span>
              <h3 className="spec-card-title">Core Web Vitals Optimization</h3>
              <p className="spec-card-desc">
                Engineered for rapid Largest Contentful Paint (LCP), minimal Cumulative Layout Shift (CLS), and fluid Interaction to Next Paint (INP).
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">03 // SEO & STRUCTURE</span>
              <h3 className="spec-card-title">Technical SEO & Schema</h3>
              <p className="spec-card-desc">
                Semantic HTML5 tags, descriptive Open Graph assets, Twitter cards, sitemap integration, and valid JSON-LD structured data.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">04 // RESPONSIVENESS</span>
              <h3 className="spec-card-title">Touch-First Adaptive Layouts</h3>
              <p className="spec-card-desc">
                Every screen size from 320px mobile viewports to ultra-wide displays receives proportional typography and touch-optimized navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Disciplined Execution</span>
            <h2 className="service-section-title">Development & Delivery Process</h2>
            <p className="service-section-subtext">
              A structured 4-phase delivery framework that keeps projects on schedule and ensures clear communication.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Technical Discovery</h3>
              <p className="process-step-desc">
                We review your business goals, target audience, brand assets, technical integrations, and scope requirements before writing any code.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Art Direction & Design Tokens</h3>
              <p className="process-step-desc">
                Typography, color palettes, spacing tokens, and wireframes are assembled to create a cohesive editorial aesthetic.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Bespoke Engineering</h3>
              <p className="process-step-desc">
                Components are developed in modular TypeScript, incorporating responsive layouts, accessible forms, and subtle micro-interactions.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Quality Assurance & Launch</h3>
              <p className="process-step-desc">
                Full-spectrum auditing: cross-browser testing, Core Web Vitals checks, canonical URL verification, and staging deployment sign-off.
              </p>
            </div>
          </div>

          {/* International Collaboration Approach */}
          <div className="intl-collab-banner">
            <div className="intl-collab-grid">
              <div>
                <span className="service-section-eyebrow">Global Delivery</span>
                <h3 className="intl-collab-title">Working Seamlessly Across International Time Zones</h3>
                <p className="intl-collab-p">
                  We collaborate with businesses across North America, the UK, Europe, and Australia.
                  Our delivery model relies on clear, asynchronous progress updates, dedicated milestone reviews,
                  and structured communication so you are always informed without friction.
                </p>
              </div>

              <div>
                <ul className="feature-check-list">
                  <li className="feature-check-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span><strong>Asynchronous Sprint Updates:</strong> Walkthrough videos, transparent code commits, and staged review links.</span>
                  </li>
                  <li className="feature-check-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span><strong>Scheduled Live Overlap:</strong> Coordinated meeting windows for kickoff calls, sprint planning, and design feedback.</span>
                  </li>
                  <li className="feature-check-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span><strong>Transparent Scope Estimations:</strong> Clear proposals detailing milestones and deliverables.</span>
                  </li>
                </ul>

                <div className="pricing-note-box">
                  <strong>Pricing Policy:</strong> Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Portfolio Example */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Demonstrated Craft</span>
            <h2 className="service-section-title">Selected Concept Showcase</h2>
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
              <span className="case-study-concept-badge">Concept Exploration // E-commerce & Web Architecture</span>
              <h3 className="case-study-callout-title">Aura Studio Digital Retail</h3>
              <p className="case-study-callout-desc">
                An editorial web platform exploration demonstrating fluid micro-interactions, responsive typography,
                and sub-second client-side transitions.
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
              Direct, transparent answers to common buyer questions about website development.
            </p>
          </div>

          <div className="two-col-grid">
            {WEB_FAQS.map((faq, idx) => (
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
            <Link to={ROUTES.SERVICES_SOFTWARE} className="related-service-card">
              <span className="related-service-num">02 // SOFTWARE</span>
              <div className="related-service-title">
                Custom Software <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Bespoke web applications, internal operational tools, and customer portals.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_ECOMMERCE} className="related-service-card">
              <span className="related-service-num">03 // COMMERCE</span>
              <div className="related-service-title">
                E-commerce Solutions <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                High-converting digital storefronts, product catalogues, and checkout workflows.
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

export default WebsiteDevelopmentPage;
