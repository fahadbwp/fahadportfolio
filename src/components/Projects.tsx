import React from 'react';
import { SHIPPED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-neutral-900 text-left">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            // shipped work
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Recent builds & pipelines.
          </h2>
          <p className="text-neutral-400 font-light text-base max-w-lg leading-relaxed">
            Built with AI-assisted development tools & verified lead research — real, live, and in use.
          </p>
        </div>
        <p className="text-xs font-mono text-neutral-500 uppercase">
          (04) Selected Projects
        </p>
      </div>

      {/* 2-Column Desktop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SHIPPED_PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer space-y-4"
          >
            {/* Thumbnail Card */}
            <div className="relative overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 aspect-[16/10]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-xs">
                <div className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-neutral-800 text-[11px] font-mono text-neutral-300 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Live Link Indicator */}
              {project.liveUrl && (
                <div className="absolute top-4 right-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black transition-colors flex items-center gap-1.5 text-xs font-mono font-bold shadow-lg cursor-pointer"
                    title="Open in new tab"
                  >
                    <span>{project.liveUrl.includes('upwork.com') ? 'View on Upwork' : 'Visit Live Site'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>

            {/* Details */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {project.category} • {project.year}
                </p>
              </div>
              <div className="p-2 rounded-full border border-neutral-800 text-neutral-500 group-hover:text-white group-hover:border-neutral-600 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
