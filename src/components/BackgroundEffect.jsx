import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle interactive parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating subtle particles
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.1,
      opacity: Math.random() * 0.25 + 0.08,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Slow moving gradient orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, radius: Math.min(width, height) * 0.45, vx: 0.0006, vy: 0.0008, color: isDark ? 'rgba(79, 70, 229, 0.12)' : 'rgba(99, 102, 241, 0.07)' },
      { x: width * 0.8, y: height * 0.4, radius: Math.min(width, height) * 0.5, vx: -0.0005, vy: 0.0007, color: isDark ? 'rgba(147, 51, 234, 0.10)' : 'rgba(168, 85, 247, 0.06)' },
      { x: width * 0.5, y: height * 0.8, radius: Math.min(width, height) * 0.4, vx: 0.0007, vy: -0.0006, color: isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(14, 165, 233, 0.05)' },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render slowly shifting 3D gradient mesh orbs
      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time + i * 2) * 60 + (mouse.x - width / 2) * 0.04;
        const offsetY = Math.cos(time + i * 1.5) * 50 + (mouse.y - height / 2) * 0.04;

        const currentX = orb.x + offsetX;
        const currentY = orb.y + offsetY;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.radius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render floating micro-particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.fillStyle = isDark
          ? `rgba(192, 132, 252, ${alpha})`
          : `rgba(99, 102, 241, ${alpha * 0.9})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle architectural grid pattern overlay with radial vignette */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-80" 
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)'
        }}
      />
      {/* Radial soft spotlight following center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)'
            : 'radial-gradient(circle at 50% 25%, rgba(99, 102, 241, 0.03) 0%, transparent 60%)'
        }}
      />
    </div>
  );
}
