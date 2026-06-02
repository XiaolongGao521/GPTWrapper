import type { NavItem } from "@/content/types";

export const primaryNav: NavItem[] = [
  { title: "Enterprise", href: "/enterprise", group: "primary", icon: "building" },
  { title: "Careers", href: "/careers", group: "primary", icon: "briefcase" },
  { title: "Pricing", href: "/pricing", group: "primary", icon: "chart" },
];

export const resourceNav: NavItem[] = [
  {
    title: "Documentation",
    href: "/resources",
    description: "Official guidance for clicking the box and pressing keys.",
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
    title: "Status",
    href: "/status",
    description: "Operational posture for the surface, the button, and the vibes.",
    group: "resources",
    icon: "activity",
  },
];

export const socialNav: NavItem[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/sillyavatar/",
    group: "company",
    icon: "instagram",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/sillyavatar",
    group: "company",
    icon: "linkedin",
  },
  { title: "X", href: "https://x.com/TheSillyAvatar", group: "company", icon: "x" },
  { title: "Discord", href: "https://discord.gg/gWDene2Y7P", group: "company", icon: "discord" },
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
