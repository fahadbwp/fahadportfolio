import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsMarquee } from './components/ToolsMarquee';
import { ServicesSection } from './components/ServicesSection';
import { LeadVerificationSimulator } from './components/LeadVerificationSimulator';
import { Projects } from './components/Projects';
import { InteractiveLeadCalculator } from './components/InteractiveLeadCalculator';
import { StackSection } from './components/StackSection';
import { WorkflowAndCoverage } from './components/WorkflowAndCoverage';
import { FAQSection } from './components/FAQSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArticlesPage } from './components/ArticlesPage';
import { AdminPanel } from './components/AdminPanel';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Preloader } from './components/Preloader';
import { MagicCursor } from './components/MagicCursor';
import { BackToTop } from './components/BackToTop';
import type { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'articles' | 'admin'>('home');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin' || window.location.pathname === '/admin') {
        setCurrentView('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#blog/') || hash.startsWith('#articles/')) {
        const slug = hash.replace(/^#(blog|articles)\//, '');
        setActiveSlug(slug);
        setCurrentView('articles');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#articles' || hash === '#blog' || window.location.pathname === '/blog') {
        setActiveSlug(null);
        setCurrentView('articles');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToContact = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToArticles = () => {
    window.location.hash = '#blog';
    setCurrentView('articles');
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAdmin = () => {
    window.location.hash = '#admin';
    setCurrentView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'admin') {
    return (
      <AdminPanel
        onBackToHome={navigateToHome}
        onNavigateToBlog={navigateToArticles}
      />
    );
  }

  if (currentView === 'articles') {
    return (
      <ArticlesPage
        onBackToHome={navigateToHome}
        onNavigateToAdmin={navigateToAdmin}
        initialSlug={activeSlug}
      />
    );
  }

  return (
    <div className="min-h-screen white-theme-bg text-stone-900 font-sans selection:bg-orange-500 selection:text-white relative">
      {/* 1. Interactive Page Entrance Preloader */}
      <Preloader />

      {/* 2. Magnetic Magic Cursor Follower */}
      <MagicCursor />

      {/* Navigation */}
      <Navbar
        onContactClick={scrollToContact}
        onNavigateArticles={navigateToArticles}
      />
      
      <main>
        <Hero onContactClick={scrollToContact} />
        
        {/* 3. Infinite Automated Tool Marquee */}
        <ToolsMarquee />

        <ServicesSection />

        {/* 4. Live Lead Verification Automation Simulator */}
        <LeadVerificationSimulator />

        {/* 5. Projects Showcase with Filter Automation */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Interactive Lead Requirements & Turnaround Calculator */}
        <InteractiveLeadCalculator />

        <StackSection />
        <WorkflowAndCoverage />
        <FAQSection />
        <Contact />
      </main>

      <Footer />

      {/* 7. Circular Scroll Progress Back To Top Button */}
      <BackToTop />

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}
    </div>
  );
};

export default App;
