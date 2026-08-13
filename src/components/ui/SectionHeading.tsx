import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col mb-12 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span
          className={`text-xs sm:text-sm uppercase tracking-widest font-bold mb-3 px-3.5 py-1 rounded-full ${
            isDark
              ? 'bg-[#00A2C9]/20 text-[#09BAF4] border border-[#00A2C9]/30'
              : 'bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-3xl ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
