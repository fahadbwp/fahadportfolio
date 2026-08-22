import React, { useState } from 'react';
import { SHIPPED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { X, ArrowLeft, ArrowRight, Calendar, User, Clock, Layers, ExternalLink } from 'lucide-react';


interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject
}) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  if (!project) return null;

  const currentIndex = SHIPPED_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = SHIPPED_PROJECTS[(currentIndex - 1 + SHIPPED_PROJECTS.length) % SHIPPED_PROJECTS.length];
  const nextProject = SHIPPED_PROJECTS[(currentIndex + 1) % SHIPPED_PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a] animate-in fade-in duration-200">
      
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-8 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <div className="text-xs font-mono text-neutral-500 uppercase hidden sm:block">
          {project.category} • {project.year}
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-16 text-left">
        
        {/* Header Title */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Case Study / {project.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed">
            {project.summary}
          </p>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <span>{project.liveUrl.includes('upwork.com') ? 'View Original Project on Upwork' : 'Visit Live Web Application'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>


        {/* Full-width Hero Image */}
        <div className="overflow-hidden rounded-2xl border border-neutral-800 aspect-[16/9] bg-neutral-950">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
          <div>
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Client
            </div>
            <div className="text-sm font-semibold text-white mt-1">{project.client}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Role
            </div>
            <div className="text-sm font-semibold text-white mt-1">{project.role}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Duration
            </div>
            <div className="text-sm font-semibold text-white mt-1">{project.duration}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Year
            </div>
            <div className="text-sm font-semibold text-white mt-1">{project.year}</div>
          </div>
        </div>

        {/* Challenge / Solution / Result Deep Dive */}
        <div className="space-y-12 border-t border-neutral-900 pt-12">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-500">01.</span>
              The Challenge
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-base">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-500">02.</span>
              The Solution & Design Approach
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-base">
              {project.solution}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-500">03.</span>
              Impact & Measurable Results
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-base">
              {project.result}
            </p>
          </div>
        </div>

        {/* Image Gallery with Lightbox Click */}
        <div className="space-y-4 border-t border-neutral-900 pt-12">
          <h3 className="text-lg font-bold text-white">Visual Artifacts & Screens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img)}
                className="overflow-hidden rounded-xl border border-neutral-800 aspect-[4/3] bg-neutral-950 cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Screen ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tools Used Tags */}
        <div className="space-y-3 border-t border-neutral-900 pt-8">
          <div className="text-xs font-mono uppercase text-neutral-500">Design Systems & Technologies:</div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="grid grid-cols-2 gap-4 border-t border-neutral-900 pt-12">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 text-left transition-all group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous
            </div>
            <div className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-300 mt-1">
              {prevProject.title}
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 text-right transition-all group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center justify-end gap-1">
              Next <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-300 mt-1">
              {nextProject.title}
            </div>
          </button>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <img
            src={activeLightboxImage}
            alt="Fullscreen preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
