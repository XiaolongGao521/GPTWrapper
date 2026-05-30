import { ArrowRight, BarChart3, Check, Database, KeyRound, Layers3, LockKeyhole, Play, Sparkles } from "lucide-react";

import { BottomPromptCTA } from "@/components/layout/BottomPromptCTA";
import { Hero } from "@/components/marketing/Hero";
import { LogoStrip } from "@/components/marketing/LogoStrip";

const systems = [
  ["Boardroom", "Executive Memo System"],
  ["Launchpad", "Campaign Voice System"],
  ["OpsDesk", "Internal Update System"],
  ["Roadmap", "Product Decision System"],
  ["Procure", "Enterprise Approval System"],
];

const roles = [
  ["Product managers", "Go from scattered notes to a stakeholder-ready direction before the calendar hold ends."],
  ["Founders", "Turn a vague market thought into a memo, pitch, or strategic update with enough structure to circulate."],
  ["Marketers", "Create campaign language that sounds aligned without opening six separate planning docs."],
  ["Agencies", "Deliver polished first drafts faster while keeping the wrapper surface calmly on brand."],
  ["Students & builders", "Make the assignment, side project, or portfolio note sound like it had a product team."],
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

function ScaleBand() {
  const cards = [
    ["Unlimited wrapper contexts", Database],
    ["Enterprise-grade phrasing", LockKeyhole],
    ["User intent management", KeyRound],
    ["Reviewable output posture", Check],
    ["Publishing-grade handoff", Layers3],
  ];

  return (
    <section className="page-band py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Everything you need to scale. <span className="text-muted-foreground">Built in.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Stop stitching together positioning docs. GPTWrapper gives you the
            workflow surface, tone controls, and result framing inside one box.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map(([title, Icon], index) => (
            <article
              key={title as string}
              className={index > 2 ? "bolt-card p-6 md:col-span-1" : "bolt-card min-h-56 overflow-hidden p-6"}
            >
              <h3 className="text-lg font-semibold text-foreground">{title as string}</h3>
              <div className="mt-8 flex h-28 items-center justify-center rounded-md bg-secondary">
                <Icon className="size-14 text-primary" />
              </div>
            </article>
          ))}
          <article className="bolt-card p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">Hosting with analytics and custom domains</h3>
            <div className="mt-6 h-32 rounded-md bg-[linear-gradient(135deg,#08213a,#158cff_58%,#dbeafe)] p-5 text-right text-2xl font-semibold italic text-white">
              Publish
            </div>
          </article>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
          GPTWrapper gives you everything you need inside one familiar interface.
          No extra accounts, no steep learning curve.
        </p>
      </div>
    </section>
  );
}

function RoleBand() {
  return (
    <section className="page-band py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">Whatever your role</p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
            GPTWrapper gives you superpowers
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            From idea to usable output, GPTWrapper adapts to the way you work
            while keeping every vision neatly wrapped.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {roles.map(([title, description]) => (
            <article key={title} className="bolt-card p-5">
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          <div className="bolt-panel p-5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Version history</span>
              <BarChart3 className="size-4" />
            </div>
            <div className="mt-5 grid gap-3">
              {["Launched positioning", "Wrapped stakeholder note", "Polished final answer"].map((item) => (
                <div key={item} className="rounded-md bg-secondary px-3 py-2 text-sm text-foreground">{item}</div>
              ))}
            </div>
          </div>
          <div className="bolt-panel p-5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Publish your project</span>
              <Sparkles className="size-4" />
            </div>
            <div className="mt-5 rounded-md bg-secondary p-4 text-sm text-foreground">
              Up to date. Share it with stakeholders and coworkers.
            </div>
          </div>
          <div className="bolt-panel p-5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Unique visitors</span>
              <Play className="size-4" />
            </div>
            <div className="mt-5 h-28 rounded-md bg-[linear-gradient(180deg,rgba(21,140,255,.45),rgba(21,140,255,.05))]" />
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
      <LogoStrip />
      <AgentPanels />
      <ScaleBand />
      <RoleBand />
      <BottomPromptCTA
        id="final-prompt"
        title="Ready to wrap something amazing?"
        description="Try it out and start building posture for free."
        ctaLabel="Let's wrap"
      />
    </>
  );
}
