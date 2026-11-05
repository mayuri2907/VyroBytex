import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, XCircle, Terminal, Database, Server, Lock, Layers } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { usePageSEO } from '../../hooks/usePageSEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SITE_URL, buildBreadcrumbSchema, buildFAQSchema } from '../../lib/seo';
import './ServiceDetailPage.css';

const SOFTWARE_FAQS = [
  {
    question: 'Who owns the source code and intellectual property?',
    answer:
      'You own 100% of the code, database schemas, and intellectual property. When we complete the project, repository access, deployment accounts, and technical documentation are handed directly to your company with zero licensing fees or vendor lock-in.',
  },
  {
    question: 'How do you decide between custom software vs. buying off-the-shelf SaaS?',
    answer:
      'If an existing SaaS tool covers 90% of your workflow for a reasonable price, you should buy it. But when you are paying $40/user/month across 30 staff members while duct-taping spreadsheets together to bridge missing features, custom software pays for itself quickly while becoming an asset on your balance sheet.',
  },
  {
    question: 'Can our internal engineers maintain and extend the code later?',
    answer:
      'Yes. We write strictly-typed TypeScript, clean PostgreSQL schemas, and modular React components following industry standards. Every project ships with complete setup instructions, API specs, and clean Git commits so any competent developer can jump right in.',
  },
  {
    question: 'What does custom software development typically cost?',
    answer:
      'Targeted internal tools, portals, or automation MVPs typically range from $3,500 to $8,500 depending on database schema depth, authentication roles (RBAC), and third-party integrations. We work in fixed-price milestones so you always know the exact cost before work begins.',
  },
];

export const CustomSoftwarePage: React.FC = () => {
  usePageSEO({
    title: 'Custom Software & Internal Tools Development | Vyrobytex',
    description:
      'Bespoke web applications, client portals, internal operations dashboards, and database pipelines built around your exact business workflows in the US, UK, and worldwide.',
    canonicalPath: '/services/custom-software',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Custom Software', url: '/services/custom-software' },
        ]),
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/custom-software#service`,
          name: 'Custom Software Development Services',
          serviceType: 'Custom Software Development',
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
          description:
            'Bespoke web applications, internal operational tools, customer portals, and API integrations engineered for scalable business workflows.',
          areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Global'],
        },
        buildFAQSchema(SOFTWARE_FAQS),
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
            <span aria-current="page">Custom Software</span>
          </nav>

          <div className="service-hero-badges">
            <Badge variant="concept">Engineering Discipline // 02</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Custom Software Built Around How Your Business Actually Runs
          </h1>

          <p className="service-hero-desc">
            When off-the-shelf SaaS forces your team into messy spreadsheets and manual workarounds, we build the exact tool you need.
            Bespoke client portals, operational dashboards, and backend automations engineered to scale your operations without per-seat fees.
          </p>

          <div className="tech-pills-row">
            <span className="tech-pill highlight"><Terminal size={13} /> TypeScript & Node.js</span>
            <span className="tech-pill highlight"><Database size={13} /> PostgreSQL & Supabase</span>
            <span className="tech-pill"><Layers size={13} /> React 19 Frontend</span>
            <span className="tech-pill"><Lock size={13} /> Role-Based Auth (RBAC)</span>
            <span className="tech-pill"><Server size={13} /> REST & Webhook Pipelines</span>
          </div>

          <div className="service-hero-actions" style={{ marginTop: '2rem' }}>
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Discuss Your Software Needs
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              Explore Architecture Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Before / After: Generic SaaS vs Tailored Software */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">The Tradeoff</span>
            <h2 className="service-section-title">The SaaS Sprawl & Spreadsheet Ceiling</h2>
            <p className="service-section-subtext">
              Generic software either charges exorbitant per-seat monthly fees for bloated features, or lacks the exact custom workflow your team needs.
              Here is what happens when you build software that belongs to you.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card pain">
              <span className="comparison-badge pain">The SaaS & Spreadsheet Trap</span>
              <h3 className="comparison-title">Duct-Taped Tools & Fragmented Data</h3>
              <ul className="comparison-points">
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Escalating per-seat subscription bills:</strong> Paying $50/user/month across 4 different platforms just to handle basic tasks.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Fragile Zapier & Airtable links:</strong> One person renames a column or updates a field, and three automated pipelines silently fail.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Manual double-entry between apps:</strong> Staff wasting hours re-typing customer data from email into CRMs and invoicing tools.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Zero competitive edge:</strong> You are forced to operate exactly like everyone else using the same generic commercial tools.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-card gain">
              <span className="comparison-badge gain">The Vyrobytex Approach</span>
              <h3 className="comparison-title">Dedicated Architecture & Asset Ownership</h3>
              <ul className="comparison-points">
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Tailored to your exact workflow:</strong> No unused clutter, no weird workarounds. The software fits how your team already operates.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Zero per-seat licensing fees:</strong> Add 5 or 500 team members without paying a dime extra in recurring software seat licenses.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Single source of truth:</strong> Clean relational PostgreSQL database with automatic audit logs, backups, and secure access controls.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Permanent enterprise IP:</strong> The software is an owned balance-sheet asset that increases the enterprise valuation of your company.</span>
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
            <span className="service-section-eyebrow">Practical Applications</span>
            <h2 className="service-section-title">Systems We Build for Growing Businesses</h2>
            <p className="service-section-subtext">
              Real internal applications that eliminate human error and streamline daily operations.
            </p>
          </div>

          <div className="scenario-grid">
            <div className="scenario-card">
              <div>
                <span className="scenario-tag">01 // CLIENT PORTALS</span>
                <h3 className="scenario-heading">Branded Client Hubs & Document Workflows</h3>
                <p className="scenario-desc">
                  Give your high-value clients a sleek self-service portal to review deliverable status, securely upload confidential files,
                  approve quotes, and view invoices without endless email threads.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Drastic reduction in status check emails and a dramatically more professional client experience.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">02 // OPERATIONS DASHBOARDS</span>
                <h3 className="scenario-heading">Internal Ops & Job Dispatch Dashboards</h3>
                <p className="scenario-desc">
                  Manage field jobs, technician scheduling, order statuses, and team capacity in real time.
                  Role-based permissions ensure managers see financial rollups while technicians only see their daily tasks.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Centralized real-time visibility across the entire operational pipeline.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">03 // INVENTORY & ORDER SYNC</span>
                <h3 className="scenario-heading">Multi-Warehouse Inventory & Order Routing</h3>
                <p className="scenario-desc">
                  Custom inventory trackers that bridge your suppliers, warehouse systems, and sales channels.
                  Automated re-order alerts and batch barcode scanner support built for fast fulfillment.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Zero stockouts, accurate inventory reporting, and rapid fulfillment.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">04 // API BRIDGES & AUTOMATIONS</span>
                <h3 className="scenario-heading">Automated Background Workflows & Reporting</h3>
                <p className="scenario-desc">
                  Reliable serverless backend microservices that generate branded PDF statements, synchronize customer records
                  between legacy ERPs and Stripe, and dispatch automated notification webhooks.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> 10+ hours saved every week on manual data reconciliation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Development Methodology</span>
            <h2 className="service-section-title">Sprint-Based Delivery with Zero Guesswork</h2>
            <p className="service-section-subtext">
              We work in focused 2-week development sprints with live clickable demos at every milestone.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Data Architecture</h3>
              <p className="process-step-desc">
                We map your entities, relationships, authentication rules, and external API inputs before writing a single line of UI code.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Clickable Core MVP</h3>
              <p className="process-step-desc">
                Within 10–14 days, you test an interactive staging build with real database operations, user authentication, and data entry.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Integrations & Testing</h3>
              <p className="process-step-desc">
                We wire third-party webhooks, build automated report generation, and run stress tests with edge-case validation.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Production Handoff</h3>
              <p className="process-step-desc">
                Deployed to secure cloud infrastructure (AWS or Vercel + Supabase) with complete Git repository transfer and training documentation.
              </p>
            </div>
          </div>

          <div className="pricing-note-box">
            <strong>Fixed-Scope Milestones:</strong> We don't bill endless agency hourly rates. You get an exact milestone roadmap with agreed-upon deliverables and fixed pricing before kickoff.
          </div>
        </div>
      </section>

      {/* Relevant Project Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Architecture Demo</span>
            <h2 className="service-section-title">Concept Showcase: Nexus Core</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/nexus-core.jpg"
                alt="Nexus Core enterprise dashboard showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // Enterprise Operations Dashboard</span>
              <h3 className="case-study-callout-title">Nexus Core Systems Platform</h3>
              <p className="case-study-callout-desc">
                A high-density operational portal featuring real-time data filtering, role-based permission tiers,
                and interactive system metrics designed for complex enterprise workflows.
              </p>
              <Button
                to={ROUTES.WORK_DETAIL.replace(':id', 'nexus-core')}
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
              Straightforward answers about intellectual property, maintenance, and hosting.
            </p>
          </div>

          <div className="two-col-grid">
            {SOFTWARE_FAQS.map((faq, idx) => (
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
                Custom marketing websites, creative portfolio presences, and corporate flagship sites.
              </p>
            </Link>

            <Link to={ROUTES.SERVICES_ECOMMERCE} className="related-service-card">
              <span className="related-service-num">03 // COMMERCE</span>
              <div className="related-service-title">
                E-commerce Solutions <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                High-converting digital storefronts, customized checkouts, and Shopify integrations.
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

export default CustomSoftwarePage;
