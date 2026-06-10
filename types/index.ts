export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "fullstack" | "ai" | "mobile" | "design";
  github: string;
  demo: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "networking"
  | "tools";

export interface Experience {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  link: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
