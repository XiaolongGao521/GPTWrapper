import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/marketing/Hero";

const systems = [
  ["Boardroom", "Executive Memo System"],
  ["Launchpad", "Campaign Voice System"],
  ["OpsDesk", "Internal Update System"],
  ["Roadmap", "Product Decision System"],
  ["Procure", "Enterprise Approval System"],
];

function ShowcaseCards() {
  return (
    <section className="relative bg-background pb-20 pt-4">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
          Your team&apos;s wrapper system, now in GPTWrapper
        </h2>
        <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-5">
          {systems.map(([name, label], index) => (
            <article
              key={name}
              className="group min-h-[196px] overflow-hidden rounded-lg border border-border bg-card p-3 shadow-[0_18px_60px_rgb(0_0_0_/_0.16)]"
            >
              <div className="relative h-28 overflow-hidden rounded-md bg-secondary">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, rgba(21,140,255,.75), transparent 58%), radial-gradient(circle at 74% 32%, rgba(255,255,255,.35), transparent 16%), #151519"
                        : "linear-gradient(135deg, rgba(255,255,255,.18), transparent 40%), radial-gradient(circle at 32% 76%, rgba(21,140,255,.5), transparent 28%), #17171b",
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 grid gap-1">
                  <span className="h-2 w-12 rounded-full bg-white/70" />
                  <span className="h-2 w-20 rounded-full bg-white/25" />
                </div>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{name}</h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <span className="size-2 rounded-full bg-zinc-500" />
          <span className="size-2 rounded-full bg-[#158cff]" />
          <span className="size-2 rounded-full bg-zinc-700" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Use your team&apos;s context and brand language to wrap the prompt
            box for production-facing work.
          </p>
          <a
            href="#start"
            className="mt-5 inline-flex h-9 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Import your wrapper system <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AgentPanels() {
  return (
    <section className="page-band py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase text-muted-foreground">
            The professional prompt wrapper trusted by teams with calendars
          </p>
          <h2 className="mt-7 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Empowering product builders with the most ceremonial prompt box
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            GPTWrapper does the framing for you, so you can focus on the idea
            instead of opening another strategy template.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <article className="bolt-panel p-8">
            <h3 className="text-xl font-semibold text-foreground">The best wrapper, every time</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              GPTWrapper routes every request through the same dignified surface,
              balancing brevity, confidence, and plausible governance language.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-secondary p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>GPTWrapper Agent</span>
                <span>All plans</span>
              </div>
              <div className="mt-4 grid gap-3">
                {["Standard", "Executive", "Procurement"].map((mode, index) => (
                  <div key={mode} className="flex items-center justify-between rounded-md bg-card px-3 py-2 text-sm">
                    <span className="text-foreground">{mode}</span>
                    <span className={index === 1 ? "text-primary" : "text-muted-foreground"}>
                      {index === 1 ? "Recommended" : "Available"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="bolt-panel overflow-hidden p-8">
              <p className="text-6xl font-bold text-foreground">98%</p>
              <p className="mt-2 text-lg font-semibold text-foreground">more confidence</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Outputs arrive with enough structure to look reviewed.
              </p>
            </article>
            <article className="bolt-panel overflow-hidden p-8">
              <p className="text-6xl font-bold text-foreground">100x</p>
              <p className="mt-2 text-lg font-semibold text-foreground">larger roadmap energy</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The product stays tiny while the positioning scales beautifully.
              </p>
            </article>
            <article className="bolt-panel col-span-full overflow-hidden p-8">
              <h3 className="text-xl font-semibold text-foreground">Build with your wrapper system</h3>
              <p className="mt-3 text-sm text-muted-foreground">Stop starting from scratch. Start from posture.</p>
              <div className="mt-8 grid grid-cols-5 gap-4">
                {["#158cff", "#1f2937", "#e4edf5", "#123a62", "#050608"].map((color) => (
                  <span key={color} className="h-20 rounded-md border border-border" style={{ backgroundColor: color }} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero
        title="What will you wrap today?"
        subtitle="Create polished strategic outputs by chatting with the model you were already going to use."
        ctaLabel="Let's wrap"
        showComposer
      />
      <ShowcaseCards />
      <AgentPanels />
    </>
  );
}
