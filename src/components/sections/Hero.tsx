'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/ui/TypewriterText';

/* ─── Particle System ─── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function useParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = 80;
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener('resize', resize);

    const connectionDistance = 120;

    const drawStatic = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${p.opacity})`;
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      drawStatic();
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Update & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineOpacity = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 168, 83, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles]);

  return canvasRef;
}

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

const roles = [
  'Data & BI Analyst',
  'Python Automation Engineer',
  'Analytics & ETL Builder',
  'Revenue & Operations Analyst',
  'SQL & Power BI Specialist',
];

/* ─── Hero Component ─── */
export default function Hero() {
  const canvasRef = useParticleCanvas();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#09090B] overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Top HUD Badges — hidden on mobile */}
      {/* Top-left */}
      <div className="absolute top-24 left-6 z-20 hidden md:flex items-center">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141419]/80 backdrop-blur-sm border border-[#D4A853]/15">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-[#A1A1AA] tracking-wide">
            AVAILABLE FOR HIRE · FULL-TIME &amp; CONTRACT
          </span>
        </div>
      </div>

      {/* Top-right */}
      <div className="absolute top-24 right-6 z-20 hidden md:flex items-center">
        <div className="px-3.5 py-1.5 rounded-full bg-[#141419]/80 backdrop-blur-sm border border-[#D4A853]/15">
          <span className="font-mono text-[11px] text-[#A1A1AA]">
            <span className="text-[#D4A853] font-semibold">PL-300 Certified</span> · Mansoura &amp; Remote
          </span>
        </div>
      </div>

      {/* Center Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
      >
        {/* Tag */}
        <motion.span
          variants={itemVariants}
          className="inline-block font-mono text-xs tracking-[0.25em] text-[#D4A853] px-4 py-2 border border-[#D4A853]/30 rounded-full bg-[#D4A853]/5 mb-8"
        >
          MICROSOFT CERTIFIED (PL-300) · DATA &amp; BI ANALYST
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          <span className="text-[#FAFAFA]">DAVID </span>
          <span className="bg-gradient-to-r from-[#D4A853] via-[#E8C975] to-[#F5DFA0] bg-clip-text text-transparent">
            FADY
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 font-mono text-sm md:text-base text-[#A1A1AA] tracking-wide"
        >
          Data &amp; BI Analyst | Python Automation &amp; ETL Builder
        </motion.p>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="mt-4 h-8 flex items-center"
        >
          <span className="font-mono text-sm text-[#52525B] mr-2">{'>'}</span>
          <TypewriterText
            texts={roles}
          />
        </motion.div>

        {/* Core Competencies Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141419]/90 border border-[#D4A853]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span className="font-mono text-xs text-[#FAFAFA] tracking-wide">
              Power BI &amp; DAX (PL-300)
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141419]/90 border border-[#D4A853]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span className="font-mono text-xs text-[#FAFAFA] tracking-wide">
              SQL &amp; Star Schema Modeling
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141419]/90 border border-[#D4A853]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span className="font-mono text-xs text-[#FAFAFA] tracking-wide">
              Python ETL &amp; Automation
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141419]/90 border border-[#D4A853]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span className="font-mono text-xs text-[#FAFAFA] tracking-wide">
              Tableau &amp; Advanced Excel
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141419]/90 border border-[#D4A853]/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span className="font-mono text-xs text-[#FAFAFA] tracking-wide">
              Time-Series Forecasting
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 bg-[#D4A853] text-[#09090B] font-semibold text-sm rounded-lg hover:bg-[#E8C975] transition-colors duration-300 tracking-wide"
          >
            View Projects
          </button>
          <a
            href="/resume/David_Fady_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#D4A853]/40 text-[#D4A853] font-semibold text-sm rounded-lg hover:bg-[#D4A853]/10 transition-colors duration-300 tracking-wide"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 border border-[#D4A853]/40 text-[#D4A853] font-semibold text-sm rounded-lg hover:bg-[#D4A853]/10 transition-colors duration-300 tracking-wide"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-gradient-to-b from-transparent via-[#D4A853]/60 to-transparent"
        />
        <span className="font-mono text-[10px] text-[#52525B] uppercase tracking-[0.3em]">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
