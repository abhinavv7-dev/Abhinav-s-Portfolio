import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function GlowCursor() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor glow tracking
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only enable custom glow cursor on devices with fine pointer (mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        className={`rounded-full filter blur-[28px] transition-all duration-300 ${
          isHovered
            ? 'w-48 h-48 opacity-45 scale-125'
            : 'w-36 h-36 opacity-30 scale-100'
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(129, 140, 248, 0.45) 0%, rgba(192, 132, 252, 0.25) 45%, transparent 75%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 75%)',
        }}
      />
    </motion.div>
  );
}
