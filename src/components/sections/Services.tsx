import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="How I can help, if the work is a fit."
          description="I take on selected engagements — product engineering, architecture, and the parts of delivery that sit between a requirement and a release."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border bg-background-card p-5 sm:p-6"
            >
              <IconBadge name={service.icon} kind="service" />
              <h3 className="mt-4 text-base font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
