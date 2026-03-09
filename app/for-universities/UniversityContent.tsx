"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, BookOpen, ClipboardCheck, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: Award,
    text: "Earn a recognized 5-Star Job Ready credential, certifying mastery of 30 core competencies across 5 key pillars.",
  },
  {
    icon: BookOpen,
    text: "Gain practical, in-demand technical skills through programs in AI, Cloud Computing, 5G, Green Energy, Fintech, and more.",
  },
  {
    icon: ClipboardCheck,
    text: "Validate proficiency with industry projects and assessments, building a portfolio of applied knowledge.",
  },
  {
    icon: Briefcase,
    text: "Explore and prepare for high-growth roles across diverse sectors, from technology to sustainable energy.",
  },
];

export default function UniversityContent() {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <SectionHeading
          title="Transform Your Graduates into Industry 4.0-Ready Talent"
          subtitle="Partner with Cultus to elevate your institution's reputation and graduate outcomes by embedding industry-aligned, outcome-driven skilling directly into your curriculum. We equip students with in-demand skills, a recognized global credential, and direct industry connections."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          <motion.p variants={fadeUp} className="text-text-secondary mb-6">
            With Cultus&apos;s Programs, you can empower your students to:
          </motion.p>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-text-dark leading-relaxed">{benefit.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
