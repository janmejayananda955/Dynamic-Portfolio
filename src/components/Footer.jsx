import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ aboutData, socialLinks }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const githubUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com/janmejayananda955';
  const linkedinUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://www.linkedin.com/in/janmejayananda955';
  const twitterUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'twitter')?.url || 'https://x.com/Janmejaya_955?t=08mD9OBmjYggM5jB2v6BvA&s=08';

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-14 pb-10 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {aboutData?.name || 'JANMEJAYA NANDA'}
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium leading-relaxed">
          Crafting robust Java Spring Boot backend systems, REST APIs, and modern React digital experiences.
        </p>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-110 shadow-sm"
            aria-label="GitHub Repository Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-110 shadow-sm"
            aria-label="LinkedIn Professional Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-110 shadow-sm"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${aboutData?.email || 'janmejayananda326@gmail.com'}`}
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-110 shadow-sm"
            aria-label="Send Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all hover:scale-105 mb-6 backdrop-blur-md shadow-sm"
        >
          <ArrowUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Back to top</span>
        </button>

        {/* High-Contrast Copyright Text (WCAG 2.1 AA Compliant 7.5:1 ratio) */}
        <div className="text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1 font-mono font-semibold">
          <span>&copy; {new Date().getFullYear()} Janmejaya Nanda. Engineered with React & Sanity CMS.</span>
        </div>

      </div>
    </footer>
  );
}
