import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES, NAV_ITEMS } from '../../lib/routes';
import { BRAND } from '../../data/content';
import { Button } from '../ui/Button';
import { useCursor } from '../../hooks/useCursor';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { setCursorMode, resetCursor } = useCursor();

  // Scroll detection for blurred background header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMobileOpen(false);
  }

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Brand Wordmark */}
          <Link
            to={ROUTES.HOME}
            className="brand-link"
            onMouseEnter={() => setCursorMode('pointer')}
            onMouseLeave={resetCursor}
            aria-label={`${BRAND.name} Homepage`}
          >
            <span>VYROBYTEX</span>
            <span className="brand-dot" aria-hidden="true" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="header-actions">
            <Button
              to={ROUTES.CONTACT}
              variant="primary"
              size="sm"
              icon={<ArrowUpRight size={16} />}
              iconPosition="up-right"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`mobile-toggle ${isMobileOpen ? 'open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal={isMobileOpen}
        aria-label="Mobile Navigation Drawer"
        className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Home</span>
            <span className="mobile-nav-indicator" />
          </NavLink>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              <span>{item.label}</span>
              <span className="mobile-nav-indicator" />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Button
            to={ROUTES.CONTACT}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight size={18} />}
            iconPosition="up-right"
            onClick={() => setIsMobileOpen(false)}
          >
            Let's Talk
          </Button>
          <div className="mobile-drawer-founder">
            {BRAND.name} • Founded by <strong>{BRAND.founder}</strong>
          </div>
        </div>
      </div>
    </header>
  );
};
