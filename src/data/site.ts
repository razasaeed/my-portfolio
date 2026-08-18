import type { NavItem } from "@/types";

/**
 * Central configuration for anything that is environment- or file-dependent.
 * Everything here can be changed without touching a single UI component.
 */

/**
 * Public origin of the deployed site. Used for canonical URLs, Open Graph
 * metadata, the sitemap and structured data.
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment (e.g. Vercel).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000"
).replace(/\/$/, "");

/**
 * GitHub profile URL.
 * Intentionally empty: set NEXT_PUBLIC_GITHUB_URL, or replace the fallback
 * string below with the real profile URL. While empty, every GitHub link in
 * the UI is hidden rather than pointing somewhere invalid.
 */
export const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "";

/**
 * Set automatically on GitHub Pages project sites (`/repo-name`).
 * Leave empty for user sites (`username.github.io`) and local/Vercel deploys.
 */
export const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH?.trim() || ""
).replace(/\/$/, "");

export function publicHref(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const linkedInUrl = "https://www.linkedin.com/in/razasaeed246/";
export const linkedInHandle = "linkedin.com/in/razasaeed246";

/**
 * Resume file served from /public. Drop the PDF at
 * public/Muhammad_Raza_Saeed_Resume.pdf to make this link resolve.
 */
export const resume = {
  path: "/Muhammad_Raza_Saeed_Resume.pdf",
  fileName: "Muhammad_Raza_Saeed_Resume.pdf",
} as const;

/**
 * Professional headshot served from /public.
 * Drop the image at public/profile.jpg. Until then a clean initials
 * placeholder is rendered in its place.
 */
export const profileImage = {
  path: "/profile.jpg",
  alt: "Muhammad Raza Saeed, Staff Software Engineer",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const siteMeta = {
  title: "Muhammad Raza Saeed | Staff Software Engineer",
  shortTitle: "Muhammad Raza Saeed",
  description:
    "Staff Software Engineer with 10+ years of experience in full-stack, backend, mobile application development, system design and software architecture.",
  keywords: [
    "Staff Software Engineer",
    "Senior Software Engineer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Mobile App Developer",
    "Software Architecture",
    "System Design",
    "FastAPI",
    "Node.js",
    "Android",
    "React",
    "Pakistan",
    "Remote Software Engineer",
  ],
} as const;
