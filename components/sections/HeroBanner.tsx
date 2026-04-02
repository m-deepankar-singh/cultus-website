"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { heroStagger, fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import HeroOrbit from "@/components/ui/HeroOrbit";
import { cn } from "@/lib/utils";

interface HeroBannerProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  compact?: boolean;
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function HeroBanner({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  compact = false,
  className,
  logoSrc,
  logoAlt,
}: HeroBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        compact ? "min-h-[55vh]" : "min-h-[92vh]",
        className
      )}
    >
      {/* Layered gradient background with depth */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-[-10%] bg-gradient-to-br from-primary-deeper via-primary-dark to-primary"
      />

      {/* Radial light bloom */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[780px] h-[560px] bg-primary-light/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-primary/22 rounded-full blur-[100px]" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[22%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-[58%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      </div>

      {/* Animated orbital SVG */}
      <HeroOrbit />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-70" />

      {/* Content with parallax fade */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-24"
      >
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.02] px-4 sm:px-8 py-8 sm:py-10 backdrop-blur-[2px]"
        >
          {/* Decorative badge with animated signal icon */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
              {/* Broadcasting arcs */}
              <path d="M8.5 8.5a5 5 0 0 1 7 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M6 6a9 9 0 0 1 12 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" begin="0.4s" repeatCount="indefinite" />
              </path>
              <path d="M3.5 3.5a13 13 0 0 1 17 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.15">
                <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3s" begin="0.8s" repeatCount="indefinite" />
              </path>
              {/* Center dot */}
              <circle cx="12" cy="12" r="2" fill="#E8B931">
                <animate attributeName="r" values="1.8;2.2;1.8" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Downward connection line */}
              <line x1="12" y1="14" x2="12" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              <circle cx="12" cy="20" r="1.5" fill="white" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase font-sans">
              Transforming 221,000+ lives
            </span>
          </motion.div>

          {logoSrc ? (
            <motion.div variants={fadeUp} className="flex justify-center">
              <Image
                src={logoSrc}
                alt={logoAlt || headline}
                width={500}
                height={150}
                unoptimized
                className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto object-contain brightness-0 invert"
                priority
              />
            </motion.div>
          ) : (
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-[-0.04em] leading-[0.95]"
            >
              {headline}
            </motion.h1>
          )}

          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/72 max-w-3xl mx-auto leading-relaxed font-light font-sans"
          >
            {subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={ctaHref} variant="secondary" size="lg" className="border-white/30 bg-white text-primary hover:bg-white shadow-2xl shadow-black/20">
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient blend kept in brand blues */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-primary-deeper/85 via-primary/30 to-transparent" />

      {/* Scroll indicator */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
