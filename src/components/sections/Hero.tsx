import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { publicHref, resume } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_42%),radial-gradient(ellipse_at_left,rgba(45,212,191,0.08),transparent_40%)]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-16 lg:py-28">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-accent">
            {profile.title}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-3xl font-display text-[2.35rem] leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-subtle sm:text-[1.05rem]">
            {profile.valueProposition}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#experience" size="lg">
              View My Experience
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              <Mail className="size-4" aria-hidden />
              Contact Me
            </Button>
            <Button
              href={publicHref(resume.path)}
              download={resume.fileName}
              variant="ghost"
              size="lg"
            >
              <Download className="size-4" aria-hidden />
              Download Resume
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <SocialLinks />
            <p className="text-sm text-subtle">{profile.location}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-sky-400/10 blur-2xl"
              aria-hidden
            />
            <ProfilePhoto
              priority
              className="aspect-[4/5] min-h-[20rem] w-full"
              sizes="(max-width: 1024px) 20rem, 22rem"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
