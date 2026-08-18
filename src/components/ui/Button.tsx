import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-teal-950 hover:bg-accent-strong focus-visible:outline-offset-4",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent/40 hover:bg-accent-soft",
  ghost:
    "text-muted hover:text-foreground hover:bg-white/5",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  download?: boolean | string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  download,
  type = "button",
  disabled,
  external,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
