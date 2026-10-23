'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4A853] mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#D4A853] to-transparent" />
    </motion.div>
  );
}
