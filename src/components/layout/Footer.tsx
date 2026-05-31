import Link from "next/link";

import { BrandMark } from "@/components/layout/BrandMark";
import { footerGroups } from "@/content/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.15fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <BrandMark />
              <span className="text-[24px] font-black italic leading-none text-foreground">
                gpt<span className="text-muted-foreground">.wrapper</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              The minimal wrapper over ChatGPT for teams that expect more from
              their starting point.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}`}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 GPTWrapper, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/status" className="transition-colors hover:text-foreground">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
