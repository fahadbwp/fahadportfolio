import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, ChevronDown, Download, Globe, GraduationCap, Building } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, UpworkIcon } from './Icons';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick: _onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-6xl mx-auto text-left"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none animate-ambient"></div>

      {/* Main Hero Grid */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Authentic Portrait Photo */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative group overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 aspect-[4/5] shadow-2xl">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-neutral-900/80 backdrop-blur-md px-3 py-2 rounded-xl border border-neutral-800">
              <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Social Quick Row */}
          <div className="flex items-center justify-between pt-4 px-1 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                title="Upwork Profile"
              >
                <UpworkIcon className="w-4 h-4" />
              </a>
              
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-pink-400 hover:border-pink-500/30 transition-all"
                title="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Fahad_Saleem_CV.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Headline, Pitch, Credentials */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-emerald-400 inline-block"></span>
              <span>{PERSONAL_INFO.roleTitle}</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-white leading-[1.04]">
              {PERSONAL_INFO.name}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed font-sans">
            {PERSONAL_INFO.heroPitch}
          </p>

          {/* Key Credentials Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-neutral-950 border border-neutral-900">
              <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase">Education</div>
                <div className="text-xs font-semibold text-white">BSCS (Computer Science)</div>
                <div className="text-[11px] text-neutral-400">Islamia University of Bahawalpur (final semester)</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-neutral-950 border border-neutral-900">
              <Building className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase">Experience</div>
                <div className="text-xs font-semibold text-white">2.7 Years Tenure</div>
                <div className="text-[11px] text-neutral-400">UPSKILLERS (Satellite Town, Bahawalpur)</div>
              </div>
            </div>
          </div>

          {/* Status Offer Pill */}
          <div className="flex items-start gap-2 text-xs text-neutral-400 font-sans pt-1">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{PERSONAL_INFO.freeOffer}</span>
          </div>



        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-6 border-t border-neutral-900">
        <span className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-neutral-400" />
          <span>Bahawalpur, Pakistan • GMT+5 (30+ hrs/week)</span>
        </span>
        <a href="#services" className="animate-bounce p-1 hover:text-white transition-colors" aria-label="Scroll down">
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};