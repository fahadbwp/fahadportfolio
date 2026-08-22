import React from 'react';
import { CORE_SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-emerald-400">// core services</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold tracking-tight text-white">
            What I handle end to end
          </h2>
        </div>
        <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md">
          From sourcing to a clean, ready-to-use sheet — every step done in-house, not outsourced further.
        </p>
      </div>

      {/* Ledger Service Rows */}
      <div className="divide-y divide-neutral-900 border-y border-neutral-900">
        {CORE_SERVICES.map((srv) => (
          <div
            key={srv.code}
            className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-6 items-baseline hover:bg-neutral-950/60 px-2 transition-colors group"
          >
            <div className="sm:col-span-2 font-mono text-sm text-neutral-500 group-hover:text-emerald-400 transition-colors">
              {srv.code}
            </div>
            
            <div className="sm:col-span-5 font-serif font-semibold text-lg sm:text-xl text-white">
              {srv.title}
            </div>

            <div className="sm:col-span-5 text-sm text-neutral-400 font-sans leading-relaxed">
              {srv.description}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
