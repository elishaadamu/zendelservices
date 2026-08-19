import React from 'react';

interface StyledUnderlineProps {
  color?: string;
  className?: string;
  variant?: 'curve' | 'wave' | 'brush' | 'double';
}

export const StyledUnderline: React.FC<StyledUnderlineProps> = ({
  color = '#00A2C9',
  className = '',
  variant = 'curve',
}) => {
  if (variant === 'wave') {
    return (
      <svg
        className={`absolute -bottom-2.5 left-0 w-full h-3.5 pointer-events-none ${className}`}
        viewBox="0 0 260 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M2 7.5C35 2 65 13 100 7.5C135 2 165 13 200 7.5C225 3.5 245 10 258 7"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === 'brush') {
    return (
      <svg
        className={`absolute -bottom-2 left-0 w-full h-3 pointer-events-none ${className}`}
        viewBox="0 0 240 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3 6.5C70 2.5 170 2.5 237 6"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    );
  }

  if (variant === 'double') {
    return (
      <svg
        className={`absolute -bottom-3 left-0 w-full h-4 pointer-events-none ${className}`}
        viewBox="0 0 240 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3 5C75 2 165 2 237 5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 11C85 8.5 155 8.5 225 11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  // Default smooth arc curve
  return (
    <svg
      className={`absolute -bottom-2 left-0 w-full h-3 pointer-events-none ${className}`}
      viewBox="0 0 250 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 9.5C65 2.5 185 2.5 248 9"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
