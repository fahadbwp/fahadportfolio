import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onNavigateArticles: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContactClick: _onContactClick,
  onNavigateArticles
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['services', 'work', 'stack', 'coverage', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', id: 'services', isPage: false },
    { label: 'Work', href: '#work', id: 'work', isPage: false },
    { label: 'Articles', href: '#articles', id: 'articles', isPage: true },
    { label: 'Tools', href: '#stack', id: 'stack', isPage: false },
    { label: 'Industries', href: '#coverage', id: 'coverage', isPage: false },
    { label: 'Process', href: '#workflow', id: 'workflow', isPage: false },
    { label: 'Contact', href: '#contact', id: 'contact', isPage: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Mark */}
        <a
          href="#hero"
          className="flex items-center gap-3 font-serif font-black text-xl text-stone-950 hover:text-orange-600 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl"
        >
          <span className="w-9 h-9 rounded-xl bg-stone-950 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs group-hover:bg-orange-600 transition-colors">
            FS
          </span>
          <span className="tracking-tight">{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.isPage) {
                    e.preventDefault();
                    onNavigateArticles();
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 inline-flex items-center leading-none ${
                  isActive
                    ? 'bg-stone-950 text-white shadow-xs font-extrabold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Status Pill */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-2 font-mono text-xs font-bold px-3.5 py-1.5 border border-stone-200/90 rounded-full text-stone-900 bg-white shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for hire</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-stone-950 hover:text-orange-600 p-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-stone-200 px-6 py-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  if (item.isPage) {
                    e.preventDefault();
                    onNavigateArticles();
                  }
                }}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive ? 'bg-stone-950 text-white' : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}

    </header>
  );
};
