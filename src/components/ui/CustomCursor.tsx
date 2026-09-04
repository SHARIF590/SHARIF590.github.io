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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
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
      className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border transition-colors duration-150 ${
        isHovering ? 'border-emerald-400 bg-emerald-400/10' : 'border-emerald-400/50 bg-transparent'
      }`}
      style={{
        x: springX,
        y: springY,
        width: 32,
        height: 32,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
    />
  );
}
