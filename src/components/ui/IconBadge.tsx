import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  CodeXml,
  Database,
  Landmark,
  Layers,
  MessageSquare,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { ServiceIconName, SkillIconName } from "@/types";

const skillIcons: Record<SkillIconName, LucideIcon> = {
  backend: Workflow,
  frontend: CodeXml,
  mobile: Smartphone,
  database: Database,
  architecture: Layers,
  devops: Boxes,
  quality: ShieldCheck,
};

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  "custom-software": Landmark,
  api: Workflow,
  web: CodeXml,
  mobile: MonitorSmartphone,
  saas: Boxes,
  architecture: Layers,
  database: Database,
  consulting: MessageSquare,
};

type IconBadgeProps = {
  name: SkillIconName | ServiceIconName;
  kind?: "skill" | "service";
};

export function IconBadge({ name, kind = "skill" }: IconBadgeProps) {
  const Icon =
    kind === "service"
      ? serviceIcons[name as ServiceIconName]
      : skillIcons[name as SkillIconName];

  return (
    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
      <Icon className="size-4" aria-hidden />
    </span>
  );
}
