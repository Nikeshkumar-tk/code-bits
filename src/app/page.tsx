"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
/* eslint-disable @typescript-eslint/no-unsafe-call */

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
    </main>
  )
}
