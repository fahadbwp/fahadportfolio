import React, { useState } from 'react';
import { 
  Search, 
  User, 
  SlidersHorizontal, 
  Folder, 
  FileText, 
  Phone, 
  Heart, 
  MessageSquare, 
  Star, 
  X, 
  ChevronDown, 
  Sparkles, 
  Send,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  CheckCircle2,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SHIPPED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface BentoDashboardProps {
  onSelectProject: (project: Project) => void;
  onNavigateArticles: () => void;
  onNavigateAdmin: () => void;
}

export const BentoDashboard: React.FC<BentoDashboardProps> = ({
  onSelectProject,
  onNavigateArticles,
  onNavigateAdmin: _onNavigateAdmin,
}) => {
  // Navigation & Search State
  const [activeTab, setActiveTab] = useState<'hero' | 'skills' | 'projects' | 'resume' | 'contact'>('hero');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Engagement Counters
  const [likes, setLikes] = useState(14);
  const [hasLiked, setHasLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [starsCount, setStarsCount] = useState(5);
  const [quoteLikes, setQuoteLikes] = useState(4);
  const [quoteHasLiked, setQuoteHasLiked] = useState(false);
  const [quoteStarred, setQuoteStarred] = useState(false);

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // Interactive Card Dismissals (Mac-style Close buttons)
  const [dismissedCards, setDismissedCards] = useState<Record<string, boolean>>({});

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      confetti({ particleCount: 25, spread: 60, origin: { y: 0.3 } });
    }
  };

  const handleStar = () => {
    if (starred) {
      setStarsCount(prev => prev - 1);
      setStarred(false);
    } else {
      setStarsCount(prev => prev + 1);
      setStarred(true);
      confetti({ particleCount: 30, spread: 70, origin: { y: 0.3 } });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#f97316', '#fb923c', '#fdba74', '#ffffff']
      });
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 4000);
    }, 800);
  };

  const toggleDismiss = (cardKey: string) => {
    setDismissedCards(prev => ({ ...prev, [cardKey]: !prev[cardKey] }));
  };

  const scrollToElement = (id: string, tab: 'hero' | 'skills' | 'projects' | 'resume' | 'contact') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Filtered projects for search query
  const filteredProjects = SHIPPED_PROJECTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen ambient-glow-bg text-stone-900 selection:bg-orange-500 selection:text-white px-3 sm:px-6 lg:px-10 py-6 sm:py-10 flex flex-col justify-center items-center">
      
      {/* Decorative ambient backdrop spheres */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl pointer-events-none animate-warm-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glass Bento Wrapper */}
      <div className="relative z-10 w-full max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: NAVIGATION & SEARCH SIDEBAR                                    */}
        {/* ========================================================================= */}
        <aside className="lg:col-span-3 flex flex-col gap-4">
          <div className="glass-panel rounded-[28px] p-5 sm:p-6 flex flex-col gap-6 shadow-xl">
            
            {/* Glowing Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-500 placeholder:font-normal focus:ring-2 focus:ring-orange-500/50"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-600 pointer-events-none" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Vertical Menu Items */}
            <nav className="flex flex-col gap-2">
              {[
                { id: 'hero-section', key: 'hero' as const, label: 'HERO/ABOUT', icon: User },
                { id: 'skills-section', key: 'skills' as const, label: 'SKILLS', icon: SlidersHorizontal },
                { id: 'projects-section', key: 'projects' as const, label: 'PROJECTS', icon: Folder },
                { id: 'resume-section', key: 'resume' as const, label: 'RESUME', icon: FileText },
                { id: 'contact-section', key: 'contact' as const, label: 'CONTACT', icon: Phone },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => scrollToElement(item.id, item.key)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 text-left ${
                      isActive 
                        ? 'bg-white/70 text-orange-900 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_12px_rgba(249,115,22,0.15)] border border-white/80' 
                        : 'text-stone-800/85 hover:bg-white/40 hover:text-stone-950'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'text-stone-600'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Additional Knowledge Hub & CV Links */}
            <div className="pt-3 border-t border-stone-800/10 flex flex-col gap-2">
              <button
                onClick={onNavigateArticles}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-stone-700 hover:text-orange-950 hover:bg-white/30 transition-all text-left"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>Articles & Blog</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-800 font-mono">Hub</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Fahad_Saleem_CV.pdf"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-stone-700 hover:text-orange-950 hover:bg-white/30 transition-all text-left"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-stone-600" />
                  <span>Download CV</span>
                </span>
                <span className="text-[10px] font-mono text-stone-500">PDF</span>
              </a>
            </div>

            {/* Status Live Indicator */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-stone-700 bg-white/30 px-3 py-2 rounded-xl border border-white/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire (30+ hrs/wk)</span>
            </div>

          </div>
        </aside>

        {/* ========================================================================= */}
        {/* RIGHT AREA: 9-COLUMN BENTO GRID                                           */}
        {/* ========================================================================= */}
        <main className="lg:col-span-9 flex flex-col gap-5 sm:gap-6">
          
          {/* ----------------------------------------------------------------------- */}
          {/* ROW 1: HERO PROFILE CARD + KPI WORKING FORMAT CARD                      */}
          {/* ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            
            {/* HERO PROFILE CARD (approx 7.5 cols) */}
            {!dismissedCards.hero && (
              <section 
                id="hero-section"
                className="md:col-span-8 glass-panel rounded-[30px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                {/* Mac-Style Close Button */}
                <button
                  onClick={() => toggleDismiss('hero')}
                  className="absolute top-5 right-5 p-1 rounded-full text-stone-500 hover:text-stone-900 hover:bg-white/50 transition-colors"
                  aria-label="Close card"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  {/* Glowing Circular Avatar */}
                  <div className="relative group shrink-0">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/90 shadow-md">
                      <img 
                        src={PERSONAL_INFO.avatarUrl} 
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image path has issue
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="text-center mt-2.5">
                      <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-stone-800">
                        {PERSONAL_INFO.name}
                      </span>
                    </div>
                  </div>

                  {/* Title & Bio */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-stone-900 leading-tight">
                      VIBE CODING<br />DEVELOPER
                    </h1>
                    <div className="text-xs sm:text-sm font-bold tracking-wider text-orange-950/80 uppercase">
                      BSCS STUDENT &middot; LEAD GEN SPECIALIST
                    </div>
                    <p className="text-xs sm:text-[13px] text-stone-700/90 leading-relaxed font-normal pt-1">
                      Creative, data-driven developer & lead generation specialist. Specializing in prospect research, LinkedIn Sales Navigator extractions, and modern AI-assisted web applications.
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Reactions Bar */}
                <div className="flex items-center gap-5 pt-5 mt-4 border-t border-stone-800/10 text-stone-700 text-xs font-medium">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 hover:text-orange-600 transition-colors ${hasLiked ? 'text-orange-600 font-bold' : ''}`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-orange-600 text-orange-600' : ''}`} />
                    <span>{likes}</span>
                  </button>

                  <button 
                    onClick={() => scrollToElement('contact-section', 'contact')}
                    className="flex items-center gap-1.5 hover:text-stone-950 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>3</span>
                  </button>

                  <button 
                    onClick={handleStar}
                    className={`flex items-center gap-1.5 hover:text-amber-500 transition-colors ${starred ? 'text-amber-500 font-bold' : ''}`}
                  >
                    <Star className={`w-3.5 h-3.5 ${starred ? 'fill-amber-400 text-amber-500' : ''}`} />
                    <span>{starsCount}</span>
                  </button>
                </div>
              </section>
            )}

            {/* KPI & WORKING FORMAT CARD (approx 4.5 cols) */}
            <section className="md:col-span-4 glass-panel rounded-[30px] p-5 sm:p-6 flex flex-col justify-between relative">
              
              {/* User Dropdown Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
                  <div className="w-4 h-4 rounded-full overflow-hidden bg-stone-300">
                    <img src={PERSONAL_INFO.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-800">{PERSONAL_INFO.name}</span>
                  <ChevronDown className="w-3 h-3 text-stone-500" />
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full font-bold">LIVE</span>
              </div>

              {/* KPI Score */}
              <div className="space-y-1 mb-4">
                <div className="text-[11px] font-semibold text-stone-600">Average KPI Score</div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl sm:text-3xl font-black text-stone-900">98.89%</div>
                  {/* Mini Vertical Equalizer Graph */}
                  <div className="flex items-end gap-1 h-7">
                    {[40, 65, 85, 100, 75, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 rounded-full equalizer-bar"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] font-medium text-emerald-700">+4.34% vs last month</div>
              </div>

              {/* Working Format Bars */}
              <div className="space-y-2 pt-2 border-t border-stone-800/10">
                <div className="text-[11px] font-bold text-stone-700">Working Format</div>
                
                {/* Onsite */}
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] text-stone-600">
                    <span>Onsite (BWP)</span>
                    <span className="font-mono font-bold">11.4%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400/80 rounded-full" style={{ width: '11.4%' }}></div>
                  </div>
                </div>

                {/* Hybrid */}
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] text-stone-600">
                    <span>Hybrid (Agency)</span>
                    <span className="font-mono font-bold">32.2%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '32.2%' }}></div>
                  </div>
                </div>

                {/* Remote */}
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] text-stone-600">
                    <span>Remote (Global/Upwork)</span>
                    <span className="font-mono font-bold">58.4%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" style={{ width: '58.4%' }}></div>
                  </div>
                </div>

              </div>

            </section>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* ROW 2: MINI QUOTE CARD + SKILLS & ANALYTICS DASHBOARD CARD              */}
          {/* ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            
            {/* MINI QUOTE / BIO NOTE CARD (approx 3.5 cols) */}
            <section className="md:col-span-4 glass-panel rounded-[30px] p-5 sm:p-6 flex flex-col justify-between relative">
              <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed font-medium">
                &ldquo;Engineering high-conversion B2B prospect lists, LinkedIn Sales Navigator pipelines, and responsive web applications with precision and speed.&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-800/10">
                <div className="p-1.5 rounded-full bg-white/60">
                  <User className="w-3.5 h-3.5 text-stone-700" />
                </div>
                <div className="flex items-center gap-3 text-stone-600 text-xs">
                  <button 
                    onClick={() => {
                      if (quoteHasLiked) {
                        setQuoteLikes(p => p - 1);
                        setQuoteHasLiked(false);
                      } else {
                        setQuoteLikes(p => p + 1);
                        setQuoteHasLiked(true);
                      }
                    }}
                    className={`flex items-center gap-1 hover:text-orange-600 ${quoteHasLiked ? 'text-orange-600 font-bold' : ''}`}
                  >
                    <Heart className={`w-3 h-3 ${quoteHasLiked ? 'fill-orange-600' : ''}`} />
                    <span>{quoteLikes}</span>
                  </button>

                  <button 
                    onClick={() => scrollToElement('contact-section', 'contact')}
                    className="flex items-center gap-1 hover:text-stone-900"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>0</span>
                  </button>

                  <button 
                    onClick={() => setQuoteStarred(p => !p)}
                    className={`flex items-center gap-1 hover:text-amber-500 ${quoteStarred ? 'text-amber-500 font-bold' : ''}`}
                  >
                    <Star className={`w-3 h-3 ${quoteStarred ? 'fill-amber-400' : ''}`} />
                    <span>{quoteStarred ? '1' : '0'}</span>
                  </button>
                </div>
              </div>
            </section>

            {/* SKILLS & ANALYTICS DASHBOARD CARD (approx 8.5 cols) */}
            <section 
              id="skills-section"
              className="md:col-span-8 glass-panel rounded-[30px] p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Header icons */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs font-bold uppercase tracking-widest text-stone-800 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                  <span>Skills & Performance Metrics</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <User className="w-3.5 h-3.5 hover:text-stone-900 cursor-pointer" />
                  <MessageSquare className="w-3.5 h-3.5 hover:text-stone-900 cursor-pointer" />
                  <Star className="w-3.5 h-3.5 hover:text-stone-900 cursor-pointer" />
                </div>
              </div>

              {/* 3 Circular Gauges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                
                {/* Gauge 1: 75% AI-Assisted Web Dev */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-stone-200/80"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-orange-500"
                        strokeDasharray="75, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs sm:text-sm font-black text-stone-900">75%</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-700 mt-2">AI-ASSISTED WEB DEV</span>
                </div>

                {/* Gauge 2: 50% Lead Generation */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-stone-200/80"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-orange-500"
                        strokeDasharray="50, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs sm:text-sm font-black text-stone-900">50%</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-700 mt-2">LEAD GENERATION</span>
                </div>

                {/* Gauge 3: 25% Graphics Design */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-stone-200/80"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-orange-500"
                        strokeDasharray="25, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs sm:text-sm font-black text-stone-900">25%</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-700 mt-2">GRAPHICS DESIGN</span>
                </div>

              </div>

              {/* Data Mining & CRM Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 mb-4 border-b border-stone-800/10">
                
                {/* Data Mining Equalizer Bars */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold tracking-wider text-stone-800 uppercase">DATA MINING PROGRESS</div>
                  <div className="flex items-end gap-2 h-12 pt-1">
                    {[55, 75, 95, 80, 90].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-stone-200/70 rounded-full h-full p-0.5 flex items-end">
                        <div 
                          className="w-full rounded-full equalizer-bar transition-all duration-500"
                          style={{ height: `${val}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CRM Data Management */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold tracking-wider text-stone-800 uppercase">CRM DATA MANAGEMENT</div>
                  <div className="space-y-1">
                    {[
                      { name: 'HubSpot', w: '92%' },
                      { name: 'Salesforce', w: '85%' },
                      { name: 'Zoho CRM', w: '78%' },
                      { name: 'Excel / Sheets', w: '96%' },
                    ].map((crm, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-full h-1.5 bg-stone-200/70 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"
                            style={{ width: crm.w }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Social Media & Outreach Trend Wave Chart */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[11px] font-bold tracking-wider text-stone-800 uppercase">
                  <span>SOCIAL MEDIA & LEAD TREND ANALYSIS (MONTHS)</span>
                </div>
                
                {/* Interactive SVG Spline Line & Area Chart */}
                <div className="relative h-20 w-full pt-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area fill */}
                    <path
                      d="M 0 60 Q 50 55, 100 45 T 200 48 T 260 20 L 300 30 L 300 80 L 0 80 Z"
                      fill="url(#chartGradient)"
                    />
                    
                    {/* Glowing Stroke */}
                    <path
                      d="M 0 60 Q 50 55, 100 45 T 200 48 T 260 20 L 300 30"
                      fill="none"
                      stroke="#ea580c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Milestone Points: 32, 29, 45 */}
                    <g>
                      <circle cx="100" cy="45" r="3" fill="#ea580c" />
                      <line x1="100" y1="40" x2="100" y2="25" stroke="#78350f" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="100" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#78350f">32</text>
                    </g>
                    <g>
                      <circle cx="160" cy="47" r="3" fill="#ea580c" />
                      <line x1="160" y1="42" x2="160" y2="28" stroke="#78350f" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="160" y="23" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#78350f">29</text>
                    </g>
                    <g>
                      <circle cx="260" cy="20" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
                      <line x1="260" y1="16" x2="260" y2="2" stroke="#78350f" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="260" y="-1" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ea580c">45</text>
                    </g>
                  </svg>
                </div>

              </div>

            </section>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* ROW 3: TIMELINE (RESUME) + CONTACT FORM + FEATURED PROJECTS             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            
            {/* TIMELINE / RESUME CARD (approx 4 cols) */}
            {!dismissedCards.timeline && (
              <section 
                id="resume-section"
                className="md:col-span-4 glass-panel rounded-[30px] p-5 sm:p-6 relative flex flex-col justify-between"
              >
                <button
                  onClick={() => toggleDismiss('timeline')}
                  className="absolute top-4 right-4 p-1 rounded-full text-stone-500 hover:text-stone-900"
                  aria-label="Close timeline"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative pl-6 space-y-4 my-auto">
                  {/* Glowing Vertical Amber Neon Line */}
                  <div className="absolute left-2.5 top-2 bottom-2 w-1 neon-amber-track rounded-full"></div>

                  {/* 2024 Milestone */}
                  <div className="relative">
                    <div className="absolute -left-[20px] top-1.5 w-3 h-3 rounded-full bg-white neon-node"></div>
                    <div className="glass-panel-subtle rounded-2xl p-3 shadow-xs">
                      <div className="text-xs font-black text-stone-900 flex items-center justify-between">
                        <span>2024</span>
                        <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                      <div className="text-[11px] font-bold text-stone-800 mt-0.5">BSCS Student</div>
                      <div className="text-[10px] text-stone-600">Islamia University Bahawalpur (final sem) & AI Web Dev</div>
                    </div>
                  </div>

                  {/* 2023 Milestone */}
                  <div className="relative">
                    <div className="absolute -left-[20px] top-1.5 w-3 h-3 rounded-full bg-white neon-node"></div>
                    <div className="glass-panel-subtle rounded-2xl p-3 shadow-xs">
                      <div className="text-xs font-black text-stone-900 flex items-center justify-between">
                        <span>2023</span>
                        <Briefcase className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                      <div className="text-[11px] font-bold text-stone-800 mt-0.5">Lead Generation & Data Specialist</div>
                      <div className="text-[10px] text-stone-600">UPSKILLERS & Freelance Sourcing</div>
                    </div>
                  </div>

                  {/* 2022 Milestone */}
                  <div className="relative">
                    <div className="absolute -left-[20px] top-1.5 w-3 h-3 rounded-full bg-white neon-node"></div>
                    <div className="glass-panel-subtle rounded-2xl p-3 shadow-xs">
                      <div className="text-xs font-black text-stone-900 flex items-center justify-between">
                        <span>2022</span>
                        <Layers className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                      <div className="text-[11px] font-bold text-stone-800 mt-0.5">Junior Virtual Assistant</div>
                      <div className="text-[10px] text-stone-600">Data Mining, Verification & Research</div>
                    </div>
                  </div>

                </div>

              </section>
            )}

            {/* QUICK FROSTED CONTACT FORM (approx 4 cols) */}
            {!dismissedCards.contact && (
              <section 
                id="contact-section"
                className="md:col-span-4 glass-panel rounded-[30px] p-5 sm:p-6 relative flex flex-col justify-between"
              >
                <button
                  onClick={() => toggleDismiss('contact')}
                  className="absolute top-4 right-4 p-1 rounded-full text-stone-500 hover:text-stone-900"
                  aria-label="Close contact"
                >
                  <X className="w-4 h-4" />
                </button>

                <form onSubmit={handleContactSubmit} className="space-y-3 my-auto">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-stone-700 uppercase mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Carla Sanford"
                      value={formState.name}
                      onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs font-medium text-stone-800 placeholder-stone-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-stone-700 uppercase mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs font-medium text-stone-800 placeholder-stone-400"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-stone-700 uppercase mb-1">
                      MESSAGE
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me about your project or required leads list..."
                      value={formState.message}
                      onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-3.5 py-2 rounded-xl glass-input text-xs font-medium text-stone-800 placeholder-stone-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending' || formStatus === 'sent'}
                    className="w-full py-2.5 px-4 rounded-full glass-btn-orange text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === 'idle' && (
                      <>
                        <span>SUBMIT</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                    {formStatus === 'sending' && <span>SENDING...</span>}
                    {formStatus === 'sent' && (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>SENT! THANK YOU</span>
                      </>
                    )}
                  </button>

                </form>
              </section>
            )}

            {/* FEATURED PROJECTS SHOWCASE CARD (approx 4 cols) */}
            {!dismissedCards.projects && (
              <section 
                id="projects-section"
                className="md:col-span-4 glass-panel rounded-[30px] p-5 sm:p-6 relative flex flex-col justify-between"
              >
                <button
                  onClick={() => toggleDismiss('projects')}
                  className="absolute top-4 right-4 p-1 rounded-full text-stone-500 hover:text-stone-900"
                  aria-label="Close projects"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="text-[11px] font-bold tracking-wider text-stone-800 uppercase mb-3 flex items-center gap-2">
                  <Folder className="w-3.5 h-3.5 text-orange-600" />
                  <span>PROJECT SHOWCASE</span>
                </div>

                {/* 3 Project Thumbnails */}
                <div className="space-y-2.5 my-auto">
                  {filteredProjects.slice(0, 3).map((proj, idx) => {
                    const labelBadge = idx === 0 ? 'WEB APP UI (AI)' : idx === 1 ? 'TREND REPORT (SOCIAL)' : 'CRM DASHBOARD (DATA)';
                    return (
                      <div
                        key={proj.id}
                        onClick={() => onSelectProject(proj)}
                        className="group p-2.5 rounded-2xl glass-panel-subtle hover:bg-white/70 transition-all cursor-pointer flex items-center gap-3 border border-white/60 hover:border-orange-400 shadow-xs"
                      >
                        <div className="w-14 h-12 rounded-xl overflow-hidden bg-stone-900 shrink-0 relative">
                          <img 
                            src={proj.thumbnail} 
                            alt={proj.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] font-black font-mono text-orange-800 tracking-wider block truncate">
                            {labelBadge}
                          </span>
                          <span className="text-[11px] font-bold text-stone-900 block truncate">
                            {proj.title}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-orange-600 transition-colors shrink-0" />
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] font-medium text-stone-500">Click any card for full case study</span>
                </div>

              </section>
            )}

          </div>

        </main>

      </div>

    </div>
  );
};
