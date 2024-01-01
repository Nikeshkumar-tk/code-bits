"use client"

import type { User } from "next-auth"
import { signIn } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export { SessionProvider } from "next-auth/react"

export const SignInBtn = () => {
  return (
    <Button size={"sm"} onClick={() => signIn()}>
      Sign In
    </Button>
  )
}

export const UserInfo = ({ userInfo }: { userInfo: User | undefined }) => {
  const initials = userInfo?.name?.split("")[0]?.toUpperCase()
  return (
    <Avatar>
      <AvatarImage src={userInfo?.image} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
