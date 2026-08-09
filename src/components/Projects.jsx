import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Info, Globe, Sparkles } from 'lucide-react';
import BackendCardBadge from './BackendCardBadge';
import ProjectModal from './ProjectModal';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ projectsData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projectsData?.slice(0, 3) || [];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Recent <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Projects & Architecture</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-medium">
            A showcase of production-grade Java full-stack applications, REST API systems, and modern web software.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 items-stretch">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 overflow-hidden backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1.5 group shadow-xl shadow-slate-200/50 dark:shadow-none h-full"
            >
              <div>
                {/* Top Header Bar */}
                <div className="px-5 py-3 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/60">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 truncate max-w-[200px]">
                    {project.category}
                  </span>
                  {project.period && (
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 ml-2 font-semibold">{project.period}</span>
                  )}
                </div>

                {/* Visual Header Banner - Fixed 230px Container Height */}
                <div className="p-3 bg-slate-100/80 dark:bg-slate-950/40 border-b border-slate-200 dark:border-slate-800/60 h-[230px] flex items-center justify-center overflow-hidden">
                  {project.isBackend ? (
                    <BackendCardBadge project={project} />
                  ) : (
                    <div className="w-full h-[220px] rounded-2xl bg-slate-900 border border-purple-500/30 overflow-hidden relative flex flex-col justify-between p-4 shadow-xl">
                      {/* Background Visual Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

                      {project.mainImage ? (
                        <img
                          src={project.mainImage}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        /* Default Cover Image for Web Apps without screenshots */
                        <div className="relative z-10 flex flex-col justify-between h-full font-mono">
                          <div className="flex items-center justify-between border-b border-gray-800/80 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-red-500" />
                              <span className="w-2 h-2 rounded-full bg-yellow-500" />
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-[10px] text-purple-400 font-semibold ml-1">web-app.jsx</span>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                              Full-Stack UI
                            </span>
                          </div>

                          <div className="flex flex-col items-center justify-center my-auto text-center py-2">
                            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2 group-hover:scale-110 transition-transform">
                              <Globe className="w-7 h-7" />
                            </div>
                            <h4 className="text-sm font-bold text-gray-100 font-sans">{project.title}</h4>
                            <span className="text-[10px] text-cyan-400 mt-0.5">React • Node • Cloud Architecture</span>
                          </div>

                          <div className="flex items-center justify-between text-[9px] text-gray-400 border-t border-gray-800/80 pt-1.5">
                            <span className="flex items-center gap-1 text-cyan-300">
                              <Sparkles className="w-3 h-3 text-cyan-400" /> Live Showcase
                            </span>
                            <span>v1.0.0</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-1 h-7">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed h-9 font-medium">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2 h-14 overflow-hidden">
                      {project.techStack?.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-cyan-300 border border-slate-300 dark:border-slate-700/80 h-fit font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.techStack?.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500 dark:text-slate-400 h-fit font-semibold">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action Bar */}
              <div className="p-5 pt-0 flex items-center gap-2 border-t border-slate-200 dark:border-slate-800/40 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-extrabold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>View Details</span>
                </button>

                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>View All Projects Showcase ({projectsData?.length || 4})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Full Projects Showcase Modal */}
      {modalOpen && (
        <ProjectModal
          projectsData={projectsData}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Single Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
