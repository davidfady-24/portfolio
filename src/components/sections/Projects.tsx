'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects, type Project } from '@/data/projects';

/* ─── Animation Variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

/* ─── Project Card ─── */
function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const githubLink = project.links.find((l) => l.label === 'GitHub');

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-xl bg-[#0C0C0F] border transition-all duration-500 ${
        project.featured
          ? 'col-span-1 md:col-span-2 border-l-2 border-l-[#D4A853]/60 border-t-[#D4A853]/15 border-r-[#D4A853]/15 border-b-[#D4A853]/15'
          : 'border-[#D4A853]/10'
      } hover:border-[#D4A853]/40 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(212,168,83,0.15)]`}
    >
      <div className="p-6 md:p-8">
        {/* Top: Category + Badges */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#A1A1AA]">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#D4A853]/15 text-[#E8C975] border border-[#D4A853]/25">
                ★ Featured
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#D4A853]/8 text-[#D4A853] border border-[#D4A853]/15">
              {project.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#FAFAFA] mb-1 leading-snug">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-[#A1A1AA]/70 mb-3">{project.subtitle}</p>

        {/* Context */}
        <p className="font-mono text-[13px] leading-relaxed text-[#A1A1AA] mb-5">
          {project.context}
        </p>

        {/* Metrics Row */}
        <div
          className={`grid gap-3 mb-5 ${
            project.metrics.length > 3
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              : 'grid-cols-3'
          }`}
        >
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg bg-[#141419] border border-[#D4A853]/8 p-3 text-center"
            >
              <div className="text-base md:text-lg font-bold text-[#D4A853]">
                {metric.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525B] mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Read Case Study (Expandable) */}
        <div className="mb-5">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.15em] text-[#D4A853]/80 hover:text-[#D4A853] transition-colors cursor-pointer"
          >
            <span>{isExpanded ? '▾' : '▸'}</span>
            <span>Read Case Study (Problem → Solution)</span>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4 border-t border-[#D4A853]/10 mt-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#D4A853] block mb-1">
                  Problem
                </span>
                <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#D4A853] block mb-1">
                  Solution
                </span>
                <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#D4A853] block mb-1">
                  Impact
                </span>
                <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                  {project.impact}
                </p>
              </div>
              {project.technologies.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#D4A853] block mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#D4A853]/10 text-[#E8C975] border border-[#D4A853]/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.keyLearnings.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#D4A853] block mb-1.5">
                    Key Engineering &amp; Analytical Learnings
                  </span>
                  <ul className="space-y-1.5">
                    {project.keyLearnings.map((learning, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-[#A1A1AA] leading-relaxed"
                      >
                        <span className="text-[#D4A853] mt-0.5 shrink-0 text-xs">
                          ▸
                        </span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#141419] text-[#A1A1AA] border border-[#D4A853]/8"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {githubLink && (
          <a
            href={githubLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-mono text-[#D4A853]/70 hover:text-[#D4A853] transition-colors group/link"
          >
            <span>View on GitHub</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader label="02 — Featured Work" title="Projects Built" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
