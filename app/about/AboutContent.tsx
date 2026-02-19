"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Target, Handshake, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "An Outcome-Obsessed Model",
    description:
      "We begin with the end goal, the desired outcome, be it a new role or professional advancement. This target drives a curated process of mobilization and training that is initiated from day one.",
  },
  {
    icon: Handshake,
    title: "Scalable, High-Impact Partnerships",
    description:
      "We operate strategically at scale through B2B and B2G channels, designing and delivering tailored programs that make a significant societal impact for every segment of the workforce.",
  },
  {
    icon: BarChart3,
    title: "A Personalized, Data-Driven Pathway",
    description:
      "We leverage a unique platform that uses initial assessments to create a personalized learning path for every individual, enhanced by industry-specific coaching tailored to demography, geographic preference, and target industry.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <SectionHeading title="Our Vision: The CULTUS Promise" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4"
            >
              Our identity is built on our core purpose:
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold text-primary leading-relaxed mb-8"
            >
              Creative Upgrading of Learning Technologies and Unique Solutions.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary leading-relaxed"
            >
              We focus on transforming the learning ecosystem by integrating
              innovative technologies with impactful skilling practices. Our
              approach is built on designing creative, learner-centric solutions
              that empower individuals to gain relevant skills and achieve
              meaningful career outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="Our unique methodology ensures we deliver tangible outcomes where they matter most."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-dark mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
