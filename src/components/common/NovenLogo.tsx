import React from 'react';

interface NovenLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'white';
  showTagline?: boolean;
  inline?: boolean;
}

export const NovenLogo: React.FC<NovenLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showTagline = true,
  inline = false,
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-lg tracking-widest',
    lg: 'text-2xl tracking-widest',
    xl: 'text-3xl tracking-widest',
  };

  const taglineSizes = {
    sm: 'text-[8px] tracking-widest',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest',
  };

  // Color mappings
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#111827'; // Dark gray/black
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';
  const taglineColor = variant === 'white' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`flex ${inline ? 'flex-row items-center gap-3' : 'flex-col items-center'} ${className}`}>
      {/* Symbol SVG reproducing the NoveN Infinity + Leaf motif */}
      <svg
        className={`${iconSizes[size]} shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continuous infinity loop with embedded 'N' and leaf tip */}
        {/* Outer infinity loop left side */}
        <path
          d="M 32 50 
             C 16 50, 12 30, 26 22 
             C 40 14, 52 38, 65 52 
             C 78 66, 88 64, 88 50 
             C 88 36, 75 32, 60 48 
             C 45 64, 38 78, 24 78 
             C 10 78, 8 58, 22 42"
          stroke={primaryColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Diagonal N stroke going up right to leaf */}
        <path
          d="M 28 72 L 72 18"
          stroke={primaryColor}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Leaf sprout on top-right tip */}
        <path
          d="M 72 18 C 76 10, 86 10, 88 18 C 88 26, 80 30, 72 18 Z"
          fill={primaryColor}
        />
        {/* Leaf center vein */}
        <path
          d="M 72 18 L 81 14"
          stroke={variant === 'white' ? '#111827' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography: NØVEN & DESIGN & CRAFT */}
      <div className={`text-center ${inline ? 'text-left' : ''}`}>
        <div className={`font-black uppercase ${titleSizes[size]} ${textColor} leading-none flex items-center justify-center ${inline ? 'justify-start' : ''}`}>
          <span>N</span>
          {/* Slashed Zero/O symbol as in image */}
          <span className="relative inline-block px-0.5">
            Ø
          </span>
          <span>VEN</span>
        </div>

        {showTagline && (
          <div className={`font-medium uppercase ${taglineSizes[size]} ${taglineColor} mt-1`}>
            DESIGN & CRAFT
          </div>
        )}
      </div>
    </div>
  );
};
