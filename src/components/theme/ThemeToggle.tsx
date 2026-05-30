"use client";

import { Eclipse, Moon, Sun, Sunrise, Sunset } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useThemeCycle } from "@/components/theme/ThemeProvider";
import type { ThemeMode } from "@/components/theme/theme-cycle";
import { cn } from "@/lib/utils";

const iconMap = {
  sunrise: Sunrise,
  light: Sun,
  sunset: Sunset,
  dark: Moon,
  "solar-eclipse": Eclipse,
  "lunar-eclipse": Eclipse,
} satisfies Record<ThemeMode, typeof Sun>;

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, label, advanceTheme } = useThemeCycle();
  const Icon = iconMap[mode];

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn("theme-toggle size-10 shrink-0", className)}
      onClick={advanceTheme}
      aria-label={`Switch theme. Current mode: ${label}.`}
      title={label}
    >
      <Icon className={cn(mode === "lunar-eclipse" && "text-red-300")} />
    </Button>
  );
}
