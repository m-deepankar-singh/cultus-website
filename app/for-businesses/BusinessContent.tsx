"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BUSINESS_VALUE_PROPS } from "@/lib/data";
import { getIcon } from "@/lib/utils";

export default function BusinessContent() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          title="Build a World Class Team with Zero Recruitment Fees"
          subtitle="Access a direct pipeline of pre-vetted, job-ready candidates across 11 Asian countries, screened for the 30 competencies top employers demand."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {BUSINESS_VALUE_PROPS.map((prop, index) => {
            const IconComponent = getIcon(prop.icon);
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {prop.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center">
          <p className="text-text-secondary mb-4">Cut hiring costs. Hire certified talent.</p>
          <Button href="/contact" size="lg">
            Connect with Our Team Now
          </Button>
        </div>
      </div>
    </section>
  );
}
