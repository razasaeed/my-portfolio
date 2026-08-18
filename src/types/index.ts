export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  valueProposition: string;
  yearsOfExperience: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  availability: string;
  availableFor: string[];
  summary: string[];
  about: string[];
  highlights: { label: string; value: string }[];
  education: Education[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
  project?: string;
};

export type Project = {
  slug: string;
  title: string;
  focus: string;
  description: string;
  contributions: string[];
  technologies: string[];
  /** Optional public link. Leave undefined for confidential or internal work. */
  url?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: SkillIconName;
  description: string;
  skills: string[];
};

export type SkillIconName =
  | "backend"
  | "frontend"
  | "mobile"
  | "database"
  | "architecture"
  | "devops"
  | "quality";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export type ServiceIconName =
  | "custom-software"
  | "api"
  | "web"
  | "mobile"
  | "saas"
  | "architecture"
  | "database"
  | "consulting";
