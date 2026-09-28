import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Server, Binary, GitPullRequest, ArrowUpRight } from 'lucide-react';

const FOCUS_AREAS = [
  {
    title: 'Artificial Intelligence',
    description:
      'Learning AI concepts, machine learning workflows, and practical AI applications through hands-on projects.',
    icon: Brain,
    category: 'Intelligent Systems',
    status: 'Active Study',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400',
    borderColor: 'group-hover:border-purple-500/40',
    tags: ['Machine Learning', 'Computer Vision', 'Model Training', 'Inference APIs'],
  },
  {
    title: 'Backend Development',
    description:
      'Building strong backend fundamentals including APIs, databases, authentication, and scalable architecture.',
    icon: Server,
    category: 'System Architecture',
    status: 'Core Focus',
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
    borderColor: 'group-hover:border-blue-500/40',
    tags: ['REST APIs', 'Database Schemas', 'Authentication', 'System Foundations'],
  },
  {
    title: 'Problem Solving',
    description:
      'Strengthening DSA and logical thinking through continuous coding practice and algorithmic challenges.',
    icon: Binary,
    category: 'Algorithmic Mastery',
    status: 'Daily Practice',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/40',
    tags: ['Data Structures', 'Algorithms', 'Logic Optimization', 'Time Complexity'],
  },
  {
    title: 'Modern Developer Workflow',
    description:
      'Learning Git, GitHub collaboration, project architecture, debugging, and clean development practices.',
    icon: GitPullRequest,
    category: 'Engineering Standards',
    status: 'Best Practice',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/40',
    tags: ['Git Pipelines', 'Code Quality', 'Clean Architecture', 'Collaborative PRs'],
  },
];

export default function Focus() {
  return (
    <section id="focus" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <span>05 // Current Focus</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          What I'm Building Now
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Apple-Style 2x2 Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {FOCUS_AREAS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`group relative p-6 sm:p-8 rounded-3xl apple-glass border ${item.borderColor} shadow-sm overflow-hidden flex flex-col justify-between transition-all`}
            >
              {/* Corner Soft Radial Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 rounded-full filter blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                      {item.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags / Sub-competencies */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-500 dark:text-slate-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
