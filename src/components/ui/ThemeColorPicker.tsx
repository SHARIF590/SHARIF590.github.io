import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';

const colors = [
  { name: 'Emerald', hue: 160, hex: '#10B981' },
  { name: 'Blue', hue: 220, hex: '#3B82F6' },
  { name: 'Purple', hue: 270, hex: '#A855F7' },
  { name: 'Cyan', hue: 180, hex: '#06B6D4' },
  { name: 'Orange', hue: 25, hex: '#F97316' },
  { name: 'Rose', hue: 350, hex: '#F43F5E' },
];

export const ThemeColorPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHue, setActiveHue] = useState(160);

  const handleColorChange = (hue: number, hex: string) => {
    setActiveHue(hue);
    document.documentElement.style.setProperty('--hue', hue.toString());
    document.documentElement.style.setProperty('--accent-color', hex);
    document.documentElement.style.setProperty('--accent-color-light', `${hex}80`);
    document.documentElement.style.setProperty('--accent-glow', `${hex}33`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#121212] p-2 shadow-xl"
          >
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.hue, color.hex)}
                className={`h-6 w-6 rounded-full transition-transform hover:scale-110 focus:outline-none ${
                  activeHue === color.hue ? 'ring-2 ring-white ring-offset-2 ring-offset-[#121212]' : ''
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Set theme to ${color.name}`}
                title={color.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#121212] text-neutral-400 shadow-lg transition-colors hover:text-white hover:border-white/20 focus:outline-none"
        aria-label="Toggle color picker"
      >
        <Palette className="h-5 w-5" />
      </button>
    </div>
  );
};
