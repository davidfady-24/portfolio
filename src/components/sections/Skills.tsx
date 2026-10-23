'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills, type Skill, type SoftSkill } from '@/data/skills';

/* ─── Tab Definitions ─── */
const tabs = [
  { id: 'analytics', label: 'Analytics' },
  { id: 'technical', label: 'Technical' },
  { id: 'business', label: 'Business' },
  { id: 'soft', label: 'Soft Skills' },
] as const;

type TabId = (typeof tabs)[number]['id'];

/* ─── Soft skill icons ─── */
const softSkillIcons: Record<string, string> = {
  Communication: '💬',
  Leadership: '👑',
  'Problem Solving': '🧩',
  'Critical Thinking': '🧠',
  Adaptability: '🔄',
  Teamwork: '🤝',
  Initiative: '🚀',
  'Time Management': '⏱️',
};

/* ─── Animation Variants ─── */
const tabContentVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
} as const;

/* ─── Skill Bar ─── */
function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#FAFAFA] font-medium">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-[#D4A853]">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-[#141419] border border-[#D4A853]/8 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#D4A853] to-[#E8C975]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
}

/* ─── Soft Skill Card ─── */
function SoftSkillCard({
  skill,
  delay,
}: {
  skill: SoftSkill;
  delay: number;
}) {
  const icon = softSkillIcons[skill.name] || '✦';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 hover:border-[#D4A853]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <span className="text-3xl mb-3" role="img" aria-label={skill.name}>
        {icon}
      </span>
      <span className="text-sm text-[#FAFAFA] font-medium text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ─── Skills Section ─── */
export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabId>('analytics');

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader
        label="03 — Technical Skills"
        title="The Analytics Stack"
      />

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#D4A853]/15 text-[#E8C975] border border-[#D4A853]/30 shadow-[0_0_20px_-6px_rgba(212,168,83,0.2)]'
                : 'bg-[#0C0C0F] text-[#52525B] border border-[#D4A853]/8 hover:text-[#A1A1AA] hover:border-[#D4A853]/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeTab === 'soft' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.soft.map((skill, i) => (
                  <SoftSkillCard
                    key={skill.name}
                    skill={skill}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                {skills[activeTab].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
