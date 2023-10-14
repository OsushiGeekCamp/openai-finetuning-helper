import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

const Button = ({
  onClick,
  disabled = false,
  children,
  className = '',
  ariaLabel,
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 whitespace-nowrap rounded ${className}`}
    {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
  >
    {children}
  </button>
);

export default Button;
