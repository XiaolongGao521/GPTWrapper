import { CardGrid } from "@/components/marketing/CardGrid";
import { Faq } from "@/components/marketing/Faq";
import { Hero } from "@/components/marketing/Hero";
import { EnterprisePromptComposer } from "@/components/pages/EnterprisePromptComposer";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Button } from "@/components/ui/button";
import type { MarketingPage } from "@/content/types";
import { cn } from "@/lib/utils";

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
        <EnterprisePromptComposer />
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
          <div
            className={cn(
              "mt-10 grid gap-4",
              roles.length === 1
                ? "mx-auto max-w-xl md:grid-cols-1"
                : "md:grid-cols-3",
            )}
          >
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

function StatusPage() {
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
              Documentation
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
            The better question to ask, &quot;is GPT down right now?&quot;
          </p>
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

  if (page.slug === "status") {
    return <StatusPage />;
  }

  return <DefaultSimplePage page={page} />;
}
