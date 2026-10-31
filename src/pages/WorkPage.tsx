import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ROUTES, getProjectDetailRoute } from '../lib/routes';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ContactCTA } from '../components/sections/ContactCTA';
import { useCursor } from '../hooks/useCursor';
import { usePageSEO } from '../hooks/usePageSEO';
import './WorkPage.css';

type FilterCategory = 'All' | 'E-commerce' | 'Software Development' | 'AI Solutions';

export const WorkPage: React.FC = () => {
  usePageSEO({
    title: 'Selected Work & Portfolio — Vyrobytex',
    description:
      'Curated concept architectures and production-minded design explorations across e-commerce, custom software, and AI solutions.',
  });
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const { setCursorMode, resetCursor } = useCursor();

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="work-page">
      {/* Header */}
      <section className="services-page-hero">
        <div className="container">
          <Badge variant="concept" className="mb-4">
            Selected Work & Concept Showcases
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
            Digital Craftsmanship. <br />
            <span className="outlined-text">Tested in Production.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
              color: 'var(--text-secondary)',
              maxWidth: 780,
              lineHeight: 1.65,
            }}
          >
            Explore our curated digital projects and high-fidelity concept architectures. Each build
            demonstrates our standard for visual art direction, micro-interactions, responsive
            layouts, and clean engineering.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="section-padding">
        <div className="container">
          {/* Integrity Note */}
          <div className="work-disclaimer-box">
            <ShieldCheck size={20} color="var(--color-burnt-orange)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
              <strong style={{ color: 'var(--color-warm-ivory)' }}>Honest Portfolio Standard:</strong>{' '}
              All featured items are genuine design architectures or clearly identified concept showcases
              engineered by Vyrobytex to demonstrate specific technical capabilities, interaction design, and
              code quality.
            </p>
          </div>

          {/* Category Filter */}
          <div className="work-filter-bar" role="tablist" aria-label="Project Categories">
            {(['All', 'E-commerce', 'Software Development', 'AI Solutions'] as FilterCategory[]).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`work-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Projects Display */}
          <div className="work-detail-grid">
            {filteredProjects.map((project) => {
              const detailRoute = getProjectDetailRoute(project.id);

              return (
                <article key={project.id} className="work-card-expanded">
                  {/* Visual Image with link */}
                  <Link
                    to={detailRoute}
                    className="work-card-img-wrap"
                    onMouseEnter={() => setCursorMode('view', 'VIEW')}
                    onMouseLeave={resetCursor}
                    aria-label={`Explore ${project.title} case study`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      className="work-card-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="project-badge-corner">
                      <Badge variant="concept">{project.conceptLabel}</Badge>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="work-card-body">
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          fontSize: '0.8125rem',
                          color: 'var(--color-burnt-orange)',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <span>{project.category}</span>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span style={{ color: 'var(--color-warm-ivory)' }}>{project.year}</span>
                      </div>

                      <h2
                        style={{
                          fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
                          fontWeight: 800,
                          letterSpacing: '-0.02em',
                          color: 'var(--text-primary)',
                          marginBottom: '1rem',
                          lineHeight: 1.1,
                        }}
                      >
                        <Link
                          to={detailRoute}
                          onMouseEnter={() => setCursorMode('pointer')}
                          onMouseLeave={resetCursor}
                        >
                          {project.title}
                        </Link>
                      </h2>

                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.7,
                          marginBottom: '1.5rem',
                        }}
                      >
                        {project.summary}
                      </p>

                      <div className="project-tags-wrap" style={{ marginBottom: '2rem' }}>
                        {project.tags.map((t) => (
                          <span key={t} className="project-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
                      <Button
                        to={detailRoute}
                        variant="primary"
                        size="sm"
                        icon={<ArrowUpRight size={16} />}
                        iconPosition="up-right"
                      >
                        View Case Study
                      </Button>

                      <Button
                        to={ROUTES.CONTACT}
                        variant="secondary"
                        size="sm"
                      >
                        Start Similar Project
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCTA />
    </div>
  );
};
