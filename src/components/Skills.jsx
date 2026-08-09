import React, { useState } from 'react';
import { Server, Code, Database, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills({ skillsData }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Backend', icon: <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> },
    { name: 'Frontend', icon: <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" /> },
    { name: 'Databases', icon: <Database className="w-4 h-4 text-sky-600 dark:text-sky-400" /> },
    { name: 'Tools', icon: <Wrench className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
  ];

  const allSkillsList = Object.entries(skillsData || {}).flatMap(([cat, items]) =>
    items.map(item => ({ ...item, category: cat }))
  );

  const filteredSkills = activeTab === 'All'
    ? allSkillsList
    : allSkillsList.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Tech Stack & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-medium">
            Languages, frameworks, databases, and DevOps tooling I use to craft enterprise software.
          </p>
        </div>

        {/* Category Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === tab.name
                  ? 'bg-cyan-500 text-slate-950 shadow-md scale-105 font-extrabold'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 group shadow-md shadow-slate-200/50 dark:shadow-none"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden p-0.5 mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000 ease-out"
                  style={{ width: skill.level }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                <span>Category: {skill.category}</span>
                <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
