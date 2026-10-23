'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

/* ─── Data ─── */
const featuredRepos = [
  {
    name: 'discord-member-intelligence-system',
    description:
      'Modular Python & Excel BI suite tracking 213,750 EGP revenue across 574 subscriptions with incremental snowflake checkpointing and 15-sheet executive reporting.',
    language: 'Python · openpyxl · Pandas',
    languageColor: '#3572A5',
    metrics: '213.7K EGP · 574 Subs',
    url: 'https://github.com/davidfady-24/discord-member-intelligence-system',
  },
  {
    name: 'uk-train-rides-analysis',
    description:
      'End-to-end UK railway analysis (31,653 records, £742K revenue) featuring a 7-table Star Schema, 1,185-line T-SQL script, SARIMAX/Prophet forecasts, and Tableau dashboards.',
    language: 'T-SQL · Python · Tableau',
    languageColor: '#DA5B0B',
    metrics: '31,653 Rows · 1,185-Line SQL',
    url: 'https://github.com/davidfady-24/uk-train-rides-analysis',
  },
  {
    name: 'sql-mastery',
    description:
      'Production analytical SQL library covering multi-CTE cohort retention matrices, RFM customer segmentation (NTILE, PERCENT_RANK), window functions, and Star Schema KPIs.',
    language: 'SQL · T-SQL',
    languageColor: '#E38C00',
    metrics: 'RFM · Cohort CTEs',
    url: 'https://github.com/davidfady-24/sql-mastery',
  },
  {
    name: 'data-engineering',
    description:
      'Automated Python + SQLite ETL pipeline with schema validation and data quality checks alongside advanced Pandas, NumPy, and Matplotlib/Seaborn analytical notebooks.',
    language: 'Python · SQLite · ETL',
    languageColor: '#2B7489',
    metrics: 'ETL Pipeline · QA Checks',
    url: 'https://github.com/davidfady-24/data-engineering',
  },
];

const languages = [
  { name: 'Python (ETL, Automation, FastAPI)', percentage: 55, color: '#3572A5' },
  { name: 'SQL / T-SQL (Star Schema, CTEs)', percentage: 25, color: '#E38C00' },
  { name: 'Jupyter / Analytics & Forecasting', percentage: 15, color: '#DA5B0B' },
  { name: 'HTML / Dashboard UI', percentage: 5, color: '#E34C26' },
];

/* ─── Deterministic heatmap pattern (7 rows × 20 cols) ─── */
function generateHeatmap(): number[] {
  const pattern: number[] = [];
  for (let i = 0; i < 140; i++) {
    const seed = (i * 17 + 31) % 100;
    if (seed < 25) pattern.push(0);
    else if (seed < 45) pattern.push(1);
    else if (seed < 65) pattern.push(2);
    else if (seed < 80) pattern.push(3);
    else pattern.push(4);
  }
  return pattern;
}

const heatmapData = generateHeatmap();

const heatmapColors: Record<number, string> = {
  0: 'bg-[#D4A853]/5',
  1: 'bg-[#D4A853]/15',
  2: 'bg-[#D4A853]/30',
  3: 'bg-[#D4A853]/50',
  4: 'bg-[#D4A853]/80',
};

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

/* ─── GitHub Section ─── */
export default function GitHub() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="github"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader label="05 — Open Source" title="GitHub Activity" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="space-y-8"
      >
        {/* ── Profile Card + Stats ── */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-6">
            <div className="flex items-start sm:items-center gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A853] to-[#E8C975] flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#09090B]">DF</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#FAFAFA]">
                  davidfady-24
                </h3>
                <p className="text-sm text-[#A1A1AA] mt-0.5">
                  Data &amp; BI Analyst · Python Automation &amp; ETL Builder
                </p>
                <p className="text-xs text-[#52525B] font-mono mt-1 flex items-center gap-1.5">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  El Mansoura, Egypt
                </p>
              </div>
            </div>

            <a
              href="https://github.com/davidfady-24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-[#D4A853] border border-[#D4A853]/25 hover:bg-[#D4A853]/10 transition-colors"
            >
              <span>Follow @davidfady-24</span>
              <span>↗</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 6, label: 'Public Repos' },
              { value: 4, label: 'Core Stacks' },
              { value: 7, label: 'Verified Certs' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-lg bg-[#141419] border border-[#D4A853]/8 p-4"
              >
                <AnimatedCounter
                  target={stat.value}
                  duration={1.5}
                  className="text-2xl font-bold text-[#D4A853]"
                />
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525B] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Language Breakdown ── */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 p-6 md:p-8"
        >
          <h4 className="text-sm font-mono uppercase tracking-[0.15em] text-[#52525B] mb-4">
            Language &amp; Stack Breakdown
          </h4>

          {/* Horizontal bar */}
          <div className="h-3 rounded-full overflow-hidden flex mb-4">
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                className="h-full first:rounded-l-full last:rounded-r-full"
                style={{ backgroundColor: lang.color }}
                initial={{ width: 0 }}
                animate={
                  isInView ? { width: `${lang.percentage}%` } : { width: 0 }
                }
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-xs text-[#A1A1AA]">{lang.name}</span>
                <span className="text-xs text-[#52525B] font-mono">
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Featured Repos (Top 4) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredRepos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 hover:border-[#D4A853]/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(212,168,83,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-[#D4A853] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <h4 className="text-sm font-bold text-[#FAFAFA] group-hover:text-[#D4A853] transition-colors leading-snug break-all">
                      {repo.name}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#D4A853]/10 text-[#E8C975] border border-[#D4A853]/20 shrink-0">
                    {repo.metrics}
                  </span>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#D4A853]/8">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-xs text-[#52525B] font-mono">
                    {repo.language}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#D4A853]/70 group-hover:text-[#D4A853] transition-colors">
                  View Repo ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Contribution Heatmap ── */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-mono uppercase tracking-[0.15em] text-[#52525B]">
              Contribution Activity
            </h4>
            <div className="flex items-center gap-1.5 text-[10px] text-[#52525B] font-mono">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-2.5 h-2.5 rounded-sm ${heatmapColors[level]}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: 'repeat(20, 1fr)',
              gridTemplateRows: 'repeat(7, 1fr)',
            }}
          >
            {heatmapData.map((level, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${heatmapColors[level]} transition-all duration-200 hover:ring-1 hover:ring-[#D4A853]/40`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
