import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import { ROUTES, getProjectDetailRoute } from '../../lib/routes';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useCursor } from '../../hooks/useCursor';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="selected-work-section section-padding" aria-label="Selected Work">
      <div className="container">
        <div data-gsap="fade-up">
          <SectionHeading
            label="Portfolio"
            title={
              <>
                Selected Work & <br />
                <span className="outlined-text">Design Explorations.</span>
              </>
            }
            subtitle="Explore high-fidelity concept architectures demonstrating our visual direction, engineering standards, and technical precision."
          />
        </div>

        <div className="projects-grid" data-gsap-stagger="project-card">
          {PROJECTS.map((project, idx) => {
            const isReverse = idx % 2 === 1;
            const detailRoute = getProjectDetailRoute(project.id);

            return (
              <article
                key={project.id}
                className={`project-card ${isReverse ? 'reverse' : ''}`}
              >
                {/* Visual Preview (Clickable to detail page) */}
                <Link
                  to={detailRoute}
                  className="project-image-container"
                  onMouseEnter={() => setCursorMode('view', 'VIEW')}
                  onMouseLeave={resetCursor}
                  aria-label={`View ${project.title} case study`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} concept showcase`}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-image-overlay" />
                  <div className="project-badge-corner">
                    <Badge variant="concept">{project.conceptLabel}</Badge>
                  </div>
                </Link>

                {/* Project Information */}
                <div className="project-info-container">
                  <div className="project-category-meta">
                    <span>{project.category}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--color-warm-ivory)' }}>{project.year}</span>
                  </div>

                  <h3 className="project-title">
                    <Link
                      to={detailRoute}
                      onMouseEnter={() => setCursorMode('pointer')}
                      onMouseLeave={resetCursor}
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="project-summary">{project.summary}</p>

                  <div className="project-tags-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer-row">
                    <Button
                      to={detailRoute}
                      variant="primary"
                      size="sm"
                      icon={<ArrowUpRight size={16} />}
                      iconPosition="up-right"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Explore All Projects Button */}
        <div data-gsap="fade-up" style={{ marginTop: '4.5rem', display: 'flex', justifyContent: 'center' }}>
          <Button
            to={ROUTES.WORK}
            variant="secondary"
            size="md"
            icon={<ArrowUpRight size={16} />}
            iconPosition="up-right"
          >
            Explore Complete Portfolio & Showcase
          </Button>
        </div>
      </div>
    </section>
  );
};
