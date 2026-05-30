export const THEME_STORAGE_KEY = "gptwrapper-theme-cycle-v1";

export const normalThemeModes = ["sunrise", "light", "sunset", "dark"] as const;

export type NormalThemeMode = (typeof normalThemeModes)[number];
export type EclipseKind = "solar" | "lunar";
export type ThemeMode = NormalThemeMode | "solar-eclipse" | "lunar-eclipse";

export type ThemeCycleState = {
  mode: ThemeMode;
  normalIndex: number;
  completedLoops: number;
  pendingEclipse: EclipseKind | null;
  nextEclipse: EclipseKind;
};

export const defaultThemeCycleState: ThemeCycleState = {
  mode: "dark",
  normalIndex: 3,
  completedLoops: 0,
  pendingEclipse: null,
  nextEclipse: "solar",
};

const themeModes = new Set<ThemeMode>([
  "sunrise",
  "light",
  "sunset",
  "dark",
  "solar-eclipse",
  "lunar-eclipse",
]);

function isThemeMode(value: unknown): value is ThemeMode {
  return typeof value === "string" && themeModes.has(value as ThemeMode);
}

function isEclipseKind(value: unknown): value is EclipseKind {
  return value === "solar" || value === "lunar";
}

function getNormalIndex(mode: ThemeMode, fallback: number) {
  const index = normalThemeModes.indexOf(mode as NormalThemeMode);
  return index >= 0 ? index : fallback;
}

export function normalizeThemeCycleState(value: unknown): ThemeCycleState {
  if (!value || typeof value !== "object") {
    return defaultThemeCycleState;
  }

  const candidate = value as Partial<ThemeCycleState>;
  const mode = isThemeMode(candidate.mode)
    ? candidate.mode
    : defaultThemeCycleState.mode;
  const fallbackIndex = mode === "solar-eclipse" || mode === "lunar-eclipse" ? 3 : 0;
  const normalIndex =
    typeof candidate.normalIndex === "number" &&
    Number.isInteger(candidate.normalIndex) &&
    candidate.normalIndex >= 0 &&
    candidate.normalIndex < normalThemeModes.length
      ? candidate.normalIndex
      : getNormalIndex(mode, fallbackIndex);

  return {
    mode,
    normalIndex,
    completedLoops:
      typeof candidate.completedLoops === "number" && candidate.completedLoops >= 0
        ? Math.floor(candidate.completedLoops)
        : defaultThemeCycleState.completedLoops,
    pendingEclipse: isEclipseKind(candidate.pendingEclipse)
      ? candidate.pendingEclipse
      : null,
    nextEclipse: isEclipseKind(candidate.nextEclipse)
      ? candidate.nextEclipse
      : defaultThemeCycleState.nextEclipse,
  };
}

export function readStoredThemeCycleState(): ThemeCycleState {
  if (typeof window === "undefined") {
    return defaultThemeCycleState;
  }

  try {
    const rawState = window.localStorage.getItem(THEME_STORAGE_KEY);
    return rawState
      ? normalizeThemeCycleState(JSON.parse(rawState))
      : defaultThemeCycleState;
  } catch {
    return defaultThemeCycleState;
  }
}

export function writeStoredThemeCycleState(state: ThemeCycleState) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable in private browsing contexts. The UI still works in memory.
  }
}

export function applyThemeMode(mode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const isLightScheme = mode === "sunrise" || mode === "light";

  root.dataset.themeMode = mode;
  root.classList.toggle("dark", !isLightScheme);
  root.style.colorScheme = isLightScheme ? "light" : "dark";
}

export function advanceThemeCycle(state: ThemeCycleState): ThemeCycleState {
  if (state.mode === "solar-eclipse" || state.mode === "lunar-eclipse") {
    return {
      ...state,
      mode: "sunrise",
      normalIndex: 0,
      pendingEclipse: null,
    };
  }

  if (state.pendingEclipse) {
    const eclipse = state.pendingEclipse;

    return {
      ...state,
      mode: `${eclipse}-eclipse`,
      pendingEclipse: null,
      nextEclipse: eclipse === "solar" ? "lunar" : "solar",
    };
  }

  const normalIndex = (state.normalIndex + 1) % normalThemeModes.length;
  const mode = normalThemeModes[normalIndex];
  const completedLoops =
    mode === "dark" ? state.completedLoops + 1 : state.completedLoops;
  const pendingEclipse =
    mode === "dark" && completedLoops > 0 && completedLoops % 10 === 0
      ? state.nextEclipse
      : null;

  return {
    ...state,
    mode,
    normalIndex,
    completedLoops,
    pendingEclipse,
  };
}

export function getThemeModeLabel(mode: ThemeMode) {
  switch (mode) {
    case "sunrise":
      return "Sunrise";
    case "light":
      return "Light";
    case "sunset":
      return "Sunset";
    case "dark":
      return "Dark";
    case "solar-eclipse":
      return "Solar eclipse";
    case "lunar-eclipse":
      return "Lunar eclipse";
  }
}
