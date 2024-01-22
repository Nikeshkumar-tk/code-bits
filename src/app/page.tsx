"use client"

import { api } from "@/trpc/react"
import Link from "next/link"

import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/utils"
import { useSession } from "next-auth/react"
import { LandingPage } from "@/components/landing-page"

export default function Home() {
  const session = useSession()
  if(session.status === "unauthenticated"){
    return (
      <LandingPage />
    )
  }
  return (
    <main>
      <div className="flex justify-between w-full">
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
        <div className="w-screen max-h-screen flex justify-center items-center">
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
          <CardFooter className="mx-0 px-5 justify-between items-center">
            <div className="flex item-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={snippet.authorImage}
                  alt={snippet?.authorName ?? ""}
                />
              </Avatar>
              <span className="text-sm text-muted-foreground mt-1 hover:underline cursor-pointer">@{snippet.authorName}</span>
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
