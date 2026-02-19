"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { WHY_WORK_REASONS } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { Briefcase } from "lucide-react";

export default function CareersContent() {
  return (
    <>
      {/* Why Work with Cultus */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Why Work with Cultus?" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHY_WORK_REASONS.map((reason, index) => {
              const IconComponent = getIcon(reason.icon);
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {reason.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <SectionHeading
            title="Current Openings"
            subtitle="We're always looking for talented individuals to join our team."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-10 border border-gray-100"
          >
            <Briefcase className="w-12 h-12 text-primary/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-dark mb-2">
              Openings Coming Soon
            </h3>
            <p className="text-text-secondary">
              We&apos;re currently updating our open positions. In the meantime,
              feel free to reach out with your profile &mdash; we&apos;d love to
              connect with passionate professionals.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
