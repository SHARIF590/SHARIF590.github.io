import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Derive touch detection outside of effects to satisfy React rules
function getIsTouchDevice() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
}

function subscribeToNothing(_cb: () => void) {
  return () => {};
}

export function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribeToNothing, getIsTouchDevice, () => true);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physics
  const springConfig = { damping: 22, stiffness: 280 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      // Perfectly center a 14px circle at the cursor pointer
      mouseX.set(e.clientX - 7);
      mouseY.set(e.clientY - 7);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        x: springX,
        y: springY,
        width: 14,
        height: 14,
        backgroundColor: 'var(--accent-color, #10B981)',
        boxShadow: isHovering
          ? '0 0 16px var(--accent-color, #10B981), 0 0 32px var(--accent-color, #10B981), 0 0 48px var(--accent-glow, rgba(16,185,129,0.7))'
          : '0 0 10px var(--accent-color, #10B981), 0 0 20px var(--accent-color, #10B981), 0 0 30px var(--accent-glow, rgba(16,185,129,0.5))',
      }}
      animate={{
        scale: isHovering ? 1.45 : 1,
        opacity: 1,
      }}
      transition={{ duration: 0.15 }}
    />
  );
}
