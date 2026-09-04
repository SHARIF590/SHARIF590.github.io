import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Palette, Search, ChevronDown } from 'lucide-react';

const services = [
  {
    icon: Code2,
    name: 'Website Developer',
    description: 'Building professional, responsive websites with modern frameworks and clean architecture.',
    items: ['Web Development', 'React & Next.js', 'Performance Optimization', 'Responsive Design']
  },
  {
    icon: Server,
    name: 'Backend Developer',
    description: 'Server-side logic, database design, and API architecture for robust application backends.',
    items: ['Node.js & Express', 'PostgreSQL', 'REST APIs', 'Database Design']
  },
  {
    icon: Palette,
    name: 'Web Designer',
    description: 'Crafting intuitive, visually stunning interfaces with attention to typography, spacing, and user experience.',
    items: ['UI/UX Design', 'Figma Prototyping', 'Design Systems', 'Typography']
  },
  {
    icon: Search,
    name: 'SEO Specialist',
    description: 'Optimizing web presence for search engines with structured data, performance tuning, and content strategy.',
    items: ['Technical SEO', 'Core Web Vitals', 'Structured Data', 'Analytics']
  }
];

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="service" className="py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>My Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-syne text-white">
              <span className="text-emerald-400">My</span> Services
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              const Icon = service.icon;
              
              return (
                <div 
                  key={index}
                  className={`rounded-xl border transition-colors duration-150 bg-[#121212] overflow-hidden ${
                    isOpen ? 'border-emerald-500/30' : 'border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-syne text-white">
                        {service.name}
                      </h3>
                    </div>
                    <div className="shrink-0 ml-4">
                      <ChevronDown 
                        className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="sm:ml-15">
                            <p className="text-base text-neutral-400 font-poppins mb-4">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.items.map((item, itemIndex) => (
                                <span 
                                  key={itemIndex}
                                  className="rounded bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300 border border-white/5"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
