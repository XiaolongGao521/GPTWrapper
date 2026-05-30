import type { FAQ } from "@/content/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/marketing/SectionHeading";

type FaqProps = {
  faqs: FAQ[];
};

export function Faq({ faqs }: FaqProps) {
  return (
    <section className="page-band py-20 md:py-28">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Questions teams ask before the first wrapper lands"
          description="Short answers for a product that keeps its surface area very deliberate."
        />
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-lg border border-border bg-card px-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
