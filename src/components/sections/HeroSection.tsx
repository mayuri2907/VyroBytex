import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { BRAND } from '../../data/content';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useCursor } from '../../hooks/useCursor';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-content">
          {/* Status & Founder Metadata */}
          <div className="hero-meta-row">
            <Badge variant="concept">
              <span className="pulse-dot" style={{ width: 6, height: 6 }} />
              {BRAND.availability}
            </Badge>

            <span className="hero-founder-badge">
              Founded by <strong>{BRAND.founder}</strong>
            </span>
          </div>

          {/* Bold Editorial Headline inspired by reference */}
          <h1 className="hero-headline">
            Digital Experiences.
            <br />
            Built to Move{' '}
            <span className="creative-highlight-pill">
              Business Forward.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-subheadline">
            {BRAND.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-row">
            <Button
              to={ROUTES.WORK}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={20} />}
              iconPosition="up-right"
            >
              Explore Our Work
            </Button>

            <Button
              to={ROUTES.CONTACT}
              variant="secondary"
              size="lg"
            >
              Start a Project
            </Button>
          </div>

          {/* Capabilities Pill Strip */}
          <div className="hero-pills-row">
            <span className="hero-pill-label">Capabilities</span>
            <span
              className="hero-pill-item"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              Website Development
            </span>
            <span
              className="hero-pill-item"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              E-commerce Solutions
            </span>
            <span
              className="hero-pill-item"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              Software Development
            </span>
            <span
              className="hero-pill-item"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              AI Solutions
            </span>
            <span
              className="hero-pill-item"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              Website Maintenance
            </span>
          </div>

          {/* Credible Editorial Value Ribbon (No fake counters or fabricated stats) */}
          <div className="hero-metrics-strip">
            <div className="hero-metric-item">
              <div className="hero-metric-title">Bespoke Architecture</div>
              <div className="hero-metric-label">Custom engineering without generic templates</div>
            </div>

            <div className="hero-metric-item">
              <div className="hero-metric-title">High Performance</div>
              <div className="hero-metric-label">Optimized for speed, SEO & accessibility</div>
            </div>

            <div className="hero-metric-item">
              <div className="hero-metric-title">Practical AI</div>
              <div className="hero-metric-label">Automated workflows tailored to your business</div>
            </div>

            <div className="hero-metric-item">
              <div className="hero-metric-title">Direct Partnership</div>
              <div className="hero-metric-label">Collaborate directly with founder Navin Chaudhary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
