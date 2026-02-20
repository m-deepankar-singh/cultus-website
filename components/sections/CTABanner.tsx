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

          {/* Animated floating particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            {/* Floating dots with gentle drift */}
            {[
              { cx: "12%", cy: "25%", r: 1.5, dur: "8s", dx: 15, dy: -20 },
              { cx: "88%", cy: "30%", r: 1, dur: "10s", dx: -20, dy: 15 },
              { cx: "25%", cy: "70%", r: 1.2, dur: "9s", dx: 10, dy: -25 },
              { cx: "75%", cy: "65%", r: 1, dur: "11s", dx: -15, dy: -10 },
              { cx: "50%", cy: "20%", r: 0.8, dur: "7s", dx: 20, dy: 10 },
              { cx: "35%", cy: "80%", r: 1, dur: "12s", dx: -10, dy: -15 },
              { cx: "65%", cy: "85%", r: 0.8, dur: "9s", dx: 12, dy: -18 },
              { cx: "8%", cy: "55%", r: 1.2, dur: "10s", dx: 18, dy: 8 },
              { cx: "92%", cy: "60%", r: 1, dur: "8s", dx: -14, dy: -12 },
              { cx: "45%", cy: "40%", r: 0.6, dur: "13s", dx: -8, dy: 20 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="white" opacity="0">
                <animate attributeName="opacity" values="0;0.35;0" dur={p.dur} begin={`${i * 0.7}s`} repeatCount="indefinite" />
                <animateMotion dur={p.dur} begin={`${i * 0.7}s`} repeatCount="indefinite" path={`M0,0 Q${p.dx},${p.dy} 0,0`} />
              </circle>
            ))}

            {/* Faint connecting lines between nearby particles */}
            <line x1="12%" y1="25%" x2="25%" y2="70%" stroke="white" strokeWidth="0.3" opacity="0">
              <animate attributeName="opacity" values="0;0.08;0" dur="8s" repeatCount="indefinite" />
            </line>
            <line x1="88%" y1="30%" x2="75%" y2="65%" stroke="white" strokeWidth="0.3" opacity="0">
              <animate attributeName="opacity" values="0;0.08;0" dur="10s" begin="1s" repeatCount="indefinite" />
            </line>
            <line x1="50%" y1="20%" x2="45%" y2="40%" stroke="white" strokeWidth="0.3" opacity="0">
              <animate attributeName="opacity" values="0;0.1;0" dur="7s" begin="2s" repeatCount="indefinite" />
            </line>
          </svg>
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
