import React, { useState, useEffect } from 'react';

export interface TypewriterTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  strings,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const tick = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let delta = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && currentText === fullText) {
        delta = pauseDuration;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      timeout = setTimeout(tick, delta);
    };

    timeout = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, loopNum, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="text-[var(--accent-color,#10B981)] animate-pulse">|</span>
    </span>
  );
};
