'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Data ─── */
const reasons = [
  {
    icon: '🏗️',
    title: 'Real Operations Experience',
    description:
      'Built and managed a live platform serving 3,500+ users with real operational challenges',
  },
  {
    icon: '📊',
    title: 'Analytical Foundation',
    description:
      'SQL, Python, Power BI, Tableau — skills built through practice, not just coursework',
  },
  {
    icon: '💡',
    title: 'Business Mindset',
    description:
      'Every analysis ties back to a business decision. Data without context is noise.',
  },
  {
    icon: '⚙️',
    title: 'Automation Builder',
    description:
      'Created systems that replaced hours of manual work with automated intelligence pipelines',
  },
  {
    icon: '📚',
    title: 'Microsoft PL-300 & DEPI Certified',
    description:
      'Microsoft Certified Power BI Data Analyst Associate (PL-300), MCIT/DEPI graduate, Google & HackerRank verified across 7 credentials',
  },
  {
    icon: '🚀',
    title: 'Day-One Impact',
    description:
      'Proven ability to deliver measurable results from the start, not after months of onboarding',
  },
];

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

/* ─── WhyHireMe Section ─── */
export default function WhyHireMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why-hire-me"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader
        label="06 — Value Proposition"
        title="Why Recruiters Choose Me"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            variants={cardVariants}
            className="group rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 hover:border-[#D4A853]/30 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(212,168,83,0.1)]"
          >
            <span
              className="text-3xl block mb-4"
              role="img"
              aria-label={reason.title}
            >
              {reason.icon}
            </span>
            <h3 className="text-base font-bold text-[#D4A853] mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
