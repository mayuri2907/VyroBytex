import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, TEAM_SECTION_CONTENT } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { useCursor } from '../../hooks/useCursor';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TeamSection.css';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export interface TeamSectionProps {
  variant?: 'full' | 'compact';
  id?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  variant = 'full',
  id = 'team-section',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal({ triggerRef: sectionRef });

  const { setCursorMode, resetCursor } = useCursor();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (memberId: string) => {
    setImageErrors((prev) => ({ ...prev, [memberId]: true }));
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`team-section ${variant} section-padding`}
      aria-label="Vyrobytex Team Members"
    >
      <div className="container">
        {/* Section Heading & Subtitle */}
        <div className="team-header-wrap" data-gsap="fade-up">
          <SectionHeading
            label="Vyrobytex Team"
            title={TEAM_SECTION_CONTENT.heading}
            subtitle={TEAM_SECTION_CONTENT.supportingText}
          />
        </div>

        {/* Team Grid with 5 Members in Exact Sequence */}
        <div className="team-grid" data-gsap-stagger="team-card">
          {TEAM_MEMBERS.map((member) => {
            const hasError = imageErrors[member.id];
            const cleanedName = member.name.replace(/\b(ms|mr|mrs|dr)\.?\s+/gi, '');
            const initials = cleanedName
              .split(' ')
              .filter(Boolean)
              .map((w) => w[0])
              .join('');

            return (
              <article
                key={member.id}
                className={`team-card ${member.isFounder ? 'is-founder' : ''}`}
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                {/* Portrait Area (Consistent 4:5 Aspect Ratio) */}
                <div className="team-portrait-wrap">
                  <span className="team-number-pill" aria-hidden="true">
                    // {member.number}
                  </span>

                  {member.isFounder && (
                    <span className="team-badge-pill">Founder</span>
                  )}

                  {!hasError ? (
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="team-portrait-img"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(member.id)}
                    />
                  ) : (
                    <div className="team-portrait-fallback" role="img" aria-label={member.alt}>
                      <span className="team-fallback-initials">{initials}</span>
                      <span className="team-fallback-note">Portrait Placeholder</span>
                    </div>
                  )}
                </div>

                {/* Team Card Info */}
                <div className="team-card-body">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>

                  {(member.portfolioUrl || member.instagramUrl) && (
                    <div className="team-actions-row">
                      {member.portfolioUrl && (
                        <a
                          href={member.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-portfolio-btn"
                          aria-label={`View ${member.name}'s portfolio (opens in a new tab)`}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => setCursorMode('pointer')}
                          onMouseLeave={resetCursor}
                        >
                          <span>Portfolio</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}

                      {member.instagramUrl && (
                        <a
                          href={member.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-portfolio-btn team-instagram-btn"
                          aria-label={`Visit ${member.name}'s Instagram (opens in a new tab)`}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => setCursorMode('pointer')}
                          onMouseLeave={resetCursor}
                        >
                          <InstagramIcon size={13} />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
