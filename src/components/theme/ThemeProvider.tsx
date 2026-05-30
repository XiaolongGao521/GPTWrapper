"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ThemeAtmosphere } from "@/components/theme/ThemeAtmosphere";
import {
  advanceThemeCycle,
  applyThemeMode,
  defaultThemeCycleState,
  getThemeModeLabel,
  readStoredThemeCycleState,
  type ThemeCycleState,
  type ThemeMode,
  writeStoredThemeCycleState,
} from "@/components/theme/theme-cycle";

type ThemeContextValue = {
  mode: ThemeMode;
  label: string;
  advanceTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ThemeCycleState>(defaultThemeCycleState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedState = readStoredThemeCycleState();
    setState(storedState);
    applyThemeMode(storedState.mode);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    applyThemeMode(state.mode);
    writeStoredThemeCycleState(state);
  }, [ready, state]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: state.mode,
      label: getThemeModeLabel(state.mode),
      advanceTheme: () => setState((currentState) => advanceThemeCycle(currentState)),
    }),
    [state.mode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-content">{children}</div>
      <ThemeAtmosphere />
    </ThemeContext.Provider>
  );
}

export function useThemeCycle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeCycle must be used within ThemeProvider");
  }

  return context;
}
