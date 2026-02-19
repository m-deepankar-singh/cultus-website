import { clsx, type ClassValue } from "clsx";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

type IconComponent = React.ComponentType<LucideProps>;

const iconMap = LucideIcons as unknown as Record<string, IconComponent>;

export function getIcon(name: string): IconComponent {
  return iconMap[name] || LucideIcons.Star;
}
