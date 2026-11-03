import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Cpu, Database } from 'lucide-react';
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
    question: 'When should a growing business invest in custom software?',
    answer:
      'A business should invest in custom software when off-the-shelf tools force disjointed manual workarounds, require repetitive spreadsheet re-entry, or impose escalating per-user subscription fees that limit your ability to scale team output efficiently.',
  },
  {
    question: 'How does custom software compare to commercial off-the-shelf SaaS?',
    answer:
      'Off-the-shelf SaaS provides generic out-of-the-box features with recurring licensing fees and rigid workflows. Custom software is engineered around your exact business requirements and owned by your organization. Note that hosting, third-party services, APIs, and ongoing maintenance involve separate infrastructure costs.',
  },
  {
    question: 'What factors determine the cost of custom software development?',
    answer:
      'Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Key factors include data model complexity, user role permissions (RBAC), external API integrations, real-time sync needs, and cloud infrastructure architecture.',
  },
  {
    question: 'Can custom software integrate with existing third-party business systems?',
    answer:
      'Yes. We build custom software with robust REST and GraphQL API connectors designed to synchronize data securely with existing CRMs, ERPs, accounting software, and external communication channels like Slack or email.',
  },
];

export const CustomSoftwarePage: React.FC = () => {
  usePageSEO({
    title: 'Custom Software Development Company | Vyrobytex',
    description:
      'Vyrobytex designs and engineers custom business software, internal operations portals, web applications, and API integrations for growing companies in the US, UK, and worldwide.',
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
            <Badge variant="concept">Service Discipline // 02</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Custom Software Development for Efficient Business Operations
          </h1>

          <p className="service-hero-desc">
            We build tailored web applications, internal tools, customer portals, and API integrations
            engineered around your team’s exact workflows and business objectives.
          </p>

          <div className="service-hero-actions">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Discuss Your Software Project
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              Explore Software Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solved & Who Benefits */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Operational Focus</span>
            <h2 className="service-section-title">Built Around Your Exact Workflows</h2>
            <p className="service-section-subtext">
              When commercial software cannot fit your business logic, custom web applications eliminate operational bottlenecks.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">
                <Cpu size={20} className="feature-check-icon" />
                Problems We Solve
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Disjointed SaaS tools</strong> requiring manual data re-entry and prone to costly synchronization errors.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Spreadsheet gridlock</strong> where critical operational metrics are trapped in vulnerable, unversioned sheets.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Escalating per-seat software licensing</strong> that taxes business expansion without providing tailored utility.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Lack of dedicated client portals</strong>, creating customer frustration over project status and documentation tracking.</span>
                </li>
              </ul>
            </div>

            <div className="feature-box">
              <h3 className="feature-box-title">
                <Database size={20} className="feature-check-icon" />
                Who Benefits Most
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Operations-driven businesses</strong> needing automated pipelines to handle orders, project tracking, or reporting.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Service firms and agencies</strong> looking to provide clients with secure, branded access to deliverables and dashboards.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Growing startups</strong> building proprietary business capabilities to maintain a competitive market advantage.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Enterprises modernizing legacy tools</strong> into responsive, secure, cloud-native web applications.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Technology Scope */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Engineering Capabilities</span>
            <h2 className="service-section-title">Core Software Deliverables</h2>
            <p className="service-section-subtext">
              Full-stack applications engineered with strict typing, secure authorization, and modern database structures.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-card-num">01 // ARCHITECTURE</span>
              <h3 className="spec-card-title">Full-Stack Web Applications</h3>
              <p className="spec-card-desc">
                Modular React/TypeScript frontends paired with scalable Node.js serverless functions, REST APIs, and structured data stores.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">02 // DATA & SECURITY</span>
              <h3 className="spec-card-title">Role-Based Access Control (RBAC)</h3>
              <p className="spec-card-desc">
                Granular permission tiers, encrypted session management, and secure authorization gates protecting company and client data.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">03 // CONNECTIVITY</span>
              <h3 className="spec-card-title">API & Webhook Integrations</h3>
              <p className="spec-card-desc">
                Seamless connectors to third-party providers (payment gateways, billing systems, communication tools, and data analytics).
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">04 // RELIABILITY</span>
              <h3 className="spec-card-title">Cloud Infrastructure & Staging</h3>
              <p className="spec-card-desc">
                Automated continuous integration (CI/CD), staging verification environments, and automated disaster recovery backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & International Delivery */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Development Framework</span>
            <h2 className="service-section-title">Agile Delivery for Distributed Teams</h2>
            <p className="service-section-subtext">
              We collaborate with international founders and technical managers using structured milestone sprints.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Requirements Discovery</h3>
              <p className="process-step-desc">
                Mapping exact user personas, database schemas, authorization flows, and workflow diagrams before technical implementation.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Architecture & Prototype</h3>
              <p className="process-step-desc">
                Interactive wireframes and database modeling to validate operational efficiency before full-stack engineering begins.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Iterative Sprints</h3>
              <p className="process-step-desc">
                Modular two-week development cycles accompanied by recorded Loom demonstrations, live staging links, and code reviews.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Production Handover</h3>
              <p className="process-step-desc">
                Comprehensive security checks, deployment pipeline setup, database migration verification, and team documentation handover.
              </p>
            </div>
          </div>

          {/* Pricing Disclaimer Box */}
          <div className="pricing-note-box">
            <strong>Transparent Pricing Notice:</strong> Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Note that cloud hosting, third-party APIs, and ongoing maintenance involve separate infrastructure fees.
          </div>
        </div>
      </section>

      {/* Relevant Concept Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Software Prototype</span>
            <h2 className="service-section-title">Concept Showcase: Nexus Core Analytics</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/nexus-core.jpg"
                alt="Nexus Core Analytics concept showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // Enterprise Dashboard Architecture</span>
              <h3 className="case-study-callout-title">Nexus Core Enterprise Analytics</h3>
              <p className="case-study-callout-desc">
                A modular data visualization dashboard engineered for multi-department metrics, high-density reporting,
                and sub-second client-side interaction speed.
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
              Direct, factual answers for decision-makers evaluating custom software development.
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
                Bespoke marketing websites, creative studio presences, and corporate flagship sites.
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

export default CustomSoftwarePage;
