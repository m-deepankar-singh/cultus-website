"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TestimonialSlider({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={cn("py-16 md:py-24 bg-bg-light", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Hear From Those Who Transformed Their Careers
        </h2>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-6 italic">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-text-dark">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-sm text-text-secondary">
                  {TESTIMONIALS[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                current === index
                  ? "bg-primary w-8"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
