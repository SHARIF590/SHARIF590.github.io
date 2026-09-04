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
} from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML5', Icon: FileCode2 },
        { name: 'CSS3', Icon: Paintbrush },
        { name: 'JavaScript (ES6+)', Icon: Braces },
        { name: 'React', Icon: Atom },
        { name: 'Tailwind CSS', Icon: Sparkles },
        { name: 'Git & GitHub', Icon: GitBranch },
        { name: 'Vite & Tooling', Icon: Zap },
        { name: 'Responsive Design', Icon: LayoutGrid },
      ],
    },
    {
      title: 'Design & UI/UX',
      skills: [
        { name: 'Figma', Icon: PenTool },
        { name: 'UI/UX Design', Icon: Palette },
        { name: 'Design Systems', Icon: Shapes },
        { name: 'Interactive Prototyping', Icon: Frame },
        { name: 'Layout & Typography', Icon: LayoutGrid },
        { name: 'Visual Hierarchy', Icon: Sparkles },
      ],
    },
    {
      title: 'Automation & Scripts',
      skills: [
        { name: 'Python', Icon: Terminal },
        { name: 'C# .NET', Icon: Cpu },
        { name: 'Workflow Automation', Icon: Sparkles },
        { name: 'Desktop Utilities', Icon: Box },
        { name: 'Custom Task Scripts', Icon: FileCode2 },
        { name: 'CLI Tools', Icon: Terminal },
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
            Focused strictly on modern web interfaces, digital design, and custom automation scripts that streamline real-world tasks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-white/10 bg-[#121212] p-6 hover:border-white/20 transition-colors duration-150">
              <div className="mb-4">
                <h3 className="font-syne text-lg font-bold text-white">{category.title}</h3>
                <div className="mt-2 h-0.5 w-8 bg-emerald-500/50" />
              </div>
              <ul className="flex flex-col">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 border-b border-white/5 py-2.5 last:border-0 group">
                    <skill.Icon className="h-5 w-5 text-neutral-400 transition-colors duration-150 group-hover:text-emerald-400" />
                    <span className="font-poppins text-sm text-neutral-300 group-hover:text-white transition-colors duration-150">{skill.name}</span>
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
