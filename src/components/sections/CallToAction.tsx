import { ArrowRight } from "lucide-react";
import { linkedInUrl } from "@/data/site";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="section-shell pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background-card px-6 py-12 sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(94,234,212,0.12),transparent_50%)]"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2
              id="cta-heading"
              className="font-display text-3xl tracking-tight text-foreground sm:text-4xl"
            >
              Have a product, engineering challenge, or opportunity worth discussing?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              I read every serious note. If it looks like a fit, I will say so
              plainly. If it does not, I will say that too.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Contact Me
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                href={linkedInUrl}
                variant="secondary"
                size="lg"
                external
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
