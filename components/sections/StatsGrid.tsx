"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import StatCounter from "@/components/ui/StatCounter";
import type { Stat } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatsGridProps {
  stats: Stat[];
  columns?: 3 | 4 | 6;
  background?: "white" | "primary" | "light";
  className?: string;
}

const colClasses = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  6: "md:grid-cols-3 lg:grid-cols-6",
};

export default function StatsGrid({
  stats,
  columns = 3,
  background = "white",
  className,
}: StatsGridProps) {
  const isPrimary = background === "primary";

  return (
    <section
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isPrimary && "bg-primary",
        background === "light" && "bg-bg-light",
        background === "white" && "bg-white",
        className
      )}
    >
      {/* Decorative elements for primary */}
      {isPrimary && (
        <>
          <div className="absolute inset-0 noise-overlay" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "grid grid-cols-2 gap-8 md:gap-12",
            colClasses[columns]
          )}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeUp}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light={isPrimary}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
