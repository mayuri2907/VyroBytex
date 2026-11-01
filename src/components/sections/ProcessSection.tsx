import React from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { useCursor } from '../../hooks/useCursor';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProcessSection.css';

export const ProcessSection: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="process-section section-padding" aria-label="Development Process">
      <div className="container">
        <div data-gsap="fade-up">
          <SectionHeading
            label="Our Process"
            title={
              <>
                Structured Execution. <br />
                <span className="outlined-text">Predictable Outcomes.</span>
              </>
            }
            subtitle="Every project moves through a disciplined four-phase delivery cycle to ensure visual excellence and on-time execution."
          />
        </div>

        <div className="process-grid" data-gsap-stagger="process-card">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="process-card"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
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
  );
};
