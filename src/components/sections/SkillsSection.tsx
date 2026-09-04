import {
  FileCode2,
  Paintbrush,
  Braces,
  Atom,
  Palette,
  GitBranch,
  Sparkles,
  Zap,
  LayoutGrid,
  PenTool,
  Shapes,
  Frame,
  Terminal,
  Cpu,
  Box,
  ArrowUpRight,
} from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: [
        {
          name: 'HTML5',
          Icon: FileCode2,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS3',
          Icon: Paintbrush,
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'JavaScript (ES6+)',
          Icon: Braces,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'React',
          Icon: Atom,
          url: 'https://react.dev',
        },
        {
          name: 'Tailwind CSS',
          Icon: Sparkles,
          url: 'https://tailwindcss.com',
        },
        {
          name: 'Git & GitHub',
          Icon: GitBranch,
          url: 'https://github.com',
        },
        {
          name: 'Vite & Tooling',
          Icon: Zap,
          url: 'https://vite.dev',
        },
        {
          name: 'Responsive Design',
          Icon: LayoutGrid,
          url: 'https://web.dev/responsive-web-design-basics/',
        },
      ],
    },
    {
      title: 'Design & UI/UX',
      skills: [
        {
          name: 'Figma',
          Icon: PenTool,
          url: 'https://www.figma.com',
        },
        {
          name: 'UI/UX Design',
          Icon: Palette,
          url: 'https://www.nngroup.com',
        },
        {
          name: 'Design Systems',
          Icon: Shapes,
          url: 'https://designsystemsrepo.com',
        },
        {
          name: 'Interactive Prototyping',
          Icon: Frame,
          url: 'https://framer.com',
        },
        {
          name: 'Layout & Typography',
          Icon: LayoutGrid,
          url: 'https://fonts.google.com/knowledge',
        },
        {
          name: 'Visual Hierarchy',
          Icon: Sparkles,
          url: 'https://lawsofux.com',
        },
      ],
    },
    {
      title: 'Automation & Scripts',
      skills: [
        {
          name: 'Python',
          Icon: Terminal,
          url: 'https://www.python.org',
        },
        {
          name: 'C# .NET',
          Icon: Cpu,
          url: 'https://dotnet.microsoft.com',
        },
        {
          name: 'Workflow Automation',
          Icon: Sparkles,
          url: 'https://n8n.io',
        },
        {
          name: 'Desktop Utilities',
          Icon: Box,
          url: 'https://github.com/SHARIF590/downloads-organizer',
        },
        {
          name: 'Custom Task Scripts',
          Icon: FileCode2,
          url: 'https://github.com/SHARIF590',
        },
        {
          name: 'CLI Tools',
          Icon: Terminal,
          url: 'https://clig.dev',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>My Skills</span>
          </div>
          <h2 className="mb-6 font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="max-w-2xl font-poppins text-base text-neutral-400">
            Click or tap any skill to explore its official documentation and community standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-white/10 bg-[#121212] p-6 hover:border-white/20 transition-colors duration-150"
            >
              <div className="mb-4">
                <h3 className="font-syne text-lg font-bold text-white">{category.title}</h3>
                <div className="mt-2 h-0.5 w-8 bg-emerald-500/50" />
              </div>
              <ul className="flex flex-col">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="border-b border-white/5 last:border-0">
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${skill.name} official / community site`}
                      className="flex items-center justify-between py-2.5 px-3 -mx-3 rounded-lg group transition-all duration-150 hover:bg-emerald-500/10 active:bg-emerald-500/20 active:scale-[0.98] cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <skill.Icon className="h-5 w-5 text-neutral-400 transition-all duration-150 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] group-active:text-emerald-400 group-active:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <span className="font-poppins text-sm text-neutral-300 transition-colors duration-150 group-hover:text-white group-active:text-white">
                          {skill.name}
                        </span>
                      </div>

                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 group-active:opacity-100 group-active:text-emerald-400 transition-all duration-150 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
