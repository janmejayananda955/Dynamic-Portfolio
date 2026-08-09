import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, Building, CheckCircle2 } from 'lucide-react';

export default function Timeline({ educationData, experienceData }) {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="timeline" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Journey & Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Education & <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Career Milestones</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-medium">
            Academic achievements, practical software engineering, and production project deployments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-cyan-500 text-slate-950 shadow-md scale-105'
                : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-cyan-500'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education ({educationData?.length || 3})</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-purple-600 text-white shadow-md scale-105'
                : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-purple-500'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Projects & Experience</span>
          </button>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-cyan-500/40 ml-4 sm:ml-8 space-y-8">
          {activeTab === 'education' &&
            educationData?.map((item, idx) => (
              <div key={item.id || idx} className="relative pl-7 group">
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl group-hover:border-cyan-500 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-extrabold text-cyan-700 dark:text-cyan-300">{item.degree}</h3>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                      {item.score}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {item.institution}
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {item.period}
                  </div>

                  {item.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/50 font-medium">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}

          {activeTab === 'experience' && (
            <div className="relative pl-7 group">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl group-hover:border-purple-500 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-extrabold text-purple-700 dark:text-purple-300">Java Full-Stack Developer</h3>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
                    April 2026 – May 2026
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 mb-1">
                  Placement Automation System Project
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                  Render Cloud Backend & Netlify React Frontend Deployment
                </div>

                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Architected modular monolith with 13 domain packages for enterprise-level separation of concerns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Implemented JWT-based stateless authentication with role-based access control (Student & Recruiter).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>Designed 10+ Spring REST APIs following strict 3-layer architecture with global exception handling.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
