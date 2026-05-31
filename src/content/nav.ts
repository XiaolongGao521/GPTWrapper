import type { NavItem } from "@/content/types";

export const primaryNav: NavItem[] = [
  { title: "Enterprise", href: "/enterprise", group: "primary", icon: "building" },
  { title: "Careers", href: "/careers", group: "primary", icon: "briefcase" },
  { title: "Pricing", href: "/pricing", group: "primary", icon: "chart" },
];

export const resourceNav: NavItem[] = [
  {
    title: "Docs & Help Center",
    href: "/resources",
    description: "The canonical operating manual for wrapper-forward teams.",
    group: "resources",
    icon: "bookOpen",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Notes on wrapping, positioning, and responsible prompt ceremony.",
    group: "resources",
    icon: "newspaper",
  },
  {
    title: "Support",
    href: "/support",
    description: "Answers for keeping one prompt box feeling fully supported.",
    group: "resources",
    icon: "messages",
  },
  {
    title: "Status",
    href: "/status",
    description: "Operational posture for the surface, the button, and the vibes.",
    group: "resources",
    icon: "activity",
  },
];

export const socialNav: NavItem[] = [
  { title: "Discord", href: "/resources#discord", group: "company", icon: "discord" },
  { title: "LinkedIn", href: "/resources#linkedin", group: "company", icon: "linkedin" },
  { title: "YouTube", href: "/resources#youtube", group: "company", icon: "youtube" },
  { title: "Twitter/X", href: "/resources#twitter", group: "company", icon: "x" },
  { title: "Instagram", href: "/resources#instagram", group: "company", icon: "instagram" },
  { title: "Reddit", href: "/resources#reddit", group: "company", icon: "reddit" },
];

export const companyNav: NavItem[] = [
  { title: "Enterprise", href: "/enterprise", group: "company", icon: "building" },
  { title: "Careers", href: "/careers", group: "company", icon: "briefcase" },
  { title: "Privacy", href: "/legal/privacy", group: "legal", icon: "lock" },
  { title: "Terms", href: "/legal/terms", group: "legal", icon: "fileText" },
];

export const footerGroups = [
  { title: "Resources", items: resourceNav },
  { title: "Company", items: companyNav },
  { title: "Social", items: socialNav },
];
