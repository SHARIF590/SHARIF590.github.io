import { ArrowRight, Terminal, ShieldCheck } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { CircularBadge } from "@/components/ui/CircularBadge";
import heroSilhouette from "@/assets/image_9d0942.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36" id="home">
      {/* Ambient Glow Blobs - hidden on mobile to keep background pure black and text high-contrast */}
      <div className="blob-small hidden sm:block" style={{ top: "10%", left: "5%", opacity: 0.15 }} />
      <div className="blob-big hidden sm:block" style={{ top: "50%", right: "10%", opacity: 0.2 }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Content & Typography Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span className="text-emerald-400 font-medium">Hi! I'm Sharif — Based in Bangladesh</span>
            </div>

            {/* Display Headline with fixed height container to stop display jumping up and down */}
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-syne">
              <span className="block">Creative Designer &amp;</span>
              <span className="block text-emerald-400 min-h-[2.4em] sm:min-h-[1.25em] mt-1 sm:mt-1.5">
                <TypewriterText
                  strings={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Automation Specialist",
                    "Custom Solutions",
                  ]}
                  className="text-emerald-400"
                  typingSpeed={90}
                  deletingSpeed={55}
                  pauseDuration={2200}
                />
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed font-poppins">
              I build designs and websites that solve problems, inspiring
              success. Engineered with modern React, Tailwind CSS, and
              precision logic.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#10B981] px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors duration-150"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#service"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#141414] px-5 py-3 text-sm font-semibold text-neutral-200 hover:bg-white/5 hover:text-white hover:border-white/30 transition-colors duration-150"
              >
                <span>My Services</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="mt-12 w-full pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">Response</p>
                <p className="mt-1 text-lg sm:text-xl font-bold font-mono text-white">&lt; 24 hrs</p>
                <p className="text-xs text-emerald-400/90 font-medium">Direct availability</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">Delivery</p>
                <p className="mt-1 text-lg sm:text-xl font-bold font-mono text-white">100%</p>
                <p className="text-xs text-neutral-400">Production ready</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">Architecture</p>
                <p className="mt-1 text-lg sm:text-xl font-bold font-mono text-white">Modern</p>
                <p className="text-xs text-neutral-400">React & Tailwind</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image + Circular Badge */}
          <div className="lg:col-span-5 w-full relative z-10">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl border border-white/10 bg-[#121212] p-2 shadow-2xl ring-1 ring-emerald-500/10">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#0E0E0E] rounded-t-lg">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <Terminal className="h-3 w-3 text-emerald-400" />
                  <span>sharif_system_profile.webp</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-b-lg bg-[#0A0A0A]">
                <img
                  src={heroSilhouette}
                  alt="Sharif — Web Systems Engineer silhouette"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center -scale-x-100"
                />

                {/* Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

                {/* Top Telemetry */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="rounded bg-[#0A0A0A]/75 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-mono text-neutral-200">
                    STATUS: ACTIVE
                  </span>
                  <span className="rounded bg-[#0A0A0A]/75 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-mono text-emerald-400">
                    LATENCY 12ms
                  </span>
                </div>

                {/* Bottom Overlay Badge Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-md border border-white/10 bg-[#121212]/90 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <span className="font-medium text-neutral-200">Execution Stack</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400">READY</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["React 19", "Tailwind v4", "TypeScript", "Vite 8"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-neutral-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Badge — Floating */}
            <div className="absolute -bottom-10 -left-10 z-20 hidden lg:block">
              <CircularBadge size={130} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
