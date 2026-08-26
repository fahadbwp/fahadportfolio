import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
      }, 700);
      return () => clearTimeout(removeTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  const letters = ['F', 'A', 'H', 'A', 'D', ' ', 'S', 'A', 'L', 'E', 'E', 'M'];

  return (
    <div
      className={`fixed inset-0 z-99999 flex flex-col items-center justify-center bg-stone-950 text-white transition-all duration-700 ease-in-out pointer-events-auto ${
        loaded ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Animated Brand Text */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {letters.map((char, index) => (
            <span
              key={index}
              className="text-2xl sm:text-4xl font-serif font-black tracking-widest text-white inline-block animate-bounce"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                marginRight: char === ' ' ? '0.5rem' : '0'
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-mono text-stone-400">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>Lead Generation &bull; Web Builder &bull; Data Specialist</span>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-48 h-1 bg-stone-800 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-1000 ease-out"
          style={{ width: loaded ? '100%' : '75%' }}
        ></div>
      </div>
    </div>
  );
};
