import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Terminal, Server } from 'lucide-react';
import BackendCardBadge from './BackendCardBadge';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-gray-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between bg-gray-950/90">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-1.5 inline-block">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Visual Header */}
          {project.isBackend ? (
            <BackendCardBadge project={project} />
          ) : (
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-gray-800 overflow-hidden flex items-center justify-center border border-gray-700/60">
              {project.mainImage ? (
                <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center text-cyan-400">
                  <Layers className="w-12 h-12 mb-2" />
                  <span className="text-xs font-mono">{project.category}</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">{project.description}</p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2">Technologies & Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-gray-800 text-cyan-300 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureDetails?.highlights && (
            <div>
              <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2">System Architecture Highlights</h4>
              <div className="space-y-2 bg-gray-950/60 p-4 rounded-xl border border-gray-800/80">
                {project.architectureDetails.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-cyan-500 text-gray-950 hover:bg-cyan-400 transition-colors"
              >
                <span>Live Project / Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-gray-800 text-gray-200 hover:text-cyan-400 border border-gray-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
