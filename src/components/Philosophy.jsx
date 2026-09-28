import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Lightbulb, TrendingUp, Check } from 'lucide-react';

const PRINCIPLES = [
  {
    step: '01',
    title: 'Build Clean',
    icon: Layers,
    accent: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
    points: [
      'Readable code.',
      'Maintainable architecture.',
      'Simple solutions.',
    ],
    highlight: 'Simplicity is the ultimate sophistication.',
  },
  {
    step: '02',
    title: 'Think Deep',
    icon: Lightbulb,
    accent: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    points: [
      'Solve problems logically before writing code.',
    ],
    highlight: 'Clarity of mind precedes clarity of implementation.',
  },
  {
    step: '03',
    title: 'Keep Learning',
    icon: TrendingUp,
    accent: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    points: [
      'Technology evolves every day.',
      'So do I.',
    ],
    highlight: 'Relentless curiosity turns challenges into progress.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <span>06 // Mindset</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          My Approach
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Three Elegant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRINCIPLES.map((principle, index) => {
          const IconComponent = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-8 rounded-3xl apple-glass border shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Step Watermark */}
              <span className="absolute -top-4 -right-2 text-8xl font-black font-mono text-white/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
                {principle.step}
              </span>

              <div>
                {/* Top Row: Icon & Step Label */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${principle.accent} border border-white/10 flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${principle.iconColor}`} />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    PHASE // {principle.step}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors mb-6">
                  {principle.title}
                </h3>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  {principle.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                        <Check className="w-3 h-3" />
                      </div>
                      <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote / Philosophy Highlight */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  "{principle.highlight}"
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
