"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Program } from "@/lib/types";

interface ProgramCardProps {
  program: Program;
}

const iconMap = LucideIcons as unknown as Record<
  string,
  React.ComponentType<LucideProps>
>;

export default function ProgramCard({ program }: ProgramCardProps) {
  const IconComponent = iconMap[program.icon] ?? LucideIcons.Star;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-primary/10 ring-1 ring-primary/10 flex items-center justify-center mb-5">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-text-dark mb-3">
          {program.title}
        </h3>

        <p className="text-text-body text-sm leading-relaxed mb-4">
          {program.description}
        </p>

        <ul className="space-y-2 mb-6 flex-grow">
          {program.courses.slice(0, 5).map((course, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-text-dark"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {course}
            </li>
          ))}
          {program.courses.length > 5 && (
            <li className="text-sm text-primary font-medium">
              +{program.courses.length - 5} more
            </li>
          )}
        </ul>

        <Button href="/contact" variant="outline" size="sm" className="w-full">
          Get in Touch
        </Button>
      </Card>
    </motion.div>
  );
}
