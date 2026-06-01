# GPTWrapper Build Notes

## Product Concept

GPTWrapper is a joke SaaS website: the most minimal wrapper over ChatGPT, presented with the visual seriousness of a polished AI app builder. The core joke is that every page promises a specialized AI workflow, but the actual product surface is just a ceremonious prompt box.

The site should feel like a Bolt.new-style AI builder homepage in structure and confidence, while keeping all copy, names, icons, screenshots, and assets original to GPTWrapper.

The site must never explicitly describe itself as fake, a parody, a joke, or "not real" in user-facing UI. It should pretend to be a real product with total commitment, while mocking AI SaaS culture through overconfident positioning, inflated enterprise language, and absurdly thin product substance.

## Design Reference

Use https://bolt.new/ as the primary visual and structural reference.

Borrow broad patterns only:

- Dark, high-contrast marketing shell.
- Sparse top navigation with a centered Resources menu.
- A large centered builder-style hero.
- The prompt composer as the main product surface and CTA.
- Wide rounded Resources mega menu with icon-led links.
- Compact footer with a logo column and a few link columns.
- Long homepage sections that make a tiny product feel enterprise-ready.

Do not copy Bolt text, logos, screenshots, pricing details, social handles, proprietary imagery, or branded names. GPTWrapper must look like its own product that happens to follow a similar builder-app layout language.

## Design Direction

- Use a polished dark SaaS aesthetic: near-black backgrounds, white primary text, warm gray muted text, thin neutral borders, and restrained highlights.
- Make the prompt composer the primary product and primary CTA.
- Keep the homepage centered, spacious, and conversion-oriented.
- Keep the page count small and manageable; do not create a sprawling marketing library.
- Make the homepage look overbuilt relative to the intentionally tiny product.
- Keep the joke deadpan. The UI should act like GPTWrapper is a legitimate product.
- Avoid generic dashboard styling, stock SaaS gradients, decorative blobs, and pastel app-builder sections.
- Use subtle edge lighting or depth only when it supports the builder-app feel.

## Frontend Stack

Use this stack unless there is a strong reason to change it:

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- UI primitives: shadcn/ui
- Accessibility primitives: Radix UI
- Icons: lucide-react
- Animation: Motion, only for restrained polish
- Main font: Geist Sans
- Mono font: Geist Mono
- Alternative main font: Inter Tight, if the design needs a slightly more condensed landing-page feel

Do not use Material UI, Bootstrap, Chakra, or Mantine for the main UI. They will push the site toward a generic app-shell look instead of a custom Bolt-inspired builder site.

## Deployment

- Vercel is the default deployment target.
- Keep `vercel.json` in the repository root with `framework: "nextjs"` so import and deploy tooling can detect the project as Next.js.
- Use `npm run deploy` or `npm run deploy:production` for production deployments, and `npm run deploy:preview` for preview deployments.
- Use `npm run vercel:pull` before `npm run vercel:build` when local Vercel project settings have not been linked yet.
- Keep `.vercel/` ignored; local Vercel project links and deployment state should not be committed.

## Route Architecture

Build a small marketing experience, not a large directory of pages.

Primary routes:

```txt
/
  Home landing page

/pricing
/enterprise
/careers

/resources
/blog
/status

/legal/privacy
/legal/terms
```

Do not create role-specific, solution-specific, template, guide, video, review, press, partner, expert, cookie, DPA, or sitemap pages unless the user explicitly asks for them. If that content exists, consolidate it into `/resources`, `/enterprise`, or the homepage.

Top navigation should stay small:

```txt
Enterprise
Resources
Careers
Pricing
```

`Resources` should open a mega menu rather than imply a large route taxonomy. Suggested menu contents:

```txt
Resources
  Docs & Help Center
  Blog
  Status
```

Most pages should still be generated from content configuration, but the configuration should remain compact enough to scan in one sitting.

## Page Templates

Use a very small set of reusable page templates:

- `HomePage`: hero prompt, proof strip, builder feature sections, examples, stats, final prompt CTA.
- `SimpleMarketingPage`: enterprise, careers, status, and other concise pages.
- `ResourcesPage`: consolidated resources landing page with docs, blog, and status links.
- `BlogPage`: optional lightweight listing if `/blog` is kept.
- `PricingPage`: simple pricing cards with deadpan tier positioning.
- `LegalPage`: plain legal content layout for privacy and terms only.

Suggested content shape:

```ts
type MarketingPage = {
  slug: string;
  navGroup: "primary" | "resources" | "company" | "legal";
  title: string;
  subtitle: string;
  ctaLabel?: string;
  sections: Section[];
  faqs?: FAQ[];
};
```

## Component Architecture

```txt
src/
  app/
    layout.tsx
    page.tsx
    [...slug]/
      page.tsx

  components/
    layout/
      SiteShell.tsx
      Header.tsx
      ResourcesMegaMenu.tsx
      Footer.tsx

    marketing/
      Hero.tsx
      PromptComposer.tsx
      LogoStrip.tsx
      FeatureBlocks.tsx
      PromptExamples.tsx
      StatsBand.tsx
      CardGrid.tsx
      Faq.tsx

    pages/
      HomePage.tsx
      SimpleMarketingPage.tsx
      ResourcesPage.tsx
      BlogPage.tsx
      PricingPage.tsx
      LegalPage.tsx

  content/
    nav.ts
    pages.ts
    resources.ts
    posts.ts
    faqs.ts
```

Do not add new page templates unless the current templates cannot express the content cleanly.

## Enterprise Page

- `/enterprise` intentionally uses an oversized, viewport-filling prompt composer that starts below the hero headline and occupies nearly the full remaining first-screen width and height.
- Keep this oversized composer scoped to the Enterprise page unless the user explicitly asks to resize the shared prompt surface across the site.

## Pricing Page

- `/pricing` should stay focused on pricing options only. Do not append shared FAQ, generic marketing bands, prompt CTAs, or secondary page sections unless the user explicitly asks.
- The Monthly/Annual billing selector must be interactive and visibly update the recurring plan prices.
- Pricing cards should keep their internal sections aligned with content-sized shared layout tracks and consistent section padding. Avoid fixed card heights or hard-coded section dimensions for alignment.

## Removed Community Flow

- Do not add `/community`, Community navigation, or invite/account-creation surfaces unless the user explicitly asks to restore that flow.
- Compact Social link surfaces are allowed for the six `socialNav` entries and should use Font Awesome Brands icons.

## Homepage Layout

The homepage should follow this Bolt-inspired structure:

```txt
Header
  Logo
  Navigation: Enterprise, Resources, Careers, Pricing
  Actions: Join Waitlist

Hero
  Large centered headline
  Short supporting line
  Large prompt composer
  Primary wrap/build action
  Small secondary mode control, if useful

ProofStrip
  Original brand-like names or short credibility labels

FeatureSections
  Serious builder-style product panels
  Overstated claims about wrapping prompts
  Small UI screenshots or component-like mockups, not generic cards

UseCaseBand
  A few role or workflow examples, kept on the homepage

StatsBand
  Joke credibility metrics

Footer
  Logo
  Resources column
  Company column
```

Suggested hero copy direction:

- "What will you wrap today?"
- "Create stunning strategic outputs by chatting with the model you were already going to use."
- "Let's wrap"
- "Plan the wrapper"

These are examples, not required strings. Keep all copy original and avoid copying Bolt's exact lines.

## Header, Menu, And Footer

- Header should be dark, minimal, and horizontally calm.
- The logo should be a confident GPTWrapper wordmark, not a Bolt-style logo clone.
- Desktop Resources menu should be a wide floating panel with a dark surface, thin border, large link rows, and lucide icons.
- Mobile navigation should use a shadcn/Radix sheet with the same small route set.
- Footer should be sparse and dark, with a large logo at left and two link columns: Resources and Company.
- Avoid dense multi-column directories. The reduced page count is part of the product direction.

## UI Rules

- Use shadcn/ui for buttons, cards, textarea, input, navigation menu, sheet, dialog, accordion, tabs, badge, separator, dropdown menu, and tooltip.
- Build custom composition components for the hero, prompt composer, Resources mega menu, pricing cards, stats bands, and page sections.
- Use lucide-react icons inside icon buttons, menu links, and compact UI controls.
- Use Font Awesome Brands only for social brand icons; render them with inherited `currentColor` so theme-aware surfaces control the color.
- Keep repeated cards at 8px border radius or less. The hero prompt composer and Resources mega menu may use a larger radius because they are primary surfaces.
- Avoid cards inside cards.
- Avoid visible text that explains UI mechanics, keyboard shortcuts, or design choices.
- Avoid repeating the prompt composer as a bottom CTA section unless a user explicitly asks for that pattern.
- Ensure all text fits inside its container on mobile and desktop.
- Use stable dimensions for fixed-format controls like icon buttons, cards, prompt composers, stat tiles, and nav elements.
- Do not scale font sizes directly with viewport width.
- Use `letter-spacing: 0` unless there is a very specific need otherwise.
- Do not use user-facing labels like "fake", "parody", "joke", "mock", "spoof", or "satire".

## Visual System

Recommended foundation:

- Background: near-black (`#09090b` to `#101014`)
- Elevated panels: charcoal (`#18181c` to `#202027`)
- Text: near-white, high contrast
- Muted text: cool or warm gray
- Borders: soft dark neutral
- Accent: one sharp action color, used sparingly
- Shadows: soft, low-opacity, mostly for prompt boxes and floating menus
- Typography: large confident hero text, smaller dense headings in cards and menus

The site should not become a one-note palette. Avoid pages dominated by only purple, beige, dark blue, brown, or orange. Avoid warm off-white sections unless they are used as rare contrast breaks.

## Copy Tone

The writing should sound like a serious SaaS site with a dry punchline. It should mock startup and AI-wrapper culture without breaking character.

Do not write user-facing copy that admits the app is fake, a joke, a parody, a spoof, or satire. The humor should come from the contrast between confident SaaS language and the tiny wrapper concept.

Good examples:

- "Describe vaguely. Receive confidently."
- "Enterprise-grade vibes. Backend not included."
- "One wrapper. Infinite positioning."
- "We connect to tools by asking you to paste things."
- "Ship the prompt box your roadmap has been circling."

Avoid meme-heavy writing, excessive sarcasm, or copy that makes the UI feel sloppy. The joke works best when the design is polished and the product is obviously tiny.

## Interaction Scope

The only required interactive product surface is `PromptComposer`.

Initial behavior:

- Accept user text.
- Show a wrapping/loading state.
- Return a playful wrapped response or redirect-style result.

Future behavior, if requested:

- Add a tiny API route for real OpenAI integration.
- Keep the landing-page architecture unchanged.
- Do not add auth, database, dashboards, or complex state unless explicitly requested.

## Waitlist CTA

- Header and pricing "Join Waitlist" actions open a local simulated waitlist modal; they do not navigate to a route or call a backend.
- Persistent waitlist state lives in `localStorage` under `gptwrapper-waitlist-v1`.
- The modal should show the user's local position, render no more than 10 person-like figures, and show `XXX more waiting` before the visible queue when the local position is greater than 10.
- The joining user is the red person at the end of the visible queue; the existing visible waitlist people are white.
- Do not replace informational docs/help "Get started" copy with waitlist behavior unless the user explicitly asks.

## Implementation Bias

- Keep the architecture flat, compact, and content-driven.
- Prefer merging or removing excess pages over maintaining a large marketing directory.
- Prefer reusable homepage sections over bespoke page markup.
- Keep the app static-first where possible.
- Add actual complexity only when the product concept or user request requires it.
- When updating the existing codebase, reduce the route surface first, then restyle toward the dark Bolt-inspired system.

## Documentation Discipline

- Any code change that adds, removes, or changes product behavior, routes, visual systems, storage keys, architecture, commands, or process must update the relevant `AGENTS.md` file or feature documentation in the same change.
- Prefer subtree `AGENTS.md` files for feature-specific invariants that future agents must preserve.
- If a code change has no documentation impact, say that explicitly in the final response.

## Celestial Theme System

- The site has a persistent global theme cycle documented in `src/components/theme/AGENTS.md`.
- Do not remove, bypass, or replace the celestial theme provider, toggle, storage key, or cycle logic without updating that feature document and the affected code together.
- Theme-aware shared layout and marketing surfaces should use semantic tokens (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`) instead of hard-coded dark-only Tailwind colors.

## Work History

- After finishing a request that changes files, review the diff, stage only the files changed for that request, and create a concise git commit so the work history is saved.
- Do not include unrelated worktree changes in the commit. Leave user changes, generated artifacts, and unrelated files alone unless the request explicitly includes them.
