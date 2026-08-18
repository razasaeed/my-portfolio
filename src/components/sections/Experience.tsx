import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="A decade of shipping software people depend on."
          description="Roles are listed newest first. Some of this work ran in parallel — that is how the breadth was built."
        />

        <ol className="mt-12 space-y-0">
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className="relative grid gap-4 border-l border-border py-8 pl-6 last:pb-0 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:border-l-0 md:pl-0"
            >
              <div
                className="absolute top-10 -left-[5px] size-2.5 rounded-full bg-accent md:hidden"
                aria-hidden
              />
              <div className="md:pt-1">
                <p className="text-sm text-muted">{item.period}</p>
                {item.location ? (
                  <p className="mt-1 text-xs text-subtle">{item.location}</p>
                ) : null}
                {item.current ? (
                  <span className="mt-3 inline-flex rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[0.7rem] font-medium text-accent">
                    Current
                  </span>
                ) : null}
              </div>

              <article
                className={cn(
                  "rounded-2xl border border-border bg-background-card p-5 sm:p-6",
                  index === 0 && "ring-1 ring-accent/15",
                )}
              >
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.company}</p>
                {item.project ? (
                  <p className="mt-2 text-sm text-muted">
                    Project: {item.project}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="grid grid-cols-[0.55rem_minmax(0,1fr)] gap-3"
                    >
                      <span
                        className="mt-2 size-1.5 rounded-full bg-accent/70"
                        aria-hidden
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-subtle"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
