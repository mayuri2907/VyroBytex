import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, XCircle, Cpu, ShieldCheck, FileSearch, Sparkles, Layers } from 'lucide-react';
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
    question: 'Will our proprietary company data train public AI models?',
    answer:
      'Never. We build exclusively on enterprise API tiers (Anthropic, OpenAI, AWS Bedrock) with contractually guaranteed zero-data-retention policies. Your private PDFs, customer records, and internal notes never enter a public training set.',
  },
  {
    question: 'How do you stop hallucinations from reaching customers or staff?',
    answer:
      'We use strict retrieval-augmented generation (RAG) with source verification. The model is forced to cite exact paragraphs from your approved knowledge base. If no matching documentation exists, it returns a clear "information not found" response and routes the conversation to a human teammate.',
  },
  {
    question: 'How much does a production AI pipeline actually cost to build and run?',
    answer:
      'Fixed-price project scopes range depending on complexity (typically starting around $2,500–$6,000 for focused integrations). Ongoing API token costs depend on volume, but for most mid-sized businesses handling thousands of monthly requests, model API fees rarely exceed $50–$150/month.',
  },
  {
    question: 'Can this connect to our existing CRM, database, or Slack?',
    answer:
      'Yes. We don\'t force you into a proprietary walled garden. We write clean Node.js and Python webhooks that bridge models directly to your PostgreSQL database, Salesforce, HubSpot, Zendesk, or internal Slack channels.',
  },
];

export const AiSolutionsPage: React.FC = () => {
  usePageSEO({
    title: 'Practical AI Solutions & Workflow Automation | Vyrobytex',
    description:
      'Grounded AI integrations, private document search (RAG), and reliable automated workflows built for businesses in the US, UK, Canada, Australia, and worldwide.',
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
            'Grounded conversational assistants, private document retrieval pipelines, and automated business workflows with strict safety boundaries and human-in-the-loop oversight.',
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
            <Badge variant="concept">Engineering Discipline // 04</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Practical AI Integrations Built on Your Real Business Data
          </h1>

          <p className="service-hero-desc">
            Most business AI is either a flimsy chatbot or an expensive science experiment. We build practical tools that
            solve real operational headaches: searching through messy internal documents, triaging customer inquiries,
            and moving data between software without breaking.
          </p>

          <div className="tech-pills-row">
            <span className="tech-pill highlight"><Cpu size={13} /> Anthropic Claude 3.5</span>
            <span className="tech-pill highlight"><Sparkles size={13} /> OpenAI GPT-4o</span>
            <span className="tech-pill"><Layers size={13} /> PostgreSQL + pgvector</span>
            <span className="tech-pill"><FileSearch size={13} /> Pinecone & Qdrant</span>
            <span className="tech-pill"><ShieldCheck size={13} /> Zero-Retention Enterprise APIs</span>
          </div>

          <div className="service-hero-actions" style={{ marginTop: '2rem' }}>
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
              Explore Live Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* Honest Contrast: The Problem with Generic AI vs Grounded Engineering */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">The Difference</span>
            <h2 className="service-section-title">Why Most AI Pilots Fail (And How We Fix It)</h2>
            <p className="service-section-subtext">
              Throwing raw prompts at an API without data grounding creates hallucinations, security concerns, and team distrust.
              Here is what happens when you build with engineering rigor instead of buzzwords.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card pain">
              <span className="comparison-badge pain">The Generic "Vibe" Approach</span>
              <h3 className="comparison-title">Fragile Chatbots & Blind Prompts</h3>
              <ul className="comparison-points">
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Hallucinations in customer chats:</strong> Models invent return policies, discount codes, or technical specs when they lack context.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Data privacy risks:</strong> Employee text pasted into consumer web tools that train third-party public models.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Brittle copy-paste workflows:</strong> Staff still spend 2 hours every day manually formatting data from PDFs into spreadsheets.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Zero validation guardrails:</strong> No confidence scoring, no fallback routing, and no alerts when answers go off track.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-card gain">
              <span className="comparison-badge gain">The Vyrobytex Approach</span>
              <h3 className="comparison-title">Deterministic Data + Grounded Intelligence</h3>
              <ul className="comparison-points">
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Grounded RAG pipelines:</strong> Answers pulled verbatim from your approved Notion, PDF, and database docs with line-level source links.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Zero-retention security:</strong> Private enterprise API endpoints that guarantee your company data is never stored or used to train models.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Human-in-the-loop review:</strong> High-risk actions generate draft responses waiting for 1-click team approval before sending.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Structured JSON extraction:</strong> Deterministic schema parsing with Pydantic/Zod ensuring data lands cleanly in your database.</span>
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
            <span className="service-section-eyebrow">Real-World Applications</span>
            <h2 className="service-section-title">What We Actually Build for Clients</h2>
            <p className="service-section-subtext">
              Real business systems that eliminate repetitive labor and pay for themselves in weeks.
            </p>
          </div>

          <div className="scenario-grid">
            <div className="scenario-card">
              <div>
                <span className="scenario-tag">01 // INTERNAL KNOWLEDGE SEARCH</span>
                <h3 className="scenario-heading">Instant Policy & Manual Search for Operations</h3>
                <p className="scenario-desc">
                  Instead of staff losing 25 minutes searching through 800-page operational manuals, insurance guidelines,
                  or technical specs, staff query a private Slack bot or web UI that returns verified answers with clickable citations in 2 seconds.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> 80% reduction in internal support tickets directed to senior managers.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">02 // DOCUMENT INGESTION</span>
                <h3 className="scenario-heading">Automated Invoice, Contract & PDF Parsing</h3>
                <p className="scenario-desc">
                  Stop hiring data entry assistants to manually copy fields from scanned PDF invoices, delivery bills, and vendor agreements.
                  We build automated serverless webhooks that extract line items, amounts, and dates directly into PostgreSQL.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Invoices processed in 4 seconds with 99.4% field validation accuracy.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">03 // CUSTOMER INQUIRY TRIAGE</span>
                <h3 className="scenario-heading">First-Touch Support & Lead Qualification</h3>
                <p className="scenario-desc">
                  Triage high-intent sales inquiries from website visitors within 30 seconds. The assistant classifies the prospect's budget,
                  checks availability against your team calendar, and drafts customized follow-up proposals for approval.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Lead response times dropped from 6 hours to under 60 seconds.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">04 // DATA PIPELINES & WORKFLOWS</span>
                <h3 className="scenario-heading">Cross-Platform Sync & Background Webhooks</h3>
                <p className="scenario-desc">
                  Trigger smart data transformations whenever an event occurs in Stripe, Shopify, or your CRM. Enrich new leads with company data,
                  generate executive summaries, and dispatch Slack alerts without manual human intervention.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Result:</strong> Seamless cross-tool visibility with zero Zapier subscription sprawl.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Our Working Process</span>
            <h2 className="service-section-title">How We Ship Your AI Feature</h2>
            <p className="service-section-subtext">
              Straightforward, sprint-based delivery. You test working software in your hands within days.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Scope & Data Audit</h3>
              <p className="process-step-desc">
                We inspect your data sources (PDFs, Notion, SQL databases) and define exact output schemas, evaluation metrics, and guardrail boundaries.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Interactive Prototype</h3>
              <p className="process-step-desc">
                Within 5–7 business days, you test an interactive private staging playground connected to your sample data to verify answer quality.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">Guardrails & Fallbacks</h3>
              <p className="process-step-desc">
                We implement automated evaluation suites, refusal triggers for out-of-scope prompts, and seamless routing to human team members.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">Deployment & Code Handoff</h3>
              <p className="process-step-desc">
                Deployed to serverless cloud infrastructure with real-time latency and token monitoring. Full Git repository and IP ownership transferred to you.
              </p>
            </div>
          </div>

          <div className="pricing-note-box">
            <strong>Direct Founder Engagement:</strong> You work directly with Navin Chaudhary and our senior engineers. No account managers or junior subcontractor layers. Fixed project bids and milestone deliverables so there are never surprises on your invoice.
          </div>
        </div>
      </section>

      {/* Relevant Concept Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Working Prototype</span>
            <h2 className="service-section-title">Concept Showcase: Kroma AI Suite</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/kroma-ai.jpg"
                alt="Kroma AI Suite prototype interface"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // AI Workflow & Tooling Interface</span>
              <h3 className="case-study-callout-title">Kroma AI Workflow Interface</h3>
              <p className="case-study-callout-desc">
                A visual node-based workflow builder concept where users connect document sources, customize prompt parameters,
                and inspect outputs with real-time confidence scoring and source citations.
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
              Direct, transparent answers on privacy, pricing, and infrastructure.
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
                Custom client portals, operational dashboards, and internal business web applications.
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
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <ContactCTA />
    </div>
  );
};

export default AiSolutionsPage;
