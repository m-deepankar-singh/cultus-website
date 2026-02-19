import { cn } from "@/lib/utils";

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
          <div className={cn(
            "h-px w-8",
            light ? "bg-white/30" : "bg-primary/30"
          )} />
          <span className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-white/50" : "text-primary/60"
          )}>
            {tag}
          </span>
          <div className={cn(
            "h-px w-8",
            light ? "bg-white/30" : "bg-primary/30"
          )} />
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
