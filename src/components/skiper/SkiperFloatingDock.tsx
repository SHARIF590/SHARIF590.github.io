import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  Wrench,
  Terminal,
  Mail,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

interface DockItemProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  isTouch: boolean;
}

function DockItem({ mouseX, title, icon, href, external, isTouch }: DockItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    if (isTouch) return 0;
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-130, 0, 130], [38, 54, 38]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 220, damping: 16 });

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="relative flex items-center justify-center shrink-0"
    >
      <motion.div
        ref={ref}
        style={{ width: isTouch ? 36 : width, height: isTouch ? 36 : width }}
        onMouseEnter={() => !isTouch && setHovered(true)}
        onMouseLeave={() => !isTouch && setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/80 text-neutral-300 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-neutral-800 hover:text-white will-change-transform active:scale-95"
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 5, x: "-50%" }}
              transition={{ duration: 0.12 }}
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/95 px-2.5 py-0.5 text-[10px] font-mono font-medium text-white shadow-xl backdrop-blur-sm"
            >
              {title}
            </motion.span>
          )}
        </AnimatePresence>
        <div className="flex h-4 w-4 items-center justify-center">
          {icon}
        </div>
      </motion.div>
    </a>
  );
}

export function SkiperFloatingDock() {
  const mouseX = useMotionValue(Infinity);
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
  });

  const items = [
    { title: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
    { title: "Works", icon: <Briefcase className="h-4 w-4" />, href: "#work" },
    { title: "Capabilities", icon: <Layers className="h-4 w-4" />, href: "#service" },
    { title: "Skills", icon: <Wrench className="h-4 w-4" />, href: "#skills" },
    { title: "Live CLI", icon: <Terminal className="h-4 w-4" />, href: "#terminal" },
    { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
    {
      title: "GitHub",
      icon: <GithubIcon className="h-4 w-4" />,
      href: "https://github.com/SHARIF590",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 z-40 -translate-x-1/2 max-w-[96vw]">
      <motion.div
        onMouseMove={(e) => !isTouch && mouseX.set(e.pageX)}
        onMouseLeave={() => !isTouch && mouseX.set(Infinity)}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center gap-2 sm:gap-2.5 rounded-2xl sm:rounded-3xl border border-white/15 bg-black/80 px-3 sm:px-4 py-2 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5 overflow-x-auto no-scrollbar will-change-transform"
      >
        {items.map((item) => (
          <DockItem
            key={item.title}
            mouseX={mouseX}
            title={item.title}
            icon={item.icon}
            href={item.href}
            external={item.external}
            isTouch={isTouch}
          />
        ))}
      </motion.div>
    </div>
  );
}
