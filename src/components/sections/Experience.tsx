'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import experience, { type ExperienceItem } from '@/data/experience';

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
} as const;

/* ─── Timeline Item ─── */
function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <motion.div variants={itemVariants} className="relative pl-10 pb-12 last:pb-0">
      {/* Gold dot on the line */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#D4A853] border-2 border-[#09090B] z-10" />

      {/* Connecting line segment */}
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-[#D4A853]/20" />

      {/* Date & Badge */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="font-mono text-xs text-[#D4A853] tracking-wider uppercase">
          {item.date}
        </span>

        {item.badge && (
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider ${
              item.featured
                ? 'bg-[#D4A853]/15 border border-[#D4A853]/35 text-[#E8C975]'
                : 'bg-[#141419] border border-[#D4A853]/20 text-[#A1A1AA]'
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Title & Organization */}
      <h3 className="mt-2 text-lg font-bold text-[#FAFAFA] tracking-tight">
        {item.title}
      </h3>
      <p className="text-sm text-[#A1A1AA] mt-0.5">
        {item.organization}{' '}
        <span className="text-[#52525B] font-mono text-xs">· {item.location}</span>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 space-y-2.5">
        {item.bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-sm text-[#A1A1AA] leading-relaxed"
          >
            <span className="text-[#D4A853] mt-0.5 shrink-0 text-xs">▸</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Experience Component ─── */
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const workItems = experience.filter((item) => item.type === 'work');
  const educationItems = experience.filter((item) => item.type === 'education');

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="01 — Experience" title="Career Timeline" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Work Experience */}
          <div className="relative">
            {/* Main gold vertical line */}
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A853]/40 via-[#D4A853]/20 to-transparent" />

            {workItems.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>

          {/* Education Divider */}
          {educationItems.length > 0 && (
            <>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 my-12 pl-10"
              >
                <div className="h-px flex-1 bg-[#D4A853]/15" />
                <span className="font-mono text-xs text-[#52525B] uppercase tracking-[0.3em]">
                  Academic Education
                </span>
                <div className="h-px flex-1 bg-[#D4A853]/15" />
              </motion.div>

              {/* Education Items */}
              <div className="relative">
                {/* Gold vertical line */}
                <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A853]/40 via-[#D4A853]/20 to-transparent" />

                {educationItems.map((item) => (
                  <TimelineItem key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
