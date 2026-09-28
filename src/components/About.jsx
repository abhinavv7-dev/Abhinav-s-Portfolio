import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Building2, Target, Sparkles, Compass, Heart } from 'lucide-react';

const INFO_CARDS = [
  {
    label: 'Age',
    value: '19',
    caption: 'Years Old',
    icon: Calendar,
    glow: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-400',
  },
  {
    label: 'Location',
    value: 'Bangalore, India',
    caption: 'Tech Capital / Silicon Valley of India',
    icon: MapPin,
    glow: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-400',
  },
  {
    label: 'University',
    value: 'REVA University',
    caption: 'Faculty of Engineering & Technology',
    icon: Building2,
    glow: 'from-indigo-500/10 to-cyan-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    label: 'Degree',
    value: 'B.Tech — Computer Science Engineering',
    caption: '2nd Year Undergraduate (Class of 2027)',
    icon: GraduationCap,
    glow: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    label: 'Current Focus',
    value: 'Backend Development • AI • System Design Foundations',
    caption: 'Active Engineering Exploration',
    icon: Target,
    glow: 'from-amber-500/10 to-purple-500/10',
    iconColor: 'text-indigo-400',
    fullWidth: true,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <span>01 // Overview</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
        >
          <div className="p-6 rounded-2xl apple-glass border space-y-4 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full filter blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

            <p className="text-slate-900 dark:text-slate-100 font-medium text-lg sm:text-xl leading-snug">
              I'm Abhinav Prasad, a Computer Science Engineering student at{' '}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">REVA University</span> in Bangalore.
            </p>

            <p>
              I'm currently in my second year of engineering and passionate about building scalable backend systems while continuously learning AI and modern technologies.
            </p>

            <p>
              I enjoy transforming ideas into functional products through clean architecture, problem solving, and consistent learning.
            </p>

            <div className="pt-2 border-t border-white/10 dark:border-white/10 flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Compass className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <span>
                Outside development, you'll usually find me playing cricket, editing videos, or exploring games and technology.
              </span>
            </div>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl apple-glass border text-center">
              <span className="block text-2xl font-bold font-mono text-slate-900 dark:text-white">2nd</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Year Engineering</span>
            </div>
            <div className="p-4 rounded-xl apple-glass border text-center">
              <span className="block text-2xl font-bold font-mono text-indigo-500 dark:text-indigo-400">100%</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Dedication</span>
            </div>
            <div className="p-4 rounded-xl apple-glass border text-center">
              <span className="block text-2xl font-bold font-mono text-purple-500 dark:text-purple-400">AI</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">& Systems Focus</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {INFO_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className={`p-5 rounded-2xl apple-glass border relative overflow-hidden group shadow-sm ${
                  card.fullWidth ? 'sm:col-span-2' : ''
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${card.glow} filter blur-xl group-hover:scale-150 transition-transform pointer-events-none`}
                />

                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {card.label}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {card.value}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {card.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
