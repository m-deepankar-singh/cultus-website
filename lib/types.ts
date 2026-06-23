export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Program {
  title: string;
  description: string;
  courses: string[];
  ctaText: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Office {
  city: string;
  address: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface SegmentButton {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface EventItem {
  title: string;
  eyebrow: string;
  description: string;
  date: string;
  day: string;
  time: string;
  timezone: string;
  format: string;
  image: string;
  href: string;
  ctaText: string;
  status: "upcoming" | "past";
  tags: string[];
}
