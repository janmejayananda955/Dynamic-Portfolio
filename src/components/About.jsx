import React from 'react';
import { GraduationCap, Award, Server, Shield, Layers, Cpu, CheckCircle2 } from 'lucide-react';

export default function About({ aboutData, educationData, certsData }) {
  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: "Backend Architecture",
      desc: "Architecting modular monoliths with strict 3-layer architecture (Controller → Service → Repository) & 13 domain package isolation."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "JWT & Spring Security",
      desc: "Implementing stateless JWT token generation, role-based access control (RBAC), and custom security filter chains."
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Full-Stack Integration",
      desc: "Connecting React user interfaces with Spring REST APIs via Axios, complete with global exception handling & custom DTOs."
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Database Optimization",
      desc: "Designing normalized MySQL schemas, JPA entity relationships (@OneToMany, @ManyToOne), stored procedures, and joins."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Passionate About <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Robust Engineering</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-medium">
            I craft secure, high-performance web applications and Spring Boot backend systems built to scale cleanly.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1.5 group shadow-md shadow-slate-200/50 dark:shadow-none"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Education Details
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academic background & qualifications</p>
              </div>
            </div>

            <div className="space-y-5">
              {educationData?.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-300 group-hover:text-cyan-600 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-bold border border-cyan-500/20">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300 mb-1">{edu.institution}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">{edu.period}</div>
                  {edu.details && <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/50 font-medium">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Certifications
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Verified course completions</p>
                </div>
              </div>

              <div className="space-y-4">
                {certsData?.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500 transition-colors"
                  >
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {cert.title}
                    </div>
                    <div className="text-xs text-cyan-700 dark:text-cyan-400 font-mono font-bold mb-3">
                      {cert.issuer} • {cert.year}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills?.map((sk, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Continuously updating skills with latest Java & Cloud trends</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
