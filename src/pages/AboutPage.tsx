import React from 'react';
import { ArrowUpRight, Code2, Users, Compass, ShieldCheck } from 'lucide-react';
import { BRAND, WORKING_PRINCIPLES, PROCESS_STEPS } from '../data/content';
import { ROUTES } from '../lib/routes';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactCTA } from '../components/sections/ContactCTA';
import { usePageSEO } from '../hooks/usePageSEO';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About Vyrobytex — Founder & Philosophy',
    description:
      'Learn about Vyrobytex, founder Navin Chaudhary, our 5 operating principles, and our disciplined digital delivery process.',
  });
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="services-page-hero">
        <div className="container">
          <Badge variant="concept" className="mb-4">
            About Vyrobytex
          </Badge>

          <h1
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              margin: '1.5rem 0',
            }}
          >
            Digital Experiences. <br />
            <span className="outlined-text">Grounded in Business Reality.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
              color: 'var(--text-secondary)',
              maxWidth: 780,
              lineHeight: 1.65,
            }}
          >
            Vyrobytex is an independent digital solutions company focused on building custom
            websites, bespoke software, e-commerce platforms, and practical AI integrations that
            deliver genuine commercial value.
          </p>
        </div>
      </section>

      {/* Brand Introduction & Founder Profile */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <SectionHeading
                label="Company & Leadership"
                title={
                  <>
                    More Than a Website. <br />
                    A Digital Partnership.
                  </>
                }
                subtitle="How Vyrobytex approaches design, technology, and client collaboration."
              />

              <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Vyrobytex was founded by <strong>{BRAND.founder}</strong> with a singular focus: to
                help businesses establish digital experiences that are not only visually memorable, but
                technically sound, accessible, and aligned with measurable business objectives.
              </p>

              <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Rather than treating website development as a one-off visual task, we approach every
                project as an essential communication tool between a company and its customers. Every
                interaction, typographic layout, and code architecture is engineered to build authority
                and make customer journeys effortless.
              </p>

              {/* Founder Biography Card (Concise, authentic, no invented history) */}
              <div className="about-quote-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-burnt-orange)',
                    }}
                  />
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-warm-ivory)' }}>
                    Founder Biography
                  </div>
                </div>

                <div style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {BRAND.founder}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-burnt-orange)', fontWeight: 600, marginBottom: '1rem' }}>
                  Founder, Vyrobytex
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  Navin leads creative direction and software architecture at Vyrobytex. Working
                  directly with business owners and product teams, he bridges contemporary visual
                  design with clean full-stack engineering, ensuring every delivered system is
                  reliable, fast, and maintainable.
                </p>
              </div>
            </div>

            {/* Approach Card */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--color-warm-ivory)',
                  marginBottom: '1.5rem',
                }}
              >
                Our Delivery Ethos
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Code2 size={22} color="var(--color-burnt-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Bespoke Engineering
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      Zero generic visual templates or bloated drag-and-drop page builders. Every build uses clean, modular code.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Users size={22} color="var(--color-burnt-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Direct Founder Collaboration
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      You work directly with founder Navin Chaudhary through discovery, design, and code deployment.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Compass size={22} color="var(--color-burnt-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Commercial Focus
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      Every feature is measured against business clarity, conversion rate, and user convenience.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={22} color="var(--color-burnt-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Transparent Scope & Support
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      Fixed milestone pricing with zero hidden fees and optional ongoing technical maintenance agreements.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Button
                  to={ROUTES.CONTACT}
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight size={16} />}
                  iconPosition="up-right"
                  style={{ width: '100%' }}
                >
                  Start a Project Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Working Principles (Directly from Prompt 2) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeading
            label="Working Principles"
            title={
              <>
                The Standards We Uphold. <br />
                <span className="outlined-text">Every Single Project.</span>
              </>
            }
            subtitle="Our 5 core operating principles that guide our technical architecture, design choices, and client relationships."
          />

          <div className="values-grid">
            {WORKING_PRINCIPLES.map((principle) => (
              <div key={principle.number} className="value-card">
                <span className="value-card-num">{principle.number}</span>
                <h3 className="value-card-title">{principle.title}</h3>
                <p className="value-card-desc">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Work Process Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeading
            label="Work Process"
            title={
              <>
                From Initial Idea <br />
                <span className="outlined-text">To Production Launch.</span>
              </>
            }
            subtitle="How projects move systematically from initial conversation through design, development, testing, and deployment."
          />

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-step-indicator">
                  <span className="process-step-num">{step.step}</span>
                  <span className="process-step-dot" aria-hidden="true" />
                </div>
                <div className="process-subtitle">{step.subtitle}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                <div className="process-activities">
                  {step.keyActivities.map((act) => (
                    <div key={act} className="process-activity-item">
                      <span className="process-activity-bullet" aria-hidden="true" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCTA />
    </div>
  );
};
