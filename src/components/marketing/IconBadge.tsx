import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faReddit,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Check,
  Circle,
  ClipboardList,
  Code2,
  FileText,
  Globe2,
  Handshake,
  HeartHandshake,
  Layers3,
  LockKeyhole,
  Megaphone,
  MessageSquareText,
  Newspaper,
  Play,
  Puzzle,
  Rocket,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

type BrandIconName = "discord" | "instagram" | "linkedin" | "reddit" | "x" | "youtube";

const brandIconMap: Record<BrandIconName, IconDefinition> = {
  discord: faDiscord,
  instagram: faInstagram,
  linkedin: faLinkedin,
  reddit: faReddit,
  x: faXTwitter,
  youtube: faYoutube,
};

const lucideIconMap: Record<Exclude<IconName, BrandIconName>, LucideIcon> = {
  activity: Activity,
  arrowRight: ArrowRight,
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  boxes: Boxes,
  briefcase: BriefcaseBusiness,
  building: Building2,
  chart: ChartNoAxesCombined,
  check: Check,
  circle: Circle,
  clipboard: ClipboardList,
  code: Code2,
  fileText: FileText,
  globe: Globe2,
  handshake: Handshake,
  heart: HeartHandshake,
  layers: Layers3,
  lock: LockKeyhole,
  megaphone: Megaphone,
  messages: MessageSquareText,
  newspaper: Newspaper,
  play: Play,
  puzzle: Puzzle,
  rocket: Rocket,
  search: Search,
  send: Send,
  settings: Settings2,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: UsersRound,
  wand: WandSparkles,
};

function isBrandIconName(icon: IconName): icon is BrandIconName {
  return icon in brandIconMap;
}

function renderIcon(icon: IconName, iconClassName?: string) {
  const className = cn("size-4", iconClassName);

  if (isBrandIconName(icon)) {
    return <FontAwesomeIcon icon={brandIconMap[icon]} className={className} />;
  }

  const Icon = lucideIconMap[icon];

  return <Icon className={className} />;
}

type IconBadgeProps = {
  icon?: IconName;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({ icon = "sparkles", className, iconClassName }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground",
        className,
      )}
      aria-hidden="true"
    >
      {renderIcon(icon, iconClassName)}
    </span>
  );
}
