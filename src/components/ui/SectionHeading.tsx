import React from 'react';
import './SectionHeading.css';

export interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  badge?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
  badge,
}) => {
  return (
    <div className={`section-heading ${align === 'center' ? 'align-center' : 'align-left'} ${className}`}>
      {(label || badge) && (
        <div className="section-label-row">
          {label && <span className="section-label">{label}</span>}
          {badge}
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
