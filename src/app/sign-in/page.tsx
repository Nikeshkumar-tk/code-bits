"use client"

import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { AppLogo } from "@/components/logo"

export default function SignInPage() {
  return (
    <div className="absolute left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-background px-10">
      <Card className="w-[50vh] py-3 shadow-lg">
        <CardHeader>
          <div className="flex w-full justify-center">
            <AppLogo />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Button onClick={() => signIn("github")}>
              <Icons.github className="mr-2 h-4 w-4" />
              Sign In with GitHub
            </Button>
            <Button onClick={() => signIn("google")}>
              <Icons.google className="mr-2 h-4 w-4" />
              Sign In with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
