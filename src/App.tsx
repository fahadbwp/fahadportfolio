import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { StackSection } from './components/StackSection';
import { WorkflowAndCoverage } from './components/WorkflowAndCoverage';
import { FAQSection } from './components/FAQSection';
import { ArticlesPage } from './components/ArticlesPage';
import { AdminPanel } from './components/AdminPanel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
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
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar
        onContactClick={scrollToContact}
        onNavigateArticles={navigateToArticles}
      />
      
      <main>
        <Hero onContactClick={scrollToContact} />
        <ServicesSection />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <StackSection />
        <WorkflowAndCoverage />
        <FAQSection />
        <Contact />
      </main>

      <Footer />

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

