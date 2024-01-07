"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { AppLogo } from "./logo"

export function MainNav() {
  return (
    <div className="flex items-center justify-between">
      <AppLogo />
      <NavItems />
    </div>
  )
}

export const NavItems = () => {
  const pathname = usePathname()
  return (
    <div className="flex items-center space-x-10">
      {siteConfig.navItems.map((item) => (
        <Link
          key={item.name}
          href="/careers"
          className={cn(
            "underline-offset-2 transition-colors hover:text-foreground/80 hover:underline",
            pathname?.startsWith(item.link)
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
