"use client"

import { CopyBlock, dracula } from "react-code-blocks"

export const SnippetViewer = ({ code }: { code: string | undefined }) => {
  return (
    <CopyBlock
      text={code!}
      language={"javascript"}
      showLineNumbers={true}
      theme={dracula}
      codeBlockStyle={{
        fontFamily: "cursive",
      }}
    />
  )
}
