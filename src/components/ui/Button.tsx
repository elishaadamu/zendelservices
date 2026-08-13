import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'warning' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer shadow-md hover:shadow-lg';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-bold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#00A2C9] to-[#09BAF4] text-white hover:opacity-95 focus:ring-[#00A2C9]',
    secondary:
      'bg-gradient-to-r from-[#6747ee] to-[#8b5cf6] text-white hover:opacity-95 focus:ring-[#6747ee]',
    warning:
      'bg-gradient-to-r from-[#ff6900] to-[#ff8c00] text-white font-bold hover:brightness-110 focus:ring-[#ff6900]',
    outline:
      'border-2 border-[#00A2C9] text-[#00A2C9] hover:bg-[#00A2C9] hover:text-white focus:ring-[#00A2C9]',
    dark: 'bg-[#0a0504] text-white hover:bg-[#1a1413] border border-white/10 focus:ring-gray-700',
    white: 'bg-white text-gray-900 hover:bg-gray-100 shadow-md focus:ring-white',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
