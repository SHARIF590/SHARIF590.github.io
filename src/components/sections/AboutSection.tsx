

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>About Me</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-syne text-white max-w-3xl leading-tight">
            A young freelancer passionate about <span className="text-emerald-400">web systems</span> and <span className="text-emerald-400">interface engineering</span> — disciplined, focused, and driven by results.
          </h2>
          
          <p className="text-base text-neutral-400 max-w-2xl font-poppins">
            If you have a project in mind, explore my work and let's collaborate to bring your vision to life. Building resilient digital solutions is what I do best.
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#10B981] px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors font-poppins"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
