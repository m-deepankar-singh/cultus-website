"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  logos: string[];
  className?: string;
  speed?: number;
}

export default function LogoCarousel({
  logos,
  className,
  speed = 30,
}: LogoCarouselProps) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={cn("overflow-hidden py-8", className)}>
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16 bg-bg-light rounded-lg flex items-center justify-center border border-gray-100"
          >
            <span className="text-xs text-text-secondary/50 font-medium">
              {logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
