"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Card from "@/components/ui/Card";
import { PROGRAMS } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function LearnersPrograms() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {PROGRAMS.map((program, index) => {
        const IconComponent = getIcon(program.icon);
        return (
          <motion.div key={index} variants={fadeUp}>
            <Card href="/programs" className="group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-dark">
                    {program.title}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
