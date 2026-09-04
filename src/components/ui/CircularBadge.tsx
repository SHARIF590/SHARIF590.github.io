import { ArrowDownRight } from 'lucide-react';
import React from 'react';

export interface CircularBadgeProps {
  text?: string;
  size?: number;
  className?: string;
}

export const CircularBadge: React.FC<CircularBadgeProps> = ({
  text = "EXPLORE · MORE · LET'S · GO · ",
  size = 140,
  className = '',
}) => {
  const radius = size * 0.45;
  const cx = size / 2;
  const cy = size / 2;

  // SVG path for a perfect circle
  const pathData = `M ${cx}, ${cy} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 animate-spin-slow"
      >
        <path id="circle-path" d={pathData} fill="none" />
        <text
          fill="white"
          fontSize="10"
          className="font-mono uppercase tracking-[0.35em]"
        >
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="z-10 flex items-center justify-center rounded-full bg-neutral-900 border border-white/10 shadow-inner p-2">
        <ArrowDownRight className="h-6 w-6 text-[var(--accent-color,#10B981)]" />
      </div>
    </div>
  );
};
