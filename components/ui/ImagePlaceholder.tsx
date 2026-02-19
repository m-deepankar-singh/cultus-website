import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width = "w-full",
  height = "h-48",
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-bg-light rounded-xl flex flex-col items-center justify-center gap-2 border border-gray-100",
        width,
        height,
        className
      )}
    >
      <svg
        className="w-10 h-10 text-text-secondary/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
        />
      </svg>
      {label && (
        <span className="text-xs text-text-secondary/50 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}
