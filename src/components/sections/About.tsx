import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-shell">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.8fr)] lg:gap-16">
          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="Staff-level engineering across the stack, not a single layer of it."
            />
            <div className="mt-8 space-y-5 text-base leading-7 text-muted sm:text-[1.05rem] sm:leading-8">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <dl className="grid grid-cols-2 gap-3 sm:gap-4">
              {profile.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-background-card p-4 sm:p-5"
                >
                  <dt className="text-xs text-subtle">{item.label}</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-foreground sm:text-[0.95rem]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {profile.education.map((item) => (
                  <li key={item.institution}>
                    <p className="text-sm font-medium text-foreground">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-xs text-subtle">
                      {item.location} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
