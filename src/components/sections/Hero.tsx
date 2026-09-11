import { ArrowRight, Terminal, ShieldCheck, Sparkles } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { CircularBadge } from "@/components/ui/CircularBadge";
import { AnimasterCanvas } from "@/components/animaster/AnimasterCanvas";
import { AnimasterMagneticButton } from "@/components/animaster/AnimasterMagneticButton";
import { AnimasterGlowBadge } from "@/components/animaster/AnimasterGlowBadge";
import { VengeanceHeroHUD } from "@/components/vengeance/VengeanceHeroHUD";
import { VengeanceMetrics } from "@/components/vengeance/VengeanceMetrics";
import { Skiper3DCard } from "@/components/skiper/Skiper3DCard";
import heroSilhouette from "@/assets/image_9d0942.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36 bg-[#0A0A0A]" id="home">
      {/* Animaster 60FPS Interactive Canvas Background */}
      <AnimasterCanvas particleCount={65} connectionDistance={130} />

      {/* Ambient Glow Blobs */}
      <div className="blob-small" style={{ top: "6%", right: "8%", opacity: 0.35 }} />
      <div className="blob-big" style={{ top: "35%", right: "12%", opacity: 0.2 }} />
      <div className="blob-small" style={{ top: "45%", left: "-40px", opacity: 0.25 }} />

      {/* Cyber Grid Background Mask */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      {/* Top Vengeance Telemetry HUD */}
      <div className="relative z-20 mb-8 sm:mb-12">
        <VengeanceHeroHUD />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* Left Column: Typography & Action Controls */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Animaster Shimmer Eyebrow */}
            <AnimasterGlowBadge icon={<Sparkles className="h-3 w-3" />}>
              Sharif — Based in Bangladesh // Full-Stack &amp; Automation
            </AnimasterGlowBadge>

            {/* Headline with Typewriter text */}
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-syne">
              <span className="block">Creative Designer &amp;</span>
              <span
                className="block min-h-[2.4em] sm:min-h-[1.25em] mt-1 sm:mt-1.5"
                style={{ color: "var(--accent-color, #10B981)" }}
              >
                <TypewriterText
                  strings={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Automation Specialist",
                    "Custom Solutions",
                  ]}
                  className="font-syne"
                  typingSpeed={90}
                  deletingSpeed={55}
                  pauseDuration={2200}
                />
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed font-poppins">
              I build designs and websites that solve problems, inspiring
              success. Engineered with modern React 19, Tailwind CSS, high-octane micro-animations, and precision logic.
            </p>

            {/* Animaster Liquid Magnetic Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AnimasterMagneticButton href="#work" magneticStrength={0.3}>
                <span>Explore Featured Work</span>
                <ArrowRight className="h-4 w-4" />
              </AnimasterMagneticButton>

              <AnimasterMagneticButton href="#terminal" magneticStrength={0.25} glow={false}>
                <Terminal className="h-4 w-4 text-neutral-400" />
                <span>Launch Interactive CLI</span>
              </AnimasterMagneticButton>
            </div>

            {/* Vengeance Telemetry Metrics */}
            <div className="mt-12 w-full">
              <VengeanceMetrics />
            </div>
          </div>

          {/* Right Column: Skiper 3D Tilt Card Silhouette */}
          <div className="lg:col-span-5 w-full relative">
            <Skiper3DCard maxTilt={10} glareOpacity={0.25} className="p-2 bg-[#121212] shadow-2xl ring-1 ring-white/10">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#0E0E0E] rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <Terminal className="h-3 w-3 text-emerald-400" />
                  <span>sharif_system_profile.webp</span>
                </div>
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--accent-color, #10B981)" }}
                />
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-b-xl bg-[#0A0A0A]">
                <img
                  src={heroSilhouette}
                  alt="Sharif — Web Systems Engineer silhouette"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center -scale-x-100"
                />

                {/* Cyber Scanlines Overlay */}
                <div className="absolute inset-0 cyber-scanlines opacity-40 pointer-events-none" />

                {/* Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Top Telemetry */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="rounded-lg bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-mono text-neutral-200">
                    STATUS: ACTIVE
                  </span>
                  <span
                    className="rounded-lg bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-mono font-bold"
                    style={{ color: "var(--accent-color, #10B981)" }}
                  >
                    3D PERSPECTIVE ON
                  </span>
                </div>

                {/* Bottom Overlay Badge Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/10 bg-[#121212]/90 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        className="h-4 w-4"
                        style={{ color: "var(--accent-color, #10B981)" }}
                      />
                      <span className="font-medium text-neutral-200 font-mono">Execution Stack</span>
                    </div>
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: "var(--accent-color, #10B981)" }}
                    >
                      OPTIMIZED
                    </span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {["React 19", "Tailwind v4", "Skiper UI", "Animaster", "Vengeance"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-neutral-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Skiper3DCard>

            {/* Circular Rotating Badge — Floating */}
            <div className="absolute -bottom-8 -left-8 z-20 hidden lg:block">
              <CircularBadge size={130} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
