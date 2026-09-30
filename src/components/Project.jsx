import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  Scan, 
  Eye, 
  CheckCircle,
  FolderGit2,
  Code2,
  Terminal
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useTheme } from '../context/ThemeContext';

const TECH_STACK = [
  'Python',
  'Flask',
  'AI',
  'Machine Learning',
  'Image Processing',
];

const OTHER_PROJECTS = [
  {
    title: "Hello-World",
    description: "Initial repository demonstrating local workspace setup, Git fundamentals, and clean markdown documentation.",
    tags: ["Git", "GitHub", "Markdown"],
    link: "https://github.com/abhinavv7-dev/Hello-World",
    icon: FolderGit2
  },
  {
    title: "LeetCode-Solutions",
    description: "Curated C/C++ solution repository tracking algorithmic problem-solving progress with runtime & spatial complexity analysis.",
    tags: ["C++", "C", "Data Structures", "Algorithms"],
    link: "https://github.com/abhinavv7-dev/LeetCode-Solutions",
    icon: Code2
  },
  {
    title: "HackerRank-3rdSem-Portfolio",
    description: "C programming solutions for 5 HackerRank algorithmic challenges complete with studio report documentation.",
    tags: ["C", "Algorithms", "Complexity Analysis"],
    link: "https://github.com/abhinavv7-dev/HackerRank-3rdSem-Portfolio",
    icon: Terminal
  }
];

export default function Project() {
  const { isDark } = useTheme();
  const [analyzedSample, setAnalyzedSample] = useState('authentic');
  const [isScanning, setIsScanning] = useState(false);

  const toggleSample = (sampleType) => {
    setIsScanning(true);
    setTimeout(() => {
      setAnalyzedSample(sampleType);
      setIsScanning(false);
    }, 600);
  };

  const isAuthentic = analyzedSample === 'authentic';

  return (
    <section id="project" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
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
          <span>03 // Showcase</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Featured Projects & Repositories
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"
        />
      </div>

      {/* Large Premium Project Showcase */}
      <div className="relative group rounded-3xl p-1 mb-16">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl filter blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

        <div className="relative rounded-[26px] apple-glass border p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  AI Computer Vision
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Deployed Prototype
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Deepfake Detection using Artificial Intelligence
              </h3>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                An AI-powered application designed to detect manipulated facial media by analyzing visual inconsistencies and prediction confidence.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Facial landmark consistency and boundary artifact scanning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Interactive inspection dashboard with real-time confidence scores</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Architecture & Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl apple-glass border text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  href="https://github.com/abhinavv7-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium apple-glass border text-slate-800 dark:text-slate-200 hover:border-indigo-400/40 hover:text-indigo-400 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl bg-black/90 dark:bg-black/95 border border-white/15 shadow-2xl overflow-hidden font-sans">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">
                      FORENSIC_KERNEL // DEEPFAKE_NET_V2
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>INSPECT_MODE</span>
                  </div>
                </div>

                <div className="px-4 py-2 bg-white/[0.015] border-b border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Sample Test Input:</span>
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                    <button
                      onClick={() => toggleSample('authentic')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        isAuthentic ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      Real Media
                    </button>
                    <button
                      onClick={() => toggleSample('manipulated')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        !isAuthentic ? 'bg-rose-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      Deepfake Sample
                    </button>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-5">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl bg-slate-950 border border-white/10 overflow-hidden flex items-center justify-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-500/40" fill="none">
                        <path
                          d="M60 40 C75 25, 125 25, 140 40 C165 70, 160 120, 140 160 C125 185, 75 185, 60 160 C40 120, 35 70, 60 40 Z"
                          stroke={isAuthentic ? 'rgba(99, 102, 241, 0.4)' : 'rgba(244, 63, 94, 0.45)'}
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                        />
                        <circle cx="78" cy="85" r="7" stroke="rgba(99, 102, 241, 0.7)" strokeWidth="1.5" />
                        <circle cx="122" cy="85" r="7" stroke="rgba(99, 102, 241, 0.7)" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-2">
                        {isAuthentic ? (
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                        )}
                        <span className="text-[11px] font-semibold text-white">
                          {isAuthentic ? 'AUTHENTIC MEDIA VERIFIED' : 'SYNTHETIC ARTIFACT DETECTED'}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-white">
                        {isAuthentic ? '98.4%' : '96.8%'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* GitHub Academic Repositories Section */}
      <div className="mt-16">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Academic Repositories & Portfolio Artifacts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((proj, idx) => {
            const IconComponent = proj.icon;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl apple-glass border p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:underline"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
