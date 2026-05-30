"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { usePathname } from "next/navigation";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const hideFooter = pathname === "/community" || pathname === "/support" || pathname === "/status";

  return (
    <>
      <Header />
      <main>{children}</main>
      {hideFooter ? null : <Footer />}
    </>
  );
}
