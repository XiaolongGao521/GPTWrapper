import Link from "next/link";

import { IconBadge } from "@/components/marketing/IconBadge";
import { communityNav } from "@/content/nav";
import type { MarketingPage } from "@/content/types";

type ResourcesPageProps = {
  page: MarketingPage;
};

export function ResourcesPage({ page }: ResourcesPageProps) {
  const items = page.sections[0]?.items ?? [];

  return (
    <section className="bolt-shell min-h-screen pb-24 pt-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">{page.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{page.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[704px] gap-10 rounded-[0.7rem] border border-border bg-card p-8 shadow-menu md:grid-cols-[0.9fr_1.4fr]">
          <div>
            <h2 className="text-[13px] font-bold uppercase text-muted-foreground">Resources</h2>
            <div className="mt-5 grid gap-4">
              {items.map((item) => (
                <Link key={item.title} href={item.href ?? "/resources"} className="flex items-center gap-3 py-2 text-foreground hover:text-primary">
                  <IconBadge icon={item.icon} className="size-5 border-0 bg-transparent text-foreground" iconClassName="size-4" />
                  <span className="text-[15px] font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[13px] font-bold uppercase text-muted-foreground">Community</h2>
            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {communityNav.map((item) => (
                <Link key={item.title} href={item.href} className="flex items-center gap-3 py-2 text-foreground hover:text-primary">
                  <IconBadge icon={item.icon} className="size-5 border-0 bg-transparent text-foreground" iconClassName="size-4" />
                  <span className="text-[15px] font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-6 text-muted-foreground">
          Most resource paths route back to one operating principle: put context
          in the box, press the button, and give the result a name.
        </p>
      </div>
    </section>
  );
}
