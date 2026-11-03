import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/content';
import { Badge } from '../ui/Badge';
import './FAQSection.css';

interface FAQSectionProps {
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'services-overview': true, // First question open by default for immediate discoverability
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className={`faq-section ${className}`} aria-labelledby="faq-heading">
      <div className="faq-container">
        <div className="faq-header">
          <Badge variant="concept">Direct Answers &amp; FAQ</Badge>
          <h2 id="faq-heading" className="faq-title">
            Answers to Common Questions
          </h2>
          <p className="faq-subtitle">
            Clear, transparent answers for business owners, founders, and decision-makers looking to build or scale their digital presence.
          </p>
        </div>

        <div className="faq-list" role="presentation">
          {FAQS.map((faq, index) => {
            const isOpen = !!openIds[faq.id];
            const answerId = `faq-answer-${faq.id}`;
            const buttonId = `faq-btn-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                data-faq-index={index + 1}
              >
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(faq.id)}
                >
                  <span className="faq-index-num">0{index + 1}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-chevron-wrap ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-answer-panel ${isOpen ? 'panel-open' : 'panel-collapsed'}`}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-direct-answer">{faq.answer}</p>
                    {faq.context && <p className="faq-context-answer">{faq.context}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
