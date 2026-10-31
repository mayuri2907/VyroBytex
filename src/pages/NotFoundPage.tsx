import React from 'react';
import { Home } from 'lucide-react';
import { ROUTES } from '../lib/routes';
import { Button } from '../components/ui/Button';
import { usePageSEO } from '../hooks/usePageSEO';

export const NotFoundPage: React.FC = () => {
  usePageSEO({ title: '404 Page Not Found — Vyrobytex' });
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: 'var(--color-burnt-orange)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}
        >
          404 ERROR // PAGE NOT FOUND
        </div>

        <h1
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1,
          }}
        >
          Lost in Space.
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          The page you are looking for doesn't exist, has been relocated, or is undergoing
          architectural refinements.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button
            to={ROUTES.HOME}
            variant="primary"
            size="md"
            icon={<Home size={18} />}
            iconPosition="left"
          >
            Return to Homepage
          </Button>

          <Button
            to={ROUTES.SERVICES}
            variant="secondary"
            size="md"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};
