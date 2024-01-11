import { redirect } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"

import { PageHeader, PageHeaderHeading } from "@/components/page-header"

import CreateNewSnippet from "../create-new"

export default async function CreateNewSnippetPage() {
  const session = await getServerAuthSession()
  if (!session) {
    redirect("/sign-in")
  }
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading size={"sm"} as={"h6"} className="font-semibold">
          Create New Snippet
        </PageHeaderHeading>
      </PageHeader>
      <div className="mt-4">
        <CreateNewSnippet />
      </div>
    </div>
  )
}
