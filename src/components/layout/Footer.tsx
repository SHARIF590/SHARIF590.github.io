import { ArrowUp, Mail } from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Big CTA Banner */}
        <div className="text-center pb-14 border-b border-white/10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-syne text-white tracking-tight uppercase leading-tight max-w-3xl mx-auto">
            Collaborate with Sharif and start your journey in creative design today.
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:workwithsharif.dev@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-[#10B981] px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors duration-150"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            <a
              href="https://github.com/SHARIF590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors duration-150"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Footer Links Row */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Brand + Copyright */}
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span className="font-semibold text-neutral-300 uppercase font-syne">
              Sharif
            </span>
            <span>·</span>
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>

          {/* Right: Quick Links + Back to Top */}
          <div className="flex items-center gap-6 text-xs font-mono text-neutral-500">
            <a href="#work" className="hover:text-neutral-300 transition-colors">
              Work
            </a>
            <a href="#service" className="hover:text-neutral-300 transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-neutral-300 transition-colors">
              Skills
            </a>
            <a
              href="https://github.com/SHARIF590"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-emerald-400 transition-colors"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
