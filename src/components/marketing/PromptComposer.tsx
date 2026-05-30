"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Lightbulb, Plus, RotateCcw, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type PromptComposerProps = {
  className?: string;
  textareaClassName?: string;
  placeholder?: string;
  submitLabel?: string;
  compact?: boolean;
};

type ComposerStatus = "idle" | "loading" | "done";

export function PromptComposer({
  className,
  textareaClassName,
  placeholder = "Let's wrap a customer portal where users can...",
  submitLabel = "Let's wrap",
  compact = false,
}: PromptComposerProps) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<ComposerStatus>("idle");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timeout = window.setTimeout(() => {
      const trimmed = value.trim();
      const subject = trimmed.length > 96 ? `${trimmed.slice(0, 96)}...` : trimmed;
      setResult(
        subject
          ? `Wrapped: "${subject}" now has audience, context, constraints, and a next step.`
          : "Add one clear request and GPTWrapper will shape it into a focused AI workflow.",
      );
      setStatus("done");
    }, 850);

    return () => window.clearTimeout(timeout);
  }, [status, value]);

  const helperText = useMemo(() => {
    if (status === "loading") {
      return "Focused prompt. Wrapping output.";
    }

    if (status === "done") {
      return "Focused prompt. Wrapped output.";
    }

    return "Focused prompt. Wrapped output.";
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setStatus("loading");
  }

  function handleReset() {
    setValue("");
    setResult(null);
    setStatus("idle");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "prompt-composer mx-auto w-full max-w-[628px] overflow-hidden rounded-[1.05rem] border border-border bg-card text-left text-card-foreground shadow-prompt ring-[7px] ring-foreground/5",
        compact && "max-w-[520px] rounded-xl ring-[5px]",
        className,
      )}
    >
      <Textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "min-h-[98px] resize-none border-0 bg-transparent px-6 py-5 text-[15px] leading-6 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0",
          compact && "min-h-[58px] px-4 py-3 text-sm",
          textareaClassName,
        )}
      />
      <div className="flex flex-col gap-3 px-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="size-8 rounded-full border-border bg-transparent p-0 text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Add context"
          >
            <Plus className="size-4" aria-hidden="true" />
          </Button>
          <span className="hidden text-xs text-muted-foreground sm:inline">{helperText}</span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            className="h-8 rounded-md px-3 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Lightbulb className="size-3.5" aria-hidden="true" />
            Plan the wrapper
          </Button>
          {status === "done" ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              onClick={handleReset}
              aria-label="Reset prompt"
            >
              <RotateCcw className="size-4" />
            </Button>
          ) : null}
          <Button
            type="submit"
            disabled={status === "loading"}
            className="h-9 rounded-full bolt-blue-button px-4 text-sm font-semibold shadow-[0_0_24px_rgb(21_140_255_/_0.25)]"
          >
            {status === "loading" ? (
              <Sparkles className="size-4" aria-hidden="true" />
            ) : (
              <Send className="size-4" aria-hidden="true" />
            )}
            {status === "loading" ? "Wrapping" : submitLabel}
            {status === "loading" ? null : <ArrowRight className="size-4" aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {result ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-lg border border-border bg-secondary p-4"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-[#158cff] text-white">
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-foreground">{result}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
