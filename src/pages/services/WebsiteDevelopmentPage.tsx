import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, XCircle, Code2, Gauge, Search, Sparkles, Layout } from 'lucide-react';
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
    question: 'Why build custom code instead of using WordPress, Wix, or Webflow?',
    answer:
      'Page builders are fine for quick hobbies, but established businesses quickly outgrow them. Off-the-shelf themes load 40+ third-party scripts that ruin mobile speeds, create security vulnerabilities, and look identical to competitors. Custom code gives you sub-second load times, total design freedom, zero plugin update breakage, and higher Google rankings.',
  },
  {
    question: 'How do our non-technical team members update content after launch?',
    answer:
      'We connect your custom frontend to lightweight headless CMS platforms (like Sanity, Strapi, or Decap) or structure clean JSON content files. Your marketing team edits copy, publishes blog posts, and swaps images through a clean dashboard without ever touching code.',
  },
  {
    question: 'What does a custom business website typically cost?',
    answer:
      'Most bespoke business sites land between $2,000 and $5,500 depending on page count, interactive features, and custom animations. We provide a guaranteed fixed milestone estimate after an initial 30-minute discovery call—no hourly runaways or surprise invoices.',
  },
  {
    question: 'How long does a website project take from kickoff to launch?',
    answer:
      'Standard business builds take 3 to 5 weeks. You see interactive Figma designs in week one, test a working staging URL in week three, and launch after cross-browser verification and international SEO configuration.',
  },
];

export const WebsiteDevelopmentPage: React.FC = () => {
  usePageSEO({
    title: 'Custom Website Development | Vyrobytex',
    description:
      'Bespoke, high-speed business websites built in React 19 and TypeScript. Sub-second load times, clean international SEO, and custom design for companies in the US, UK, and worldwide.',
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
            'Bespoke business websites engineered in React 19, TypeScript, and modern CSS with sub-second performance, responsive editorial aesthetics, and international SEO architecture.',
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
            <Badge variant="concept">Engineering Discipline // 01</Badge>
            <span className="market-pill">US • UK • Canada • Australia & Global</span>
          </div>

          <h1 className="service-hero-title">
            Fast, Custom Websites Built to Turn Visitors into Clients
          </h1>

          <p className="service-hero-desc">
            No bloated WordPress themes, no fragile plugin stacks, and no 8-second mobile load times.
            We build clean, bespoke websites in React 19, TypeScript, and modern CSS that load in milliseconds,
            look distinctly premium, and convert traffic into qualified inquiries.
          </p>

          <div className="tech-pills-row">
            <span className="tech-pill highlight"><Code2 size={13} /> React 19 & TypeScript</span>
            <span className="tech-pill highlight"><Gauge size={13} /> 95+ Core Web Vitals</span>
            <span className="tech-pill"><Search size={13} /> Schema.org & Technical SEO</span>
            <span className="tech-pill"><Layout size={13} /> Tailored Responsive CSS</span>
            <span className="tech-pill"><Sparkles size={13} /> Micro-Interactions & GSAP</span>
          </div>

          <div className="service-hero-actions" style={{ marginTop: '2rem' }}>
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
              View Work Showcase
            </Button>
          </div>
        </div>
      </section>

      {/* Before / After: Generic Agency Site vs Clean Custom Code */}
      <section ref={contentRef} className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">The Real Difference</span>
            <h2 className="service-section-title">The Cost of Bloated Templates</h2>
            <p className="service-section-subtext">
              Most agency sites look fine on a MacBook at the agency office, but crawl on real mobile phones.
              Here is why handcrafted code consistently outperforms off-the-shelf theme builders.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card pain">
              <span className="comparison-badge pain">Typical Page-Builder Site</span>
              <h3 className="comparison-title">Bloated Themes & Plugin Headaches</h3>
              <ul className="comparison-points">
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Slow 5+ second mobile loads:</strong> Heavy bloated DOM trees, 35 conflicting plugins, and endless JavaScript render blocking.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Cookie-cutter templates:</strong> Visual layouts that look identical to every other generic company in your sector.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Constant maintenance fragility:</strong> One automatic theme or security patch update breaks your forms or checkout.</span>
                </li>
                <li className="comparison-point pain">
                  <XCircle size={16} className="point-icon" />
                  <span><strong>Neglected technical SEO:</strong> Messy nested div wrappers, broken heading hierarchies, and missing structured data schemas.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-card gain">
              <span className="comparison-badge gain">The Vyrobytex Approach</span>
              <h3 className="comparison-title">Clean Code, Peak Speed & Direct Ownership</h3>
              <ul className="comparison-points">
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Sub-second page speeds:</strong> Lean, tree-shaken bundles that score 95+ on Google Lighthouse and keep mobile visitors engaged.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Bespoke editorial design:</strong> Custom art direction that matches your brand's true caliber and commands premium pricing.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>Built-in international SEO:</strong> Automatic canonical sitemaps, JSON-LD Schema.org graphs, and optimized social share previews.</span>
                </li>
                <li className="comparison-point gain">
                  <CheckCircle2 size={16} className="point-icon" />
                  <span><strong>100% Code & IP ownership:</strong> Clean, modular TypeScript code delivered via private Git repo with zero ongoing agency lock-in.</span>
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
            <span className="service-section-eyebrow">Project Scenarios</span>
            <h2 className="service-section-title">Website Types We Regularly Deliver</h2>
            <p className="service-section-subtext">
              From creative agency showcases to lead generation engines for B2B service firms.
            </p>
          </div>

          <div className="scenario-grid">
            <div className="scenario-card">
              <div>
                <span className="scenario-tag">01 // CORPORATE & PROFESSIONAL SERVICES</span>
                <h3 className="scenario-heading">B2B Flagship Platforms That Build Trust</h3>
                <p className="scenario-desc">
                  For consultancies, legal firms, and tech startups targeting US, UK, and international enterprise buyers.
                  We craft authoritative editorial websites with clear service breakdowns, case study breakdowns, and direct team booking integrations.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> Professional authority, high-intent lead capture, and zero friction.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">02 // CREATIVE STUDIOS & ARCHITECTS</span>
                <h3 className="scenario-heading">Portfolio Showcases with Motion & Art Direction</h3>
                <p className="scenario-desc">
                  For architecture studios, creative agencies, and luxury brands that demand exceptional visual polish.
                  Smooth page transitions, buttery scroll reveals, and high-resolution media optimized to load instantly without stutter.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> Editorial typography, silky 60fps animations, and visual impact.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">03 // HIGH-CONVERTING LANDING PAGES</span>
                <h3 className="scenario-heading">Campaign Funnels Built for Paid Traffic</h3>
                <p className="scenario-desc">
                  If you are driving Google Ads, LinkedIn Ads, or Meta traffic, every millisecond of latency costs real money.
                  We build razor-sharp campaign pages with clear value framing, social proof carousels, and single-step conversion forms.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> Conversion rate optimization, sub-2.5s LCP, and zero distraction.
              </div>
            </div>

            <div className="scenario-card">
              <div>
                <span className="scenario-tag">04 // LEGACY REDESIGNS</span>
                <h3 className="scenario-heading">Modernizing Outdated, Slow Websites</h3>
                <p className="scenario-desc">
                  Migrate away from clunky 7-year-old WordPress installs without losing your existing search rankings.
                  We preserve your URL equity, implement 301 redirects where needed, and deliver a clean modern rebuild that loads 5x faster.
                </p>
              </div>
              <div className="scenario-outcome">
                <strong>Focus:</strong> SEO equity preservation, massive performance jump, and modern UX.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Sprint Milestones</span>
            <h2 className="service-section-title">How Your Website Gets Built</h2>
            <p className="service-section-subtext">
              A transparent, predictable process with zero guessing.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h3 className="process-step-title">Discovery & Content Plan</h3>
              <p className="process-step-desc">
                We dissect your target audience, analyze competitor gaps, and structure your page architecture and conversion pathways.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h3 className="process-step-title">Editorial Art Direction</h3>
              <p className="process-step-desc">
                We craft custom design concepts with bespoke typography, curated color palettes, and interactive prototypes for your review.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h3 className="process-step-title">React & CSS Engineering</h3>
              <p className="process-step-desc">
                We write clean, strictly-typed React and CSS components with responsive layout testing across 12+ real screen viewports.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h3 className="process-step-title">SEO Audit & Launch</h3>
              <p className="process-step-desc">
                We configure canonical sitemaps, verify OpenGraph cards, test form submissions, and deploy to global edge CDN infrastructure.
              </p>
            </div>
          </div>

          <div className="pricing-note-box">
            <strong>Direct Communication Guarantee:</strong> You communicate directly with founder and lead engineer Navin Chaudhary throughout the project. No junior account reps, no telephone games, and weekly live staging demos so you always know exactly what is being shipped.
          </div>
        </div>
      </section>

      {/* International Collaboration Card */}
      <section className="service-content-section">
        <div className="container">
          <div className="intl-collab-banner">
            <div className="intl-collab-grid">
              <div>
                <span className="service-section-eyebrow">Global Reach</span>
                <h2 className="intl-collab-title">Engineered for International Markets</h2>
                <p className="intl-collab-p">
                  We frequently collaborate with business owners and marketing directors across the United States, United Kingdom, Canada, and Australia.
                </p>
                <p className="intl-collab-p">
                  Our development workflow accommodates US and European business hours for sync meetings, while async video demos and GitHub milestones keep communication transparent across time zones.
                </p>
              </div>

              <div>
                <span className="service-section-eyebrow">Technical Checklist</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Standard in Every Build
                </h3>
                <ul className="comparison-points">
                  <li className="comparison-point gain">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>Global Edge CDN hosting with SSL on Vercel or Cloudflare</span>
                  </li>
                  <li className="comparison-point gain">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>Google Search Console and Bing Webmaster Tools verification</span>
                  </li>
                  <li className="comparison-point gain">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>Structured Schema.org JSON-LD for rich search engine snippets</span>
                  </li>
                  <li className="comparison-point gain">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>Accessible semantic HTML5 adhering to WCAG 2.1 standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Project Showcase */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-section-header">
            <span className="service-section-eyebrow">Live Example</span>
            <h2 className="service-section-title">Concept Showcase: Aura Studio</h2>
          </div>

          <div className="case-study-callout">
            <div className="case-study-callout-img-wrap">
              <img
                src="/images/projects/aura-studio.jpg"
                alt="Aura Studio luxury architectural website showcase"
                className="case-study-callout-img"
                loading="lazy"
              />
            </div>
            <div className="case-study-callout-body">
              <span className="case-study-concept-badge">Concept Exploration // Architecture & Spatial Design</span>
              <h3 className="case-study-callout-title">Aura Studio Brand Platform</h3>
              <p className="case-study-callout-desc">
                An editorial portfolio featuring fluid image zoom interactions, subtle GSAP parallax effects,
                and sub-second page transitions tailored for an architectural practice.
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
            <span className="service-section-eyebrow">Clear Answers</span>
            <h2 className="service-section-title">Frequently Asked Questions</h2>
            <p className="service-section-subtext">
              Direct answers to common questions about pricing, timelines, and technology.
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
            <span className="service-section-eyebrow">Other Disciplines</span>
            <h2 className="service-section-title">Explore Related Solutions</h2>
          </div>

          <div className="related-services-grid">
            <Link to={ROUTES.SERVICES_SOFTWARE} className="related-service-card">
              <span className="related-service-num">02 // SOFTWARE</span>
              <div className="related-service-title">
                Custom Software <ArrowUpRight size={16} />
              </div>
              <p className="related-service-desc">
                Internal dashboards, client portals, and bespoke web apps built for your team.
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

export default WebsiteDevelopmentPage;
