import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Muhammad Raza Saeed",
  title: "Staff Software Engineer",
  headline: "10+ years building mobile, web and backend products",
  valueProposition:
    "I design and build reliable software systems — from idea and architecture through to production.",
  yearsOfExperience: "10+",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "razasaeed135@gmail.com",
  phone: "+92 316 5994525",
  phoneHref: "+923165994525",
  availability:
    "Open to remote opportunities and selected software development engagements.",
  availableFor: [
    "Remote opportunities",
    "Senior / Staff engineering roles",
    "Full-stack development",
    "Backend engineering",
    "Mobile application development",
    "Technical consulting",
    "Custom software development",
  ],

  // Used in the hero / intro area.
  summary: [
    "Staff Software Engineer with 10+ years of professional experience building mobile, web and backend products. I work across the full software development lifecycle — understanding the business requirement, designing the architecture, writing the code, testing it, shipping it and supporting it in production.",
    "I have built with Android, iOS, Flutter and React Native on mobile; React and Angular on the web; and Node.js, Python/FastAPI, Laravel and Spring Boot on the backend, alongside the databases, APIs and system design that hold those pieces together.",
    "What I enjoy most is untangling complex engineering problems, building systems that stay maintainable after the first release, and turning messy real-world requirements into software people can rely on.",
  ],

  // Used in the About section.
  about: [
    "I started out in mobile engineering, shipping production Android applications and learning what it actually takes to keep software working once real users depend on it. Over time I moved deeper into the stack — APIs, databases, backend services, infrastructure — until the boundary between \"mobile developer\" and \"backend developer\" stopped being useful for describing the work.",
    "Today I work at staff level, which in practice means I spend as much time on architecture decisions, code reviews, production debugging and technical direction as I do writing code. I am comfortable owning a feature end to end: clarifying the requirement, designing the data model and the API, building the interface, validating it on staging and standing behind it after release.",
    "I care about the parts of engineering that show up months later — clear boundaries, readable code, sensible migrations, useful logs and tests that catch real regressions. I would rather ship something simple that holds up than something clever that becomes someone else's problem.",
  ],

  highlights: [
    { label: "Years of experience", value: "10+" },
    { label: "Current level", value: "Staff Engineer" },
    { label: "Breadth", value: "Mobile · Web · Backend" },
    { label: "Working style", value: "Remote, cross-timezone" },
  ],

  education: [
    {
      degree: "BS Computer Science",
      institution: "PMAS Arid Agriculture University",
      location: "Rawalpindi, Pakistan",
      period: "2013 – 2017",
    },
  ],
};
