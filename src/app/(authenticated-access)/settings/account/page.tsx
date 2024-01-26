import { cache } from "react"
import { api } from "@/trpc/server"

import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/components/forms/account/account-form"

export default async function SettingsAccountPage() {
  const userInfo = await cache(api.user.me.query)()
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm userInfo={userInfo} />
    </div>
  )
}
