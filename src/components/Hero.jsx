import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero({ aboutData, socialLinks }) {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Spring Boot & REST API Specialist",
    "JWT Security & Role Access Control",
    "React & Modern Responsive Frontend",
    "MySQL & Database System Designer"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const githubUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com/janmejayananda955';
  const linkedinUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://www.linkedin.com/in/janmejayananda955';

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-mono font-bold mb-6 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
          <span>Available for Roles & Full-Stack Projects</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-400 dark:via-sky-300 dark:to-purple-500 bg-clip-text text-transparent">
            {aboutData?.name || 'Janmejaya Nanda'}
          </span>
        </h1>

        {/* Dynamic Rotating Title */}
        <div className="h-10 sm:h-16 flex items-center justify-center mb-5">
          <p className="text-lg sm:text-3xl font-mono text-cyan-600 dark:text-cyan-400 font-extrabold transition-all duration-500 transform px-2">
            {titles[textIndex]}
          </p>
        </div>

        {/* Bio Paragraph */}
        <p className="max-w-3xl mx-auto text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium px-2">
          {aboutData?.bio ||
            "Results-driven Java Full-Stack Developer (MCA 2026, CGPA: 8.31/10) specializing in Spring Boot REST APIs, JWT Security, 13-domain modular architectures, and modern React user interfaces."}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Explore Recent Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={aboutData?.resumeUrl || "/Janmejaya_Resume_Final.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-md shadow-md shadow-slate-200/50 dark:shadow-none flex-1 sm:flex-none"
            >
              <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-md shadow-slate-200/50 dark:shadow-none"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-md shadow-slate-200/50 dark:shadow-none"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {aboutData?.stats?.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-slate-200/50 dark:shadow-none"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
