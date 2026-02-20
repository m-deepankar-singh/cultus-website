import { cn } from "@/lib/utils";

function TagAccentLine({ light, flip }: { light: boolean; flip?: boolean }) {
  const color = light ? "rgba(255,255,255,0.35)" : "rgba(27,69,128,0.35)";
  const highlight = light ? "rgba(255,255,255,0.7)" : "rgba(27,69,128,0.7)";
  return (
    <svg
      width="36"
      height="6"
      viewBox="0 0 36 6"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <line x1="0" y1="3" x2="36" y2="3" stroke={color} strokeWidth="1" />
      {/* Traveling highlight dot */}
      <circle r="1.5" fill={highlight}>
        <animateMotion dur="3s" repeatCount="indefinite" path="M0,3 L36,3" />
        <animate attributeName="opacity" values="0;0.9;0" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* End node */}
      <circle cx="36" cy="3" r="1.5" fill={color} />
    </svg>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  light?: boolean;
  className?: string;
  tag?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = false,
  className,
  tag,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        alignment === "center" && "text-center",
        className
      )}
    >
      {/* Optional tag/label */}
      {tag && (
        <div className={cn(
          "mb-5 flex items-center gap-3",
          alignment === "center" && "justify-center"
        )}>
          <TagAccentLine light={light} flip />
          <span className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-white/50" : "text-primary/60"
          )}>
            {tag}
          </span>
          <TagAccentLine light={light} />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.03] max-w-4xl",
          alignment === "center" && "mx-auto",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg max-w-3xl leading-relaxed font-light text-balance",
            alignment === "center" && "mx-auto",
            light ? "text-white/70" : "text-text-body"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
