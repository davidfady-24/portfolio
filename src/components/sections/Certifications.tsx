'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { certifications, type Certification } from '@/data/certifications';

/* ─── Filter Categories ─── */
const filterCategories = [
  'All',
  'Data Analytics',
  'SQL',
  'Excel',
  'Power BI',
  'Programming',
] as const;

type FilterCategory = (typeof filterCategories)[number];

/* ─── Provider Logo Styles ─── */
function ProviderLogo({ issuer }: { issuer: string }) {
  switch (issuer) {
    case 'Microsoft':
      return (
        <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[#FAFAFA] tracking-wide">
          <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
            <span className="bg-[#F25022] block" />
            <span className="bg-[#7FBA00] block" />
            <span className="bg-[#00A4EF] block" />
            <span className="bg-[#FFB900] block" />
          </span>
          <span>Microsoft</span>
        </span>
      );
    case 'Google':
      return (
        <span className="font-bold text-sm tracking-wide">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      );
    case 'HackerRank':
      return (
        <span className="font-bold text-sm text-[#00EA64] tracking-wide">
          HackerRank
        </span>
      );
    case 'DEPI':
      return (
        <span className="font-bold text-sm text-[#D4A853] tracking-wide">
          MCIT · DEPI
        </span>
      );
    case 'Coursera':
      return (
        <span className="font-bold text-sm text-[#3B82F6] tracking-wide">
          Coursera
        </span>
      );
    default:
      return (
        <span className="font-bold text-sm text-[#A1A1AA] tracking-wide">
          {issuer}
        </span>
      );
  }
}

/* ─── Certification Card ─── */
function CertCard({ cert }: { cert: Certification }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col justify-between rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 hover:border-[#D4A853]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(212,168,83,0.1)] p-6"
    >
      <div>
        {/* Provider + Date */}
        <div className="flex items-center justify-between mb-3">
          <ProviderLogo issuer={cert.issuer} />
          <span className="text-[11px] font-mono text-[#52525B]">
            {cert.date}
          </span>
        </div>

        {/* Provider name (when different from issuer) */}
        {cert.provider !== cert.issuer && (
          <p className="text-[10px] font-mono text-[#52525B] mb-2 uppercase tracking-wider">
            {cert.provider}
          </p>
        )}

        {/* Cert Title */}
        <h3 className="text-[15px] font-bold text-[#FAFAFA] mb-3 leading-snug">
          {cert.title}
        </h3>

        {/* Credential ID Badge */}
        {cert.credentialId && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-[#D4A853]/10 text-[#E8C975] border border-[#D4A853]/20">
              <span>ID:</span>
              <span className="font-semibold">{cert.credentialId}</span>
            </span>
          </div>
        )}

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#141419] text-[#A1A1AA] border border-[#D4A853]/8"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Verify Link */}
      {cert.verifyUrl && (
        <div>
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-mono text-[#D4A853]/80 border border-[#D4A853]/20 hover:border-[#D4A853]/50 hover:text-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-300"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Verify Credential ↗</span>
          </a>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Certifications Section ─── */
export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filtered =
    activeFilter === 'All'
      ? certifications
      : certifications.filter((c) => c.categories.includes(activeFilter));

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader label="04 — Certifications" title="Credential Wall" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#D4A853]/15 text-[#E8C975] border border-[#D4A853]/30 shadow-[0_0_20px_-6px_rgba(212,168,83,0.2)]'
                : 'bg-[#0C0C0F] text-[#52525B] border border-[#D4A853]/8 hover:text-[#A1A1AA] hover:border-[#D4A853]/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
