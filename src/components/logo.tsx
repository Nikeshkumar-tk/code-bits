import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export const AppLogo = () => {
  return (
    <div className="flex items-center">
      <Icons.logo />
      <h1 className="font-semibold">{siteConfig.name}</h1>
    </div>
  )
}
