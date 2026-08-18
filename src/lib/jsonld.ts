import { profile } from "@/data/profile";
import {
  githubUrl,
  linkedInUrl,
  profileImage,
  siteMeta,
  siteUrl,
} from "@/data/site";

export function personJsonLd() {
  const sameAs = [linkedInUrl, githubUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: siteMeta.description,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    image: `${siteUrl}${profileImage.path}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi / Islamabad",
      addressCountry: "PK",
    },
    alumniOf: profile.education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
    })),
    knowsAbout: [
      "Software Architecture",
      "System Design",
      "Full Stack Development",
      "Backend Engineering",
      "Mobile Application Development",
      "REST APIs",
    ],
    sameAs,
  };
}
