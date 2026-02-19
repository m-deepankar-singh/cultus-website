"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SKILLS_CENTER_STREAMS } from "@/lib/data";
import { Check } from "lucide-react";
import { cn, getIcon } from "@/lib/utils";

export default function SkillsCenterStreams() {
  const [activeStream, setActiveStream] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Cultus Skills Center
          </h2>
          <p className="text-text-secondary text-center max-w-3xl mx-auto mb-12 text-lg">
            A world-class, single-point skilling ecosystem that bridges
            learners, universities, and industry. Built on the proven Cultus Way
            methodology.
          </p>
        </motion.div>

        {/* Stream tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {SKILLS_CENTER_STREAMS.map((stream, index) => {
            const IconComponent = getIcon(stream.icon);
            return (
              <button
                key={index}
                onClick={() => setActiveStream(index)}
                className={cn(
                  "flex-1 px-5 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer border",
                  activeStream === index
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-text-dark border-gray-200 hover:border-primary/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <IconComponent
                    className={cn(
                      "w-5 h-5",
                      activeStream === index ? "text-white" : "text-primary"
                    )}
                  />
                  <div>
                    <p className="font-semibold text-sm">{stream.title}</p>
                    <p
                      className={cn(
                        "text-xs mt-0.5",
                        activeStream === index
                          ? "text-white/70"
                          : "text-text-secondary"
                      )}
                    >
                      {stream.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stream content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStream}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-light rounded-2xl p-6 md:p-10"
          >
            <h3 className="text-xl font-bold text-text-dark mb-2">
              {SKILLS_CENTER_STREAMS[activeStream].title}
            </h3>
            <p className="text-text-secondary mb-6">
              {SKILLS_CENTER_STREAMS[activeStream].subtitle}
            </p>
            <ul className="space-y-3">
              {SKILLS_CENTER_STREAMS[activeStream].features.map(
                (feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
