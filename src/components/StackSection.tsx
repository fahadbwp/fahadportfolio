import React from 'react';
import { TOOL_STACK } from '../data/portfolioData';
import { Layers } from 'lucide-react';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      
      {/* Section Header */}
      <div className="mb-14 space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold flex items-center gap-2">
          <Layers className="w-3.5 h-3.5" />
          <span>// Tech Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Tools I work in daily
        </h2>
        <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
          Grouped by where they sit in the pipeline — sourcing, verifying, organizing, researching, and web development.
        </p>
      </div>

      {/* 3-Column White Theme Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {TOOL_STACK.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl white-panel h-full flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center justify-between text-xs font-mono tracking-wider pb-3 border-b border-stone-100">
                <span className="text-stone-950 font-bold text-sm">{group.category}</span>
                <span className="text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono">
                  {group.tools.length} tools
                </span>
              </div>

              {/* Informational Tool Tags */}
              <div className="flex flex-wrap gap-2 items-start justify-start">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono font-medium text-stone-800 leading-none inline-flex items-center hover:bg-stone-100 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
