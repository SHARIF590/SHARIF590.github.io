import {
  FileCode2,
  Paintbrush,
  Braces,
  Atom,
  Palette,
  GitBranch,
  Globe,
  Sparkles,
  Server,
  Database,
  Terminal,
  Cloud,
  Radio,
  PenTool,
  Box,
  Film,
  Image,
  Shapes,
  Frame,
} from 'lucide-react';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>My Skills</span>
          </div>
          <h2 className="mb-6 font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="max-w-2xl font-poppins text-lg text-neutral-400">
            Skills I've developed through years of focused study, practice, and passion for building exceptional digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
            <div className="mb-4">
              <h3 className="font-syne text-lg font-bold text-white">Frontend</h3>
              <div className="mt-2 h-0.5 w-8 bg-emerald-500/50" />
            </div>
            <ul className="flex flex-col">
              {[
                { name: 'HTML', Icon: FileCode2 },
                { name: 'CSS', Icon: Paintbrush },
                { name: 'JavaScript', Icon: Braces },
                { name: 'React', Icon: Atom },
                { name: 'Sass', Icon: Palette },
                { name: 'Git', Icon: GitBranch },
                { name: 'GitHub', Icon: Globe },
                { name: 'Tailwind', Icon: Sparkles },
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-3 border-b border-white/5 py-2.5 last:border-0">
                  <skill.Icon className="h-5 w-5 text-neutral-400 transition-colors duration-150 hover:text-emerald-400" />
                  <span className="font-poppins text-sm text-neutral-300">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
            <div className="mb-4">
              <h3 className="font-syne text-lg font-bold text-white">Backend</h3>
              <div className="mt-2 h-0.5 w-8 bg-emerald-500/50" />
            </div>
            <ul className="flex flex-col">
              {[
                { name: 'Laravel', Icon: Server },
                { name: 'PostgreSQL', Icon: Database },
                { name: 'Node.js', Icon: Terminal },
                { name: 'Supabase', Icon: Cloud },
                { name: 'Socket.io', Icon: Radio },
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-3 border-b border-white/5 py-2.5 last:border-0">
                  <skill.Icon className="h-5 w-5 text-neutral-400 transition-colors duration-150 hover:text-emerald-400" />
                  <span className="font-poppins text-sm text-neutral-300">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design */}
          <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
            <div className="mb-4">
              <h3 className="font-syne text-lg font-bold text-white">Design</h3>
              <div className="mt-2 h-0.5 w-8 bg-emerald-500/50" />
            </div>
            <ul className="flex flex-col">
              {[
                { name: 'Figma', Icon: PenTool },
                { name: 'Blender', Icon: Box },
                { name: 'After Effects', Icon: Film },
                { name: 'Photoshop', Icon: Image },
                { name: 'Illustrator', Icon: Shapes },
                { name: 'Framer', Icon: Frame },
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-3 border-b border-white/5 py-2.5 last:border-0">
                  <skill.Icon className="h-5 w-5 text-neutral-400 transition-colors duration-150 hover:text-emerald-400" />
                  <span className="font-poppins text-sm text-neutral-300">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
