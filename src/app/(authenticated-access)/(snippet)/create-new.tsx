"use client"

import { useRouter } from "next/navigation"
import { api } from "@/trpc/react"
import { toast } from "sonner"

import SnippetEditor from "@/components/snippet-editor"

export default function CreateNewSnippet() {
  const router = useRouter()
  const utils = api.useUtils()
  const createSnippetMutation = api.snippets.publishSnippet.useMutation({
    onSuccess(data) {
      toast.success("Snippet created")
      router.push(`/snippet/${data?._id.toString()}`)
    },
    onSettled() {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      utils.snippets.getAllSnippets.invalidate()
    },
  })

  return (
    <SnippetEditor onSubmit={(data) => createSnippetMutation.mutate(data)} />
  )
}
