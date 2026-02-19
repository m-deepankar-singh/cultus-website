"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CHALLENGES_SOLVED } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { Check, Award } from "lucide-react";

export default function ProductsContent() {
  return (
    <>
      {/* Challenges We Solve */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            title="The Cultus Skills Center: Bridging Gaps, Delivering Outcomes"
            subtitle="Designed to solve the critical challenges faced by Learners, Governments, Universities, and Industry."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {CHALLENGES_SOLVED.map((section, index) => {
              const IconComponent = getIcon(section.icon);
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-text-dark">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {section.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Cultus Guru MCE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cultus Guru MCE
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Transforming Educators for the Digital Era. A globally-focused
                online educator empowerment program that elevates teaching
                quality through digital upskilling.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-bg-light rounded-2xl p-6 md:p-10 mb-8">
              <p className="text-sm text-text-secondary mb-4 font-medium">
                Who it&apos;s for: All registered educators from Kindergarten through
                Vocational and Special Schools.
              </p>
              <p className="text-sm text-text-secondary mb-6">
                Built on The Cultus Way: Define &rarr; Optimize &rarr; Certify &rarr; Showcase
              </p>

              <h4 className="font-semibold text-text-dark mb-3">Program Benefits:</h4>
              <ul className="space-y-2">
                {[
                  "Elevate Digital Teaching Skills \u2013 Master modern classroom technology",
                  "Become a Certified CGM Trainer or Master Trainer \u2013 Lead peer training",
                  "Train Other Educators in MCE Certification \u2013 Scale digital teaching",
                  "Earn Microsoft Certified Educator (MCE) & TPC Credentials",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <Button href="/contact" size="lg">
                Learn More About Cultus Guru MCE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
