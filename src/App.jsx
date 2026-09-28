import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundEffect from './components/BackgroundEffect';
import GlowCursor from './components/GlowCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Focus from './components/Focus';
import Philosophy from './components/Philosophy';
import Connect from './components/Connect';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-400 selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Soft Ambient Mouse Light & Glowing Cursor */}
        <GlowCursor />

        {/* 3D Gradient Mesh Canvas & Particles Background */}
        <BackgroundEffect />

        {/* Floating Glass Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Focus />
          <Philosophy />
          <Connect onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume View/Download Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
