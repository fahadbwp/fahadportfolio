import React from 'react';
import { CORE_SERVICES } from '../data/portfolioData';
import { 
  Sparkles, 
  Target, 
  MailCheck, 
  FileSpreadsheet, 
  Search, 
  Database, 
  Headphones, 
  Code2,
  Users
} from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  R01: <Target className="w-5 h-5 text-orange-600" />,
  R02: <Users className="w-5 h-5 text-blue-600" />,
  R03: <MailCheck className="w-5 h-5 text-emerald-600" />,
  R04: <FileSpreadsheet className="w-5 h-5 text-amber-600" />,
  R05: <Search className="w-5 h-5 text-purple-600" />,
  R06: <Database className="w-5 h-5 text-cyan-600" />,
  R07: <Headphones className="w-5 h-5 text-pink-600" />,
  R08: <Code2 className="w-5 h-5 text-orange-600" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Core Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-stone-950">
            What I handle end to end
          </h2>
        </div>
        <p className="text-stone-600 font-sans text-sm sm:text-base max-w-md font-medium">
          From prospect sourcing to a clean, verified CRM-ready dataset — every step handled directly in-house.
        </p>
      </div>

      {/* 4-Column White Theme Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
        {CORE_SERVICES.map((srv) => (
          <div
            key={srv.code}
            className="p-6 rounded-2xl white-panel space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 group-hover:border-orange-200 group-hover:bg-orange-50/50 transition-colors">
                  {SERVICE_ICONS[srv.code] || <Target className="w-5 h-5 text-orange-600" />}
                </div>
                <span className="font-mono text-xs font-bold text-stone-400 group-hover:text-orange-600 transition-colors">
                  {srv.code}
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-stone-950 group-hover:text-orange-600 transition-colors leading-snug">
                {srv.title}
              </h3>
            </div>

            <p className="text-xs text-stone-600 font-sans leading-relaxed pt-1 border-t border-stone-100">
              {srv.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
