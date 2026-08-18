import type { Experience } from "@/types";

/**
 * Listed newest first. `current: true` renders the "Current" marker.
 * Add or edit entries here — the timeline UI needs no changes.
 */
export const experiences: Experience[] = [
  {
    company: "OCN / OneCarNow",
    role: "Staff Software Engineer — Full Stack",
    period: "January 2026 – Present",
    location: "Mexico / Remote",
    current: true,
    summary:
      "Full-stack product engineering across backend services and web applications that support business-critical workflows.",
    responsibilities: [
      "Build and maintain backend services and web applications that drive core business workflows.",
      "Design and implement REST APIs, third-party integrations and the database changes behind them.",
      "Contribute to system design and architecture decisions as features and services evolve.",
      "Debug production issues and work on performance improvements across the stack.",
      "Review code, validate changes on staging and support production releases.",
      "Work cross-functionally with product and engineering peers across time zones.",
    ],
    stack: [
      "Full Stack",
      "REST APIs",
      "System Design",
      "Databases",
      "Integrations",
      "Production Support",
    ],
  },
  {
    company: "DevGate Consultancy",
    role: "Lead Software Engineer — Full Stack",
    period: "October 2022 – Present",
    current: true,
    summary:
      "Technical lead across client engagements spanning backend systems, web platforms and mobile applications.",
    responsibilities: [
      "Lead delivery of backend systems, web applications and mobile applications across client projects.",
      "Define application architecture and REST API contracts for new and existing products.",
      "Work directly with clients to turn business requirements into technical plans.",
      "Review code and mentor engineers on architecture, testing and delivery practices.",
      "Own production releases and post-release support.",
    ],
    stack: [
      "Node.js",
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "React",
      "Angular",
      "Android",
      "REST APIs",
      "Databases",
    ],
  },
  {
    company: "Data Pilot",
    role: "Senior Backend Developer",
    period: "April 2025 – November 2025",
    current: false,
    project: "Pharmaceutical Intelligence Platform",
    summary:
      "Backend engineering for a pharmaceutical intelligence platform built around external clinical and pipeline data.",
    responsibilities: [
      "Built scalable APIs with FastAPI backed by PostgreSQL and SQLAlchemy.",
      "Integrated clinical trial and pharmaceutical pipeline data sources into the platform.",
      "Implemented real-time monitoring, RSS processing and automated reporting workflows.",
      "Developed data processing pipelines with Pandas and managed schema migrations with Alembic.",
      "Wrote Pytest coverage for services and data flows, and supported production reliability.",
      "Containerised services with Docker for deployment on Azure.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "Alembic",
      "Docker",
      "Azure",
      "Pytest",
    ],
  },
  {
    company: "VentureDive",
    role: "Senior Software Engineer",
    period: "November 2023 – February 2025",
    current: false,
    summary:
      "Native SDK and connectivity work for IoT products, bridging low-level C/C++ components into Android.",
    responsibilities: [
      "Developed native SDK components in C/C++ and exposed them to Android through JNI.",
      "Implemented network communication and data processing over UDP/TCP.",
      "Worked with IoT protocols including MQTT, LwM2M, CoAP and LoRaWAN.",
      "Debugged low-level issues across the native and Android boundary.",
      "Added unit tests and wired builds into GitHub CI/CD pipelines.",
    ],
    stack: [
      "C",
      "C++",
      "JNI",
      "Android",
      "UDP/TCP",
      "MQTT",
      "LwM2M",
      "CoAP",
      "LoRaWAN",
      "GitHub Actions",
    ],
  },
  {
    company: "Sofit Consultancy",
    role: "Senior Android Engineer",
    period: "May 2021 – October 2022",
    current: false,
    summary:
      "Senior Android engineering on production mobile applications, including work on a Saudi National Bank project.",
    responsibilities: [
      "Developed and maintained production Android applications.",
      "Contributed to a Saudi National Bank project as part of the mobile engineering team.",
      "Reviewed code and mentored engineers on Android practices and app architecture.",
      "Managed release preparation and post-release support for mobile builds.",
    ],
    stack: ["Android", "Kotlin", "Java", "REST APIs", "Code Reviews", "Release Management"],
  },
  {
    company: "GreenAge Services",
    role: "Software Development Team Lead",
    period: "December 2019 – May 2021",
    current: false,
    summary:
      "Led a development team building agriculture-focused software products end to end.",
    responsibilities: [
      "Led the development team through requirements, planning and delivery.",
      "Shaped product architecture for agriculture-focused applications.",
      "Translated client requirements into technical scope and coordinated the work across the team.",
      "Managed release cycles and communicated progress directly with stakeholders.",
    ],
    stack: [
      "Technical Leadership",
      "Product Development",
      "Architecture",
      "Android",
      "Backend",
      "Client Communication",
    ],
  },
  {
    company: "Nextep Technologies",
    role: "Senior Android Developer / Full-Stack Contributor",
    period: "April 2019 – December 2019",
    current: false,
    summary:
      "Android application development alongside PHP backend work for consumer-facing products.",
    responsibilities: [
      "Built and shipped Android applications to production.",
      "Developed supporting PHP APIs for mobile clients.",
      "Integrated analytics and monetisation SDKs.",
      "Handled release builds and store submissions.",
    ],
    stack: ["Android", "Java", "PHP", "REST APIs", "Analytics", "Monetisation"],
  },
  {
    company: "The Capital Technologies",
    role: "Android Developer",
    period: "February 2017 – April 2019",
    current: false,
    summary:
      "The early stage of my professional career, where I built the production engineering foundation I still work from.",
    responsibilities: [
      "Developed Android applications and shipped them to production.",
      "Learned the fundamentals of app architecture, API integration and release processes.",
      "Built the habits around debugging, testing and production support that shaped my later work.",
    ],
    stack: ["Android", "Java", "REST APIs", "SQLite"],
  },
];
