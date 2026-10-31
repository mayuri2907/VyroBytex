import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ROUTES } from '../lib/routes';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/sections/ContactCTA';
import { useCursor } from '../hooks/useCursor';
import { usePageSEO } from '../hooks/usePageSEO';
import './ProjectDetailPage.css';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setCursorMode, resetCursor } = useCursor();

  const project = PROJECTS.find((p) => p.id === id);

  usePageSEO({
    title: project ? `${project.title} — Case Study | Vyrobytex` : 'Project Showcase — Vyrobytex',
    description: project?.summary,
  });

  if (!project) {
    return <Navigate to={ROUTES.WORK} replace />;
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Back Link */}
        <Link
          to={ROUTES.WORK}
          className="project-back-link"
          onMouseEnter={() => setCursorMode('pointer')}
          onMouseLeave={resetCursor}
        >
          <ArrowLeft size={16} />
          <span>Back to Selected Work</span>
        </Link>

        {/* Hero Header */}
        <div className="project-detail-hero">
          <div className="project-detail-meta-row">
            <Badge variant="concept">{project.conceptLabel}</Badge>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-burnt-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {project.category}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-warm-ivory)' }}>{project.year}</span>
          </div>

          <h1 className="project-detail-headline">{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>
        </div>

        {/* Big Showcase Image */}
        <div className="project-detail-banner-wrap">
          <img
            src={project.image}
            alt={`${project.title} — Full case study view`}
            className="project-detail-banner-img"
            decoding="async"
          />
        </div>

        {/* Narrative & Technical Spec Grid */}
        <div className="project-narrative-grid">
          {/* Main Narrative Column */}
          <div>
            <div className="project-narrative-block">
              <h2 className="project-narrative-title">Concept Background & Objective</h2>
              <p className="project-narrative-body">{project.description}</p>
            </div>

            <div className="project-narrative-block">
              <h2 className="project-narrative-title">The Challenge</h2>
              <p className="project-narrative-body">{project.challenge}</p>
            </div>

            <div className="project-narrative-block">
              <h2 className="project-narrative-title">Engineering & Architectural Solution</h2>
              <p className="project-narrative-body">{project.solution}</p>
            </div>

            <div className="project-narrative-block">
              <h2 className="project-narrative-title">Architecture & Code Highlights</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1rem' }}>
                {project.architectureHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--color-burnt-orange)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-narrative-block">
              <h2 className="project-narrative-title">Key Interaction Design Features</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1rem' }}>
                {project.keyInteractions.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-burnt-orange)',
                        display: 'inline-block',
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar Specs Column */}
          <div>
            <div className="project-spec-card">
              <div className="project-spec-group">
                <div className="project-spec-label">Project Type</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {project.category}
                </div>
              </div>

              <div className="project-spec-group">
                <div className="project-spec-label">Project Context</div>
                <div style={{ fontSize: '0.9375rem', color: 'var(--color-warm-ivory)' }}>
                  {project.clientOrContext}
                </div>
              </div>

              <div className="project-spec-group">
                <div className="project-spec-label">Technologies Used</div>
                <div className="project-tech-badges">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-spec-group">
                <div className="project-spec-label">Tags</div>
                <div className="project-tech-badges">
                  {project.tags.map((t) => (
                    <span key={t} className="project-tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Button
                  to={ROUTES.CONTACT}
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight size={16} />}
                  iconPosition="up-right"
                  style={{ width: '100%' }}
                >
                  Commission Similar Build
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <ContactCTA />
    </div>
  );
};
