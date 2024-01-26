import Link from "next/link"
import { getServerAuthSession } from "@/server/auth"

import { Button } from "@/components/ui/button"
import { AllSnippets } from "@/components/all-snippets"
import { LandingPage } from "@/components/landing-page"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"

export default async function Home() {
  const session = await getServerAuthSession()
  if (!session) {
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
