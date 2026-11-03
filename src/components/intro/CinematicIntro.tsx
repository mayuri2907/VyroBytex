import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { isCinematicIntroActive, markCinematicIntroSeen } from '../../lib/introState';
import './CinematicIntro.css';

export const CinematicIntro: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If already seen in this session (e.g. user navigated internally), do not mount.
  const [shouldRender, setShouldRender] = useState(isCinematicIntroActive);
  const [currentScene, setCurrentScene] = useState<1 | 2 | 3 | 4>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 4;
    }
    return 1;
  });
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 100;
    }
    return 0;
  });
  const [isExiting, setIsExiting] = useState(false);

  const { setCursorMode, resetCursor } = useCursor();
  const timeoutsRef = useRef<number[]>([]);
  const exitTriggeredRef = useRef(false);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  const addTimeout = useCallback((fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Exit trigger: smoothly curtains away the intro and reveals the light website
  const triggerExit = useCallback(() => {
    if (exitTriggeredRef.current) return;
    exitTriggeredRef.current = true;
    markCinematicIntroSeen();

    clearAllTimeouts();
    setIsExiting(true);
    resetCursor();

    // Release body scroll lock immediately so transition is seamless
    document.body.style.overflow = '';

    // Wait for the exit curtain animation (750ms) to complete before unmounting
    addTimeout(() => {
      setShouldRender(false);
    }, 750);
  }, [clearAllTimeouts, resetCursor, addTimeout]);

  // Handle immediate Skip action
  const handleSkip = useCallback(() => {
    triggerExit();
  }, [triggerExit]);

  // Handle Enter CTA click: reveals the homepage
  const handleEnter = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    triggerExit();
  }, [location.pathname, navigate, triggerExit]);

  // Keyboard accessibility: Escape or Enter triggers entrance
  useEffect(() => {
    if (!shouldRender || exitTriggeredRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || (currentScene === 4 && (e.key === 'Enter' || e.key === ' '))) {
        e.preventDefault();
        triggerExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shouldRender, currentScene, triggerExit]);

  // Body scroll lock management
  useEffect(() => {
    if (shouldRender && !exitTriggeredRef.current) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [shouldRender]);

  // Choreographed Scene Progression (~5.2s total duration)
  useEffect(() => {
    if (!shouldRender || exitTriggeredRef.current) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Auto-exit quickly after brief moment for reduced motion
      addTimeout(() => {
        triggerExit();
      }, 1500);
      return;
    }

    // Timeline Progress Bar animation (0% -> 100% over 5200ms)
    const startTime = performance.now();
    const totalDuration = 5200;

    const intervalId = window.setInterval(() => {
      if (exitTriggeredRef.current) {
        clearInterval(intervalId);
        return;
      }
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(intervalId);
      }
    }, 40);

    // Scene 2: 1200ms – 2500ms (We don't just build websites)
    addTimeout(() => {
      setCurrentScene(2);
    }, 1200);

    // Scene 3: 2500ms – 3900ms (We build what moves your business)
    addTimeout(() => {
      setCurrentScene(3);
    }, 2500);

    // Scene 4: 3900ms – 5300ms (Offerings tag & Enter CTA)
    addTimeout(() => {
      setCurrentScene(4);
    }, 3900);

    // Auto-exit at 5300ms if visitor hasn't manually clicked Enter or Skip
    addTimeout(() => {
      triggerExit();
    }, 5300);

    return () => {
      clearInterval(intervalId);
      clearAllTimeouts();
    };
  }, [shouldRender, addTimeout, clearAllTimeouts, triggerExit]);

  if (!shouldRender) {
    return null;
  }

  return (
    <aside
      className={`cinematic-intro-overlay ${isExiting ? 'is-exiting' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Vyrobytex introduction"
    >
      <div className="intro-content-wrap">
        {/* TOP BAR: Brand Badge & Skip Action */}
        <header className="intro-top-bar">
          <div className="intro-top-brand">
            <span className="intro-top-dot" aria-hidden="true" />
            <span>VYROBYTEX // STUDIO INTRO</span>
          </div>

          <button
            type="button"
            className="intro-skip-btn"
            onClick={handleSkip}
            onMouseEnter={() => setCursorMode('pointer')}
            onMouseLeave={resetCursor}
            aria-label="Skip introduction and proceed directly to website"
          >
            <span>Skip Intro</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </button>
        </header>

        {/* CENTER STAGE: 4 Sequential Cinematic Scenes */}
        <main className="intro-stage" aria-live="polite">
          {/* SCENE 1: Small brand label */}
          <div className={`intro-scene intro-scene-1 ${currentScene === 1 ? 'is-active' : ''}`}>
            <div className="intro-pill-badge">
              <span className="intro-top-dot" style={{ width: 6, height: 6 }} aria-hidden="true" />
              <span>VYROBYTEX®</span>
            </div>
            <div className="intro-tagline-text">
              DIGITAL EXPERIENCES · BUILT WITH PURPOSE
            </div>
          </div>

          {/* SCENE 2: Large animated typography (Word-by-word reveal) */}
          <div className={`intro-scene intro-scene-2 ${currentScene === 2 ? 'is-active' : ''}`}>
            <h1 className="intro-headline">
              <div className="intro-word-row">
                <span className="intro-word-mask"><span className="intro-word w-1">WE</span></span>{' '}
                <span className="intro-word-mask"><span className="intro-word w-2">DON'T</span></span>{' '}
                <span className="intro-word-mask"><span className="intro-word w-3">JUST</span></span>
              </div>
              <div className="intro-word-row">
                <span className="intro-word-mask"><span className="intro-word w-4">BUILD</span></span>{' '}
                <span className="intro-word-mask"><span className="intro-word w-5">WEBSITES.</span></span>
              </div>
            </h1>
          </div>

          {/* SCENE 3: Large headline with timed line reveals & burnt-orange emphasis */}
          <div className={`intro-scene intro-scene-3 ${currentScene === 3 ? 'is-active' : ''}`}>
            <h2 className="intro-headline">
              <span className="intro-line-mask">
                <span className="intro-line l-1">WE BUILD</span>
              </span>
              <span className="intro-line-mask">
                <span className="intro-line l-2">WHAT MOVES</span>
              </span>
              <span className="intro-line-mask">
                <span className="intro-line l-3 intro-accent-orange">
                  YOUR BUSINESS.
                </span>
              </span>
            </h2>
          </div>

          {/* SCENE 4: Supporting message & Final Enter CTA */}
          <div className={`intro-scene intro-scene-4 ${currentScene === 4 ? 'is-active' : ''}`}>
            <div className="intro-supporting-tag">
              WEB DEVELOPMENT · SOFTWARE · AI SOLUTIONS
            </div>

            <button
              type="button"
              className="intro-enter-btn"
              onClick={handleEnter}
              onMouseEnter={() => setCursorMode('pointer')}
              onMouseLeave={resetCursor}
              aria-label="Enter Vyrobytex website"
            >
              <span>ENTER VYROBYTEX</span>
              <span className="intro-btn-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        </main>

        {/* BOTTOM BAR: Founder Credit & Sequence Timeline */}
        <footer className="intro-bottom-bar">
          <div className="intro-bottom-founder">
            FOUNDED BY <strong>NAVIN CHAUDHARY</strong> · 2024
          </div>

          <div className="intro-timeline-indicator">
            <span className="intro-scene-counter">
              0{currentScene} / 04
            </span>
            <div className="intro-progress-track" aria-hidden="true">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </footer>
      </div>
    </aside>
  );
};
