import Image from "next/image";
import { profile } from "@/data/profile";
import { profileImage } from "@/data/site";
import { publicFileExists } from "@/lib/assets";
import { cn, initials } from "@/lib/utils";

type ProfilePhotoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProfilePhoto({
  className,
  sizes = "(max-width: 768px) 12rem, 18rem",
  priority = false,
}: ProfilePhotoProps) {
  const hasPhoto = publicFileExists(profileImage.path);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-background-card",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
        aria-hidden
      />
      {hasPhoto ? (
        <Image
          src={profileImage.path}
          alt={profileImage.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <div
          className="flex h-full min-h-[16rem] w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.16),transparent_55%)] px-6 text-center"
          role="img"
          aria-label={`${profile.name} — add a professional headshot at public/profile.jpg`}
        >
          <span className="font-display text-5xl tracking-tight text-accent">
            {initials(profile.name)}
          </span>
          <span className="mt-3 max-w-[12rem] text-xs leading-5 text-subtle">
            Add a professional photo at public/profile.jpg
          </span>
        </div>
      )}
    </div>
  );
}
