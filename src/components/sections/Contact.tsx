'use client';

import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Social Links ─── */
const socialLinks = [
  {
    label: 'Email',
    value: 'David.Fady24@gmail.com',
    href: 'mailto:David.Fady24@gmail.com',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/david-fady24',
    href: 'https://linkedin.com/in/david-fady24',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/davidfady-24',
    href: 'https://github.com/davidfady-24',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

/* ─── Contact Section ─── */
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    const mailtoUrl = `mailto:David.Fady24@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('David.Fady24@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      window.location.href = 'mailto:David.Fady24@gmail.com';
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <SectionHeader label="07 — Contact" title="Get In Touch" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* ── Left Column ── */}
        <motion.div variants={itemVariants} className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] leading-tight mb-4">
              Let&apos;s build something{' '}
              <span className="bg-gradient-to-r from-[#D4A853] to-[#E8C975] bg-clip-text text-transparent">
                together.
              </span>
            </h3>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-8 max-w-md">
              Currently open to Data Analyst, BI Analyst, and Python Automation
              roles, as well as freelance analytics contracts. Let&apos;s talk
              about how data can drive your business forward.
            </p>

            {/* Social Links */}
            <div className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[#0C0C0F] border border-[#D4A853]/10 hover:border-[#D4A853]/30 transition-all duration-300"
                >
                  <div className="text-[#52525B] group-hover:text-[#D4A853] transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#52525B] mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm text-[#FAFAFA] group-hover:text-[#D4A853] transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Action Buttons: Download Resume + Copy Email */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume/David_Fady_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#E8C975] text-[#09090B] font-bold text-sm hover:shadow-[0_0_30px_-6px_rgba(212,168,83,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs hover:bg-[#D4A853]/10 hover:border-[#D4A853]/50 transition-all duration-300 cursor-pointer"
              >
                {copied ? (
                  <span className="text-emerald-400">
                    ✓ Copied David.Fady24@gmail.com
                  </span>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Right Column — SQL Terminal ── */}
        <motion.div variants={itemVariants}>
          <div className="rounded-xl bg-[#0C0C0F]/80 backdrop-blur-sm border border-[#D4A853]/15 overflow-hidden">
            {/* Terminal Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#D4A853]/10 bg-[#0C0C0F]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-xs font-mono text-[#52525B] ml-2">
                contact.sql
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6">
              {/* SQL Comment */}
              <div className="font-mono text-xs text-[#52525B] mb-1">
                <span className="text-emerald-400/60">-- Send a message</span>
              </div>

              {/* SQL Statement */}
              <div className="font-mono text-xs mb-5">
                <span className="text-blue-400">INSERT INTO</span>{' '}
                <span className="text-[#E8C975]">messages</span>{' '}
                <span className="text-[#A1A1AA]">(</span>
                <span className="text-[#FAFAFA]">name</span>
                <span className="text-[#52525B]">,</span>{' '}
                <span className="text-[#FAFAFA]">email</span>
                <span className="text-[#52525B]">,</span>{' '}
                <span className="text-[#FAFAFA]">message</span>
                <span className="text-[#A1A1AA]">)</span>
                <br />
                <span className="text-blue-400">VALUES</span>{' '}
                <span className="text-[#A1A1AA]">(</span>
                <span className="text-emerald-400">
                  &apos;...&apos;
                </span>
                <span className="text-[#A1A1AA]">);</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#52525B] block mb-1.5"
                  >
                    @name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="'John Doe'"
                    className="w-full bg-[#141419] border border-[#D4A853]/10 rounded-lg px-4 py-2.5 text-sm font-mono text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#D4A853]/40 focus:ring-1 focus:ring-[#D4A853]/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#52525B] block mb-1.5"
                  >
                    @email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="'john@example.com'"
                    className="w-full bg-[#141419] border border-[#D4A853]/10 rounded-lg px-4 py-2.5 text-sm font-mono text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#D4A853]/40 focus:ring-1 focus:ring-[#D4A853]/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#52525B] block mb-1.5"
                  >
                    @message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="'Let''s work together...'"
                    className="w-full bg-[#141419] border border-[#D4A853]/10 rounded-lg px-4 py-2.5 text-sm font-mono text-[#FAFAFA] placeholder:text-[#52525B] focus:outline-none focus:border-[#D4A853]/40 focus:ring-1 focus:ring-[#D4A853]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3 rounded-lg font-mono text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 hover:border-[#D4A853]/50 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <span className="text-emerald-400">
                      ✓ Opening mail client — message ready!
                    </span>
                  ) : (
                    '-- EXECUTE ⏎'
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
