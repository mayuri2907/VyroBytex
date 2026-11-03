import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { isCinematicIntroActive } from '../../lib/introState';
import { useCursor } from '../../hooks/useCursor';
import './LeadCaptureModal.css';

const SESSION_DISMISSED_KEY = 'vyro_lead_modal_dismissed';
const SESSION_SUBMITTED_KEY = 'vyro_lead_modal_submitted';
const SESSION_TIMER_START_KEY = 'vyro_lead_timer_started_at';
const LEAD_POPUP_DELAY_MS = 15000; // 15 seconds

const SERVICE_OPTIONS = [
  'Website Development',
  'E-commerce Solutions',
  'Software Development',
  'AI Solutions',
  'Other',
] as const;

export const LeadCaptureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('Thanks! Your enquiry has been received.');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    service: 'Website Development',
    hp_company_website: '', // Honeypot spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const { setCursorMode, resetCursor } = useCursor();

  // Handle explicit dismissal by visitor (Cross button or Escape)
  const handleClose = useCallback(() => {
    sessionStorage.setItem(SESSION_DISMISSED_KEY, 'true');
    setIsOpen(false);
    resetCursor();
  }, [resetCursor]);

  // 1. Session & Timing Management
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if dismissed or submitted in this browser session
    const isDismissed = sessionStorage.getItem(SESSION_DISMISSED_KEY) === 'true';
    const isSubmitted = sessionStorage.getItem(SESSION_SUBMITTED_KEY) === 'true';

    if (isDismissed || isSubmitted) {
      return;
    }

    let timerId: number | undefined;

    const startCountdown = () => {
      // Re-check session storage flags
      if (
        sessionStorage.getItem(SESSION_DISMISSED_KEY) === 'true' ||
        sessionStorage.getItem(SESSION_SUBMITTED_KEY) === 'true'
      ) {
        return;
      }

      // Check when timer was first started in this session
      let startedAt = parseInt(sessionStorage.getItem(SESSION_TIMER_START_KEY) || '0', 10);
      if (!startedAt) {
        startedAt = Date.now();
        sessionStorage.setItem(SESSION_TIMER_START_KEY, startedAt.toString());
      }

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, LEAD_POPUP_DELAY_MS - elapsed);

      timerId = window.setTimeout(() => {
        // Confirm again before opening
        const alreadyDismissed = sessionStorage.getItem(SESSION_DISMISSED_KEY) === 'true';
        const alreadySubmitted = sessionStorage.getItem(SESSION_SUBMITTED_KEY) === 'true';

        if (!alreadyDismissed && !alreadySubmitted) {
          setIsOpen(true);
        }
      }, remaining);
    };

    // If cinematic intro is currently active, wait for it to finish before starting countdown
    if (isCinematicIntroActive()) {
      const handleIntroDone = () => {
        window.removeEventListener('vyro:intro-completed', handleIntroDone);
        startCountdown();
      };
      window.addEventListener('vyro:intro-completed', handleIntroDone);

      return () => {
        window.removeEventListener('vyro:intro-completed', handleIntroDone);
        if (timerId) window.clearTimeout(timerId);
      };
    } else {
      // Website is already interactive
      startCountdown();

      return () => {
        if (timerId) window.clearTimeout(timerId);
      };
    }
  }, []);

  // 2. Scroll Lock & Focus Management
  useEffect(() => {
    if (!isOpen) return;

    // Save current active element for focus restoration
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    // Compute scrollbar width to prevent horizontal layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPaddingRight = document.body.style.paddingRight;
    const originalOverflow = document.body.style.overflow;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    // Focus first input field smoothly
    const focusTimeout = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    // Keyboard Trap & Escape Handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl?.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimeout);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      // Restore focus to previous element
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isOpen, handleClose]);

  // Field change handler with dynamic validation clearing
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (serverError) {
      setServerError(null);
    }
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const trimmedName = formData.fullName.trim();
    if (!trimmedName || trimmedName.length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const trimmedMobile = formData.mobile.trim();
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,16}$/;
    if (!trimmedMobile || !phoneRegex.test(trimmedMobile)) {
      newErrors.mobile = 'Please enter a valid phone number (e.g. +91 98765 43210).';
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service || !SERVICE_OPTIONS.includes(formData.service as any)) {
      newErrors.service = 'Please select a service from the options.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          mobile: formData.mobile.trim(),
          email: formData.email.trim(),
          service: formData.service,
          currentPage: window.location.href,
          timestamp: new Date().toISOString(),
          hp_company_website: formData.hp_company_website,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        // Success: Close modal & register completion in session
        sessionStorage.setItem(SESSION_SUBMITTED_KEY, 'true');
        setIsOpen(false);
        resetCursor();

        // Show subtle success toast
        setToastMessage('Thanks! Your enquiry has been received.');
        setIsToastVisible(true);

        // Auto-hide toast after 5s
        window.setTimeout(() => {
          setIsToastVisible(false);
        }, 5000);
      } else {
        // Failure: Preserve values & present clear error message
        const errMsg =
          data.error ||
          (data.code === 'CONFIG_REQUIRED'
            ? 'Email notification pending setup. Please contact founder Navin Chaudhary directly via WhatsApp.'
            : 'Unable to deliver your enquiry right now. Please try again or reach out on WhatsApp.');
        setServerError(errMsg);
      }
    } catch {
      setServerError('Network connection issue. Please check your internet connection and retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Lead Capture Modal */}
      {isOpen && (
        <aside
          className="lead-modal-backdrop"
          role="presentation"
          /* Note: Outside clicking is intentionally ignored to prevent accidental closure */
        >
          <div
            ref={modalRef}
            className="lead-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            aria-describedby="lead-modal-desc"
          >
            {/* Close Button (X) */}
            <button
              type="button"
              className="lead-modal-close-btn"
              onClick={handleClose}
              aria-label="Close enquiry modal"
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
            >
              <X size={18} aria-hidden="true" />
            </button>

            {/* Modal Header */}
            <header className="lead-modal-header">
              <div className="lead-modal-pill-tag">
                <span className="lead-modal-pill-dot" aria-hidden="true" />
                <span>Vyrobytex Quick Connect</span>
              </div>

              <h2 id="lead-modal-title" className="lead-modal-title">
                LET'S CONNECT<span className="lead-modal-accent-dot">.</span>
              </h2>

              <p id="lead-modal-desc" className="lead-modal-subtitle">
                Have a project in mind? Tell us a little about yourself. Let's explore how Vyrobytex can help.
              </p>
            </header>

            {/* Server Error Banner if any */}
            {serverError && (
              <div className="lead-modal-banner-error" role="alert" style={{ marginBottom: '1.25rem' }}>
                <AlertCircle size={18} color="#D53607" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Notice:</strong> {serverError}
                </div>
              </div>
            )}

            {/* Form */}
            <form className="lead-modal-form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="lead-modal-field">
                <label htmlFor="lead-fullname" className="lead-modal-label">
                  <span>
                    Full Name <span className="lead-modal-required-mark">*</span>
                  </span>
                </label>
                <input
                  ref={firstInputRef}
                  id="lead-fullname"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Navin Chaudhary"
                  className={`lead-modal-input ${errors.fullName ? 'has-error' : ''}`}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'lead-name-error' : undefined}
                />
                {errors.fullName && (
                  <span id="lead-name-error" className="lead-modal-field-error">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="lead-modal-field">
                <label htmlFor="lead-mobile" className="lead-modal-label">
                  <span>
                    Mobile Number <span className="lead-modal-required-mark">*</span>
                  </span>
                </label>
                <input
                  id="lead-mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. +91 98765 43210"
                  className={`lead-modal-input ${errors.mobile ? 'has-error' : ''}`}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.mobile}
                  aria-describedby={errors.mobile ? 'lead-mobile-error' : undefined}
                />
                {errors.mobile && (
                  <span id="lead-mobile-error" className="lead-modal-field-error">
                    {errors.mobile}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className="lead-modal-field">
                <label htmlFor="lead-email" className="lead-modal-label">
                  <span>
                    Email Address <span className="lead-modal-required-mark">*</span>
                  </span>
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. hello@example.com"
                  className={`lead-modal-input ${errors.email ? 'has-error' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'lead-email-error' : undefined}
                />
                {errors.email && (
                  <span id="lead-email-error" className="lead-modal-field-error">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Interested Service */}
              <div className="lead-modal-field">
                <label htmlFor="lead-service" className="lead-modal-label">
                  <span>
                    Interested Service <span className="lead-modal-required-mark">*</span>
                  </span>
                </label>
                <select
                  id="lead-service"
                  name="service"
                  className={`lead-modal-select ${errors.service ? 'has-error' : ''}`}
                  value={formData.service}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'lead-service-error' : undefined}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="lead-service-error" className="lead-modal-field-error">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Honeypot Spam Trap (Hidden from real users) */}
              <div className="lead-modal-hp" aria-hidden="true">
                <label htmlFor="lead-hp">Company Website</label>
                <input
                  id="lead-hp"
                  type="text"
                  name="hp_company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_company_website}
                  onChange={handleInputChange}
                />
              </div>

              {/* Privacy Notice */}
              <p className="lead-modal-privacy">
                Your details are kept strictly confidential and used solely to respond to your enquiry.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="lead-modal-submit-btn"
                disabled={isSubmitting}
                onMouseEnter={() => setCursorMode('pointer')}
                onMouseLeave={resetCursor}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="lead-modal-spinner" aria-hidden="true" />
                    <span>SENDING ENQUIRY...</span>
                  </>
                ) : (
                  <>
                    <span>LET'S TALK</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </aside>
      )}

      {/* Success Toast */}
      {isToastVisible && (
        <aside
          className="lead-toast-container"
          role="status"
          aria-live="polite"
        >
          <div className="lead-toast-icon">
            <CheckCircle2 size={16} aria-hidden="true" />
          </div>
          <span className="lead-toast-text">{toastMessage}</span>
          <button
            type="button"
            className="lead-toast-close"
            onClick={() => setIsToastVisible(false)}
            aria-label="Dismiss confirmation toast"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </aside>
      )}
    </>
  );
};
