export type NavGroup = "primary" | "resources" | "company" | "legal";

export type PageTemplate =
  | "simple"
  | "resources"
  | "blog"
  | "pricing"
  | "legal";

export type IconName =
  | "activity"
  | "arrowRight"
  | "badgeCheck"
  | "bookOpen"
  | "boxes"
  | "briefcase"
  | "building"
  | "chart"
  | "check"
  | "circle"
  | "clipboard"
  | "code"
  | "fileText"
  | "globe"
  | "handshake"
  | "heart"
  | "layers"
  | "linkedin"
  | "lock"
  | "megaphone"
  | "messages"
  | "newspaper"
  | "play"
  | "puzzle"
  | "radio"
  | "reddit"
  | "rocket"
  | "search"
  | "send"
  | "settings"
  | "shield"
  | "sparkles"
  | "twitter"
  | "users"
  | "wand"
  | "youtube";

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  group?: NavGroup;
  icon?: IconName;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContentCard = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  icon?: IconName;
};

export type StatItem = {
  value: string;
  label: string;
  description: string;
};

export type Section = {
  title: string;
  description: string;
  items?: ContentCard[];
  stats?: StatItem[];
};

export type MarketingPage = {
  slug: string;
  template: PageTemplate;
  navGroup: NavGroup;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  sections: Section[];
  faqs?: FAQ[];
  entries?: ContentCard[];
};

export type TemplateItem = ContentCard & {
  prompt: string;
};

export type PostItem = ContentCard & {
  category: string;
};

export type VideoItem = ContentCard & {
  duration: string;
};
