# Celestial Theme System

## Ownership

This subtree owns the site-wide theme cycle. Future changes to theme behavior, visuals, persistence, toggle placement, or mode names must update this file in the same change.

## Modes And Storage

- `ThemeMode` is `"sunrise" | "light" | "sunset" | "dark" | "solar-eclipse" | "lunar-eclipse"`.
- Persistent state lives in `localStorage` under `gptwrapper-theme-cycle-v1`.
- Default state is `mode: "dark"`, `normalIndex: 3`, `completedLoops: 0`, `pendingEclipse: null`, and `nextEclipse: "solar"`.
- The app keeps dark as the server-safe default and uses the layout boot script to apply stored theme attributes before hydration.

## Cycle Rules

- Normal clicks advance `sunrise -> light -> sunset -> dark`.
- Entering `dark` increments `completedLoops`.
- When `completedLoops` is divisible by 10, the next click shows the pending eclipse instead of the next normal mode.
- The 10th completed normal loop shows `solar-eclipse`; the 20th shows `lunar-eclipse`; later eclipse insertions alternate.
- Eclipse modes last for one click. The click after an eclipse returns to `sunrise`.

## Visual Requirements

- `light` is the standard light palette.
- `dark` is the standard dark GPTWrapper SaaS palette.
- `sunrise` shows light creeping in from the left/east side of the screen.
- `sunset` shows light exiting on the right/west side of the screen.
- `solar-eclipse` uses a dark palette with a centered eclipse disk, corona, and white beam effects.
- `lunar-eclipse` uses a dark red-tinted palette with a centered red moon and dim crimson overlay.
- The atmosphere is CSS-driven. Do not replace it with images or canvas unless the product requirements change and this document is updated.
- Shared shell and marketing surfaces must use semantic theme tokens so light modes remain readable.

## UI Placement

- `ThemeProvider` wraps the app shell from `src/app/layout.tsx`.
- `ThemeToggle` is icon-only, uses lucide icons, and belongs near the desktop `Get started` action.
- The mobile sheet must include the same toggle in its action area.

## Verification

For changes touching this system, verify:

- TypeScript, lint, and production build pass.
- Desktop and mobile header toggles are visible, accessible, and stable in size.
- Normal sequence starts at dark and advances through `sunrise`, `light`, `sunset`, and `dark`.
- Loop 10 inserts `solar-eclipse`; loop 20 inserts `lunar-eclipse`.
- Refresh preserves mode and cycle counters.
- Light, sunrise, and sunset keep the shell, cards, composer, menus, footer, pricing, and mobile sheet readable.
- `prefers-reduced-motion: reduce` disables or minimizes atmosphere animations.
