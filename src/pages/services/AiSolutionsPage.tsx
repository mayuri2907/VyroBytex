import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Sparkles, Bot } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { usePageSEO } from '../../hooks/usePageSEO';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SITE_URL, buildBreadcrumbSchema, buildFAQSchema } from '../../lib/seo';
import './ServiceDetailPage.css';

const AI_FAQS = [
  {
    question: 'Which business tasks can AI practically automate for small and medium companies?',
    answer:
      'AI can reliably automate high-frequency repetitive tasks: first-touch customer inquiry classification, document information extraction and summarization, private internal knowledge search (RAG), draft email generation, and structured data transformation between disconnected business apps.',
  },
  {
    question: 'What factors determine the cost of an AI solution or automation pipeline?',
    answer:
      'Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Specific cost drivers include model provider API consumption (OpenAI, Anthropic, Gemini), vector database infrastructure, private document indexing volume, custom validation guardrails, and human-in-the-loop review interfaces.',
  },
  {
    question: 'Can AI features integrate seamlessly into our existing software and databases?',
    answer:
      'Yes. Practical AI is delivered via standard REST APIs, secure webhook triggers, and cloud function middleware that connect directly to your existing website, customer database, CRM, or messaging platforms like Slack.',
  },
  {
    question: 'What are the realistic limitations of business AI systems?',
    answer:
      'AI models require clean contextual data and can produce inaccuracies or hallucinations if prompt constraints are poorly defined. AI systems should assist and accelerate team output rather than replace human judgment for high-stakes financial, medical, or legal decisions. We engineer strict validation guardrails and human review fallbacks into every implementation.',
  },
];

export const AiSolutionsPage: React.FC = () => {
  usePageSEO({
    title: 'AI Solutions & Business Automation | Vyrobytex',
    description:
      'Vyrobytex engineers practical AI integrations, business workflow automation pipelines, document search assistants, and intelligent features for modern companies in the US, UK, and worldwide.',
    canonicalPath: '/services/ai-solutions',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'AI Solutions', url: '/services/ai-solutions' },
        ]),
        {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/ai-solutions#service`,
          name: 'Practical AI Solutions & Workflow Automation',
          serviceType: 'AI Solutions & Automation',
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
          description:
            'Engineering grounded conversational tools, private document search pipelines, and automated business workflows with strict safety boundaries and human oversight.',
          areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Global'],
        },
        buildFAQSchema(AI_FAQS),
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
            <span aria-current="page">AI Solutions</span>
          </nav>

          <div className="service-hero-badges">
            <Badge variant="concept">Service Discipline // 04</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Practical AI Solutions & Workflow Automation for Modern Business
          </h1>

          <p className="service-hero-desc">
            We help companies leverage artificial intelligence responsibly—implementing document-grounded search,
            automated inquiry triaging, and custom workflow features that save hours of manual team effort.
          </p>

          <div className="service-hero-actions">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              iconPosition="up-right"
            >
              Discuss Your AI Project
            </Button>
            <Button to={ROUTES.WORK} variant="secondary" size="lg">
              Explore AI Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solved & Who Benefits */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Practical Utility</span>
            <h2 className="service-section-title">Solving Operational Friction With Grounded AI</h2>
            <p className="service-section-subtext">
              We cut through the hype to build dependable, narrow AI tools grounded in your private business data.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">
                <Sparkles size={20} className="feature-check-icon" />
                Problems We Solve
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Repetitive customer inquiry overload</strong> that consumes hours of support team time answering basic questions.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Unstructured document bottlenecks</strong> where critical data is locked in PDFs, contracts, and manual spreadsheets.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Slow lead qualification response times</strong> causing high-intent prospects to explore competitors before your team replies.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Fear of AI hallucinations & security leaks</strong> preventing companies from adopting productivity enhancements safely.</span>
                </li>
              </ul>
            </div>

            <div className="feature-box">
              <h3 className="feature-box-title">
                <Bot size={20} className="feature-check-icon" />
                Who Benefits Most
              </h3>
              <ul className="feature-check-list">
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Support & service teams</strong> wanting 24/7 grounded first-touch answering without sacrificing customer trust.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Knowledge-dense businesses</strong> (legal, consulting, real estate) needing rapid semantic search across internal archives.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Digital product teams</strong> looking to embed smart assistant features into existing web apps and dashboards.</span>
                </li>
                <li className="feature-check-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span><strong>Operations executives</strong> seeking automated data pipelines that trigger actions across existing business tools.</span>
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
            <h2 className="service-section-title">Core AI Deliverables</h2>
            <p className="service-section-subtext">
              Engineered with strict context boundaries, privacy protections, and verified API orchestration.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <span className="spec-card-num">01 // KNOWLEDGE</span>
              <h3 className="spec-card-title">Private Document Search (RAG)</h3>
              <p className="spec-card-desc">
                Vector database embedding pipelines that allow users to query your private company documents with high accuracy and source citations.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">02 // AUTOMATION</span>
              <h3 className="spec-card-title">Workflow Parsing Pipelines</h3>
              <p className="spec-card-desc">
                Automated data extraction scripts that parse unstructured emails, PDFs, and invoices into clean structured JSON for your database.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">03 // SAFETY</span>
              <h3 className="spec-card-title">Validation Guardrails & Fallbacks</h3>
              <p className="spec-card-desc">
                Defensive prompt architecture, confidence scoring thresholds, and automatic routing to human team members when confidence is low.
              </p>
            </div>

            <div className="spec-card">
              <span className="spec-card-num">04 // INTEGRATION</span>
              <h3 className="spec-card-title">API & Webhook Connectors</h3>
              <p className="spec-card-desc">
                Lightweight middleware connecting leading model APIs (OpenAI, Anthropic, Google Gemini) to your website, CRM, or team chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Safety Constraints */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Implementation Framework</span>
            <h2 className="service-section-title">Responsible Delivery Framework</h2>
            <p className="service-section-subtext">
              Ensuring reliability, data confidentiality, and verifiable output before any model enters production.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Use-Case Validation</h3>
              <p className="process-step-desc">
                Evaluating whether AI is the optimal solution for your business problem versus deterministic code, prioritizing measurable ROI.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Data Preparation</h3>
              <p className="process-step-desc">
                Cleaning and structuring reference documents, setting vector embeddings, and creating representative evaluation test suites.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Guardrail Engineering</h3>
              <p className="process-step-desc">
                Developing prompt constraints, boundary enforcement, and fallback routes to prevent hallucinations and out-of-scope answers.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Deployment & Monitoring</h3>
              <p className="process-step-desc">
                Deploying serverless endpoints, setting up latency and token tracking, and providing an administrative testing playground.
              </p>
            </div>
          </div>

          {/* Pricing Disclaimer Box */}
          <div className="pricing-note-box">
            <strong>Transparent Pricing Notice:</strong> Project pricing depends on scope, design complexity, integrations, functionality, and delivery requirements. Contact us for a tailored estimate. Note that third-party model API token usage, vector storage, and specialized hosting involve separate infrastructure fees.
          </div>
        </div>
      </section>

      {/* Relevant Concept Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">AI Prototype</span>
            <h2 className="service-section-title">Concept Showcase: Kroma AI Suite</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/kroma-ai.jpg"
                alt="Kroma AI Suite concept showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // AI Workflow & Tooling Interface</span>
              <h3 className="case-study-callout-title">Kroma AI Workflow Interface</h3>
              <p className="case-study-callout-desc">
                A visual node-based workflow builder concept where users connect document sources, customize prompt parameters,
                and inspect outputs with real-time confidence scoring.
              </p>
              <Button
                to={ROUTES.WORK_DETAIL.replace(':id', 'kroma-ai')}
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
              Direct, factual answers for executives evaluating business AI adoption.
            </p>
          </div>

          <div className="two-col-grid">
            {AI_FAQS.map((faq, idx) => (
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

            <Link to={ROUTES.SERVICES_ECOMMERCE} className="related-service-card">
              <span className="related-service-num">03 // COMMERCE</span>
              <div className="related-service-title">
                E-commerce Solutions <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                High-converting digital storefronts, product catalogues, and checkout workflows.
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

export default AiSolutionsPage;
