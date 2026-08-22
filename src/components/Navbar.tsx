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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', isPage: false },
    { label: 'Work', href: '#work', isPage: false },
    { label: 'Articles', href: '#articles', isPage: true },
    { label: 'Tools', href: '#stack', isPage: false },
    { label: 'Industries', href: '#coverage', isPage: false },
    { label: 'Process', href: '#workflow', isPage: false },
    { label: 'Contact', href: '#contact', isPage: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand with FS Mark */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-serif font-bold text-base text-white hover:text-neutral-300 transition-colors"
        >
          <span className="w-7 h-7 rounded-md bg-white text-black font-mono font-bold text-xs flex items-center justify-center">
            FS
          </span>
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.isPage ? (
              <button
                key={item.label}
                onClick={onNavigateArticles}
                className="text-xs font-sans text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>{item.label}</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">Hub</span>
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-sans text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>


        {/* Status Pill */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] px-3.5 py-1.5 border border-neutral-800 rounded-full text-neutral-400 bg-neutral-950">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for new projects</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-400 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-900 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            item.isPage ? (
              <button
                key={item.label}
                onClick={() => {
                  setMobileOpen(false);
                  onNavigateArticles();
                }}
                className="block w-full text-left text-sm font-sans text-emerald-400 font-medium"
              >
                {item.label} (Knowledge Hub) →
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-sans text-neutral-300 hover:text-white"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      )}

    </header>

  );
};
