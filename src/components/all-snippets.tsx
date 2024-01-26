"use client"

import { api } from "@/trpc/react"
import { Spinner } from "./utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Button } from "./ui/button"
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu"

export const AllSnippets = () => {
    const getAllSnippetsQuery = api.snippets.getAllSnippets.useQuery()

    return (
        <div className="mt-4 grid gap-2 md:grid-cols-3">
            {getAllSnippetsQuery.isLoading && (
                <div className="flex max-h-screen w-screen items-center justify-center">
                    <Spinner className="animate-spin" />
                </div>
            )}
            {getAllSnippetsQuery.data?.map((snippet) => (
                <Card className="hover:bg-muted-foreground/10">
                    <CardHeader className="flex flex-row justify-between items-center">
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