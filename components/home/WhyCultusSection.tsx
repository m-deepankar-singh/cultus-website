"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { number: "221,000+", label: "learners trained" },
  { number: "93%", label: "placement rate" },
  { number: "4,000+", label: "hiring partners" },
];

export default function WhyCultusSection() {
  return (
    <section className="section-shell bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bg-light to-transparent opacity-65" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative">
        <SectionHeading
          title="Why Cultus?"
          subtitle="In a world where only 44% of technical graduates are job-ready, Cultus is the bridge between learning and earning."
          tag="Our Mission"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-text-body leading-relaxed max-w-2xl mx-auto mb-14 text-center font-light"
          >
            We partner with governments, universities, and corporations to
            deliver high-impact, outcome-driven skilling that turns potential
            into placement.
          </motion.p>

          {/* Stats with editorial layout */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-primary/12 rounded-[var(--radius-card)] border border-primary/10 bg-surface-base shadow-[var(--shadow-card)]"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center py-8 md:py-10 px-8">
                <div className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-none">
                  {stat.number}
                </div>
                <p className="mt-3 text-xs md:text-sm text-text-secondary uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 text-center">
            <div className="divider-line mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
              We don&apos;t just skill. We transform lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
