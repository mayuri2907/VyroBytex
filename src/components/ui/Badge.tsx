import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'orange' | 'outline' | 'concept';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  if (variant === 'orange') {
    return <span className={`glass-pill-orange ${className}`}>{children}</span>;
  }

  if (variant === 'concept') {
    return (
      <span
        className={`glass-pill ${className}`}
        style={{
          border: '1px solid var(--border-medium)',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontSize: '0.6875rem',
          fontWeight: 700,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'var(--color-burnt-orange)',
            display: 'inline-block',
          }}
        />
        {children}
      </span>
    );
  }

  return <span className={`glass-pill ${className}`}>{children}</span>;
};
