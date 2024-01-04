"use client"

import type { User } from "next-auth"
import { signIn } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
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
        {/* <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard/stores">
                            <DashboardIcon
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                            />
                            Dashboard
                            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard/billing">
                            <Icons.dollarSign
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                            />
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard/account">
                            <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/signout">
                        <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
