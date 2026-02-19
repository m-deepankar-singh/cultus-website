"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  light?: boolean;
  className?: string;
}

export default function StatCounter({
  value,
  suffix,
  label,
  light = false,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const formattedValue =
    value >= 1000
      ? displayValue.toLocaleString("en-IN")
      : displayValue.toString();

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {formattedValue}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-sm md:text-base max-w-[200px] mx-auto leading-relaxed",
          light ? "text-white/70" : "text-text-secondary"
        )}
      >
        {label}
      </p>
    </div>
  );
}
