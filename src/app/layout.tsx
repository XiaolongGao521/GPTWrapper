import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { SiteShell } from "@/components/layout/SiteShell";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GPTWrapper",
    template: "%s | GPTWrapper",
  },
  description:
    "The minimal AI wrapper for teams that need a polished prompt surface and confident product language.",
};

const themeBootScript = `
(() => {
  const storageKey = "gptwrapper-theme-cycle-v1";
  const knownModes = new Set(["sunrise", "light", "sunset", "dark", "solar-eclipse", "lunar-eclipse"]);
  let mode = "dark";

  try {
    const rawState = window.localStorage.getItem(storageKey);
    const parsedState = rawState ? JSON.parse(rawState) : null;
    if (parsedState && knownModes.has(parsedState.mode)) {
      mode = parsedState.mode;
    }
  } catch {
    mode = "dark";
  }

  const isLightScheme = mode === "sunrise" || mode === "light";
  const root = document.documentElement;
  root.dataset.themeMode = mode;
  root.classList.toggle("dark", !isLightScheme);
  root.style.colorScheme = isLightScheme ? "light" : "dark";
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme-mode="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
