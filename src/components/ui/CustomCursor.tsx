import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function getIsTouchDevice() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
}

function subscribeToNothing(_cb: () => void) {
  return () => {};
}

export function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribeToNothing, getIsTouchDevice, () => true);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance spring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    let rafId: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX - 6);
        mouseY.set(e.clientY - 6);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null;

      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full will-change-transform"
      style={{
        x: springX,
        y: springY,
        width: 12,
        height: 12,
        backgroundColor: 'var(--accent-color, #10B981)',
        boxShadow: isHovering
          ? '0 0 20px var(--accent-color, #10B981), 0 0 35px var(--accent-glow, rgba(16,185,129,0.5))'
          : '0 0 10px var(--accent-color, #10B981)',
      }}
      animate={{
        scale: isHovering ? 1.6 : 1,
      }}
      transition={{ duration: 0.12, ease: 'easeOut' }}
    />
  );
}
