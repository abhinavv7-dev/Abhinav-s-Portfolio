import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, Brain, GraduationCap, GitBranch, ChevronDown, Sparkles } from 'lucide-react';
import HeroVisual from './HeroVisual';

const BADGES = [
  { label: 'Backend Developer', icon: Server, color: 'from-blue-500/20 to-indigo-500/20 text-blue-400' },
  { label: 'AI Learner', icon: Brain, color: 'from-purple-500/20 to-pink-500/20 text-purple-400' },
  { label: 'CSE Student', icon: GraduationCap, color: 'from-indigo-500/20 to-blue-500/20 text-indigo-400' },
  { label: 'Open Source Enthusiast', icon: GitBranch, color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400' },
];

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass border text-xs sm:text-sm font-medium text-slate-300 dark:text-slate-300 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hello, I'm</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-slate-400 font-mono text-xs">Portfolio 2.0</span>
          </motion.div>

          {/* Main Heading: Abhinav Prasad */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-4"
          >
            <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-400 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              Abhinav
            </span>{' '}
            <span className="inline-block gradient-text-electric">
              Prasad
            </span>
          </motion.h1>

          {/* Below Heading: Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-indigo-400 dark:text-indigo-400 mb-6 tracking-wide"
          >
            <span>Builder</span>
            <span className="text-slate-500">•</span>
            <span>Developer</span>
            <span className="text-slate-500">•</span>
            <span>Problem Solver</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
          >
            Currently pursuing Computer Science Engineering while crafting projects that solve real-world problems with clean code and creative thinking.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <button
              onClick={() => handleScrollTo('project')}
              className="group relative flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Secondary Outlined Button */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="group flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium apple-glass text-slate-800 dark:text-slate-200 border hover:border-indigo-400/50 hover:text-indigo-400 active:scale-[0.98] transition-all shadow-sm"
            >
              <Terminal className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span>Initialize Connection</span>
            </button>
          </motion.div>

          {/* Extras / Tiny Badges Animated One By One */}
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3"
            >
              Specialization & Identity
            </motion.p>
            <div className="flex flex-wrap gap-2.5">
              {BADGES.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.55 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass border text-xs font-medium cursor-default shadow-sm transition-all"
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${badge.color}`} />
                    <span className="text-slate-700 dark:text-slate-300">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Developer Identity 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => handleScrollTo('about')}
        className="mt-12 lg:mt-8 flex flex-col items-center gap-2 cursor-pointer group z-10"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-indigo-400 transition-colors">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600 dark:border-slate-700 flex items-start justify-center p-1 group-hover:border-indigo-400 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-indigo-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
