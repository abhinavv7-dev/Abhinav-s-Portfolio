import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Trophy, Briefcase, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    period: '2023 — 2026',
    role: 'Ex NCC Cadet',
    category: 'Leadership & Discipline',
    description:
      'Participated as an NCC cadet while developing discipline, teamwork, leadership, and consistency through training and activities.',
    icon: Shield,
    accent: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
    tags: ['Discipline', 'Tactical Teamwork', 'Leadership', 'Resilience'],
  },
  {
    period: '2023 — 2026',
    role: 'Passionate Cricketer',
    category: 'Athletics & Competitive Drive',
    description:
      'Cricket has shaped my competitive mindset, leadership qualities, discipline, and ability to perform under pressure.',
    icon: Trophy,
    accent: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    tags: ['High-Pressure Execution', 'Strategic Focus', 'Team Synergy', 'Mental Stamina'],
  },
  {
    period: '2023 — 2026',
    role: 'Freelancer',
    category: 'Engineering & Client Solutions',
    description:
      'Exploring freelance opportunities while improving technical skills and building practical development experience.',
    icon: Briefcase,
    accent: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    tags: ['Practical Delivery', 'Modern Stacks', 'Problem Solving', 'Clean Code'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <span>04 // Trajectory</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Experience & Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Minimal Vertical Glowing Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12`}
              >
                {/* Glowing Timeline Marker Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-7 h-7 rounded-full apple-glass border border-indigo-400/50 flex items-center justify-center z-20 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl apple-glass border relative overflow-hidden group shadow-sm"
                  >
                    {/* Top Row: Date & Category */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-indigo-400 font-medium">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {exp.category}
                      </span>
                    </div>

                    {/* Role Title with Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.accent} border border-white/10 flex items-center justify-center shrink-0`}>
                        <IconComponent className={`w-5 h-5 ${exp.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Attribute Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
