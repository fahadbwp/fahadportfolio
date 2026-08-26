import React from 'react';
import { INDUSTRIES_COVERAGE, WORKFLOW_STEPS, STATS } from '../data/portfolioData';
import { Briefcase, Activity, BarChart3 } from 'lucide-react';

export const WorkflowAndCoverage: React.FC = () => {
  return (
    <div className="space-y-24 max-w-6xl mx-auto px-6 sm:px-8 text-left">
      
      {/* 1. Industry Coverage Section */}
      <section id="coverage" className="pt-16 border-t border-stone-200">
        <div className="mb-12 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// Industry Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Industries I've supported
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
            Each vertical has unique sourcing criteria — I customize the data extraction approach for each ICP.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES_COVERAGE.map((ind) => (
            <div
              key={ind.name}
              className="p-5 rounded-2xl white-panel-subtle space-y-1.5 hover:shadow-sm transition-all"
            >
              <div className="text-sm font-bold text-stone-950">{ind.name}</div>
              <div className="text-xs text-stone-500 font-mono">{ind.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Process / Workflow Section */}
      <section id="workflow" className="pt-16 border-t border-stone-200">
        <div className="mb-12 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
            <Activity className="w-3.5 h-3.5" />
            <span>// How It Runs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Four steps, every project
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
            Same systematic order on every list — keeping turnarounds fast and lead accuracy guaranteed.
          </p>
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl white-panel space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center font-mono text-sm font-black text-stone-950 bg-stone-100 px-3 py-1 rounded-xl border border-stone-200">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-stone-950">{step.title}</h3>
              </div>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Track Record Section */}
        <div className="mt-20 pt-16 border-t border-stone-200 space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>// Track Record & Capacity</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
              By the numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl white-panel text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-stone-950">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-600 font-bold font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
