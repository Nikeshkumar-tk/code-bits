import { cn } from "@/lib/utils"

import { Icons } from "./icons"

export const Spinner = ({ className }: { className?: string }) => {
  return <Icons.spinner className={cn(className, "h-10 scroll-smooth")} />
}
