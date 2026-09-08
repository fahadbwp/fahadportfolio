import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Check, 
  ChevronDown, 
  Download, 
  Globe, 
  GraduationCap, 
  Building, 
  ArrowRight, 
  MessageSquare, 
  Briefcase,
  Plus,
  Mail
} from 'lucide-react';
import { InstagramIcon, UpworkIcon } from './Icons';

interface HeroProps {
  onContactClick: () => void;
}

const SPECIALTIES = [
  "B2B & B2C Lead Generation",
  "LinkedIn Sales Navigator",
  "Verified Email Collection",
  "CRM Architecture & Cleaning",
  "AI-Assisted Web Development"
];

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 sm:pt-32 pb-12 px-6 sm:px-8 max-w-6xl mx-auto text-left"
    >
      {/* Main Hero Grid */}
      <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Floating Portrait & Utilities */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
          
          <div className="relative w-full max-w-[360px] group select-none">
            
            {/* Subtle floating ambient shadow */}
            <div 
              className="absolute -inset-2 bg-gradient-to-tr from-stone-200/50 via-orange-100/40 to-stone-100/50 blur-lg pointer-events-none group-hover:scale-105 transition-transform duration-700 opacity-90"
              style={{
                borderRadius: '30px 145px 30px 85px',
              }}
            ></div>

            {/* Sleek Arch Frame */}
            <div 
              className="relative overflow-hidden aspect-[4/5] bg-stone-950 transition-all duration-500 group-hover:scale-[1.01] group-hover:-translate-y-1"
              style={{
                borderRadius: '24px 140px 24px 78px',
                border: '2px solid #e2e8f0',
                boxShadow: `
                  0 20px 40px -12px rgba(0, 0, 0, 0.12),
                  0 8px 16px -4px rgba(0, 0, 0, 0.06)
                `,
              }}
            >
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                width={360}
                height={450}
                loading="eager"
                decoding="async"
                // @ts-expect-error fetchpriority attribute
                fetchpriority="high"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Top glass gradient reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none"></div>
            </div>

            {/* Location Metadata Badge */}
            <div className="mt-4 flex items-center justify-center text-xs font-mono text-stone-700 bg-stone-50 px-4 py-2 rounded-xl border border-stone-200 shadow-2xs">
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-orange-600" />
                <span>Bahawalpur, Pakistan &bull; GMT+5 (30+ hrs/wk)</span>
              </span>
            </div>
          </div>

          {/* Social Icons & Download Resume */}
          <div className="w-full max-w-[360px] pt-4 space-y-2.5">
            <div className="flex items-center justify-center gap-3">
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-orange-600 hover:border-orange-300 hover:scale-105 transition-all shadow-2xs"
                title="Upwork Profile"
                aria-label="Upwork Profile"
              >
                <UpworkIcon className="w-4 h-4" />
              </a>
              
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-pink-600 hover:border-pink-300 hover:scale-105 transition-all shadow-2xs"
                title="Instagram Profile"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-orange-600 hover:border-orange-300 hover:scale-105 transition-all shadow-2xs"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Fahad_Saleem_CV.pdf"
              className="w-full h-10 inline-flex items-center justify-center gap-2 px-4 rounded-xl bg-stone-900 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Typography, Narrative, Specialties */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
              {PERSONAL_INFO.roleTitle}
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-950 leading-[1.04]">
              {PERSONAL_INFO.name}
            </h1>
          </div>

          {/* Primary Pitch */}
          <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed font-sans">
            {PERSONAL_INFO.heroPitch}
          </p>

          {/* Core Specialties Bullet List (Iron Coding Style) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {SPECIALTIES.map((spec) => (
              <span
                key={spec}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-100 border border-stone-200/80 text-xs font-mono font-medium text-stone-800"
              >
                <Plus className="w-3 h-3 text-orange-600" />
                <span>{spec}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-full btn-primary-dark font-bold text-sm tracking-wide flex items-center gap-2.5 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#work"
              className="px-5 py-3.5 rounded-full btn-secondary-light font-bold text-sm flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-orange-600" />
              <span>View My Work</span>
            </a>
          </div>

          {/* Credentials Cards (White Theme) */}
          <div className="space-y-2.5 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <GraduationCap className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase font-bold">Education</div>
                  <div className="text-xs font-bold text-stone-950">BSCS (Computer Science)</div>
                  <div className="text-xs text-stone-600">Islamia University of Bahawalpur</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <Building className="w-5 h-5 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase font-bold">Experience</div>
                  <div className="text-xs font-bold text-stone-950">3+ Years Tenure</div>
                  <div className="text-xs text-stone-600">UPSKILLERS (Bahawalpur)</div>
                </div>
              </div>
            </div>

            {/* Offer Banner */}
            <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 w-full">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{PERSONAL_INFO.freeOffer}</span>
            </div>
          </div>

          {/* Explore Services Scroll Indicator */}
          <div className="pt-2">
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-orange-600 transition-colors" 
              aria-label="Scroll down to services"
            >
              <span>Explore Core Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-orange-600 animate-bounce" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};