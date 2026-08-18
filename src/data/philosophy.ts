export type Principle = {
  title: string;
  description: string;
};

export const philosophy: Principle[] = [
  {
    title: "Ownership over hand-off",
    description:
      "A feature is not done when the pull request merges. I stay with it through staging, release and whatever the first week in production turns up.",
  },
  {
    title: "Understand the business problem first",
    description:
      "Most bad architecture starts as a misunderstood requirement. I would rather spend an extra hour on the problem than a month on the wrong solution.",
  },
  {
    title: "Simple beats clever",
    description:
      "Code is read far more often than it is written. If a simpler design gets us to the same place, that is the one worth defending in review.",
  },
  {
    title: "Build for the second year",
    description:
      "Clear module boundaries, honest data models and sensible migrations are what let a system keep changing without becoming risky to touch.",
  },
  {
    title: "Reliability is a feature",
    description:
      "Meaningful tests, useful logs and predictable failure handling matter more to users than anything on the roadmap when something breaks.",
  },
];

export const exploring = {
  heading: "Currently exploring",
  intro:
    "Areas I am actively learning rather than claiming expertise in. I am working through them the same way I learned everything else — by building things and reading about what breaks.",
  topics: [
    "Production AI systems",
    "LLM application engineering",
    "AI agents",
    "Observability",
    "Evaluations for model-driven features",
    "Reliability in non-deterministic systems",
  ],
};
