"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Sparkles, Cloud, Radio, Brain, Leaf, CreditCard, Megaphone } from "lucide-react";

const featured = [
  {
    title: "Cultus Job Readiness (CJR)",
    description:
      "CJR blends AI-powered personalization with industry-backed validation, culminating in a 5-Star badge that 4,000+ employers trust and a 93% placement track record.",
    icon: Sparkles,
  },
  {
    title: "AWS re/Start",
    description:
      "A cloud skilling initiative that turns learners into certified AWS professionals backed by industry-recognized certification and proven placement pathways.",
    icon: Cloud,
  },
];

const highlights = [
  { title: "5G Telecom", description: "Courses with labs", icon: Radio },
  { title: "AI and Data", description: "Training programs", icon: Brain },
  { title: "Green Energy", description: "Solar, Hydrogen, EV, Wind", icon: Leaf },
  { title: "Fintech", description: "Financial technology", icon: CreditCard },
  { title: "Digital Marketing", description: "Growth strategies", icon: Megaphone },
];

export default function FeaturedPrograms() {
  return (
    <section className="section-shell-tight bg-bg-light section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          title="Featured Programs & Products"
          subtitle="Industry-aligned programs designed to launch and accelerate careers"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {featured.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ring-1 ring-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12"
        >
          <motion.h3
            variants={fadeUp}
            className="text-lg font-semibold text-text-dark mb-6 text-center"
          >
            Additional Highlights
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-4 text-center border border-primary/10 shadow-[var(--shadow-card)] hover:border-primary/20 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-text-dark">
                    {item.title}
                  </p>
                  <p className="text-xs text-text-body mt-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <Button href="/programs" size="lg">
            Explore All Programs & Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
