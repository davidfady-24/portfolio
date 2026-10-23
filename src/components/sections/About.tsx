'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
} as const;

/* ─── Terminal Code Block ─── */
function TerminalCard() {
  return (
    <div className="rounded-xl border border-[#D4A853]/15 bg-[#0C0C0F] overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#D4A853]/10 bg-[#141419]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="font-mono text-xs text-[#52525B]">profile.py</span>
        <div className="w-12" />
      </div>

      {/* Code Body */}
      <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
        <CodeLine>
          <span className="text-[#52525B]"># David Fady — Data &amp; BI Analyst</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#A1A1AA]">{'>>> '}</span>
          <span className="text-emerald-400">import</span>
          <span className="text-[#FAFAFA]"> analyst</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#A1A1AA]">{'>>> '}</span>
          <span className="text-[#FAFAFA]">david</span>
          <span className="text-[#A1A1AA]"> = </span>
          <span className="text-[#FAFAFA]">{'{'}</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;name&quot;</span>
          <span className="text-[#A1A1AA]">: </span>
          <span className="text-[#E8975A]">&quot;David Fady&quot;</span>
          <span className="text-[#A1A1AA]">,</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;location&quot;</span>
          <span className="text-[#A1A1AA]">: </span>
          <span className="text-[#E8975A]">&quot;El Mansoura, Egypt&quot;</span>
          <span className="text-[#A1A1AA]">,</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;education&quot;</span>
          <span className="text-[#A1A1AA]">: </span>
          <span className="text-[#E8975A]">&quot;B.Sc. Computer Science — Mansoura Univ.&quot;</span>
          <span className="text-[#A1A1AA]">,</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;stack&quot;</span>
          <span className="text-[#A1A1AA]">: [</span>
          <span className="text-[#D4A853]">&quot;Python&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;SQL&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;Power BI&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;Tableau&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;Excel&quot;</span>
          <span className="text-[#A1A1AA]">],</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;impact&quot;</span>
          <span className="text-[#A1A1AA]">: </span>
          <span className="text-[#E8975A]">&quot;3,500+ users · 213.7K EGP tracked across 574 subs&quot;</span>
          <span className="text-[#A1A1AA]">,</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;programs&quot;</span>
          <span className="text-[#A1A1AA]">: [</span>
          <span className="text-[#D4A853]">&quot;Microsoft PL-300 Certified&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;MCIT/DEPI Data Analyst&quot;</span>
          <span className="text-[#A1A1AA]">, </span>
          <span className="text-[#D4A853]">&quot;DEPI Data Engineering&quot;</span>
          <span className="text-[#A1A1AA]">],</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span className="text-[#E8975A]">&quot;available&quot;</span>
          <span className="text-[#A1A1AA]">: </span>
          <span className="text-blue-400">True</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#FAFAFA]">{'}'}</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#A1A1AA]">{'>>> '}</span>
          <span className="text-[#FAFAFA]">david</span>
          <span className="text-[#A1A1AA]">.</span>
          <span className="text-emerald-400">hire</span>
          <span className="text-[#A1A1AA]">()</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#52525B]"># &quot;Data only matters when it changes a decision.&quot;</span>
        </CodeLine>
        <CodeLine>
          <span className="text-[#A1A1AA]">{'>>> '}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-2 h-4 bg-[#D4A853] align-middle"
          />
        </CodeLine>
      </div>
    </div>
  );
}

function CodeLine({
  children,
  indent = 0,
}: {
  children: React.ReactNode;
  indent?: number;
}) {
  return (
    <div className="whitespace-pre" style={{ paddingLeft: `${indent * 1.25}rem` }}>
      {children}
    </div>
  );
}

/* ─── About Component ─── */
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="00 — Profile" title="Who I Am" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column — Narrative */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-[#A1A1AA] leading-relaxed text-base">
              I am a Computer Science student at{' '}
              <strong className="text-[#FAFAFA]">Mansoura University</strong>{' '}
              whose real education in analytics began when I built a commercial
              marketplace that thousands of people relied on daily.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed text-base">
              As Founder &amp; Lead Data Analyst of{' '}
              <strong className="text-[#FAFAFA]">FUT Black Market</strong>, I
              scaled a subscription and digital-trading ecosystem to{' '}
              <strong className="text-[#FAFAFA]">3,500+ members</strong> and
              engineered automated Python &amp; Excel BI pipelines tracking{' '}
              <strong className="text-[#FAFAFA]">213,750+ EGP</strong> in
              verified revenue across{' '}
              <strong className="text-[#FAFAFA]">574 subscriptions</strong>. Running
              a live operation demanded real-time decisions on pricing, retention,
              and conversion optimization.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed text-base">
              That experience taught me something textbooks couldn&apos;t —{' '}
              <strong className="text-[#FAFAFA]">
                data only matters when it changes a decision
              </strong>
              . Every ETL pipeline I engineer, every Star Schema I model, and
              every executive dashboard I deliver is built around measurable
              operational outcomes.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed text-base">
              Holding the{' '}
              <strong className="text-[#FAFAFA]">
                Microsoft Certified: Power BI Data Analyst Associate (PL-300)
              </strong>{' '}
              credential, graduating from the{' '}
              <strong className="text-[#FAFAFA]">
                MCIT / DEPI Data Analyst Specialist
              </strong>{' '}
              track (<span className="font-mono text-xs text-[#D4A853]">Jun–Dec 2025</span>),
              and advancing as an{' '}
              <strong className="text-[#FAFAFA]">
                MCIT / DEPI Data Engineering Trainee
              </strong>{' '}
              (<span className="font-mono text-xs text-[#D4A853]">2026–Present</span>),
              I combine end-to-end business intelligence (SQL, Power BI, Tableau,
              Excel) with production Python automation and data engineering.
            </p>
          </motion.div>

          {/* Right Column — Terminal */}
          <motion.div variants={itemVariants}>
            <TerminalCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
