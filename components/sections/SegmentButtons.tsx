"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Card from "@/components/ui/Card";
import { SEGMENT_BUTTONS } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function SegmentButtons() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SEGMENT_BUTTONS.map((segment, index) => {
            const IconComponent = getIcon(segment.icon);

            return (
              <motion.div key={index} variants={fadeUp}>
                <Card href={segment.href} className="h-full group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-2">
                    {segment.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {segment.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
