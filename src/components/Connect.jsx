import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Mail, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Send,
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XTwitterIcon } from './BrandIcons';
import { useTheme } from '../context/ThemeContext';

const CONTACT_CHANNELS = [
  {
    name: 'Email',
    handle: 'abhinavep1030@gmail.com',
    link: 'mailto:abhinavep1030@gmail.com',
    icon: Mail,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
    canCopy: true,
  },
  {
    name: 'GitHub',
    handle: 'github.com/abhinavv7-dev',
    link: 'https://github.com/abhinavv7-dev',
    icon: GithubIcon,
    color: 'from-slate-500/20 to-purple-500/20 text-slate-300',
    hoverBorder: 'hover:border-purple-500/40',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/abhinavv7',
    link: 'https://linkedin.com/in/abhinavv7',
    icon: LinkedinIcon,
    color: 'from-blue-600/20 to-sky-500/20 text-sky-400',
    hoverBorder: 'hover:border-sky-500/40',
  },
  {
    name: 'Instagram',
    handle: '@abhinavvx_07',
    link: 'https://instagram.com/abhinavvx_07',
    icon: InstagramIcon,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400',
    hoverBorder: 'hover:border-pink-500/40',
  },
  {
    name: 'X',
    handle: '@Abhinavvx_07',
    link: 'https://x.com/Abhinavvx_07',
    icon: XTwitterIcon,
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/40',
  },
];

export default function Connect({ onOpenResume }) {
  const { isDark } = useTheme();
  const [copiedKey, setCopiedKey] = useState(null);
  const [msgInput, setMsgInput] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setSentStatus(true);
    setTimeout(() => {
      // Open mail client with user's note
      window.location.href = `mailto:abhinavep1030@gmail.com?subject=Transmission%20from%20Portfolio&body=${encodeURIComponent(
        msgInput
      )}`;
      setSentStatus(false);
      setMsgInput('');
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[550px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/15 to-purple-600/10 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass border text-xs font-mono text-indigo-400 uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>07 // Transmission</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Initialize <span className="gradient-text-electric">Connection</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
        >
          I'm always open to collaborating on interesting projects, discussing technology, AI, backend development, or creative ideas.
          <br className="hidden sm:inline" />
          <span className="font-semibold text-slate-900 dark:text-white"> Let's build something meaningful.</span>
        </motion.p>
      </div>

      {/* Main Centered Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="max-w-4xl mx-auto rounded-3xl apple-glass border shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
      >
        {/* Contact Cards Grid with Animated Hover Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {CONTACT_CHANNELS.map((item, idx) => {
            const IconComponent = item.icon;
            const isCopied = copiedKey === item.name;

            return (
              <motion.div
                key={item.name}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group relative p-4 rounded-2xl apple-glass border ${item.hoverBorder} shadow-sm transition-all overflow-hidden flex flex-col justify-between`}
              >
                {/* Glow light overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {item.name}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="block font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 group-hover:text-indigo-400 transition-colors truncate">
                    {item.handle}
                  </span>

                  <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-white/5 text-xs text-slate-500">
                    <a
                      href={item.link}
                      target={item.name === 'Email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                    >
                      <span>Connect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {item.canCopy && (
                      <button
                        onClick={() => handleCopy(item.handle, item.name)}
                        className="ml-auto p-1 rounded hover:text-white transition-colors"
                        title="Copy to clipboard"
                      >
                        {isCopied ? (
                          <span className="flex items-center gap-1 text-[11px] text-green-400 font-mono">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Transmission Console */}
        <div className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>DIRECT TRANSMISSION // QUICK MESSAGE</span>
          </div>

          <form onSubmit={handleQuickSend} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              placeholder="Write a message, project idea, or say hello..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all font-sans"
            />
            <button
              type="submit"
              disabled={sentStatus || !msgInput.trim()}
              className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 shrink-0"
            >
              {sentStatus ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Transmission</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Primary Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10">
          {/* Send Email */}
          <a
            href="mailto:abhinavep1030@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>

          {/* Open GitHub */}
          <a
            href="https://github.com/abhinavv7-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium apple-glass border text-slate-800 dark:text-slate-200 hover:border-indigo-400/40 hover:text-indigo-400 active:scale-[0.98] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Download Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium apple-glass border text-slate-800 dark:text-slate-200 hover:border-indigo-400/40 hover:text-indigo-400 active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Download Resume</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
