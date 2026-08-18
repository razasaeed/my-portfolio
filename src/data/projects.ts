import type { Project } from "@/types";

/**
 * Project cards describe categories of real work. Client names, user counts
 * and performance figures are deliberately left out — add a `url` only when
 * there is a public link worth sharing.
 */
export const projects: Project[] = [
  {
    slug: "pharmaceutical-intelligence-platform",
    title: "Pharmaceutical Intelligence Platform",
    focus: "Backend / Data Platform",
    description:
      "Backend services and data workflows that pull external pharmaceutical and clinical-trial data into a production intelligence platform.",
    contributions: [
      "Designed and built FastAPI services over a PostgreSQL and SQLAlchemy data layer.",
      "Integrated clinical trial and drug pipeline sources, plus RSS-based monitoring feeds.",
      "Built data processing and automated reporting flows with Pandas.",
      "Handled schema migrations, test coverage and containerised deployment.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "Alembic",
      "Docker",
      "Azure",
    ],
  },
  {
    slug: "enterprise-business-management-platform",
    title: "Enterprise Business Management Platform",
    focus: "Full Stack",
    description:
      "A business operations platform covering HR, attendance, payroll and employee management, wired into external systems through APIs.",
    contributions: [
      "Modelled state-based business workflows across HR, attendance and payroll modules.",
      "Built REST APIs and the web interfaces consuming them.",
      "Designed the relational schema and the migration path as modules were added.",
      "Integrated third-party services required by the business processes.",
    ],
    technologies: [
      "Node.js",
      "Laravel",
      "React",
      "Angular",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    slug: "native-sdk-iot-systems",
    title: "Native SDK & IoT Systems",
    focus: "Systems / Mobile Infrastructure",
    description:
      "Performance-sensitive native SDK components and communication layers embedded into mobile products.",
    contributions: [
      "Implemented SDK internals in C/C++ and exposed them to Android via JNI.",
      "Built network communication over UDP/TCP with IoT protocol support.",
      "Debugged low-level issues spanning the native and managed boundary.",
      "Covered core paths with unit tests running in CI.",
    ],
    technologies: [
      "C++",
      "JNI",
      "Android",
      "UDP/TCP",
      "MQTT",
      "LwM2M",
      "CoAP",
      "LoRaWAN",
    ],
  },
  {
    slug: "mobile-commerce-applications",
    title: "Mobile Commerce Applications",
    focus: "Mobile",
    description:
      "Consumer-facing commerce applications on Android and iOS, backed by REST APIs and third-party service integrations.",
    contributions: [
      "Built product browsing, cart and checkout flows against REST backends.",
      "Structured apps around clean architecture boundaries and offline-friendly local storage.",
      "Integrated payment, analytics and notification services.",
      "Managed release builds, store submissions and post-release fixes.",
    ],
    technologies: [
      "Android",
      "Kotlin",
      "iOS",
      "Flutter",
      "React Native",
      "REST APIs",
      "SQLite",
    ],
  },
];
