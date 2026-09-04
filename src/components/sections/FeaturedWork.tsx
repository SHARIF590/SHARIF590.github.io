import { ExternalLink, Terminal, ArrowUpRight } from "lucide-react";
import workImg1 from "@/assets/portfolio/work-img-1.png";
import workImg2 from "@/assets/portfolio/work-img-2.png";
import workImg3 from "@/assets/portfolio/work-img-3.png";
import workImg4 from "@/assets/portfolio/work-img-4.png";
import workImg5 from "@/assets/portfolio/work-img-5.png";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "Restaurant Website",
    description:
      "Professional website for a restaurant company, featuring online reservations, menu showcase, and responsive mobile-first design using HTML, CSS, JavaScript, and Figma.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    image: workImg1,
    githubUrl: "https://github.com/SHARIF590",
    liveUrl: "#",
  },
  {
    number: "02",
    title: "Design For Agriculture",
    description:
      "A modern agricultural platform featuring data-driven dashboards, crop analytics, and a clean, intuitive interface designed for farming businesses.",
    tags: ["React", "Tailwind CSS", "Database", "Gsap"],
    image: workImg2,
    githubUrl: "https://github.com/SHARIF590",
    liveUrl: "#",
  },
  {
    number: "03",
    title: "Chicken Shop Website",
    description:
      "E-commerce storefront for a local chicken shop with product listings, shopping cart integration, and automated order dispatch system.",
    tags: ["JavaScript", "CSS", "Responsive", "UI/UX"],
    image: workImg3,
    githubUrl: "https://github.com/SHARIF590",
    liveUrl: "#",
  },
  {
    number: "04",
    title: "Complete Systems For Mining",
    description:
      "Full-stack operational system for mining operations, featuring real-time telemetry dashboards, worker management, and automated reporting pipelines.",
    tags: ["Python", "C#", "PostgreSQL", "Automation"],
    image: workImg4,
    githubUrl: "https://github.com/SHARIF590",
    liveUrl: "#",
  },
  {
    number: "05",
    title: "Downloads Organizer Utility",
    description:
      "Lightweight, automated desktop workflow utility that auto-categorizes and sorts incoming downloads, documents, and media with zero dependencies.",
    tags: ["Python", "Automation", "Workflow", "CLI"],
    image: workImg5,
    githubUrl: "https://github.com/SHARIF590/downloads-organizer",
    liveUrl: "https://github.com/SHARIF590/downloads-organizer",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>Featured Works</span>
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-syne">
              View My <span className="text-emerald-400">Work</span>
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-2xl font-poppins">
              Professional websites and systems built for companies and clients,
              using HTML, CSS, JavaScript, Gsap, Figma, Database and more.
            </p>
          </div>

          <a
            href="https://github.com/SHARIF590"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors self-start sm:self-auto"
          >
            <span>VIEW GITHUB</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Project Cards */}
        <div className="mt-14 flex flex-col gap-10 sm:gap-12">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-[#121212] overflow-hidden hover:border-white/20 transition-colors duration-150"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                {/* Visual Preview */}
                <div className="lg:col-span-6 bg-[#0E0E0E] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                  {/* Top status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                        PROJECT PREVIEW
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-600">
                      {project.number} / 05
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative my-6 rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Number badge */}
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold font-syne text-white/10">
                      {project.number}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                    <Terminal className="h-4 w-4 text-emerald-400/50" />
                  </div>
                </div>

                {/* Details & Metadata */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                      PROJECT {project.number}
                    </span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight font-syne">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-poppins">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors duration-150"
                      >
                        <span>View Project</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-transparent px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white hover:border-white/30 transition-colors duration-150"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
