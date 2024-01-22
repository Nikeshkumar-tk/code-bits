"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { type Session } from "next-auth"


export const NavItems = ({
  session
}: {
  session: Session | null
}) => {
  const pathname = usePathname()
  return (
    <div className="flex items-center space-x-10">
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
