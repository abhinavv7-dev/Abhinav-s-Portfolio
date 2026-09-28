import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden border-t border-white/5">
      {/* Giant "AP" Initials Watermark in Background */}
      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-mono text-[140px] sm:text-[220px] md:text-[300px] font-black tracking-tighter text-white/[0.02] dark:text-white/[0.02]">
          AP
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Monogram Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full apple-glass border text-xs font-mono text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>PORTFOLIO 2.0 // REVA UNIVERSITY</span>
        </div>

        {/* Footer Text */}
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
            Designed & Developed by Abhinav Prasad.
          </h4>
          <p className="text-xs sm:text-sm text-indigo-400 font-medium">
            Builder • Developer • Problem Solver.
          </p>
        </div>

        {/* Copyright notice */}
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          © {currentYear} Abhinav Prasad. All rights reserved.
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full apple-glass border text-xs font-mono text-slate-400 hover:text-white hover:border-indigo-400/40 transition-all shadow-sm active:scale-95"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
        </button>
      </div>
    </footer>
  );
}
