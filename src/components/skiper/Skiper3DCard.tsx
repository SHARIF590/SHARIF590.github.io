import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Skiper3DCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxTilt?: number;
  glareOpacity?: number;
}

export function Skiper3DCard({
  children,
  className = "",
  containerClassName = "",
  maxTilt = 8,
  glareOpacity = 0.2,
}: Skiper3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
  });

  // Motion values for tilt angles
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseEnter = () => {
    if (isTouch) return;
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
      setIsHovered(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    if (!rectRef.current) {
      rectRef.current = card.getBoundingClientRect();
    }

    const mouseX = e.clientX - rectRef.current.left;
    const mouseY = e.clientY - rectRef.current.top;

    const xPct = mouseX / rectRef.current.width;
    const yPct = mouseY / rectRef.current.height;

    // Direct pitch & yaw calculations
    const tiltX = (yPct - 0.5) * -maxTilt * 2;
    const tiltY = (xPct - 0.5) * maxTilt * 2;

    rotateX.set(tiltX);
    rotateY.set(tiltY);

    card.style.setProperty("--glare-x", `${(xPct * 100).toFixed(1)}%`);
    card.style.setProperty("--glare-y", `${(yPct * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    rectRef.current = null;
  };

  return (
    <div
      className={`perspective-1000 ${containerClassName}`}
      style={{ perspective: isTouch ? "none" : "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouch ? 0 : springRotateX,
          rotateY: isTouch ? 0 : springRotateY,
          transformStyle: isTouch ? "flat" : "preserve-3d",
          ["--glare-x" as string]: "50%",
          ["--glare-y" as string]: "50%",
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] transition-colors duration-200 hover:border-white/25 will-change-transform ${className}`}
      >
        {/* Dynamic Sheen Glare Reflection */}
        {!isTouch && (
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200"
            style={{
              opacity: isHovered ? glareOpacity : 0,
              background:
                "radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255, 255, 255, 0.4) 0%, transparent 65%)",
            }}
          />
        )}

        {/* Card Content */}
        <div
          style={{
            transform: isTouch ? "none" : "translateZ(20px)",
            transformStyle: isTouch ? "flat" : "preserve-3d",
          }}
          className="relative z-10 h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
