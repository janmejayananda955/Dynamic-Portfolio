import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Filter, Code2 } from 'lucide-react';
import BackendCardBadge from './BackendCardBadge';

export default function ProjectModal({ projectsData, onClose }) {
  const [filter, setFilter] = useState('All');

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

  const filterCategories = ['All', 'Java Full-Stack', 'Backend API', 'Web App'];

  const filteredProjects = projectsData?.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Java Full-Stack') return p.category.toLowerCase().includes('java') || p.category.toLowerCase().includes('stack');
    if (filter === 'Backend API') return p.isBackend || p.category.toLowerCase().includes('backend');
    if (filter === 'Web App') return !p.isBackend;
    return true;
  }) || [];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-gray-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between bg-gray-950/80">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              All Projects & Architecture Portfolio
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-mono">
              Explore complete repository list, REST APIs, and system design specifications
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 sm:px-6 py-3 border-b border-gray-800/80 bg-gray-900 flex items-center gap-2 overflow-x-auto">
          <Filter className="w-4 h-4 text-cyan-400 shrink-0 mr-1" />
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-gray-950 font-bold shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal Projects Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 sm:space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-6 rounded-2xl bg-gray-950/60 border border-gray-800/80 grid md:grid-cols-2 gap-6 items-center"
            >
              {/* Visual preview */}
              <div>
                {project.isBackend ? (
                  <BackendCardBadge project={project} />
                ) : (
                  <div className="w-full h-48 sm:h-52 rounded-xl bg-gray-800 overflow-hidden flex items-center justify-center">
                    {project.mainImage ? (
                      <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs font-mono text-cyan-400">{project.category}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Information */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.period && (
                    <span className="text-xs font-mono text-gray-400">{project.period}</span>
                  )}
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800 text-cyan-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-gray-950 hover:bg-cyan-400 transition-colors"
                    >
                      <span>View Live / Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gray-800 text-gray-200 hover:text-cyan-400 border border-gray-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
