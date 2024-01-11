import { postRouter } from "@/server/api/routers/post"
import { createTRPCRouter } from "@/server/api/trpc"

import { snippetRouter } from "./routers/snippets"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  snippets: snippetRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
