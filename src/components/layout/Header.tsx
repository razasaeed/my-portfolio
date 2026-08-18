"use client";

import { useEffect, useId, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { githubUrl, linkedInUrl, navItems, publicHref, resume } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border bg-[#070b14]/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background-card font-mono text-[0.7rem] font-semibold tracking-wider text-accent">
            RS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium text-foreground">
              {profile.name}
            </span>
            <span className="hidden truncate text-xs text-subtle sm:block">
              {profile.title}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks />
          <Button href={publicHref(resume.path)} download={resume.fileName} size="sm">
            <Download className="size-3.5" aria-hidden />
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-[#070b14] lg:hidden"
        >
          <Container className="flex flex-col gap-6 py-6">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-base text-foreground hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={publicHref(resume.path)}
                download={resume.fileName}
                onClick={() => setOpen(false)}
              >
                <Download className="size-4" aria-hidden />
                Download Resume
              </Button>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent"
              >
                LinkedIn
              </a>
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
