"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  headline: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "light";
  className?: string;
}

export default function CTABanner({
  headline,
  buttonText,
  buttonHref,
  variant = "primary",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "section-shell relative overflow-hidden",
        variant === "primary" ? "bg-primary" : "bg-bg-cream",
        className
      )}
    >
      {/* Decorative elements for primary variant */}
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/35 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-white/10 rounded-full blur-[120px]" />
        </>
      )}

      {variant === "light" && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto px-4 sm:px-8 text-center relative z-10 rounded-[var(--radius-card)] border border-transparent"
      >
        <motion.h2
          variants={fadeUp}
          className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-tight",
            variant === "primary" ? "text-white" : "text-primary"
          )}
        >
          {headline}
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <Button
            href={buttonHref}
            variant={variant === "primary" ? "secondary" : "primary"}
            size="lg"
            arrow
            className={variant === "primary" ? "bg-white text-primary hover:bg-white shadow-2xl shadow-black/20" : ""}
          >
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
