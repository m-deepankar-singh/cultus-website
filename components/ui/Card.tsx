"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  glass?: boolean;
}

export default function Card({ children, className, href, glass = false }: CardProps) {
  const cardContent = (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "var(--shadow-elevated)",
      }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        "rounded-[var(--radius-card)] p-6 md:p-8 transition-all duration-300",
        glass
          ? "bg-white/70 backdrop-blur-xl border border-white/80 shadow-[var(--shadow-card)]"
          : "bg-surface-base border border-primary/10 shadow-[var(--shadow-card)] hover:border-primary/20",
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-ring block rounded-[var(--radius-card)]">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
