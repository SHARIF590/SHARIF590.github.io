import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressLine() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for the scroll progress line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Appear after the user starts scrolling (> 20px)
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed left-0 top-0 bottom-0 z-40 w-[2px] sm:w-[3px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background track showing total page length left to see */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Glowing green progress line showing covered page portion */}
      <motion.div
        className="w-full origin-top rounded-b-full"
        style={{
          scaleY,
          height: "100%",
          backgroundColor: "var(--accent-color, #10B981)",
          boxShadow:
            "0 0 8px var(--accent-color, #10B981), 0 0 16px var(--accent-glow, rgba(16,185,129,0.6))",
        }}
      />
    </div>
  );
}
