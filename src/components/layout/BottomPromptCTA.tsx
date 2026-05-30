import { PromptComposer } from "@/components/marketing/PromptComposer";

type BottomPromptCTAProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  id?: string;
};

export function BottomPromptCTA({
  title = "Ready to wrap your next move?",
  description = "Start with a prompt. We'll return something strategic, structured, and ready to use.",
  ctaLabel = "Let's wrap",
  id = "start",
}: BottomPromptCTAProps) {
  return (
    <section id={id} className="page-band relative overflow-hidden py-24">
      <div className="bolt-horizon !top-[17rem]" aria-hidden="true" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
          <div className="mt-8">
          <PromptComposer compact submitLabel={ctaLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
