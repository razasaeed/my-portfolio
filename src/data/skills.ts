import type { SkillGroup } from "@/types";

/**
 * Grouped by what the work actually is, not by logo. Deliberately no
 * proficiency percentages — they do not mean anything.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "backend",
    description:
      "Services and APIs that carry business logic, integrations and data.",
    skills: [
      "FastAPI",
      "Node.js",
      "Express",
      "Laravel",
      "Spring Boot",
      "Core PHP",
      "REST APIs",
      "Third-party Integrations",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "frontend",
    description:
      "Web interfaces and dashboards that stay fast and maintainable as they grow.",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "mobile",
    title: "Mobile Engineering",
    icon: "mobile",
    description:
      "Native and cross-platform applications, from architecture to store release.",
    skills: ["Android", "Kotlin", "Java", "iOS", "Flutter", "React Native"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    description:
      "Data modelling, schema design and migrations for relational and document stores.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "SQLAlchemy",
      "Room",
      "Migrations",
      "Data Modelling",
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "architecture",
    description:
      "Designing systems that stay understandable once several people work on them.",
    skills: [
      "System Design",
      "Clean Architecture",
      "API Design",
      "Scalable Systems",
      "State-based Workflows",
      "Performance",
      "SOLID",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: "devops",
    description:
      "Getting code to production repeatedly, and keeping it observable once it is there.",
    skills: [
      "Docker",
      "Azure",
      "CI/CD",
      "GitHub Actions",
      "GitLab",
      "Linux",
      "Nginx",
      "Deployments",
    ],
  },
  {
    id: "quality",
    title: "Engineering Quality",
    icon: "quality",
    description:
      "The practices that decide whether a system is still pleasant to work on next year.",
    skills: [
      "Pytest",
      "JUnit",
      "Mockito",
      "Espresso",
      "Unit & Integration Testing",
      "API Testing",
      "Code Reviews",
      "Production Debugging",
    ],
  },
];
