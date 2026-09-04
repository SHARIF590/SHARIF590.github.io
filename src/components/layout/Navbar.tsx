import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#work" },
  { label: "My Services", href: "#service" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "work", "service", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="text-white font-syne font-semibold text-lg tracking-tight"
        >
          Sharif
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-150 tracking-wide ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Pill + Status */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors duration-150"
          >
            <span>Contact me</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu — Slide-in Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[#0A0A0A]/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-20 pb-8">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/5 rounded-md"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative text-lg font-semibold font-syne transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-white hover:text-emerald-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#10B981] px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors w-full"
            >
              <span>Contact me</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
