import { getServerAuthSession } from "@/server/auth"

import { SignInBtn, UserInfo } from "./auth"
import { AppLogo } from "./logo"
import { NavItems } from "./main-nav"
import { ModeToggle } from "./mode-toggle"
import { Socials } from "./socials"

export async function SiteHeader() {
  const session = await getServerAuthSession()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex w-full justify-between px-20 py-2">
        <AppLogo />
        <NavItems />
        <div className="flex items-center gap-5">
          <ModeToggle />
          <Socials />
          {session ? <UserInfo userInfo={session?.user} /> : <SignInBtn />}
        </div>
      </div>
    </header>
  )
}
