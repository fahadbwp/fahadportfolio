import React from 'react';
import { INDUSTRIES_COVERAGE, WORKFLOW_STEPS, STATS } from '../data/portfolioData';

export const WorkflowAndCoverage: React.FC = () => {
  return (
    <div className="space-y-32">
      
      {/* // coverage: Industries I've supported */}
      <section id="coverage" className="py-12 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
        <div className="space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            // coverage
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Industries I've supported.
          </h2>
          <p className="text-neutral-400 font-light text-base max-w-xl leading-relaxed">
            Each has different sourcing needs — I adjust the approach, not just the labels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES_COVERAGE.map((ind, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-1.5 hover:border-neutral-800 transition-colors"
            >
              <div className="text-sm font-bold text-white">{ind.name}</div>
              <div className="text-xs text-neutral-500 font-mono">{ind.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* // how it runs: Four steps, every project */}
      <section id="workflow" className="py-12 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
        <div className="space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            // how it runs
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Four steps, every project.
          </h2>
          <p className="text-neutral-400 font-light text-base max-w-xl leading-relaxed">
            Same order every time — it's what keeps turnaround fast and lists clean.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 space-y-3"
            >
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-16 border-t border-neutral-900 mt-16">
          {STATS.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-900 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
