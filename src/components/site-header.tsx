import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="px-20 py-2">
        <MainNav />
      </div>
    </header>
  )
}
