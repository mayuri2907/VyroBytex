import React from 'react';
import { ArrowUpRight, CheckCircle2, HelpCircle, Users, Layers, Terminal } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ROUTES } from '../lib/routes';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ContactCTA } from '../components/sections/ContactCTA';
import { usePageSEO } from '../hooks/usePageSEO';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  usePageSEO({
    title: 'Services & Capabilities — Vyrobytex',
    description:
      'Explore Vyrobytex digital solutions: Website Development, E-commerce Solutions, Custom Software Development, and Practical AI Integrations.',
  });
  return (
    <div className="services-page">
      {/* Header / Hero */}
      <section className="services-page-hero">
        <div className="container">
          <Badge variant="concept" className="mb-4">
            Services & Capabilities
          </Badge>

          <h1 className="page-hero-title">
            Digital Solutions. <br />
            <span className="outlined-text">Engineered With Precision.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
              color: 'var(--text-secondary)',
              maxWidth: 820,
              lineHeight: 1.65,
            }}
          >
            We build custom websites, e-commerce architectures, bespoke software, and AI integrations
            that solve real operational problems and help businesses connect with their customers.
          </p>
        </div>
      </section>

      {/* Services List Deep-dive */}
      <section className="section-padding">
        <div className="container">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-detail-card" id={service.id}>
              {/* Left Column: Scope, Problems Solved, Who Benefits */}
              <div>
                <span className="service-detail-num">{service.number} // {service.tag}</span>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-desc">{service.fullDescription}</p>

                {/* Offerings list */}
                <div className="service-feature-block">
                  <div className="service-feature-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} color="var(--color-burnt-orange)" />
                    <span>Core Offerings</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {service.offerings.map((offering) => (
                      <span
                        key={offering}
                        style={{
                          fontSize: '0.8125rem',
                          padding: '0.35rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--color-warm-ivory)',
                        }}
                      >
                        {offering}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problems Solved */}
                <div className="service-feature-block">
                  <div className="service-feature-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={16} color="var(--color-burnt-orange)" />
                    <span>Business Problems This Solves</span>
                  </div>
                  <div className="service-capabilities-grid">
                    {service.problemsSolved.map((prob) => (
                      <div key={prob} className="service-cap-item">
                        <CheckCircle2
                          size={17}
                          color="var(--color-burnt-orange)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who Benefits */}
                <div className="service-feature-block" style={{ marginTop: '1.75rem' }}>
                  <div className="service-feature-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color="var(--color-burnt-orange)" />
                    <span>Who Might Benefit</span>
                  </div>
                  <div className="service-capabilities-grid">
                    {service.whoBenefits.map((beneficiary) => (
                      <div key={beneficiary} className="service-cap-item">
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-warm-ivory)',
                            display: 'inline-block',
                            marginTop: '8px',
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: 'var(--text-secondary)' }}>{beneficiary}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables Box & CTA */}
              <div className="service-deliverables-box">
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-warm-ivory)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Terminal size={16} color="var(--color-burnt-orange)" />
                    <span>Typical Deliverables</span>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: '0.9375rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-burnt-orange)',
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-warm-ivory)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Key Capabilities Included
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {service.capabilities.map((cap) => (
                        <li key={cap} style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                          • {cap}
                        </li>
                      ))}
                    </ul>
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
                    Discuss {service.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCTA />
    </div>
  );
};
