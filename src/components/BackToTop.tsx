import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl flex items-center justify-center text-stone-900 hover:text-orange-600 hover:scale-110 transition-all cursor-pointer group"
    >
      {/* Circular Progress SVG */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="rgba(226, 232, 240, 0.8)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="#ea580c"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-150"
        />
      </svg>

      <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
    </button>
  );
};
