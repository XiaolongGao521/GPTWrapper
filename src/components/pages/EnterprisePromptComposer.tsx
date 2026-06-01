"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { PromptComposer } from "@/components/marketing/PromptComposer";
import { cn } from "@/lib/utils";

export function EnterprisePromptComposer() {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    setExpanded(true);
  }, []);

  return (
    <div className="mt-10 flex min-h-[24rem] flex-1 items-start justify-center">
      <motion.div
        layout
        className={cn(
          "mx-auto w-full",
          expanded
            ? "flex min-h-0 flex-1 self-stretch"
            : "max-w-[628px] flex-none self-start",
        )}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                layout: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
        }
      >
        <PromptComposer
          className={cn(
            expanded &&
              "flex h-full min-h-0 max-w-none flex-1 flex-col overflow-y-auto",
          )}
          textareaClassName={cn(expanded && "min-h-[18rem] flex-1")}
          placeholder="Describe the enterprise wrapper your organization can approve..."
          submitLabel="Wrap for enterprise"
        />
      </motion.div>
    </div>
  );
}
