import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, GraduationCap, Building, ShieldCheck, Zap } from 'lucide-react';

interface HeroPortraitStylesProps {
  initialStyle?: 1 | 2 | 3 | 4;
}

export const HeroPortraitStyles: React.FC<HeroPortraitStylesProps> = ({ initialStyle = 1 }) => {
  const [currentStyle, setCurrentStyle] = useState<1 | 2 | 3 | 4>(initialStyle);

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none">
      
      {/* ========================================================================= */}
      {/* STYLE 1: GLOWING HALO PORTAL (Reference Bento Aesthetic)                  */}
      {/* ========================================================================= */}
      {currentStyle === 1 && (
        <div className="relative flex flex-col items-center animate-in zoom-in-95 duration-300">
          
          {/* Radiant Multi-Stop Glowing Aura */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 opacity-60 blur-2xl animate-warm-pulse pointer-events-none"></div>

          {/* Main Circular Portal */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-tr from-white via-orange-400 to-amber-200 shadow-2xl shadow-orange-950/20">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/90 bg-stone-950 relative group">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-white/10 pointer-events-none"></div>
            </div>

            {/* Floating Top-Right Verified Badge */}
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-lg flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-900">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>VERIFIED</span>
            </div>

            {/* Floating Bottom Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full border border-white/90 shadow-xl flex items-center gap-2 text-xs font-bold text-stone-900 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

          <div className="mt-7 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-800 font-mono">
              // {PERSONAL_INFO.name}
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 2: 3D FLOATING GLASS CARD WITH MICRO-BADGES                         */}
      {/* ========================================================================= */}
      {currentStyle === 2 && (
        <div className="relative w-full max-w-[340px] animate-in zoom-in-95 duration-300">
          
          {/* Ambient Glow */}
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-orange-500/30 via-amber-400/20 to-transparent blur-xl pointer-events-none"></div>

          {/* Main Framed Glass Card */}
          <div className="relative rounded-[32px] glass-panel p-3 shadow-2xl border border-white/90 group">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-stone-950">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Badge 1 (Top Left): 100% Quality */}
              <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/90 shadow-md flex items-center gap-1.5 text-[10px] font-bold text-stone-900">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Verified</span>
              </div>

              {/* Floating Badge 2 (Top Right): 2.7 Yrs */}
              <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/90 shadow-md flex items-center gap-1.5 text-[10px] font-bold text-stone-900">
                <Building className="w-3.5 h-3.5 text-orange-600" />
                <span>2.7 Yrs Tenure</span>
              </div>

              {/* Bottom Identity Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold leading-none">{PERSONAL_INFO.name}</div>
                  <div className="text-[10px] text-stone-300 font-mono mt-1 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-orange-400" />
                    <span>BSCS Final Sem</span>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 3: STUDIO SPOTLIGHT APERTURE BLEND                                  */}
      {/* ========================================================================= */}
      {currentStyle === 3 && (
        <div className="relative flex flex-col items-center animate-in zoom-in-95 duration-300">
          
          {/* Radiant Studio Spotlight Backdrop */}
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[36px] overflow-hidden glass-panel p-2 shadow-2xl border border-white/90">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-orange-500/20 via-stone-950 to-stone-950 flex items-center justify-center group">
              
              {/* Radial Center Aperture Light */}
              <div className="absolute w-56 h-56 rounded-full bg-orange-500/25 blur-2xl pointer-events-none"></div>

              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Vignette Rim Light */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-stone-950/80 pointer-events-none"></div>
              
              {/* Bottom Live Glass Strip */}
              <div className="absolute bottom-3 inset-x-3 bg-white/90 backdrop-blur-xl py-2.5 px-3.5 rounded-2xl border border-white shadow-lg flex items-center justify-between text-stone-900">
                <div className="text-left">
                  <div className="text-xs font-black">{PERSONAL_INFO.name}</div>
                  <div className="text-[10px] font-mono text-orange-800 font-bold">Lead Gen & Web Developer</div>
                </div>
                <Zap className="w-4 h-4 text-orange-600 fill-orange-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STYLE 4: ASYMMETRIC DUAL-TONE BENTO FRAME                                 */}
      {/* ========================================================================= */}
      {currentStyle === 4 && (
        <div className="relative w-full max-w-[350px] animate-in zoom-in-95 duration-300">
          <div className="glass-panel p-3.5 rounded-[32px] border border-white/90 shadow-2xl space-y-3">
            
            {/* Top Photo Frame with Angled Border */}
            <div className="relative rounded-[22px] overflow-hidden aspect-[4/4.5] bg-stone-950 group">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-2.5 right-2.5 bg-orange-600 text-white text-[9px] font-mono font-black uppercase px-2.5 py-1 rounded-full shadow-md">
                TOP RATED
              </div>
            </div>

            {/* Attached Bento Metric Bar */}
            <div className="grid grid-cols-2 gap-2">
              <div className="glass-panel-subtle p-2.5 rounded-xl text-center">
                <div className="text-[10px] font-mono text-stone-600 uppercase font-bold">Tenure</div>
                <div className="text-xs font-black text-stone-900">2.7+ Yrs</div>
              </div>
              <div className="glass-panel-subtle p-2.5 rounded-xl text-center">
                <div className="text-[10px] font-mono text-stone-600 uppercase font-bold">Capacity</div>
                <div className="text-xs font-black text-orange-700">30+ Hrs/Wk</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* INTERACTIVE DESIGN SELECTOR BAR (1-Click Switcher)                        */}
      {/* ========================================================================= */}
      <div className="pt-2 flex flex-col items-center gap-2">
        <div className="text-[11px] font-mono text-stone-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-orange-600" />
          <span>Select Picture Style:</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl glass-panel-subtle border border-white/80 shadow-xs">
          {[
            { id: 1 as const, label: '1. Halo Portal' },
            { id: 2 as const, label: '2. 3D Glass & Badges' },
            { id: 3 as const, label: '3. Spotlight Aperture' },
            { id: 4 as const, label: '4. Dual Bento' },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setCurrentStyle(opt.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentStyle === opt.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-white/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
