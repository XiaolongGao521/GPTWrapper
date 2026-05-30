import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PromptComposer } from "@/components/marketing/PromptComposer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  showComposer?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function Hero({
  title,
  subtitle,
  ctaLabel,
  showComposer = false,
  align = "center",
  className,
}: HeroProps) {
  const centered = align === "center";
  const words = title.split(" ");
  const highlightIndex = words.findIndex((word) => /wrap/i.test(word));

  return (
    <section className={cn("relative overflow-hidden bolt-shell", className)}>
      {showComposer ? <div className="bolt-horizon" aria-hidden="true" /> : null}
      <div
        className={cn(
          "container relative flex flex-col",
          showComposer ? "min-h-[660px] gap-5 pb-8 pt-36 md:pt-64" : "gap-7 pb-16 pt-28 md:pb-24 md:pt-36",
        )}
      >
        <div
          className={cn(
            "flex max-w-5xl flex-col gap-5",
            centered ? "mx-auto items-center text-center" : "items-start text-left",
          )}
        >
          <h1
            className={cn(
              "max-w-[760px] text-balance font-bold tracking-normal text-foreground",
              showComposer
                ? "text-4xl leading-[1.05] md:text-5xl lg:text-[3rem]"
                : "text-4xl leading-[1.05] md:text-5xl lg:text-[4.2rem]",
            )}
          >
            {highlightIndex >= 0
              ? words.map((word, index) => (
                  <span key={`${word}-${index}`}>
                    {index > 0 ? " " : null}
                    <span
                      className={
                        index === highlightIndex
                          ? "italic text-primary"
                          : undefined
                      }
                    >
                      {word}
                    </span>
                  </span>
                ))
              : title}
          </h1>
          <p
            className={cn(
              showComposer ? "text-pretty max-w-4xl text-base leading-7 text-muted-foreground" : "text-pretty max-w-2xl text-base leading-7 text-muted-foreground",
              showComposer ? "md:text-[19px]" : "md:text-xl md:leading-8",
            )}
          >
            {subtitle}
          </p>
          {!showComposer ? (
            <Button asChild size="lg" className="mt-2 rounded-md bolt-blue-button">
              <Link href="/#start">
                {ctaLabel}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          ) : null}
        </div>

        {showComposer ? (
          <div id="start" className="mx-auto w-full">
            <PromptComposer submitLabel={ctaLabel} />
            <p className="mt-11 text-center text-sm leading-6 text-muted-foreground">
              or import from{" "}
              <span className="ml-2 inline-flex rounded-full border border-border px-4 py-1 text-foreground">
                Prompt doc
              </span>{" "}
              <span className="ml-1 inline-flex rounded-full border border-border px-4 py-1 text-foreground">
                Slack thread
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
