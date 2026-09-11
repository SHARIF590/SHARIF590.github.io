import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface AnimasterMagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
  glow?: boolean;
  href?: string;
  target?: string;
}

export function AnimasterMagneticButton({
  children,
  className = "",
  magneticStrength = 0.3,
  glow = true,
  href,
  target,
  onClick,
  ...props
}: AnimasterMagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
      setHovered(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) {
      if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
      else return;
    }
    const rect = rectRef.current;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * magneticStrength;
    const distanceY = (e.clientY - centerY) * magneticStrength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
    rectRef.current = null;
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center group overflow-hidden rounded-xl p-[1px] transition-transform duration-200 active:scale-95 will-change-transform ${className}`}
    >
      {/* Animated Liquid Border Glow */}
      {glow && (
        <span
          className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] transition-opacity duration-300 will-change-transform ${
            hovered ? "opacity-100" : "opacity-35"
          }`}
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, transparent 0%, var(--accent-color, #10B981) 50%, transparent 100%)",
          }}
        />
      )}

      {/* Button Interior */}
      <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#0D0D0D] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-200 group-hover:bg-[#141414]">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} className="inline-block" rel={target === "_blank" ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={props.type || "button"} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
}
