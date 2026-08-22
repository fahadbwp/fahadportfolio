import React from 'react';
import { TOOL_STACK } from '../data/portfolioData';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          // stack
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Tools I work in daily.
        </h2>
        <p className="text-neutral-400 font-light text-base max-w-xl leading-relaxed">
          Grouped by where they sit in the pipeline — sourcing, verifying, organizing, researching.
        </p>
      </div>

      {/* Stack Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOL_STACK.map((group, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold border-b border-neutral-900 pb-2.5 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-neutral-600">({group.tools.length})</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {group.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
