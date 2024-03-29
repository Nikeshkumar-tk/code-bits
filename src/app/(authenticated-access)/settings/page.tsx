import { cache } from "react"
import { api } from "@/trpc/server"

import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/components/forms/profile-form"

export default async function SettingsProfilePage() {
  const userInfo = await cache(api.user.me.query)()
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm userInfo={userInfo} />
    </div>
  )
}
