import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import { BRAND, SERVICES } from '../../data/content';
import { useCursor } from '../../hooks/useCursor';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { setCursorMode, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <Link
              to={ROUTES.HOME}
              className="footer-brand-logo"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              <span>VYROBYTEX</span>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-burnt-orange)',
                  display: 'inline-block',
                }}
              />
            </Link>
            <p className="footer-tagline">"{BRAND.tagline}"</p>
            <p className="footer-founder-note">
              Founded by <strong>{BRAND.founder}</strong>. Delivering high-performance custom websites, e-commerce platforms, custom software, and AI integrations for forward-thinking businesses.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="footer-column-title">Navigation</h3>
            <ul className="footer-link-list">
              <li>
                <Link
                  to={ROUTES.HOME}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.WORK}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SERVICES}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ABOUT}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="footer-column-title">Capabilities</h3>
            <ul className="footer-link-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={ROUTES.SERVICES}
                    className="footer-link"
                    onMouseEnter={() => setCursorMode('pointer')}
                    onMouseLeave={resetCursor}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connect */}
          <div>
            <h3 className="footer-column-title">Get in Touch</h3>
            <ul className="footer-link-list">
              <li>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: 'var(--color-burnt-orange)', fontWeight: 600 }}
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                  aria-label="Contact us on WhatsApp"
                >
                  WhatsApp: {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                  aria-label="Visit our Instagram profile"
                >
                  Instagram (@vyrobytex)
                </a>
              </li>
              <li>
                <a
                  href={BRAND.emailUrl}
                  className="footer-link"
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                  aria-label="Send us an email"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {BRAND.availability}
                </span>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  style={{
                    color: 'var(--color-burnt-orange)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginTop: '0.5rem',
                  }}
                  onMouseEnter={() => setCursorMode('pointer')}
                  onMouseLeave={resetCursor}
                >
                  Start a Project &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {CURRENT_YEAR} {BRAND.name}. All rights reserved. Founded by {BRAND.founder}.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            onMouseEnter={() => setCursorMode('pointer')}
            onMouseLeave={resetCursor}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
