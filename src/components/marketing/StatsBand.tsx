import type { StatItem } from "@/content/types";
import { cn } from "@/lib/utils";

type StatsBandProps = {
  stats: StatItem[];
  className?: string;
};

export function StatsBand({ stats, className }: StatsBandProps) {
  return (
    <section className={cn("page-band py-8 md:py-10", className)}>
      <div className="container">
        <h2 className="text-center text-xl font-extrabold text-foreground">
          Small surface. Big claims.
        </h2>
        <div className="mt-6 grid gap-y-7 md:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "px-6 text-center",
                index > 0 && "md:border-l md:border-border",
              )}
            >
              <div className="font-mono text-3xl font-extrabold leading-none text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-4 text-sm font-semibold text-foreground">{stat.label}</div>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
