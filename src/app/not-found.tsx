import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The link may be outdated. The home page has the full profile, experience
          and contact details.
        </p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </main>
  );
}
