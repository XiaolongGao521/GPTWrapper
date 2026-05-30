import { Check } from "lucide-react";
import Link from "next/link";

import { Faq } from "@/components/marketing/Faq";
import { Button } from "@/components/ui/button";
import { sharedFaqs } from "@/content/faqs";
import type { MarketingPage } from "@/content/types";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "For proving the wrapper can carry the meeting.",
    cta: "Get started",
    href: "/#start",
    featured: false,
    features: [
      "Starter prompt wrapping",
      "One confident output panel",
      "Basic context language",
      "Manual paste workflows",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For builders who want the same box to sound funded.",
    cta: "Get started",
    href: "/#start",
    featured: true,
    features: [
      "Advanced wrapper modes",
      "Reusable prompt postures",
      "Priority ceremonial polish",
      "Result reset and replay",
    ],
  },
  {
    name: "Teams",
    price: "$28",
    period: "per seat",
    description: "For departments standardizing the obvious.",
    cta: "Get started",
    href: "/#start",
    featured: false,
    features: [
      "Shared wrapper language",
      "Team-ready output framing",
      "Procurement-friendly labels",
      "Role-specific starter prompts",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need confidence before surface area.",
    cta: "Talk to sales",
    href: "/enterprise",
    featured: false,
    features: [
      "Governance narrative",
      "Rollout posture support",
      "Department mapping",
      "Executive-ready wrapper review",
    ],
  },
];

type PricingPageProps = {
  page: MarketingPage;
};

export function PricingPage({ page }: PricingPageProps) {
  return (
    <>
      <section className="bolt-shell min-h-screen pb-20 pt-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Pricing</h1>
            <p className="mt-3 text-sm text-muted-foreground">{page.subtitle}</p>
            <div className="mx-auto mt-8 inline-flex rounded-md border border-border bg-card p-1">
              <span className="rounded bg-[#158cff] px-4 py-1.5 text-sm font-medium text-white">Monthly</span>
              <span className="px-4 py-1.5 text-sm font-medium text-muted-foreground">Yearly</span>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground">Save up to 28% with yearly wrapping</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={cn(
                  "flex min-h-[420px] flex-col rounded-lg border border-border bg-card p-5 text-card-foreground",
                  tier.featured && "border-primary/60 shadow-[0_0_42px_rgb(21_140_255_/_0.16)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">{tier.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                  </div>
                  {tier.featured ? (
                    <span className="rounded bg-foreground px-2 py-1 text-[10px] font-bold uppercase text-background">
                      Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-8">
                  <span className="text-4xl font-semibold text-foreground">{tier.price}</span>
                  {tier.period ? (
                    <span className="ml-2 text-xs leading-4 text-muted-foreground">{tier.period}</span>
                  ) : null}
                </div>
                <Button
                  asChild
                  className={cn(
                    "mt-6 h-9 w-full rounded-md text-sm font-medium",
                    tier.featured
                      ? "bolt-blue-button"
                      : "border-border bg-secondary text-foreground hover:bg-muted",
                  )}
                  variant={tier.featured ? "default" : "outline"}
                >
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
                <div className="mt-7 border-t border-border pt-5">
                  <p className="text-xs font-medium text-muted-foreground">You get:</p>
                  <ul className="mt-4 grid gap-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-5 text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq faqs={sharedFaqs} />
    </>
  );
}
