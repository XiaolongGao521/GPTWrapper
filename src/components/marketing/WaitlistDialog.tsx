"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const WAITLIST_STORAGE_KEY = "gptwrapper-waitlist-v1";
const SEEDED_WAITLIST_POSITION = 347;
const VISIBLE_QUEUE_LIMIT = 10;

type WaitlistEntry = {
  position: number;
  joinedAt: string;
};

type WaitlistDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type JoinWaitlistButtonProps = Omit<ButtonProps, "asChild" | "children"> & {
  children?: ReactNode;
};

function createWaitlistEntry(): WaitlistEntry {
  return {
    position: SEEDED_WAITLIST_POSITION,
    joinedAt: new Date().toISOString(),
  };
}

function isWaitlistEntry(value: unknown): value is WaitlistEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<WaitlistEntry>;
  return (
    typeof candidate.position === "number" &&
    Number.isInteger(candidate.position) &&
    candidate.position > 0 &&
    typeof candidate.joinedAt === "string"
  );
}

function readOrCreateWaitlistEntry(): WaitlistEntry {
  try {
    const stored = window.localStorage.getItem(WAITLIST_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : null;

    if (isWaitlistEntry(parsed)) {
      return parsed;
    }
  } catch {
    // Fall through to a fresh local entry if storage is unavailable or corrupt.
  }

  const entry = createWaitlistEntry();

  try {
    window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(entry));
  } catch {
    // The modal still works without persistence.
  }

  return entry;
}

function QueuePerson({
  current,
  index,
  reduceMotion,
}: {
  current: boolean;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.span
      aria-label={current ? "Your place in line" : "Person waiting"}
      className={cn(
        "relative flex h-20 w-7 shrink-0 flex-col items-center justify-end sm:h-24 sm:w-9",
        current && "drop-shadow-[0_0_18px_rgb(239_68_68_/_0.45)]",
      )}
      initial={
        current && !reduceMotion
          ? { opacity: 0, x: -22, y: -18, scale: 0.72 }
          : false
      }
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              delay: current ? 0.16 : index * 0.015,
              duration: 0.28,
              type: "spring",
              bounce: 0.35,
            }
      }
    >
      <span
        className={cn(
          "h-4 w-4 rounded-full border shadow-sm sm:h-5 sm:w-5",
          current
            ? "border-red-200 bg-red-500"
            : "border-zinc-300 bg-white shadow-black/15",
        )}
      />
      <span
        className={cn(
          "mt-1 h-8 w-5 rounded-full border shadow-sm sm:h-10 sm:w-6",
          current
            ? "border-red-200 bg-red-500"
            : "border-zinc-300 bg-white shadow-black/15",
        )}
      />
      <span className="mt-1 flex gap-1">
        <span
          className={cn(
            "h-3 w-1.5 rounded-full border sm:h-4 sm:w-2",
            current ? "border-red-200 bg-red-500" : "border-zinc-300 bg-white",
          )}
        />
        <span
          className={cn(
            "h-3 w-1.5 rounded-full border sm:h-4 sm:w-2",
            current ? "border-red-200 bg-red-500" : "border-zinc-300 bg-white",
          )}
        />
      </span>
    </motion.span>
  );
}

function WaitlistQueue({ entry }: { entry: WaitlistEntry }) {
  const reduceMotion = useReducedMotion() ?? false;
  const visibleCount = Math.min(entry.position, VISIBLE_QUEUE_LIMIT);
  const moreWaiting = Math.max(entry.position - VISIBLE_QUEUE_LIMIT, 0);
  const people = useMemo(
    () => Array.from({ length: visibleCount }, (_, index) => index),
    [visibleCount],
  );

  return (
    <div className="rounded-lg border border-border bg-secondary/55 p-3 sm:p-4">
      <div className="grid gap-3 sm:flex sm:items-end sm:gap-2" aria-label="Waitlist queue">
        {moreWaiting > 0 ? (
          <div className="flex h-14 w-full shrink-0 items-center justify-center rounded-md border border-border bg-card px-2 text-center text-[11px] font-medium leading-4 text-muted-foreground sm:h-24 sm:w-28 sm:text-xs">
            {moreWaiting.toLocaleString()} more waiting
          </div>
        ) : null}
        <div className="grid flex-1 grid-cols-5 items-end justify-items-center gap-1.5 sm:grid-cols-10 sm:gap-2">
          {people.map((index) => (
            <QueuePerson
              key={index}
              current={index === visibleCount - 1}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [entry, setEntry] = useState<WaitlistEntry | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setEntry(readOrCreateWaitlistEntry());
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You just joined the waitlist</DialogTitle>
          <DialogDescription>
            Your wrapper access is now moving through a carefully arranged line
            of people waiting for the same prompt box.
          </DialogDescription>
        </DialogHeader>
        {entry ? (
          <>
            <div className="grid gap-3 rounded-lg border border-border bg-background/35 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Your position
                </p>
                <p className="mt-1 text-3xl font-semibold text-foreground">
                  #{entry.position.toLocaleString()}
                </p>
              </div>
              <div className="rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground">
                Local queue confirmed
              </div>
            </div>
            <WaitlistQueue entry={entry} />
          </>
        ) : (
          <div className="h-36 rounded-lg border border-border bg-secondary/55" />
        )}
      </DialogContent>
    </Dialog>
  );
}

export function JoinWaitlistButton({
  children = "Join Waitlist",
  onClick,
  type = "button",
  ...props
}: JoinWaitlistButtonProps) {
  const [open, setOpen] = useState(false);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    if (!event.defaultPrevented) {
      setOpen(true);
    }
  }

  return (
    <>
      <Button type={type} onClick={handleClick} {...props}>
        {children}
      </Button>
      <WaitlistDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
