import { profileImage, publicHref } from "@/data/site";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProfilePhoto({
  className,
  priority = false,
}: ProfilePhotoProps) {
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
      {/* Native img so GitHub Pages basePath is applied. next/image was
          emitting /profile.jpg instead of /my-portfolio/profile.jpg. */}
      <img
        src={publicHref(profileImage.path)}
        alt={profileImage.alt}
        width={819}
        height={1024}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    </div>
  );
}
