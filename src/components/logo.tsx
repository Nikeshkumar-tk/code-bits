import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export const AppLogo = () => {
  return (
    <div className="flex min-h-10 items-center">
      <Icons.logo />
      <h1 className="font-semibold">{siteConfig.name}</h1>
    </div>
  )
}
