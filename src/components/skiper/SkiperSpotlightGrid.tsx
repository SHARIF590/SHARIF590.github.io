import React, { useRef } from "react";
import { Layers, Cpu, Palette, Zap, Check, ArrowRight } from "lucide-react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--spotlight-opacity", "1");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    if (!rectRef.current) {
      rectRef.current = card.getBoundingClientRect();
    }
    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--spotlight-opacity", "0");
    }
    rectRef.current = null;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-7 transition-colors duration-200 hover:border-white/20 will-change-transform ${className}`}
      style={{
        // Default CSS variables
        ["--spotlight-x" as string]: "50%",
        ["--spotlight-y" as string]: "50%",
        ["--spotlight-opacity" as string]: "0",
      }}
    >
      {/* GPU Accelerated CSS Radial Spotlight (Zero React Re-renders) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: "var(--spotlight-opacity, 0)",
          background:
            "radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), var(--accent-glow, rgba(16, 185, 129, 0.2)), transparent 75%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SkiperSpotlightGrid() {
  const capabilities = [
    {
      icon: <Layers className="h-5 w-5" />,
      tag: "FULL-STACK FRONTEND",
      title: "Modern Web Systems & Interface Engineering",
      description:
        "Developing resilient, high-speed architectures with React 19, TypeScript, and Tailwind CSS. Built to satisfy strict performance budgets and responsive usability.",
      bullets: [
        "Production React & Vite",
        "Tailwind CSS Layouts",
        "Responsive & Accessible UI",
      ],
      colSpan: "lg:col-span-2",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      tag: "AUTOMATION & LOGIC",
      title: "Workflow Automation & Scripting",
      description:
        "Engineering Python and CLI utilities that eliminate manual bottlenecks, organize files, and dispatch workflows automatically.",
      bullets: [
        "Python Desktop Automation",
        "Zero-Dependency Sorting",
        "CLI Utilities",
      ],
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      tag: "VISUAL SYSTEMS",
      title: "UI/UX & Design Systems",
      description:
        "Bridging visual aesthetics and code with precision Figma prototypes, design tokens, and fluid component hierarchies.",
      bullets: [
        "Figma to Pixel-Perfect Code",
        "Component Token Architecture",
        "Micro-Interactions",
      ],
      colSpan: "lg:col-span-1",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      tag: "OPTIMIZATION",
      title: "Performance & Responsive Polish",
      description:
        "Fine-tuning Core Web Vitals, asset optimization, smooth 60fps transitions, and flawless multi-device experiences.",
      bullets: [
        "Lighthouse 95+ Score Targets",
        "Fluid Spring Transitions",
        "Cross-Browser Resiliency",
      ],
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section id="service" className="relative py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono tracking-wider uppercase text-neutral-300 backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-color, #10B981)" }}
              />
              <span>Skiper Spotlight Capabilities</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white font-syne">
              Engineered for stability, speed, and precision.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Hover across each module to activate dynamic reactive spotlights and examine core technical domains.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <span>Discuss your custom requirement</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((cap, i) => (
            <SpotlightCard key={i} className={cap.colSpan}>
              <div className="flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-transform duration-200 group-hover:scale-105"
                  style={{ color: "var(--accent-color, #10B981)" }}
                >
                  {cap.icon}
                </div>
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                  {cap.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white font-syne">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {cap.description}
              </p>

              <div className="mt-8 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {cap.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <Check
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: "var(--accent-color, #10B981)" }}
                    />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
