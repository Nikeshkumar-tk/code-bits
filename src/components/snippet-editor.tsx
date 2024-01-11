"use client"

import { javascript } from "@codemirror/lang-javascript"
import { zodResolver } from "@hookform/resolvers/zod"
import ReactCodeMirror from "@uiw/react-codemirror"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { snippetSchema } from "@/lib/validations"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const newSnippetSchema = snippetSchema.pick({
  title: true,
  code: true,
  description: true,
})
type NewSnippet = z.infer<typeof newSnippetSchema>

type SnippetEditorProps = {
  onSubmit: (values: NewSnippet) => void
}

export default function SnippetEditor(props: SnippetEditorProps) {
  const formControl = useForm<NewSnippet>({
    resolver: zodResolver(newSnippetSchema),
    defaultValues: {
      code: "// Write your code here",
    },
  })
  return (
    <form onSubmit={formControl.handleSubmit(props.onSubmit)}>
      <div className="flex flex-col space-y-3">
        <Input
          {...formControl.register("title")}
          placeholder="Enter the title"
        />
        <ReactCodeMirror
          className="h-full rounded-full"
          value={formControl.watch("code")}
          height="400px"
          lang="javascript"
          extensions={[javascript()]}
          theme={"dark"}
          onChange={(value) => formControl.setValue("code", value)}
        />
        <Textarea
          {...formControl.register("description")}
          placeholder="Description"
        />
        <Button type="submit" className="self-end">
          {formControl.formState.isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  )
}
