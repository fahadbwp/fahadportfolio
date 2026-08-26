import React, { useState } from 'react';
import { SHIPPED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { X, ArrowLeft, ArrowRight, Calendar, User, Clock, Layers, ExternalLink, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto white-theme-bg animate-in fade-in duration-200 text-stone-900">
      
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-200 px-6 sm:px-8 py-4 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-700 hover:text-orange-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          <div className="text-xs font-mono font-bold text-stone-900 uppercase hidden sm:block">
            {project.category} &middot; {project.year}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-200 transition-all cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-10 text-left">
        
        {/* Header Title in Master White Panel */}
        <div className="white-panel p-8 sm:p-10 rounded-2xl space-y-4 shadow-md">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Case Study / {project.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950 leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            {project.summary}
          </p>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-dark text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>{project.liveUrl.includes('upwork.com') ? 'View Original Project on Upwork' : 'Visit Live Web Application'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Full-width Hero Image */}
        <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-md aspect-[16/9] bg-stone-100">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl white-panel-subtle">
          <div>
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-orange-600" /> Client
            </div>
            <div className="text-sm font-bold text-stone-950 mt-1">{project.client}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-orange-600" /> Role
            </div>
            <div className="text-sm font-bold text-stone-950 mt-1">{project.role}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-600" /> Duration
            </div>
            <div className="text-sm font-bold text-stone-950 mt-1">{project.duration}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-orange-600" /> Year
            </div>
            <div className="text-sm font-bold text-stone-950 mt-1">{project.year}</div>
          </div>
        </div>

        {/* Challenge / Solution / Result Deep Dive */}
        <div className="space-y-6">
          <div className="white-panel p-6 sm:p-8 rounded-2xl space-y-3">
            <h3 className="text-xl font-black text-stone-950 flex items-center gap-2">
              <span className="text-xs font-mono text-orange-600 font-bold">01.</span>
              The Challenge
            </h3>
            <p className="text-stone-700 leading-relaxed font-normal text-sm sm:text-base">
              {project.challenge}
            </p>
          </div>

          <div className="white-panel p-6 sm:p-8 rounded-2xl space-y-3">
            <h3 className="text-xl font-black text-stone-950 flex items-center gap-2">
              <span className="text-xs font-mono text-orange-600 font-bold">02.</span>
              The Solution & Approach
            </h3>
            <p className="text-stone-700 leading-relaxed font-normal text-sm sm:text-base">
              {project.solution}
            </p>
          </div>

          <div className="white-panel p-6 sm:p-8 rounded-2xl space-y-3">
            <h3 className="text-xl font-black text-stone-950 flex items-center gap-2">
              <span className="text-xs font-mono text-orange-600 font-bold">03.</span>
              Impact & Measurable Results
            </h3>
            <p className="text-stone-700 leading-relaxed font-normal text-sm sm:text-base">
              {project.result}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-stone-950">Visual Artifacts & Screens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img)}
                className="overflow-hidden rounded-2xl white-panel p-2 cursor-pointer group hover:scale-[1.01] transition-transform duration-300 shadow-sm"
              >
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-stone-100">
                  <img
                    src={img}
                    alt={`Screen ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Used */}
        <div className="white-panel p-6 rounded-2xl space-y-3">
          <div className="text-xs font-mono uppercase text-stone-500 font-bold">Technologies & Tools:</div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono font-medium text-stone-800">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="p-6 rounded-2xl white-panel-subtle hover:bg-white text-left transition-all group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous
            </div>
            <div className="text-sm sm:text-base font-bold text-stone-950 group-hover:text-orange-600 mt-1">
              {prevProject.title}
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="p-6 rounded-2xl white-panel-subtle hover:bg-white text-right transition-all group cursor-pointer"
          >
            <div className="text-[11px] font-mono text-stone-400 uppercase font-bold flex items-center justify-end gap-1">
              Next <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-sm sm:text-base font-bold text-stone-950 group-hover:text-orange-600 mt-1">
              {nextProject.title}
            </div>
          </button>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <img
            src={activeLightboxImage}
            alt="Fullscreen preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      )}
    </div>
  );
};
