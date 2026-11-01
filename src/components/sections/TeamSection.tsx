import React, { useState, useRef } from 'react';
import { TEAM_MEMBERS, TEAM_SECTION_CONTENT } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { useCursor } from '../../hooks/useCursor';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TeamSection.css';

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

        {/* Team Grid with 4 Members in Exact Sequence */}
        <div className="team-grid" data-gsap-stagger="team-card">
          {TEAM_MEMBERS.map((member) => {
            const hasError = imageErrors[member.id];
            const initials = member.name
              .split(' ')
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
