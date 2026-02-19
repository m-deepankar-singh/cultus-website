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
