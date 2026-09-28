import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  GitBranch, 
  Database, 
  Terminal, 
  Video, 
  Palette, 
  Sparkles, 
  Brain, 
  Network, 
  Binary, 
  Layers,
  CheckCircle2
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Programming Languages',
    badge: 'Core Syntax',
    skills: [
      { name: 'C', level: 'Core', desc: 'Memory, Pointers & System Basics', icon: Cpu, accent: 'from-blue-500/20 to-cyan-500/20', textColor: 'text-blue-400' },
      { name: 'C++', level: 'Advanced Core', desc: 'OOP, STL & Algorithmic Logic', icon: Binary, accent: 'from-indigo-500/20 to-blue-500/20', textColor: 'text-indigo-400' },
      { name: 'Java', level: 'Application', desc: 'Object-Oriented Design & JVM', icon: Code2, accent: 'from-amber-500/20 to-red-500/20', textColor: 'text-amber-400' },
    ],
  },
  {
    category: 'Technologies',
    badge: 'Infrastructure',
    skills: [
      { name: 'Git', level: 'Version Control', desc: 'Branching, Stashing & History', icon: GitBranch, accent: 'from-orange-500/20 to-red-500/20', textColor: 'text-orange-400' },
      { name: 'GitHub', level: 'Collaboration', desc: 'Repositories, Actions & PRs', icon: Terminal, accent: 'from-slate-500/20 to-purple-500/20', textColor: 'text-slate-300' },
      { name: 'MySQL', level: 'Relational DB', desc: 'Queries, Normalization & Schema', icon: Database, accent: 'from-blue-500/20 to-indigo-500/20', textColor: 'text-sky-400' },
    ],
  },
  {
    category: 'Tools',
    badge: 'Workflow & Creation',
    skills: [
      { name: 'VS Code', level: 'Primary IDE', desc: 'Extensions, Debugging & CLI', icon: Terminal, accent: 'from-sky-500/20 to-blue-500/20', textColor: 'text-sky-400' },
      { name: 'DaVinci Resolve', level: 'Post-Production', desc: 'Color Grading & Audio Editing', icon: Video, accent: 'from-pink-500/20 to-rose-500/20', textColor: 'text-pink-400' },
      { name: 'Canva', level: 'Design & Visuals', desc: 'Assets, Typography & Graphics', icon: Palette, accent: 'from-teal-500/20 to-cyan-500/20', textColor: 'text-teal-400' },
    ],
  },
];

const CURRENT_LEARNING = [
  { title: 'Artificial Intelligence', subtitle: 'Neural Architectures & ML Pipelines', icon: Brain },
  { title: 'Backend Development', subtitle: 'RESTful Services, Auth & Distributed Patterns', icon: Layers },
  { title: 'Database Design', subtitle: 'ACID Transactions, Indexing & Optimization', icon: Database },
  { title: 'Problem Solving', subtitle: 'Algorithmic Intuition & Complexity Analysis', icon: Cpu },
  { title: 'Data Structures & Algorithms', subtitle: 'Trees, Graphs, DP & Space-Time Tradeoffs', icon: Network },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 // Competencies</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Grid of 3 Main Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {SKILL_CATEGORIES.map((categoryGroup, catIndex) => (
          <motion.div
            key={categoryGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Category Subheading */}
            <div className="flex items-center justify-between px-1">
              <h3 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-200">
                {categoryGroup.category}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {categoryGroup.badge}
              </span>
            </div>

            {/* Skill Cards */}
            <div className="space-y-3.5">
              {categoryGroup.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, rotate: 2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="p-4 rounded-xl apple-glass border relative overflow-hidden group cursor-default shadow-sm"
                  >
                    {/* Hover Glow Light */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="flex items-center gap-3.5 relative z-10">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.accent} border border-white/10 flex items-center justify-center shrink-0`}>
                        <IconComponent className={`w-5 h-5 ${skill.textColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Glass Card: Currently Learning with Animated Border */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative rounded-3xl p-[1px] overflow-hidden group shadow-2xl"
      >
        {/* Animated Subtle Rotating Conic Gradient Border */}
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(99,102,241,0.8)_360deg)] animate-[borderBeamRotate_7s_linear_infinite]" />

        {/* Card Inner Content */}
        <div className="relative rounded-[23px] apple-glass p-6 sm:p-8 md:p-10 backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span>EXPEDITION // IN PROGRESS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Currently Learning
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Constantly expanding algorithmic frontiers and backend systems capabilities through systematic practice and project building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CURRENT_LEARNING.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-start gap-3.5 transition-all shadow-sm group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 group-hover/item:text-indigo-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        {item.title}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
