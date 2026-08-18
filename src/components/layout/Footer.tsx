import { profile } from "@/data/profile";
import { githubUrl, linkedInUrl, navItems } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.title}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block text-sm text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-3">
            <SocialLinks />
            <p className="text-xs text-subtle">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
              {githubUrl ? (
                <>
                  {" · "}
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    GitHub
                  </a>
                </>
              ) : null}
            </p>
          </div>
        </div>

        <div className="h-px w-full hairline" />

        <p className="text-xs text-subtle">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
