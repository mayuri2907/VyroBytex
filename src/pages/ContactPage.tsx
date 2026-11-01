import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useCursor } from '../hooks/useCursor';
import { usePageSEO } from '../hooks/usePageSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ContactPage.css';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactPage: React.FC = () => {
  usePageSEO({
    title: "Contact Vyrobytex — Let's Talk About Your Project",
    description:
      'Start a project conversation with Vyrobytex. Reach founder Navin Chaudhary directly via WhatsApp (+91 81609 59830), phone, or email.',
  });
  const { setCursorMode, resetCursor } = useCursor();

  const heroRef = useScrollReveal({ yOffset: 20 });
  const mainRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICES[0].title,
    budget: '$5,000 – $15,000',
    message: '',
  });

  const [feedbackNotice, setFeedbackNotice] = useState<string | null>(null);

  // Direct email client submission handler
  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out Name, Business Email, and Project Details before proceeding.');
      return;
    }

    const subject = encodeURIComponent(`Project Enquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Navin & Vyrobytex Team,\n\n` +
        `I would like to discuss a project with Vyrobytex:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Business Email: ${formData.email}\n` +
        `• Company/Brand: ${formData.company || 'Not Specified'}\n` +
        `• Service Interested In: ${formData.service}\n` +
        `• Estimated Budget: ${formData.budget}\n\n` +
        `Project Summary & Scope:\n${formData.message}\n\n` +
        `Looking forward to hearing from you.\n`
    );

    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setFeedbackNotice(
      `Opening your default email client with your pre-formatted project enquiry. You can also write directly to ${BRAND.email}.`
    );
  };

  // Direct WhatsApp submission handler
  const handleSendViaWhatsApp = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please enter your Name and Project Details to generate a WhatsApp message.');
      return;
    }

    const text = encodeURIComponent(
      `Hello Navin,\n\n` +
        `My name is ${formData.name}${formData.company ? ` from ${formData.company}` : ''}.\n` +
        `I'm interested in *${formData.service}*.\n\n` +
        `Project Overview:\n${formData.message}\n\n` +
        `Email: ${formData.email || 'N/A'}`
    );

    window.open(`https://wa.me/91${BRAND.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
    setFeedbackNotice(
      `Opening WhatsApp chat with Navin Chaudhary with your pre-filled inquiry.`
    );
  };

  return (
    <div className="contact-page">
      {/* Hero with Exact Required Copy */}
      <section ref={heroRef} className="services-page-hero">
        <div className="container">
          <div data-gsap="fade-up">
            <Badge variant="concept" className="mb-4">
              Contact & Enquiries
            </Badge>

            {/* Heading from Prompt 2 */}
            <h1 className="page-hero-title">
              Let's Talk About <br />
              <span className="outlined-text">Your Project.</span>
            </h1>

            {/* Supporting text from Prompt 2 */}
            <p
              style={{
                fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
                color: 'var(--text-secondary)',
                maxWidth: 780,
                lineHeight: 1.65,
              }}
            >
              Tell us what you're building, what your business needs, or which problem you'd like to solve.
              You will hear directly from founder Navin Chaudhary.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section ref={mainRef} className="section-padding">
        <div className="container">
          <div className="contact-page-grid">
            {/* Left Column: Direct Official Contact Actions */}
            <div className="contact-info-panel" data-gsap="fade-up">
              <div>
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Direct Communication Channels
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Reach out directly through WhatsApp, phone, or email for project proposals, architectural consultations, and scope reviews.
                </p>
              </div>

              {/* WhatsApp Card */}
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                <div className="contact-method-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.12)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#22C55E' }}>
                  <MessageCircle size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    WhatsApp Direct
                  </div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {BRAND.phoneDisplay}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#16A34A', marginTop: '0.125rem', fontWeight: 600 }}>
                    Instant messaging & chat
                  </div>
                </div>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </a>

              {/* Direct Call Card */}
              <a
                href={BRAND.callUrl}
                className="contact-method-card"
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                <div className="contact-method-icon">
                  <Phone size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Direct Phone Call
                  </div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {BRAND.phoneDisplay}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.125rem' }}>
                    Mon – Sat, 9:00 AM – 7:00 PM IST
                  </div>
                </div>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </a>

              {/* Email Card */}
              <a
                href={BRAND.emailUrl}
                className="contact-method-card"
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                <div className="contact-method-icon">
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Official Business Email
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                    {BRAND.email}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-burnt-orange)', marginTop: '0.125rem', fontWeight: 600 }}>
                    24–48 hr proposal turnaround
                  </div>
                </div>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </a>

              {/* Instagram Profile Card */}
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                <div className="contact-method-icon" style={{ backgroundColor: 'rgba(213, 54, 7, 0.08)', borderColor: 'rgba(213, 54, 7, 0.3)', color: 'var(--color-burnt-orange)' }}>
                  <InstagramIcon size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Instagram Profile
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    @astralxxixnax
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-burnt-orange)', marginTop: '0.125rem', fontWeight: 600 }}>
                    Connect & view creative updates
                  </div>
                </div>
                <ArrowUpRight size={18} color="var(--text-muted)" />
              </a>

              {/* Status Note */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Project Review Status
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {BRAND.availability}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Reviewed personally by founder {BRAND.founder}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Discovery Form Interface */}
            <div className="contact-form-container" data-gsap="fade-up">
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-burnt-orange)',
                  }}
                >
                  Direct Discovery Form
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginTop: '0.5rem',
                  }}
                >
                  Tell Us About Your Project
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  Fill out your project goals below. You can send your inquiry directly via your preferred email client or via WhatsApp.
                </p>
              </div>

              {feedbackNotice && (
                <div
                  style={{
                    background: 'rgba(213, 54, 7, 0.12)',
                    border: '1px solid var(--color-burnt-orange)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.125rem',
                    color: 'var(--color-warm-ivory)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {feedbackNotice}
                </div>
              )}

              <form onSubmit={handleSendViaEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service Category
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Project Consultation">Custom Project Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="Under $5,000">Under $5,000 (Targeted Build or Consultation)</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000 (Custom Web / E-Commerce)</option>
                    <option value="$15,000 – $35,000">$15,000 – $35,000 (Bespoke Software / Full Platform)</option>
                    <option value="$35,000+">$35,000+ (Enterprise Architecture & AI Integration)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Goals & Specific Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    placeholder="Describe your current project, target features, audience, or problems you are aiming to solve..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Direct Action Submission Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.75rem' }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Mail size={18} />}
                    iconPosition="left"
                    style={{ width: '100%' }}
                  >
                    Send Enquiry via Email
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    icon={<MessageCircle size={18} />}
                    iconPosition="left"
                    onClick={handleSendViaWhatsApp}
                    style={{ width: '100%' }}
                  >
                    Send Enquiry via WhatsApp
                  </Button>
                </div>

                {/* Transparent Notice (Complying strictly with Prompt 2 rule against fake success confirmations) */}
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    marginTop: '0.75rem',
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: 'var(--color-warm-ivory)' }}>Direct Transmission:</strong>{' '}
                  This form directly formats your inquiry into your email app or WhatsApp. No hidden database tracking or simulated loading states.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
