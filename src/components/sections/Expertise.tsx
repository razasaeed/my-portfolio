import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="expertise-heading"
          eyebrow="Expertise"
          title="The parts of the stack I actually work in."
          description="Grouped by the kind of work, not by a logo wall. Proficiency bars are not useful here — the experience section is a better signal."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="rounded-2xl border border-border bg-background-card p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <IconBadge name={group.icon} />
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {group.description}
                  </p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
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
