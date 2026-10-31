import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 1. Skip canvas on devices with reduced motion or coarse touch pointers (mobile battery optimization)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isRunning = false;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth damping
    let targetX = width * 0.5;
    let targetY = height * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Micro-particles setup
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      baseAlpha: number;
    }

    const particleCount = width < 1024 ? 18 : 30;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.8,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        baseAlpha: Math.random() * 0.25 + 0.1,
      });
    }

    const render = () => {
      if (!isRunning) return;

      // Smooth cursor follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle radial ambient halo following the pointer on white
      const gradient = ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        Math.min(width, height) * 0.65
      );
      gradient.addColorStop(0, 'rgba(213, 54, 7, 0.045)');
      gradient.addColorStop(0.5, 'rgba(230, 213, 189, 0.25)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Micro-particles with gentle cursor drift (creative confetti whisper)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = currentX - p.x;
        const dy = currentY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proxFactor = Math.max(0, 1 - dist / 300);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const isAccent = i % 3 === 0;
        ctx.fillStyle = isAccent
          ? `rgba(213, 54, 7, ${p.baseAlpha * 0.5 + proxFactor * 0.2})`
          : `rgba(16, 16, 16, ${p.baseAlpha * 0.25 + proxFactor * 0.1})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (isRunning || document.hidden) return;
      isRunning = true;
      animationFrameId = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      isRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    startLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      stopLoop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
