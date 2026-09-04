import { Marquee } from "@/components/ui/marquee";
import { 
  Atom, 
  Terminal, 
  Cloud, 
  Sparkles, 
  LayoutGrid, 
  FileCode2, 
  Zap, 
  Cpu, 
  GitBranch, 
  Triangle 
} from "lucide-react";

export function TechStackMarquee() {
  const techStack = [
    { name: "React 19", category: "Frontend Engine", icon: Atom },
    { name: "Python", category: "Automations & Logic", icon: Terminal },
    { name: "Cloudflare", category: "Edge & CDN", icon: Cloud },
    { name: "Tailwind CSS", category: "Design System", icon: Sparkles },
    { name: "CSS Grid", category: "Layout Architecture", icon: LayoutGrid },
    { name: "TypeScript", category: "Type Integrity", icon: FileCode2 },
    { name: "Vite 8", category: "Build Tooling", icon: Zap },
    { name: "C# .NET", category: "Systems Execution", icon: Cpu },
    { name: "Git & GitHub", category: "Version Control", icon: GitBranch },
    { name: "Vercel", category: "Edge Deployment", icon: Triangle },
  ];

  return (
    <section className="relative w-full border-y border-white/10 bg-[#0A0A0A] py-8 overflow-hidden">
      {/* Overline & Subtitle */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Core Production Technology Stack
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-600">
          Sub-second runtime · Modular dependencies
        </span>
      </div>

      {/* Marquee Container with Gradient Edge Masks */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:38s]">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 shadow-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#161616] hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.15)] group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0A0A0A] text-neutral-400 transition-colors duration-200 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      {tech.name}
                    </p>
                    <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
                  </div>
                  <p className="text-[10px] font-mono text-neutral-500">
                    {tech.category}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>

        {/* Gradient Edge Masks for Cinematic Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>
    </section>
  );
}
