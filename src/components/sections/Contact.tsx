import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { linkedInHandle, linkedInUrl } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-shell"
    >
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="The shortest path is usually a short email."
          description={profile.availability}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <div className="space-y-5">
            <ContactDetail
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactDetail
              icon={Phone}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phoneHref}`}
            />
            <ContactDetail
              icon={MapPin}
              label="Location"
              value={profile.location}
            />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">
                LinkedIn
              </p>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-foreground hover:text-accent"
              >
                {linkedInHandle}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">
                Open to
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.availableFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-sm text-foreground hover:text-accent">
      {value}
    </a>
  ) : (
    <p className="text-sm text-foreground">{value}</p>
  );

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-lg border border-border text-accent">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-subtle">
          {label}
        </p>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}
