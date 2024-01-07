"use client"

import Link from "next/link"
import { ExitIcon, GearIcon } from "@radix-ui/react-icons"
import type { User } from "next-auth"
import { signIn, signOut } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={userInfo?.image ?? ""}
              alt={userInfo?.name ?? ""}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userInfo?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userInfo?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/stores">
              <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Setting
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="cursor-pointer" onClick={() => signOut()}>
              <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Log out
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
