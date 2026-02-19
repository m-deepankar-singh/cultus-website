"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { GOVERNMENT_VALUE_PROPS } from "@/lib/data";
import { getIcon } from "@/lib/utils";

export default function GovernmentContent() {
  return (
    <>
      {/* Implementation Expertise */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <SectionHeading
            title="Our Government & CSR Implementation Expertise"
            subtitle="Cultus is a trusted partner for executing complex skilling missions at scale. We focus on creating sustainable livelihood opportunities for marginalized and underserved communities."
          />

          {/* Placeholder for government project logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl h-24 flex items-center justify-center border border-gray-100"
              >
                <span className="text-xs text-text-secondary/40 font-medium">
                  Project {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Governments Partner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Why Governments Partner with Cultus" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {GOVERNMENT_VALUE_PROPS.map((prop, index) => {
              const IconComponent = getIcon(prop.icon);
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-dark mb-2">
                          {prop.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
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
