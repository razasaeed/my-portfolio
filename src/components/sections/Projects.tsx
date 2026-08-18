import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="A sample of the work, without inventing a case-study theatre."
          description="These are categories of real production work. Client names, user counts and performance figures are omitted unless they can be stated accurately."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-2xl border border-border bg-background-card p-5 sm:p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {project.focus}
              </p>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {project.title}
                </h3>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted hover:text-accent"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                {project.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[0.55rem_minmax(0,1fr)] gap-3"
                  >
                    <span
                      className="mt-2 size-1.5 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-subtle"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
