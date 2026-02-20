"use client";

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
  return (
    <div
      className={cn(
        "relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className="flex w-max animate-scroll gap-16 items-center"
        style={{ "--scroll-speed": `${speed}s` } as React.CSSProperties}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-10 flex items-center justify-center text-text-secondary/40 hover:text-text-secondary/70 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: logo }}
          />
        ))}
      </div>
    </div>
  );
}
