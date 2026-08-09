import React, { useEffect, lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import { useSanityData } from './hooks/useSanity';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Code-split below-the-fold components to reduce initial JS payload and eliminate render blocking
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { data, loading, isLiveCms } = useSanityData();

  // Validate URL Hash Route (Redirect invalid routes like #projectssgaertgh to #home)
  useEffect(() => {
    const validSections = ['#home', '#about', '#skills', '#projects', '#timeline', '#contact'];

    const handleHashValidation = () => {
      const currentHash = window.location.hash;
      if (currentHash && !validSections.includes(currentHash.toLowerCase())) {
        window.history.replaceState(null, '', window.location.pathname + '#home');
        const homeElement = document.getElementById('home');
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashValidation();
    window.addEventListener('hashchange', handleHashValidation);
    return () => window.removeEventListener('hashchange', handleHashValidation);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      {/* 60fps Non-Lagging Follower Cursor */}
      <CustomCursor />

      {/* Main Glassmorphic Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        aboutData={data.about}
      />

      {/* Hero Intro Section (Loaded Instantly) */}
      <main>
        <Hero
          aboutData={data.about}
          socialLinks={data.socialLinks}
        />

        {/* Async Chunks for Below-the-fold sections */}
        <Suspense fallback={
          <div className="py-20 text-center font-mono text-xs text-cyan-500 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Loading Content...</span>
          </div>
        }>
          <About
            aboutData={data.about}
            educationData={data.education}
            certsData={data.certifications}
          />

          <Skills
            skillsData={data.skills}
          />

          <Projects
            projectsData={data.projects}
          />

          <Timeline
            educationData={data.education}
            experienceData={data.experience}
          />

          <Contact
            aboutData={data.about}
            socialLinks={data.socialLinks}
          />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer
          aboutData={data.about}
          socialLinks={data.socialLinks}
        />
      </Suspense>
    </div>
  );
}
