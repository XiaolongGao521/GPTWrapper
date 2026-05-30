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
  Instagram,
  Layers3,
  Linkedin,
  LockKeyhole,
  Megaphone,
  MessageCircleMore,
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
  Twitter,
  UsersRound,
  WandSparkles,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

const iconMap: Record<IconName, LucideIcon> = {
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
  linkedin: Linkedin,
  lock: LockKeyhole,
  megaphone: Megaphone,
  messages: MessageSquareText,
  newspaper: Newspaper,
  play: Play,
  puzzle: Puzzle,
  radio: Instagram,
  reddit: MessageCircleMore,
  rocket: Rocket,
  search: Search,
  send: Send,
  settings: Settings2,
  shield: ShieldCheck,
  sparkles: Sparkles,
  twitter: Twitter,
  users: UsersRound,
  wand: WandSparkles,
  youtube: Youtube,
};

type IconBadgeProps = {
  icon?: IconName;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({ icon = "sparkles", className, iconClassName }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={cn("size-4", iconClassName)} />
    </span>
  );
}
