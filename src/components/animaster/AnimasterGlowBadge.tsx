import React from "react";

interface AnimasterGlowBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "accent" | "cyber" | "warning";
  className?: string;
}

export function AnimasterGlowBadge({
  children,
  icon,
  className = "",
}: AnimasterGlowBadgeProps) {
  return (
    <div
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono tracking-wider text-neutral-200 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] ${className}`}
    >
      {/* Sweeping Shimmer Beam */}
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_3.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Pulsing Core Dot */}
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: "var(--accent-color, #10B981)" }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--accent-color, #10B981)" }}
        />
      </span>

      {icon && <span className="text-neutral-400">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </div>
  );
}
