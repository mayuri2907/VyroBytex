import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { ROUTES } from '../../lib/routes';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useCursor } from '../../hooks/useCursor';
import './ServicesInteractive.css';

export const ServicesInteractive: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const { setCursorMode, resetCursor } = useCursor();
  const previewRef = useRef<HTMLDivElement>(null);

  const activeService = SERVICES.find((s) => s.id === activeServiceId);

  // Smooth floating preview position calculation with viewport boundary adaptation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const previewWidth = 320;
      const previewHeight = 200;

      // Flip preview to left of cursor if approaching right boundary
      const shouldFlipLeft = e.clientX > window.innerWidth - (previewWidth + 40);
      const offsetX = shouldFlipLeft ? -previewWidth - 20 : 40;
      const offsetY = -previewHeight * 0.5;

      const x = Math.max(20, Math.min(e.clientX + offsetX, window.innerWidth - previewWidth - 20));
      const y = Math.max(80, Math.min(e.clientY + offsetY, window.innerHeight - previewHeight - 20));

      setPreviewPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="services-section section-padding" aria-label="Services and Solutions">
      <div className="container">
        {/* Section Header */}
        <SectionHeading
          label="Capabilities"
          title={
            <>
              Engineered for Impact. <br />
              <span className="outlined-text">Tailored for Scale.</span>
            </>
          }
          subtitle="We combine contemporary design sensibilities with robust technical execution to solve real business challenges."
        />

        {/* Interactive Typography Rows (Reference A inspired) */}
        <div className="services-rows-container">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            const isHovered = activeServiceId === service.id;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`service-row-item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => {
                  setActiveServiceId(service.id);
                  setCursorMode('explore', 'EXPLORE');
                }}
                onMouseLeave={() => {
                  setActiveServiceId(null);
                  resetCursor();
                }}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  className="service-row-header"
                  onClick={() => toggleAccordion(service.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="service-row-left">
                    <span className="service-index">{service.number}</span>
                    <div className="service-title-wrap">
                      <span
                        className={`service-title-display ${
                          isEven && !isHovered ? 'outlined-text' : ''
                        }`}
                      >
                        {service.title}
                      </span>
                      <span className="service-subtitle-preview">
                        {service.shortDescription}
                      </span>
                    </div>
                  </div>

                  <div className="service-row-right">
                    <span className="service-tag-pill">{service.tag}</span>
                    <div className="service-arrow-indicator" aria-hidden="true">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </button>

                {/* Accessible Accordion Dropdown on Click & Mobile */}
                <div
                  className={`service-accordion-content ${isExpanded ? 'expanded' : ''}`}
                  aria-hidden={!isExpanded}
                >
                  <div className="service-expanded-grid">
                    <div>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                        {service.fullDescription}
                      </p>

                      <div style={{ marginTop: '1.25rem' }}>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--color-warm-ivory)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          Core Offerings
                        </div>
                        <div className="capabilities-list">
                          {service.offerings.map((offering) => (
                            <span key={offering} className="capability-chip">
                              {offering}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--color-warm-ivory)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          Key Deliverables
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {service.deliverables.map((d) => (
                            <li
                              key={d}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.875rem',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              <CheckCircle2 size={14} color="var(--color-burnt-orange)" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginTop: '1.5rem' }}>
                        <Button
                          to={`${ROUTES.SERVICES}#${service.id}`}
                          variant="secondary"
                          size="sm"
                          icon={<ArrowUpRight size={14} />}
                        >
                          Explore In Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            to={ROUTES.SERVICES}
            variant="secondary"
            size="md"
            icon={<ArrowUpRight size={16} />}
            iconPosition="up-right"
          >
            View Complete Services Overview
          </Button>
        </div>
      </div>

      {/* Floating Image Preview on Hover (Desktop) */}
      <div
        ref={previewRef}
        className={`floating-service-preview ${activeService ? 'active' : ''}`}
        style={{
          left: `${previewPos.x}px`,
          top: `${previewPos.y}px`,
        }}
        aria-hidden="true"
      >
        {activeService && activeService.previewImage && (
          <img
            src={activeService.previewImage}
            alt={activeService.title}
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
};
