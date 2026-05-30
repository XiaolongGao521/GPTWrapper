import type { MarketingPage } from "@/content/types";

type LegalPageProps = {
  page: MarketingPage;
};

export function LegalPage({ page }: LegalPageProps) {
  const isPrivacy = page.slug.endsWith("privacy");

  return (
    <section className="min-h-screen bg-background pb-24 pt-24 text-foreground">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-foreground">{page.title}</h1>
          <p className="mt-10 text-xs text-muted-foreground">
            Last updated {isPrivacy ? "May 12, 2026" : "January 10, 2026"}
          </p>
          <div className="legal-copy mt-10">
            {isPrivacy ? (
              <>
                <h2>1. Introduction</h2>
                <p>
                  GPTWrapper provides a compact prompt-wrapping surface for
                  users who want their input, output, and product posture to
                  remain easy to understand.
                </p>
                <h3>2. Information GPTWrapper receives from you</h3>
                <p>
                  We receive the prompts and context you choose to enter into
                  the wrapper surface, along with basic operational information
                  needed to render the current experience.
                </p>
                <h3>3. How information is used</h3>
                <p>
                  Prompt content is used to produce the visible wrapped result,
                  improve product quality, maintain availability, and prevent
                  abuse of the service.
                </p>
                <h3>4. AI features and content processing</h3>
                <p>
                  The product may process your prompt through AI-powered
                  features to generate structured output. You are responsible
                  for reviewing any generated text before using it externally.
                </p>
                <h3>5. Contact us</h3>
                <p>
                  For privacy questions, contact the team through the support
                  surface and include enough context for a confident response.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold uppercase text-foreground">
                  Please read these terms carefully. They include important
                  information regarding your legal rights, remedies, and
                  obligations.
                </p>
                <h2>Overview</h2>
                <p>
                  These terms govern your use of GPTWrapper, including the
                  prompt composer, wrapped output, marketing pages, and support
                  surfaces.
                </p>
                <h3>Use of output</h3>
                <p>
                  Wrapped responses should be reviewed before they become docs,
                  decks, policies, sales language, or executive updates.
                </p>
                <h3>Availability</h3>
                <p>
                  GPTWrapper aims to keep the prompt surface available without
                  promising unnecessary ceremony around a deliberately small
                  product.
                </p>
                <h3>Changes</h3>
                <p>
                  GPTWrapper may revise the wrapper, product language, button
                  labels, or support materials as the roadmap demands.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
