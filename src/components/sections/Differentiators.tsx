import React from 'react';
import { Layers, FileCheck, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { DIFFERENTIATORS } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { useCursor } from '../../hooks/useCursor';
import './Differentiators.css';

export const Differentiators: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'FileCheck':
        return <FileCheck size={22} />;
      case 'Eye':
        return <Eye size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <section className="differentiators-section section-padding" aria-label="Why Vyrobytex">
      <div className="container">
        <SectionHeading
          label="Why Vyrobytex"
          title={
            <>
              Principled Digital Execution. <br />
              <span className="outlined-text">Built for Real Businesses.</span>
            </>
          }
          subtitle="We focus on what actually moves your business forward: transparent communication, bespoke design, and reliable technical stewardship."
        />

        <div className="diff-grid">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.title}
              className="diff-card"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              <div className="diff-icon-wrap">{getIcon(diff.icon)}</div>
              <span className="diff-highlight">{diff.highlight}</span>
              <h3 className="diff-title">{diff.title}</h3>
              <p className="diff-description">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
