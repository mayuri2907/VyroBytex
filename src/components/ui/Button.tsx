import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../hooks/useCursor';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'warm' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left' | 'up-right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  style,
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  target,
  rel,
  'aria-label': ariaLabel,
}) => {
  const { setCursorMode, resetCursor } = useCursor();

  const handleMouseEnter = () => setCursorMode('pointer');
  const handleMouseLeave = () => resetCursor();

  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const classes = `btn-base btn-${variant} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
      {icon && iconPosition === 'up-right' && <span className="btn-icon btn-icon-up-right">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
