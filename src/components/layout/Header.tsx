"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/layout/BrandMark";
import { ResourcesMegaMenu } from "@/components/layout/ResourcesMegaMenu";
import { IconBadge } from "@/components/marketing/IconBadge";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { communityNav, primaryNav, resourceNav } from "@/content/nav";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="GPTWrapper home">
      <BrandMark />
      <span className="text-[18px] font-black italic leading-none tracking-normal text-foreground md:text-[20px]">
        gpt<span className="text-muted-foreground">.wrapper</span>
      </span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      <Link
        href="/community"
        className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Community
      </Link>
      <Link
        href="/enterprise"
        className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Enterprise
      </Link>
      <ResourcesMegaMenu />
      <Link
        href="/careers"
        className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Careers
      </Link>
      <Link
        href="/pricing"
        className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Pricing
      </Link>
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const hiddenShell = pathname === "/community" || pathname === "/support" || pathname === "/status";
  const socialItems = communityNav.filter((item) =>
    ["Discord", "LinkedIn", "Twitter/X", "Reddit"].includes(item.title),
  );

  if (hiddenShell) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-[50px] w-full max-w-[1480px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:px-5">
        <div className="flex justify-start">
          <Brand />
        </div>
        <DesktopNav />
        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 text-muted-foreground md:flex">
            {socialItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-label={item.title}
                className="inline-flex size-5 items-center justify-center transition-colors hover:text-foreground"
              >
                <IconBadge
                  icon={item.icon}
                  className="size-5 border-0 bg-transparent text-current"
                  iconClassName="size-4"
                />
              </Link>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden h-8 rounded-md border-border bg-transparent px-3 text-[13px] font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            <Link href="/#start">Sign in</Link>
          </Button>
          <Button asChild className="hidden h-8 rounded-md bolt-blue-button px-3 text-[13px] font-medium md:inline-flex">
            <Link href="/#start">Get started</Link>
          </Button>
          <ThemeToggle className="hidden md:inline-flex" />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 border-border bg-card text-foreground hover:bg-secondary"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto border-border bg-card text-card-foreground">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Browse GPTWrapper pages and product resources.
                  </SheetDescription>
                  <Brand />
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-8">
                  <div className="grid gap-1">
                    {primaryNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-secondary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase text-muted-foreground">
                      Resources
                    </p>
                    <div className="grid gap-1">
                      {resourceNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          <IconBadge
                            icon={item.icon}
                            className="size-8 border-border bg-secondary"
                          />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase text-muted-foreground">
                      Social
                    </p>
                    <div className="grid gap-1">
                      {communityNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          <IconBadge
                            icon={item.icon}
                            className="size-8 border-border bg-secondary"
                          />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle className="size-10" />
                    <Button asChild variant="outline" className="flex-1 border-border bg-transparent text-foreground hover:bg-secondary">
                      <Link href="/#start">Sign in</Link>
                    </Button>
                    <Button asChild className="flex-1 bolt-blue-button">
                      <Link href="/#start">Get started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
