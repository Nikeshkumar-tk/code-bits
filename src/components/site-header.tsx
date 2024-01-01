import { getServerAuthSession } from "@/server/auth"
import { SignInBtn, UserInfo } from "./auth"
import { MainNav } from "./main-nav"
import { Socials } from "./socials"

export async function SiteHeader() {
  const session = await getServerAuthSession()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="px-20 py-2 flex w-full justify-between">
        <MainNav />
        <div className="flex items-center gap-5">
          <Socials />
          {session ? <UserInfo userInfo={session?.user}/> :   <SignInBtn />}
        </div>
      </div>
    </header>
  )
}
