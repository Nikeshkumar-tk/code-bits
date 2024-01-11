"use client"

import { api } from "@/trpc/react"

import SnippetEditor from "@/components/snippet-editor"

export default function CreateNewSnippet() {
  const createSnippetMutation = api.snippets.publishSnippet.useMutation()
  return (
    <SnippetEditor onSubmit={(data) => createSnippetMutation.mutate(data)} />
  )
}
