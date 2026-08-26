import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Globe, Clock, GraduationCap, Building } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Portrait Photo */}
        <div className="lg:col-span-5">
          <div className="relative group overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 aspect-[4/5] shadow-2xl">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-neutral-900/80 backdrop-blur-md px-3 py-2 rounded-xl border border-neutral-800">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-emerald-400">● {PERSONAL_INFO.status}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Credentials */}
        <div className="lg:col-span-7 space-y-8 lg:pt-2">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              // background
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Lead Generation Specialist & Digital Builder.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            I specialize in extracting high-intent B2B decision-maker pipelines with 100% verification accuracy, managing CRM architectures across HubSpot, Zoho, and Salesforce, and developing responsive AI-assisted web applications.
          </p>

          {/* Education & Experience Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-neutral-900">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-900">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Education</div>
                <div className="text-sm font-semibold text-white">BSCS (Computer Science)</div>
                <div className="text-xs text-neutral-400 mt-0.5">Islamia University of Bahawalpur (final semester)</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-900">
              <Building className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Experience</div>
                <div className="text-sm font-semibold text-white">3+ Years Tenure</div>
                <div className="text-xs text-neutral-400 mt-0.5">UPSKILLERS (Satellite Town, Bahawalpur)</div>
              </div>
            </div>
          </div>

          {/* Location & Timezone Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
              <Globe className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Location</div>
                <div className="text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
              <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Timezone & Availability</div>
                <div className="text-sm font-medium text-white">{PERSONAL_INFO.timezone} • {PERSONAL_INFO.availability}</div>
              </div>
            </div>
          </div>

          {/* Actions: Resume Download */}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Fahad_Saleem_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-white text-xs font-medium uppercase tracking-wider hover:border-neutral-600 hover:bg-neutral-800 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
