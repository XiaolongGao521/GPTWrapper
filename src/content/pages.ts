import { sharedFaqs } from "@/content/faqs";
import { resourceNav } from "@/content/nav";
import type { ContentCard, MarketingPage } from "@/content/types";

const resourceCards: ContentCard[] = resourceNav.map((item) => ({
  title: item.title,
  description: item.description ?? "",
  href: item.href,
  icon: item.icon,
}));

const blogEntries: ContentCard[] = [
  {
    title: "The wrapper layer is the product surface",
    description:
      "A field note on turning a familiar model interaction into something that looks accountable in a roadmap.",
    href: "/blog",
    meta: "Positioning",
    icon: "newspaper",
  },
  {
    title: "How to make one prompt box feel departmental",
    description:
      "Naming, tone, and tiny constraints for teams that need the same input to sound specialized.",
    href: "/blog",
    meta: "Operations",
    icon: "boxes",
  },
  {
    title: "When procurement asks what the platform does",
    description:
      "A concise guide to explaining the surface, the button, and the confidence around both.",
    href: "/blog",
    meta: "Enterprise",
    icon: "building",
  },
];

const simplePages: MarketingPage[] = [
  {
    slug: "enterprise",
    template: "simple",
    navGroup: "company",
    title: "Enterprise-grade posture for a very focused surface",
    subtitle:
      "GPTWrapper gives teams a serious operating story around the prompt box they were already planning to ship.",
    ctaLabel: "Start enterprise wrap",
    sections: [
      {
        title: "Procurement-ready confidence",
        description:
          "A compact set of claims, controls, and rollout language for organizations that need the wrapper to feel governed.",
        items: [
          {
            title: "Governance language",
            description:
              "Explain the workflow, risk posture, and user intent without adding a new system of record.",
            icon: "shield",
          },
          {
            title: "Department mapping",
            description:
              "Translate the same prompt surface into language for product, sales, operations, and leadership.",
            icon: "layers",
          },
          {
            title: "Rollout ceremony",
            description:
              "Launch with enough structure to make a small product feel planned.",
            icon: "rocket",
          },
        ],
      },
    ],
    faqs: sharedFaqs,
  },
  {
    slug: "careers",
    template: "simple",
    navGroup: "company",
    title: "Build the future of productized prompting",
    subtitle:
      "Help GPTWrapper make a familiar input field feel inevitable, funded, and ready for the next planning cycle.",
    ctaLabel: "Wrap your role",
    sections: [
      {
        title: "Open roles",
        description:
          "We hire people who can keep a straight face while making one interaction feel like a platform.",
        items: [
          {
            title: "Philanthropist",
            description:
              "Provide non-dilutive, no-strings-attached capital to support GPTWrapper's continued operations, with no governance rights, risk exposure, repayment expectation, or reciprocal consideration from the company.",
            icon: "handshake",
          },
        ],
      },
    ],
  },
  {
    slug: "status",
    template: "simple",
    navGroup: "resources",
    title: "All wrapper systems are green",
    subtitle:
      "The prompt surface is available, the button remains confident, and the platform is running on pure vibes bro.",
    ctaLabel: "Check the surface",
    sections: [
      {
        title: "Current state",
        description:
          "Operational status for the intentionally small set of things GPTWrapper does.",
        items: [
          {
            title: "Prompt composer",
            description: "Operational. Accepting vague requests with calm focus.",
            icon: "activity",
          },
          {
            title: "Wrapper language",
            description: "Operational. Adding context, constraints, and next steps.",
            icon: "messages",
          },
          {
            title: "Output panel",
            description: "Operational. Returning the appearance of a workflow.",
            icon: "badgeCheck",
          },
        ],
      },
    ],
  },
];

export const resourcesPage: MarketingPage = {
  slug: "resources",
  template: "resources",
  navGroup: "resources",
  title: "Resources for teams wrapping the obvious",
  subtitle:
    "Docs, notes, and status references for a product surface small enough to understand in one sitting.",
  ctaLabel: "Open the wrapper",
  sections: [
    {
      title: "Start with the essentials",
      description:
        "Everything here supports the same compact workflow: describe the work, wrap the prompt, ship the posture.",
      items: resourceCards,
    },
  ],
};

export const blogPage: MarketingPage = {
  slug: "blog",
  template: "blog",
  navGroup: "resources",
  title: "Notes from the wrapper economy",
  subtitle:
    "Serious product thinking for teams turning one prompt box into a roadmap item.",
  ctaLabel: "Wrap the takeaways",
  sections: [
    {
      title: "Latest writing",
      description:
        "Short, composed essays about surface area, positioning, and the operational value of a confident button.",
      items: blogEntries,
    },
  ],
  entries: blogEntries,
};

export const pricingPage: MarketingPage = {
  slug: "pricing",
  template: "pricing",
  navGroup: "primary",
  title: "Simple pricing for a very simple surface",
  subtitle:
    "Choose the level of certainty your organization needs around a prompt box.",
  ctaLabel: "Start wrapping",
  sections: [],
};

const legalPages: MarketingPage[] = [
  {
    slug: "legal/privacy",
    template: "legal",
    navGroup: "legal",
    title: "Privacy",
    subtitle:
      "A plain-language overview of how GPTWrapper treats the prompts you bring to the surface.",
    ctaLabel: "Continue review",
    sections: [
      {
        title: "Privacy commitments",
        description:
          "GPTWrapper keeps the claims concise because the product surface is concise.",
        items: [
          {
            title: "Prompt handling",
            description:
              "User-entered prompts are used to produce the visible wrapped response in the current session.",
            icon: "lock",
          },
          {
            title: "Operational metadata",
            description:
              "Basic interaction details may improve product quality, availability, and abuse prevention.",
            icon: "activity",
          },
          {
            title: "No dashboard sprawl",
            description:
              "The product does not require extra customer data systems for the current static experience.",
            icon: "shield",
          },
        ],
      },
    ],
  },
  {
    slug: "legal/terms",
    template: "legal",
    navGroup: "legal",
    title: "Terms",
    subtitle:
      "The terms for using GPTWrapper's compact wrapper surface and the confidence surrounding it.",
    ctaLabel: "Continue review",
    sections: [
      {
        title: "Terms summary",
        description:
          "Use the product responsibly, review generated output, and remember that the surface is intentionally small.",
        items: [
          {
            title: "Use of output",
            description:
              "Wrapped responses should be reviewed before they become docs, decks, or executive language.",
            icon: "fileText",
          },
          {
            title: "Availability",
            description:
              "The site aims to keep the prompt surface available without promising unnecessary ceremony.",
            icon: "activity",
          },
          {
            title: "Changes",
            description:
              "GPTWrapper may revise the wrapper, the positioning, or the button label as the roadmap demands.",
            icon: "settings",
          },
        ],
      },
    ],
  },
];

export const allMarketingPages: MarketingPage[] = [
  resourcesPage,
  blogPage,
  pricingPage,
  ...simplePages,
  ...legalPages,
];

export function getPageBySlug(slug: string) {
  return allMarketingPages.find((page) => page.slug === slug);
}

export function getAllPageSlugs() {
  return allMarketingPages.map((page) => page.slug);
}
