"use client"

import Link from "next/link"
import { api } from "@/trpc/react"
import { useSession } from "next-auth/react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LandingPage } from "@/components/landing-page"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Spinner } from "@/components/utils"

export default function Home() {
  const session = useSession()
  if (session.status === "unauthenticated") {
    return <LandingPage />
  }
  return (
    <main>
      <div className="flex w-full justify-between">
        <PageHeader>
          <PageHeaderHeading size={"sm"} as={"h6"} className="font-semibold">
            Explore Snippets
          </PageHeaderHeading>
        </PageHeader>
        <Link href="/new-snippet">
          <Button>Create</Button>
        </Link>
      </div>
      <AllSnippets />
    </main>
  )
}

const AllSnippets = () => {
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
          <CardHeader>
            <CardTitle>{snippet.title}</CardTitle>
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
                @{snippet.authorName}
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
