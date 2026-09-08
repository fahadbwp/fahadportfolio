import React, { useState } from 'react';
import { Calculator, Clock, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const InteractiveLeadCalculator: React.FC = () => {
  const [leadCount, setLeadCount] = useState<number>(500);
  const [industry, setIndustry] = useState<string>('Shopify & E-Commerce');
  const [includePhone, setIncludePhone] = useState<boolean>(true);
  const [includeLinkedIn, setIncludeLinkedIn] = useState<boolean>(true);

  // Dynamic calculations based on parameters
  const turnaroundDays = leadCount <= 250 ? '24 Hours' : leadCount <= 1000 ? '48 Hours' : '3 to 4 Days';

  return (
    <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>// Interactive Pipeline Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Estimate your lead requirements
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
            Configure your target volume and data fields to view automated turnaround timelines and delivery specs.
          </p>
        </div>

        {/* 2-Column Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl white-panel space-y-6 shadow-md border border-stone-200">
            
            {/* Lead Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="lead-count-slider" className="text-xs font-mono uppercase font-bold text-stone-700">
                  Target Lead Volume
                </label>
                <span className="font-mono text-xl font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-xl border border-orange-200">
                  {leadCount.toLocaleString()} Leads
                </span>
              </div>

              <input
                id="lead-count-slider"
                type="range"
                min={100}
                max={5000}
                step={100}
                value={leadCount}
                onChange={(e) => setLeadCount(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />

              <div className="flex justify-between text-[11px] font-mono text-stone-400 font-bold">
                <span>100 Leads (Starter)</span>
                <span>2,500 (Scale)</span>
                <span>5,000+ (Enterprise)</span>
              </div>
            </div>

            {/* Industry Selector */}
            <div className="space-y-2">
              <label htmlFor="industry-target-select" className="text-xs font-mono uppercase font-bold text-stone-700 block">
                Target Industry / ICP
              </label>
              <select
                id="industry-target-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl clean-input text-sm font-medium text-stone-900"
              >
                <option>Shopify & E-Commerce Founders</option>
                <option>Healthcare & Nursing Home Administrators</option>
                <option>B2B SaaS & Tech Decision Makers</option>
                <option>Commercial Real Estate Brokers</option>
                <option>Marketing & Advertising Agency CMOs</option>
              </select>
            </div>

            {/* Enrichment Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <div className="text-xs font-mono uppercase font-bold text-stone-700">
                Enrichment Fields Included
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="rounded text-orange-600 accent-orange-600"
                  />
                  <span>Verified Work Email (0% Bounce)</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeLinkedIn}
                    onChange={(e) => setIncludeLinkedIn(e.target.checked)}
                    className="rounded text-orange-600 accent-orange-600"
                  />
                  <span>Direct Profile / Contact URL</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={includePhone}
                    onChange={(e) => setIncludePhone(e.target.checked)}
                    className="rounded text-orange-600 accent-orange-600"
                  />
                  <span>Direct HQ / Mobile Phone</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="rounded text-orange-600 accent-orange-600"
                  />
                  <span>Company Revenue & Headcount</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Output Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-stone-900 text-white space-y-6 flex flex-col justify-between shadow-xl border border-stone-800">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs font-mono uppercase font-bold text-stone-400">
                  Automated Estimate
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                  Guaranteed
                </span>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60 space-y-1">
                  <div className="text-[10px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    Turnaround
                  </div>
                  <div className="text-xl font-bold font-mono text-white">{turnaroundDays}</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60 space-y-1">
                  <div className="text-[10px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Accuracy
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">99.8% Valid</div>
                </div>
              </div>

              {/* Delivery Specs */}
              <div className="space-y-2 text-xs text-stone-300 font-sans">
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>5-pass NeverBounce & Apollo verification</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>CSV, Google Sheets & CRM import ready</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-bold">Includes 10 Free Verified Leads Trial</span>
                </div>
              </div>
            </div>

            {/* Order CTA */}
            <a
              href="#contact"
              className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md mt-4"
            >
              <span>Inquire For {leadCount.toLocaleString()} Leads</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
