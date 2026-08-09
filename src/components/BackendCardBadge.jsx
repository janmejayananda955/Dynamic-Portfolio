import React from 'react';
import { Terminal, Layers, CheckCircle2 } from 'lucide-react';

export default function BackendCardBadge({ project }) {
  const packages = project?.architectureDetails?.packages || ['auth', 'security', 'student', 'job', 'admin', 'util'];
  const highlights = project?.architectureDetails?.highlights || [
    'Strict 3-Layer Architecture (Controller → Service → Repository)',
    'JWT Token Generation & Filter Chain Security'
  ];

  return (
    <div className="w-full h-[220px] rounded-2xl bg-slate-950 border border-cyan-500/30 p-3.5 font-mono text-xs text-gray-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

      <div>
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-2.5 gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <div className="flex gap-1 shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] text-cyan-400 font-semibold truncate flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400 shrink-0" />
              Spring Boot System Architecture
            </span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold shrink-0">
            REST API
          </span>
        </div>

        {/* 3-Layer Diagram Grid */}
        <div className="grid grid-cols-3 gap-1.5 mb-2.5 text-center">
          <div className="p-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
            <div className="text-[9px] text-cyan-400 font-bold">CONTROLLER</div>
            <div className="text-[8px] text-gray-400 truncate">@RestController</div>
          </div>
          <div className="p-1 rounded-lg bg-purple-950/60 border border-purple-500/30">
            <div className="text-[9px] text-purple-400 font-bold">SERVICE</div>
            <div className="text-[8px] text-gray-400 truncate">@Service Logic</div>
          </div>
          <div className="p-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30">
            <div className="text-[9px] text-indigo-400 font-bold">REPOSITORY</div>
            <div className="text-[8px] text-gray-400 truncate">JPA / MySQL</div>
          </div>
        </div>

        {/* Domain Packages */}
        <div className="mb-2">
          <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3 text-cyan-400 shrink-0" />
              Domain Packages:
            </span>
            <span className="text-[8px] text-cyan-400 font-bold">{packages.length} total</span>
          </div>
          <div className="flex flex-wrap gap-1 max-h-12 overflow-hidden">
            {packages.slice(0, 5).map((pkg, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded bg-gray-900 text-cyan-300 border border-gray-800 text-[8.5px] font-mono"
              >
                .{pkg}
              </span>
            ))}
            {packages.length > 5 && (
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[8.5px] font-mono font-bold">
                +{packages.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="space-y-0.5 text-[9.5px] font-sans text-gray-300 border-t border-gray-800/80 pt-1.5">
        {highlights.slice(0, 1).map((item, idx) => (
          <div key={idx} className="flex items-start gap-1">
            <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
            <span className="text-gray-300 truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
