import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, FileText, ExternalLink, Sparkles, GraduationCap, Code2, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ResumeModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a structured printable resume document as an instant simulated PDF download
    const resumeContent = `=====================================================
ABHINAV PRASAD
Computer Science Engineering Student • Builder • Developer
Bangalore, India | abhinavep1030@gmail.com
GitHub: https://github.com/abhinavv7-dev
LinkedIn: https://linkedin.com/in/abhinavv7
=====================================================

EDUCATION
-----------------------------------------------------
REVA University, Bangalore
B.Tech in Computer Science and Engineering
2023 – 2027 (Currently 2nd Year)

TECHNICAL PROFICIENCIES
-----------------------------------------------------
• Programming Languages: C, C++, Java, Python
• Technologies & DB: Git, GitHub, MySQL, Flask, REST APIs
• Developer Tools: VS Code, Linux/Unix CLI, DaVinci Resolve, Canva
• Core Foundations: Data Structures & Algorithms, Database Design, System Design Fundamentals

FEATURED PROJECT
-----------------------------------------------------
Deepfake Detection using Artificial Intelligence
• Engineered an AI system to analyze facial media inconsistencies and prediction confidence.
• Integrated computer vision techniques with machine learning classifiers for synthetic media detection.
• Built clean interface and Flask-powered API pipeline for media verification.

EXPERIENCE & LEADERSHIP
-----------------------------------------------------
• Ex NCC Cadet: Built high discipline, teamwork, resilience, and crisis decision-making skills.
• Competitive Cricket: Cultivated leadership under high pressure and strategic problem solving.
• Freelance Developer: Delivering clean code solutions and exploring real-world client workflows.
=====================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhinav_Prasad_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('abhinavep1030@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 apple-glass border shadow-2xl z-10 my-8 overflow-hidden"
          style={{
            backgroundColor: isDark ? 'rgba(10, 10, 14, 0.95)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg tracking-tight">Curriculum Vitae</h3>
                <p className="text-xs text-slate-400">Abhinav Prasad • Academic & Project Profile</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-1 text-sm">
            {/* Candidate Summary */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] border border-white/5">
              <h4 className="font-semibold text-base tracking-tight mb-1">Abhinav Prasad</h4>
              <p className="text-xs text-indigo-400 mb-2 font-mono">Computer Science Engineering Student • 2nd Year</p>
              <p className="text-xs text-slate-300 dark:text-slate-300 leading-relaxed">
                Passionate Computer Science Engineering undergraduate at REVA University, Bangalore. Focused on building scalable backend architectures, exploring artificial intelligence systems, and writing clean, maintainable software.
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <h5 className="font-medium text-xs uppercase tracking-wider text-slate-400">Education</h5>
              </div>
              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-sm">REVA University, Bangalore</span>
                  <span className="text-xs text-slate-400">2023 — 2027</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">B.Tech — Computer Science & Engineering</p>
                <p className="text-xs text-slate-400 mt-0.5">Currently pursuing 2nd year engineering</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <h5 className="font-medium text-xs uppercase tracking-wider text-slate-400">Skills & Tooling</h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="font-medium text-slate-300">Languages:</span>
                  <p className="text-slate-400 mt-1">C, C++, Java</p>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="font-medium text-slate-300">Technologies & DB:</span>
                  <p className="text-slate-400 mt-1">Git, GitHub, MySQL</p>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="font-medium text-slate-300">Creative & Dev Tools:</span>
                  <p className="text-slate-400 mt-1">VS Code, DaVinci Resolve, Canva</p>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="font-medium text-slate-300">Active Study:</span>
                  <p className="text-indigo-400 mt-1">Artificial Intelligence, Backend, DSA</p>
                </div>
              </div>
            </div>

            {/* Key Project */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h5 className="font-medium text-xs uppercase tracking-wider text-slate-400">Featured Project</h5>
              </div>
              <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="font-semibold text-sm">Deepfake Detection using Artificial Intelligence</div>
                <p className="text-xs text-indigo-400 font-mono mt-0.5">Python • Flask • AI • Machine Learning</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Engineered an AI-powered detection platform capable of inspecting manipulated facial media through visual artifact analysis, spectral inconsistencies, and machine learning prediction confidence scoring.
                </p>
              </div>
            </div>

            {/* Leadership & Activities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-indigo-400" />
                <h5 className="font-medium text-xs uppercase tracking-wider text-slate-400">Experience & Extracurriculars</h5>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <div className="font-medium text-slate-200">Ex NCC Cadet</div>
                  <p className="text-slate-400 mt-0.5">Participated in regular drills, camp activities, and teamwork training, instilling core discipline and leadership.</p>
                </div>
                <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                  <div className="font-medium text-slate-200">Competitive Cricket</div>
                  <p className="text-slate-400 mt-0.5">Developed composure under pressure, team synergy, and competitive resilience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
