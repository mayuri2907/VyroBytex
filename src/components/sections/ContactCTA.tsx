import React from 'react';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { BRAND } from '../../data/content';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta-section" aria-label="Start a Project">
      <div className="container">
        <div className="contact-cta-banner">
          <div className="contact-cta-content">
            <div className="contact-cta-badge-wrap">
              <Badge variant="concept">
                <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                {BRAND.availability}
              </Badge>
            </div>

            {/* Exact Headline from Prompt 2 Section G */}
            <h2 className="contact-cta-title">
              Have an Idea?{' '}
              <span style={{ color: 'var(--color-burnt-orange)' }}>Let's Build It.</span>
            </h2>

            <p className="contact-cta-text">
              {BRAND.finalCtaSubtext}
            </p>

            <div className="contact-cta-actions">
              <Button
                to={ROUTES.CONTACT}
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={20} />}
                iconPosition="up-right"
              >
                Let's Talk
              </Button>

              <Button
                href={BRAND.whatsappUrl}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle size={18} />}
                iconPosition="left"
              >
                WhatsApp Direct
              </Button>

              <Button
                href={BRAND.emailUrl}
                variant="ghost"
                size="lg"
                icon={<Mail size={18} />}
                iconPosition="left"
              >
                {BRAND.email}
              </Button>
            </div>

            <div className="contact-cta-footer-note">
              Direct review & proposal within 24–48 business hours by founder{' '}
              <strong>{BRAND.founder}</strong>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
