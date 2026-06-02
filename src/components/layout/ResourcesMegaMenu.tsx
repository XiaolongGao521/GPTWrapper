"use client";

import Link from "next/link";

import { IconBadge } from "@/components/marketing/IconBadge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { resourceNav, socialNav } from "@/content/nav";
import type { NavItem } from "@/content/types";
import { externalLinkProps } from "@/lib/links";

function MenuLink({ item }: { item: NavItem }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="group flex items-center gap-3 rounded-md px-0 py-2 text-left transition-colors hover:text-foreground focus:text-foreground focus:outline-none"
        {...externalLinkProps(item.href)}
      >
        <IconBadge
          icon={item.icon}
          className="size-5 border-0 bg-transparent text-foreground"
          iconClassName="size-4"
        />
        <span className="min-w-0">
          <span className="block text-[15px] font-medium leading-5 text-foreground">
            {item.title}
          </span>
        </span>
      </Link>
    </NavigationMenuLink>
  );
}

export function ResourcesMegaMenu() {
  return (
    <NavigationMenu className="flex-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 px-3 text-[15px] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground data-[state=open]:bg-secondary data-[state=open]:text-foreground">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[min(82vw,704px)] gap-10 bg-card p-8 md:grid-cols-[0.9fr_1.4fr]">
              <div>
                <h2 className="text-[13px] font-bold uppercase leading-none text-muted-foreground">
                  Resources
                </h2>
                <div className="mt-5 grid gap-4">
                  {resourceNav.map((item) => (
                    <MenuLink key={item.href} item={item} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-[13px] font-bold uppercase leading-none text-muted-foreground">
                  Social
                </h2>
                <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {socialNav.map((item) => (
                    <MenuLink key={item.href} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
