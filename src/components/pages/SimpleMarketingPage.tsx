import { Play, Search } from "lucide-react";

import { CardGrid } from "@/components/marketing/CardGrid";
import { Faq } from "@/components/marketing/Faq";
import { Hero } from "@/components/marketing/Hero";
import { PromptComposer } from "@/components/marketing/PromptComposer";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Button } from "@/components/ui/button";
import type { MarketingPage } from "@/content/types";

type SimpleMarketingPageProps = {
  page: MarketingPage;
};

function EnterprisePage() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-background px-4 pb-6 pt-28 md:pb-8">
      <div className="blue-orbit" aria-hidden="true" />
      <div className="bolt-horizon !top-[58%]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-0 w-full flex-1 flex-col text-center">
        <h1 className="mx-auto max-w-5xl text-balance text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-7xl">
          We Made The Box Bigger for The Big Enterprise
        </h1>
        <div className="mt-10 flex min-h-[24rem] flex-1">
          <PromptComposer
            className="flex min-h-0 max-w-none flex-1 flex-col overflow-y-auto"
            textareaClassName="min-h-[18rem] flex-1"
            placeholder="Describe the enterprise wrapper your organization can approve..."
            submitLabel="Wrap for enterprise"
          />
        </div>
      </div>
    </section>
  );
}

function CareersPage({ page }: SimpleMarketingPageProps) {
  const roles = page.sections[0]?.items ?? [];

  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-background pb-16 pt-24">
        <div className="blue-orbit !top-24" aria-hidden="true" />
        <div className="container relative flex min-h-[600px] items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-semibold leading-[1.12] text-foreground md:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
              {page.subtitle}
            </p>
            <div className="mx-auto mt-8 h-0.5 w-28 bg-[#158cff]" />
          </div>
        </div>
      </section>
      <section className="page-band py-24">
        <div className="container">
          <h2 className="text-center text-4xl font-semibold text-foreground">
            Open roles
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {roles.map((role) => (
              <article key={role.title} className="bolt-card p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SupportPage({ page }: SimpleMarketingPageProps) {
  const nav = [
    "Get started with GPTWrapper",
    "Introduction to wrapping",
    "Quickstart guide",
    "Learn first and reduce overthinking",
    "Working in a box",
    "Choose a wrapper",
    "Use context",
    "Collaborate with others",
    "Share your project",
    "Supported technologies",
  ];

  return (
    <section className="min-h-screen bg-[#080b0f] text-white">
      <div className="grid lg:grid-cols-[260px_1fr_220px]">
        <aside className="hidden border-r border-white/10 px-5 py-6 lg:block">
          <p className="text-sm font-semibold">GPTWrapper Help Center</p>
          <nav className="mt-6 grid gap-2">
            {nav.map((item) => (
              <a
                key={item}
                href="#docs"
                className="text-sm text-zinc-500 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <main id="docs" className="px-6 py-10 lg:px-12">
          <div className="flex max-w-3xl items-center gap-2 rounded-md border border-white/10 bg-[#10141a] px-3 py-2 text-sm text-zinc-500">
            <Search className="size-4" />
            Search documentation
          </div>
          <h1 className="mt-10 text-3xl font-medium text-zinc-100">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            {page.subtitle}
          </p>
          <h2 className="mt-10 text-2xl font-medium text-zinc-100">
            Get started with GPTWrapper
          </h2>
          <div className="mt-5 max-w-2xl overflow-hidden rounded-md border border-white/10 bg-[#101014]">
            <div className="relative grid h-72 place-items-center overflow-hidden bg-[#080b0f]">
              <div className="bolt-horizon !top-[12rem]" aria-hidden="true" />
              <div className="relative w-[74%] rounded-xl border border-white/10 bg-[#2d2d31] p-4">
                <p className="text-sm text-zinc-400">
                  What will you wrap today?
                </p>
                <div className="mt-10 flex justify-between text-xs text-zinc-500">
                  <span>Plan</span>
                  <span className="rounded-full bg-[#158cff] px-3 py-1 text-white">
                    Build now
                  </span>
                </div>
              </div>
              <button className="absolute grid size-14 place-items-center rounded-full bg-white/15 backdrop-blur">
                <Play className="size-6 fill-white" />
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.sections[0]?.items?.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-white/10 bg-[#10141a] p-4"
              >
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </main>
        <aside className="hidden border-l border-white/10 px-5 py-6 text-sm text-zinc-500 lg:block">
          <p className="font-medium text-zinc-300">On this page</p>
          <div className="mt-5 grid gap-3">
            <a href="#docs">Get started</a>
            <a href="#docs">What&apos;s new</a>
            <a href="#docs">Release notes</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StatusPage({ page }: SimpleMarketingPageProps) {
  return (
    <section className="min-h-screen bg-[#161618] px-4 pb-20 pt-10">
      <div className="mx-auto max-w-[600px]">
        <div className="flex items-center justify-between">
          <div className="text-xl font-black italic text-white">
            gpt.wrapper
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-8 border-white/10 bg-white/5 text-xs text-white hover:bg-white/10"
            >
              Help Center
            </Button>
            <Button className="h-8 rounded bg-white px-3 text-xs text-black hover:bg-zinc-200">
              Subscribe to updates
            </Button>
          </div>
        </div>
        <div className="mt-6 rounded-md border border-emerald-500/55 bg-emerald-950/35 p-4">
          <p className="text-sm font-medium text-emerald-200">
            All systems are green
          </p>
          <div className="mt-4 rounded bg-[#132018] p-3 text-sm text-emerald-100">
            running on pure vibes bro
          </div>
          <p className="mt-3 text-xs leading-5 text-emerald-100/70">
            The prompt surface, response posture, and visible confidence layer
            are operating within vibe-forward expectations.
          </p>
        </div>
        <div className="mt-6 rounded-md border border-white/10 bg-[#1b1b1f] p-4">
          <h1 className="text-2xl font-medium text-zinc-100">{page.title}</h1>
          <p className="mt-2 text-sm text-zinc-400">{page.subtitle}</p>
          <div className="mt-6 grid gap-3">
            {page.sections[0]?.items?.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded border border-white/10 bg-[#111114] px-4 py-3"
              >
                <span className="text-sm text-zinc-200">{item.title}</span>
                <span className="inline-flex items-center gap-2 text-xs text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" />{" "}
                  Operational
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DefaultSimplePage({ page }: SimpleMarketingPageProps) {
  return (
    <>
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        ctaLabel={page.ctaLabel ?? "Let's wrap"}
      />
      {page.sections.map((section) => (
        <section key={section.title} className="page-band py-20 md:py-28">
          <div className="container">
            <SectionHeading
              title={section.title}
              description={section.description}
            />
            <CardGrid items={section.items ?? []} className="mt-10" />
          </div>
        </section>
      ))}
      {page.faqs ? <Faq faqs={page.faqs} /> : null}
    </>
  );
}

export function SimpleMarketingPage({ page }: SimpleMarketingPageProps) {
  if (page.slug === "enterprise") {
    return <EnterprisePage />;
  }

  if (page.slug === "careers") {
    return <CareersPage page={page} />;
  }

  if (page.slug === "support") {
    return <SupportPage page={page} />;
  }

  if (page.slug === "status") {
    return <StatusPage page={page} />;
  }

  return <DefaultSimplePage page={page} />;
}
