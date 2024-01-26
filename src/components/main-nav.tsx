"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type Session } from "next-auth"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export const NavItems = ({ session }: { session: Session | null }) => {
  const pathname = usePathname()
  return (
    <div className="hidden items-center space-x-10 sm:flex">
      {session && (
        <>
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
        </>
      )}
    </div>
  )
}
