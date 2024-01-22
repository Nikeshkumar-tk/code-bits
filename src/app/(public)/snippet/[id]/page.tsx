import { db } from "@/lib/db"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { SnippetViewer } from "@/components/snippet-viewer"

export default async function SingleSnippetPostViewPage({
  params,
}: {
  params: { id: string }
}) {
  const snippetData = await db.snippets.findById(params.id)
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>{snippetData?.title}</PageHeaderHeading>
      </PageHeader>
      <div className="mt-6">
        <SnippetViewer code={snippetData?.code} />
      </div>
      <div className="mt-6">
        <p className="text-lg text-muted-foreground">
          {snippetData?.description}
        </p>
      </div>
    </div>
  )
}
