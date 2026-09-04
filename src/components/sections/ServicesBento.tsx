import { Layers, Cpu, Cloud, Code2, Check, ArrowRight } from "lucide-react";

export function ServicesBento() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Engineered for stability, speed, and precision.
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Modular web engineering services tailored to production client requirements and automated operational workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Bento Card 1: Web Systems (Span 2 on lg) */}
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-150">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">SYSTEM ARCHITECTURE</span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Modern Web Systems &amp; Interface Engineering
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
                Developing resilient, mobile-first frontend architectures using React 19, TypeScript, and Tailwind CSS. Built to satisfy strict performance budgets and cross-platform accessibility.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Production React 19 & Vite",
                "Mobile-First Layouts",
                "Strict Semantic Hierarchy"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 2: Workflow Automation (Span 1 on lg) */}
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-150">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">AUTOMATION</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                Workflow Automation &amp; Logic
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Custom script utilities in Python and C# that streamline repetitive operations, automate data parsing, and coordinate system tasks.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              {["Python", "C# .NET", "CLI Tools", "Task Runners"].map((tag) => (
                <span key={tag} className="rounded bg-white/5 px-2 py-1 text-[11px] font-mono text-neutral-300 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 3: Cloud & Edge Deployment (Span 1 on lg) */}
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-150">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Cloud className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">DEPLOYMENT</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                Cloud &amp; Edge Infrastructure
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Deployments configured on Cloudflare and Vercel with automated Git integration, edge routing, and global CDN delivery.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              {["Cloudflare", "Vercel", "Git CI/CD", "Edge CDN"].map((tag) => (
                <span key={tag} className="rounded bg-white/5 px-2 py-1 text-[11px] font-mono text-neutral-300 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Design Token Engineering (Span 2 on lg) */}
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-150">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">DESIGN SYSTEMS</span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Design Tokens &amp; Component Systems
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
                Structured token architectures using CSS variables and Tailwind CSS. Pre-configured for seamless drop-in integration with modern component registries (such as shadcn/ui and Magic UI).
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["Tailwind Tokens", "CSS Variables", "Accessible Primitives", "Drop-in Ready"].map((feat) => (
                  <span key={feat} className="inline-flex items-center gap-1.5 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>View project demonstrations</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
