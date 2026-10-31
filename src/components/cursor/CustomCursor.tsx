import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from '../../hooks/useCursor';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const { mode, label } = useCursor();
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  // Direct numeric coordinates to avoid React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const isRunning = useRef(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const root = rootRef.current;
    if (!root) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Ensure cursor is visible once mouse starts moving
      if (root.classList.contains('cursor-offscreen')) {
        root.classList.remove('cursor-offscreen');
      }

      // Check if hovering form inputs or editable text - hide custom cursor to keep caret clear
      const target = e.target as HTMLElement | null;
      const isInput = target?.closest('input, textarea, select, [contenteditable="true"]');
      if (isInput) {
        root.classList.add('cursor-over-input');
      } else {
        root.classList.remove('cursor-over-input');
      }

      // Position inner dot immediately with GPU transform for ultra-crisp tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseEnter = () => {
      if (root) root.classList.remove('cursor-offscreen');
      startFollowerLoop();
    };

    const onMouseLeave = () => {
      if (root) root.classList.add('cursor-offscreen');
    };

    const startFollowerLoop = () => {
      if (isRunning.current) return;
      isRunning.current = true;

      const lerpFactor = 0.28; // Fast and smooth interpolation

      const animateFollower = () => {
        if (!isRunning.current) return;

        followerPos.current.x += (mousePos.current.x - followerPos.current.x) * lerpFactor;
        followerPos.current.y += (mousePos.current.y - followerPos.current.y) * lerpFactor;

        if (followerRef.current) {
          followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
        }

        rafId.current = requestAnimationFrame(animateFollower);
      };

      rafId.current = requestAnimationFrame(animateFollower);
    };

    const stopFollowerLoop = () => {
      isRunning.current = false;
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopFollowerLoop();
      } else {
        startFollowerLoop();
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    startFollowerLoop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      stopFollowerLoop();
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  const defaultLabel = mode === 'explore' ? 'EXPLORE' : mode === 'view' ? 'VIEW' : '';
  const displayLabel = label || defaultLabel;

  return (
    <div
      ref={rootRef}
      className={`custom-cursor-root cursor-offscreen ${mode === 'hidden' ? 'hidden' : ''}`}
      data-mode={mode}
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower">
        {displayLabel && <span className="cursor-label">{displayLabel}</span>}
      </div>
    </div>
  );
};
