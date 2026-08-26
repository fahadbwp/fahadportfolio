import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-24 px-6 sm:px-8 border-t border-stone-200 text-xs font-mono text-stone-500 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </div>
      <div className="font-semibold text-stone-900">
        Designed & Built by {PERSONAL_INFO.name}
      </div>
    </footer>
  );
};
