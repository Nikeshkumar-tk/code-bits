"use client"

import Link from "next/link"
import { api } from "@/trpc/react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"

export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
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
      {getAllSnippetsQuery.data?.map((snippet) => (
        <Card>
          <CardHeader>
            <CardTitle>{snippet.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
