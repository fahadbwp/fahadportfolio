import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 sm:px-8 border-t border-neutral-900 text-xs font-mono text-neutral-500 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </div>
      <div>
        Designed and built by {PERSONAL_INFO.name}
      </div>
    </footer>
  );
};
