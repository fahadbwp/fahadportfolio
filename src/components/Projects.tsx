import React, { useState } from 'react';
import { SHIPPED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ArrowRight, ExternalLink, FolderGit2, Filter } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Lead Gen', 'Web App', 'Healthcare'];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = SHIPPED_PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Lead Gen') return p.category.includes('Lead Gen') || p.category.includes('E-Commerce');
    if (activeCategory === 'Web App') return p.category.includes('Web App');
    if (activeCategory === 'Healthcare') return p.category.includes('Healthcare');
    return true;
  });

  return (
    <section id="work" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      
      {/* Section Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>// Shipped Work</span>
          <span className="text-stone-300">&bull;</span>
          <span className="text-stone-500 font-mono">{filteredProjects.length} Selected Projects</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Recent builds & pipelines
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-md leading-relaxed">
            Built with AI-assisted development tools & verified lead research — live, verified, and in production.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-mono font-bold text-stone-400 mr-1 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-950 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Column White Theme Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="white-panel rounded-2xl p-6 space-y-5 flex flex-col justify-between group animate-in fade-in-50 duration-300"
          >
            <div className="space-y-4">
              {/* Thumbnail */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative overflow-hidden rounded-xl bg-stone-100 aspect-[16/10] border border-stone-200 cursor-pointer"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-xs font-mono font-bold text-stone-950 shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-1 px-0.5">
                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-left text-xl font-bold text-stone-950 group-hover:text-orange-600 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  {project.client} &middot; {project.year}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
              <div className="flex items-center gap-3">
                {/* Primary Case Study Button */}
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-primary-dark text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Secondary Live Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200"
                    title="Open live link in new tab"
                    aria-label={`Open external link for ${project.title}`}
                  >
                    <span>{project.liveUrl.includes('upwork.com') ? 'View on Upwork' : 'Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
