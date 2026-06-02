"use client";

import { Keyboard, MousePointer2, TextCursorInput } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const REQUIRED_PROMPT = "I love AI";

type StepShellProps = {
  active: boolean;
  complete: boolean;
  children: ReactNode;
  icon: ReactNode;
  label: string;
};

function StepShell({ active, complete, children, icon, label }: StepShellProps) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border bg-background/70 p-4 transition-colors",
        active ? "border-primary/50" : "opacity-65",
      )}
      aria-label={label}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground",
            complete && "bg-primary text-primary-foreground",
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
        <div>
          <p className="text-xs font-medium uppercase text-muted-foreground">
            {complete ? "Verified" : active ? "Current step" : "Waiting"}
          </p>
          <h3 className="text-base font-semibold text-foreground">{label}</h3>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function DocumentationTutorial() {
  const keyboardInputRef = useRef<HTMLInputElement>(null);
  const [mouseWorks, setMouseWorks] = useState(false);
  const [keyboardWorks, setKeyboardWorks] = useState(false);
  const [keyboardSignal, setKeyboardSignal] = useState("");
  const [promptFocused, setPromptFocused] = useState(false);
  const [promptValue, setPromptValue] = useState("");

  const promptComplete = promptValue === REQUIRED_PROMPT;
  const promptWrong =
    promptFocused &&
    promptValue.length > 0 &&
    !REQUIRED_PROMPT.startsWith(promptValue);

  function handleMouseTest() {
    setMouseWorks(true);
    window.setTimeout(() => keyboardInputRef.current?.focus(), 0);
  }

  function handleKeyboardTest(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab") {
      return;
    }

    event.preventDefault();
    setKeyboardWorks(true);
    setKeyboardSignal(event.key === " " ? "Space" : event.key);
  }

  return (
    <div className="mx-auto mt-10 max-w-[704px] rounded-lg border border-border bg-card p-5 shadow-menu md:p-6">
      <div className="max-w-2xl">
        <p className="text-[13px] font-bold uppercase text-muted-foreground">
          Interactive documentation
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">
          Prompt box onboarding
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          GPTWrapper will now confirm that your available peripherals can
          participate in the ceremony.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <StepShell
          active={!mouseWorks}
          complete={mouseWorks}
          icon={<MousePointer2 className="size-4" />}
          label="Test the mouse"
        >
          <p className="text-sm leading-6 text-muted-foreground">
            Press the button with the mouse. This establishes pointer readiness
            at an enterprise-adjacent confidence level.
          </p>
          <Button
            className="mt-4"
            onPointerUp={handleMouseTest}
            type="button"
            variant={mouseWorks ? "secondary" : "default"}
          >
            {mouseWorks ? "Mouse works" : "Click to validate mouse"}
          </Button>
        </StepShell>

        <StepShell
          active={mouseWorks && !keyboardWorks}
          complete={keyboardWorks}
          icon={<Keyboard className="size-4" />}
          label="Test the keyboard"
        >
          <label
            className="text-sm leading-6 text-muted-foreground"
            htmlFor="documentation-keyboard-test"
          >
            Press any non-tab key in this field so the documentation can observe
            a letter-adjacent event.
          </label>
          <Input
            ref={keyboardInputRef}
            className="mt-4"
            disabled={!mouseWorks}
            id="documentation-keyboard-test"
            onKeyDown={handleKeyboardTest}
            placeholder={
              mouseWorks ? "Press any key" : "Mouse validation required first"
            }
            readOnly
            value={
              keyboardWorks
                ? `Keyboard event received: ${keyboardSignal}`
                : ""
            }
          />
        </StepShell>

        <StepShell
          active={mouseWorks && keyboardWorks && !promptComplete}
          complete={promptComplete}
          icon={<TextCursorInput className="size-4" />}
          label="Click the prompt box"
        >
          <label
            className="text-sm leading-6 text-muted-foreground"
            htmlFor="documentation-prompt-box"
          >
            Click in the prompt box and type exactly{" "}
            <span className="font-medium text-foreground">{REQUIRED_PROMPT}</span>.
          </label>
          <Textarea
            className="mt-4 min-h-28"
            disabled={!keyboardWorks}
            id="documentation-prompt-box"
            onChange={(event) => setPromptValue(event.target.value)}
            onFocus={() => setPromptFocused(true)}
            placeholder={
              keyboardWorks
                ? `Type exactly: ${REQUIRED_PROMPT}`
                : "Keyboard validation required first"
            }
            value={promptValue}
          />
          <p
            className={cn(
              "mt-3 min-h-5 text-sm font-medium",
              promptWrong
                ? "text-destructive"
                : promptComplete
                  ? "text-primary"
                  : "text-muted-foreground",
            )}
            aria-live="polite"
          >
            {promptWrong
              ? "nope, that's not it"
              : promptComplete
                ? "Correct. You have typed into a prompt box."
                : promptFocused
                  ? "Awaiting the specified sentence."
                  : "Click inside the prompt box when the keyboard has been certified."}
          </p>
        </StepShell>
      </div>
    </div>
  );
}
