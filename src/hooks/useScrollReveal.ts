import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

export interface ScrollRevealOptions {
  triggerRef?: React.RefObject<HTMLElement | null>;
  staggerSelector?: string;
  fadeUpSelector?: string;
  duration?: number;
  stagger?: number;
  yOffset?: number;
  start?: string;
  toggleActions?: string;
}

/**
 * Custom hook for GSAP-powered reversible scroll reveal animations.
 * When scrolling down: elements animate into view.
 * When scrolling back up: elements reverse naturally to maintain clean states.
 * Automatically cleans up on unmount with ctx.revert() to prevent memory leaks.
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);

  const {
    triggerRef,
    staggerSelector = '[data-gsap-stagger]',
    fadeUpSelector = '[data-gsap="fade-up"]',
    duration = 0.75,
    stagger = 0.12,
    yOffset = 24,
    start = 'top 85%',
    toggleActions = 'play reverse play reverse',
  } = options;

  useEffect(() => {
    const el = triggerRef?.current || containerRef.current;
    if (!el || typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        // Desktop & Tablet
        isDesktop: '(min-width: 768px)',
        // Mobile
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean; isDesktop: boolean };
        const activeOffset = isMobile ? Math.min(yOffset, 16) : yOffset;
        const activeDuration = isMobile ? Math.min(duration, 0.6) : duration;
        const activeStagger = isMobile ? Math.min(stagger, 0.08) : stagger;

        // 1. Individual fade-up items
        const fadeElements = el.querySelectorAll<HTMLElement>(fadeUpSelector);
        fadeElements.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: activeOffset },
            {
              opacity: 1,
              y: 0,
              duration: activeDuration,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start,
                toggleActions,
              },
            }
          );
        });

        // 2. Staggered card and item groups
        const staggerGroups = el.querySelectorAll<HTMLElement>(staggerSelector);
        staggerGroups.forEach((group) => {
          const children = Array.from(group.children) as HTMLElement[];
          if (children.length > 0) {
            gsap.fromTo(
              children,
              { opacity: 0, y: activeOffset },
              {
                opacity: 1,
                y: 0,
                duration: activeDuration,
                stagger: activeStagger,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: group,
                  start,
                  toggleActions,
                },
              }
            );
          }
        });
      },
      el
    );

    // Refresh ScrollTrigger after DOM settle
    ScrollTrigger.refresh();

    return () => {
      mm.revert(); // Automatically reverts all gsap animations and ScrollTriggers created in matchMedia
    };
  }, [triggerRef, staggerSelector, fadeUpSelector, duration, stagger, yOffset, start, toggleActions]);

  return containerRef;
}
