import { exploring, philosophy } from "@/data/philosophy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="philosophy-heading"
          eyebrow="How I work"
          title="The habits that survive the first release."
        />

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {philosophy.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 py-6 sm:grid-cols-[4rem_minmax(0,18rem)_minmax(0,1fr)] sm:gap-8 sm:py-7"
            >
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-border bg-background-card p-5 sm:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {exploring.heading}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            {exploring.intro}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {exploring.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
