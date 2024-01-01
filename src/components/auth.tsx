"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import type { User } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
export { SessionProvider } from "next-auth/react"

export const SignInBtn = () => {
    return (
        <Button size={'sm'} onClick={() => signIn()}>
            Sign In
        </Button>
    )
}


export const UserInfo = ({
    userInfo
}: { userInfo: User | undefined }) => {
    const initials = userInfo?.name?.split("")[0]?.toUpperCase()
    return (
        <Avatar>
            <AvatarImage src={userInfo?.image} />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}