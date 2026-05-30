import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContentCard } from "@/content/types";
import { cn } from "@/lib/utils";
import { IconBadge } from "@/components/marketing/IconBadge";

type CardGridProps = {
  items: ContentCard[];
  className?: string;
};

export function CardGrid({ items, className }: CardGridProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => {
        const body = (
          <Card className="h-full overflow-hidden rounded-lg border-border bg-card transition-colors hover:border-primary/60">
            <CardHeader className="gap-4">
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={item.icon} className="border-border bg-secondary text-foreground" />
                {item.meta ? (
                  <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground">
                    {item.meta}
                  </span>
                ) : null}
              </div>
              <CardTitle className="text-xl leading-6 text-foreground">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            {item.href ? (
              <CardContent>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Open <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </CardContent>
            ) : null}
          </Card>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="block">
            {body}
          </Link>
        ) : (
          <div key={item.title}>{body}</div>
        );
      })}
    </div>
  );
}
