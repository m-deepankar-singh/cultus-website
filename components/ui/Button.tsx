"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:shadow-xl",
  secondary:
    "bg-white text-primary border border-primary/20 hover:border-primary/35 shadow-sm hover:shadow-md",
  outline:
    "bg-transparent text-primary border border-primary/25 hover:border-primary/45 hover:bg-primary/[0.04]",
};

const sizes = {
  sm: "px-4 py-2.5 text-[13px] gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-3.5 text-[15px] gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  arrow = false,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "group/btn focus-ring inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer tracking-wide focus-visible:outline-none",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
