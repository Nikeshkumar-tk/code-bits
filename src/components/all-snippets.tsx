"use client"

import Link from "next/link"
import { api } from "@/trpc/react"
import { MoreVertical } from "lucide-react"

import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Spinner } from "./utils"

export const AllSnippets = () => {
  const getAllSnippetsQuery = api.snippets.getAllSnippets.useQuery()

  return (
    <div className="mt-4 grid h-[70vh] gap-2 md:grid-cols-3">
      {getAllSnippetsQuery.isLoading && (
        <div className="flex max-h-screen w-screen items-center justify-center">
          <Spinner className="animate-spin" />
        </div>
      )}
      {getAllSnippetsQuery.data?.map((snippet) => (
        <Card className="h-52 hover:bg-muted-foreground/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{snippet.title}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Save</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {snippet.description.slice(0, 200)}
            </p>
          </CardContent>
          <CardFooter className="mx-0 items-center justify-between px-5">
            <div className="item-center flex gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={snippet.authorImage}
                  alt={snippet?.authorName ?? ""}
                />
              </Avatar>
              <span className="mt-1 cursor-pointer text-sm text-muted-foreground hover:underline">
                @{snippet.username}
              </span>
            </div>
            <Link href={`snippet/${snippet._id.toString()}`}>
              <Button variant={"link"}>Read more</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
