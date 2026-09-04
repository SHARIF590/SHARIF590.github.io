import { Marquee } from '@/components/ui/marquee';
import { Star } from 'lucide-react';
import avatar1 from '@/assets/portfolio/testimonial-1.png';
import avatar2 from '@/assets/portfolio/testimonial-2.png';
import avatar3 from '@/assets/portfolio/testimonial-3.png';
import avatar4 from '@/assets/portfolio/testimonial-4.png';

const testimonials = [
  {
    name: 'Sara The',
    role: 'CEO, TechVision',
    quote: 'This young man is very disciplined; he delivered a professional and high-quality project. He is always in contact and active regarding time. Outstanding work.',
    avatar: avatar1,
  },
  {
    name: 'Elemar Rice',
    role: 'Founder, GreenLeaf',
    quote: 'Exceptional attention to detail and a deep understanding of modern web technologies. The final product exceeded our expectations in every way.',
    avatar: avatar2,
  },
  {
    name: 'Rita Treds',
    role: 'CTO, DataFlow',
    quote: 'Professional, reliable, and incredibly skilled. The automated workflow solution he built saved us countless hours of manual work.',
    avatar: avatar3,
  },
  {
    name: 'Augus Drix',
    role: 'Director, PixelArts',
    quote: 'Creative, fast, and methodical. He understood our vision immediately and translated it into a stunning digital experience.',
    avatar: avatar4,
  },
];

export const TestimonialsMarquee = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>What They Say</span>
          </div>
          <h2 className="mb-4 font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="text-emerald-400">What</span> They Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="font-syne text-4xl font-bold text-white">5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Area */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:45s]">
            {testimonials.map((t, i) => (
              <div key={i} className="flex w-[320px] flex-shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-[#121212] p-5 sm:w-[360px]">
                <p className="font-poppins text-sm italic leading-relaxed text-neutral-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border border-white/10 object-cover" />
                  <div className="flex flex-col">
                    <span className="font-poppins text-sm font-semibold text-white">{t.name}</span>
                    <span className="font-poppins text-xs text-neutral-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
          
          {/* Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0A0A] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
