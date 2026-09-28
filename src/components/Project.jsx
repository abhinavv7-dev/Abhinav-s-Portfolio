import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  Scan, 
  Cpu, 
  Eye, 
  Layers, 
  FileCode2,
  Sliders,
  CheckCircle,
  RefreshCw
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

export default function Project() {
  const { isDark } = useTheme();
  const [analyzedSample, setAnalyzedSample] = useState('authentic'); // 'authentic' or 'manipulated'
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
          Featured Project
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
      <div className="relative group rounded-3xl p-1">
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl filter blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

        <div className="relative rounded-[26px] apple-glass border p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text Side (lg:col-span-6) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  AI Computer Vision
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Deployed Prototype
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Deepfake Detection using Artificial Intelligence
              </h3>

              {/* Project Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                An AI-powered application designed to detect manipulated facial media by analyzing visual inconsistencies and prediction confidence. The project focuses on identifying deepfake content through machine learning techniques and providing users with an intuitive interface for authenticity analysis.
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Facial landmark consistency and microscopic boundary artifact scanning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Frequency domain spectral evaluation for generative compression artifacts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Interactive inspection dashboard with real-time confidence scores</span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Architecture & Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl apple-glass border text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:border-indigo-400/40 hover:text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project</span>
                </a>

                <a
                  href="https://github.com/abhinavv7-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium apple-glass border text-slate-800 dark:text-slate-200 hover:border-indigo-400/40 hover:text-indigo-400 active:scale-[0.98] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </motion.div>

            {/* Visual Side: Futuristic AI Dashboard Mockup (lg:col-span-6) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl bg-black/90 dark:bg-black/95 border border-white/15 dark:border-white/15 shadow-2xl overflow-hidden font-sans">
                {/* Dashboard OS Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 tracking-tight">
                      FORENSIC_KERNEL // DEEPFAKE_NET_V2
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>INSPECT_MODE</span>
                  </div>
                </div>

                {/* Dashboard Interactive Sample Switcher */}
                <div className="px-4 py-2 bg-white/[0.015] border-b border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Sample Test Input:</span>
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                    <button
                      onClick={() => toggleSample('authentic')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        isAuthentic
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Real Media
                    </button>
                    <button
                      onClick={() => toggleSample('manipulated')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        !isAuthentic
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Deepfake Sample
                    </button>
                  </div>
                </div>

                {/* Dashboard Main Visual Area */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Uploaded Face Analysis Graphic */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl bg-slate-950 border border-white/10 overflow-hidden flex items-center justify-center">
                    {/* Face Vector Outline & Mesh */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                      {/* Geometric Face Silhouette */}
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full text-indigo-500/40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Outer Face Contour */}
                        <path
                          d="M60 40 C75 25, 125 25, 140 40 C165 70, 160 120, 140 160 C125 185, 75 185, 60 160 C40 120, 35 70, 60 40 Z"
                          stroke={isAuthentic ? 'rgba(99, 102, 241, 0.4)' : 'rgba(244, 63, 94, 0.45)'}
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                        />
                        {/* Eyebrows & Eyes */}
                        <circle cx="78" cy="85" r="7" stroke="rgba(99, 102, 241, 0.7)" strokeWidth="1.5" />
                        <circle cx="122" cy="85" r="7" stroke="rgba(99, 102, 241, 0.7)" strokeWidth="1.5" />
                        <circle cx="78" cy="85" r="2.5" fill="rgba(168, 85, 247, 0.9)" />
                        <circle cx="122" cy="85" r="2.5" fill="rgba(168, 85, 247, 0.9)" />

                        {/* Nose Landmark Points */}
                        <path d="M100 80 L100 115 L92 122 L108 122" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.2" />

                        {/* Mouth Landmark Contour */}
                        <path d="M78 145 Q100 158 122 145 Q100 152 78 145" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.5" />

                        {/* Heatmap Inconsistency Zones (shown prominently if manipulated) */}
                        {!isAuthentic && (
                          <>
                            <ellipse cx="122" cy="85" rx="22" ry="18" fill="rgba(244, 63, 94, 0.25)" filter="blur(6px)" />
                            <ellipse cx="100" cy="145" rx="30" ry="14" fill="rgba(244, 63, 94, 0.3)" filter="blur(6px)" />
                            <rect x="65" y="70" width="70" height="85" stroke="rgba(244, 63, 94, 0.7)" strokeWidth="1" strokeDasharray="3 3" />
                          </>
                        )}

                        {/* Landmark Tracking Crosshairs */}
                        <circle cx="100" cy="100" r="1.5" fill="#38bdf8" />
                        <circle cx="65" cy="85" r="1.5" fill="#38bdf8" />
                        <circle cx="135" cy="85" r="1.5" fill="#38bdf8" />
                        <circle cx="100" cy="170" r="1.5" fill="#38bdf8" />
                      </svg>

                      {/* Scanning Laser Line */}
                      <motion.div
                        animate={{ top: ['5%', '95%', '5%'] }}
                        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                        className={`absolute left-0 right-0 h-[2px] shadow-lg ${
                          isAuthentic
                            ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-cyan-400/50'
                            : 'bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-rose-500/50'
                        }`}
                      />
                    </div>

                    {/* Overlay Grid lines & Technical Readout */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                    {/* Top Corner Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300">
                      <Scan className="w-3 h-3 text-indigo-400" />
                      <span>FPS: 60.0 • 1080p</span>
                    </div>

                    {/* Bottom Status Verdict Banner */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-2">
                        {isAuthentic ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                            <AlertTriangle className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <div>
                          <div className="text-[11px] font-semibold tracking-tight text-white">
                            {isAuthentic ? 'AUTHENTIC MEDIA VERIFIED' : 'SYNTHETIC ARTIFACT DETECTED'}
                          </div>
                          <div className="text-[9px] font-mono text-slate-400">
                            {isAuthentic ? 'Biometric markers consistent' : 'Generative blending boundary anomaly'}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-white">
                          {isAuthentic ? '98.4%' : '96.8%'}
                        </span>
                        <div className="text-[9px] font-mono text-slate-400">CONFIDENCE</div>
                      </div>
                    </div>
                  </div>

                  {/* AI Confidence Graph & Metrics */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    {/* Metric 1 */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Facial Landmark Drift</span>
                        <span className={isAuthentic ? 'text-emerald-400' : 'text-rose-400'}>
                          {isAuthentic ? '0.04 σ' : '0.48 σ'}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isAuthentic ? 'w-[12%] bg-emerald-400' : 'w-[85%] bg-rose-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Spectral Artifact Score</span>
                        <span className={isAuthentic ? 'text-emerald-400' : 'text-rose-400'}>
                          {isAuthentic ? '0.02' : '0.91'}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isAuthentic ? 'w-[8%] bg-emerald-400' : 'w-[91%] bg-rose-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
