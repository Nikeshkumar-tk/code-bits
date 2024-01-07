"use client"

import { useCallback, useState } from "react"
import { javascript } from "@codemirror/lang-javascript"
import CodeMirror from "@uiw/react-codemirror"

/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
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
        <AddNewSnippet />
      </div>
    </main>
  )
}

const AddNewSnippet = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("console.log('hello world!');")

  const onChange = useCallback((val: string) => {
    console.log("val:", val)
    setValue(val)
  }, [])

  if (!open) return <Button onClick={() => setOpen(true)}>Add new</Button>
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Add new code snippet</DialogTitle>
        </DialogHeader>
        <Input placeholder="Enter the title" />
        <CodeMirror
          className="my-0"
          value={value}
          height="200px"
          lang="javascript"
          extensions={[javascript()]}
          theme={"dark"}
          onChange={onChange}
        />
        <DialogFooter>
          <Button type="submit">confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
