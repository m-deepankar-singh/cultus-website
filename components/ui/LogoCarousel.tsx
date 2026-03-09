"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  logos: string[];
  className?: string;
  speed?: number;
}

export default function LogoCarousel({
  logos,
  className,
  speed = 60,
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
            className="flex-shrink-0 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo}
              alt={`Partner ${(index % logos.length) + 1}`}
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
