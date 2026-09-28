import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function HeroVisual() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for 3D tilt
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouse.targetX = clientX * 0.003;
      mouse.targetY = clientY * 0.003;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Generate 3D sphere / neural mesh nodes (Fibonacci sphere)
    const nodeCount = 56;
    const radius = Math.min(width, height) * 0.32;
    const nodes = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      nodes.push({ x: x * radius, y: y * radius, z: z * radius, baseSize: 2.2 });
    }

    // Orbiting satellite rings
    const ringParticles = Array.from({ length: 40 }, (_, i) => ({
      angle: (i / 40) * Math.PI * 2,
      tilt: 0.45,
      speed: 0.008 + (i % 3) * 0.002,
      distance: radius * 1.35,
    }));

    let rotX = 0.3;
    let rotY = 0;

    const render = () => {
      // Smooth tilt interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      rotY += 0.007 + mouse.x * 0.5;
      rotX = 0.2 + mouse.y * 0.5;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle glowing aura behind sphere
      const auraGradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.5);
      auraGradient.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.22)' : 'rgba(99, 102, 241, 0.12)');
      auraGradient.addColorStop(0.5, isDark ? 'rgba(168, 85, 247, 0.08)' : 'rgba(168, 85, 247, 0.04)');
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Transform 3D nodes
      const projectedNodes = nodes.map((node) => {
        // Rotate Y
        let x1 = node.x * Math.cos(rotY) + node.z * Math.sin(rotY);
        let z1 = -node.x * Math.sin(rotY) + node.z * Math.cos(rotY);

        // Rotate X
        let y2 = node.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = node.y * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        return { px, py, z: z2, scale };
      });

      // Draw neural connections between closest nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].px - projectedNodes[j].px;
          const dy = projectedNodes[i].py - projectedNodes[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if close enough in 2D projection and in 3D
          if (dist < radius * 0.48) {
            const alpha = (1 - dist / (radius * 0.48)) * 0.35 * Math.max(0.1, (projectedNodes[i].scale + projectedNodes[j].scale) / 2);
            ctx.strokeStyle = isDark
              ? `rgba(168, 85, 247, ${alpha})`
              : `rgba(99, 102, 241, ${alpha * 0.8})`;
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].px, projectedNodes[i].py);
            ctx.lineTo(projectedNodes[j].px, projectedNodes[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw Orbiting Ring
      ctx.strokeStyle = isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.35, radius * 0.45, -0.2, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Ring Particles
      ringParticles.forEach((rp) => {
        rp.angle += rp.speed;
        const rpx = cx + Math.cos(rp.angle) * rp.distance;
        const rpy = cy + Math.sin(rp.angle) * (rp.distance * 0.33);
        ctx.fillStyle = isDark ? 'rgba(147, 197, 253, 0.7)' : 'rgba(59, 130, 246, 0.7)';
        ctx.beginPath();
        ctx.arc(rpx, rpy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Nodes sorted by depth
      projectedNodes.sort((a, b) => a.z - b.z);
      projectedNodes.forEach((node) => {
        const nodeAlpha = Math.min(1, Math.max(0.15, (node.z + radius) / (2 * radius)));
        const nodeSize = Math.max(1, 2.2 * node.scale);

        // Core dot
        ctx.fillStyle = isDark
          ? `rgba(224, 231, 255, ${nodeAlpha})`
          : `rgba(79, 70, 229, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(node.px, node.py, nodeSize, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow for forefront nodes
        if (node.z > 0) {
          ctx.fillStyle = isDark
            ? `rgba(168, 85, 247, ${nodeAlpha * 0.3})`
            : `rgba(99, 102, 241, ${nodeAlpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(node.px, node.py, nodeSize * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
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
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center">
      {/* Decorative concentric glowing rings */}
      <div className="absolute inset-4 rounded-full border border-indigo-500/10 dark:border-indigo-400/10 pointer-events-none animate-pulse" />
      <div className="absolute inset-14 rounded-full border border-purple-500/10 dark:border-purple-400/10 pointer-events-none" />

      {/* Center 3D Interactive Canvas */}
      <canvas ref={canvasRef} className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating status pill */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full apple-glass border text-[11px] font-mono text-slate-400 dark:text-slate-300 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
        <span>SYS_CORE // ONLINE</span>
      </div>
    </div>
  );
}
