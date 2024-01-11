import { snippetSchema } from "@/lib/validations"

import { createTRPCRouter, protectedProcedure } from "../trpc"

export const snippetRouter = createTRPCRouter({
  publishSnippet: protectedProcedure
    .input(
      snippetSchema.pick({
        title: true,
        description: true,
        code: true,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userInfo = {
        authorName: ctx.session.user.name,
        image: ctx.session.user.image,
        authorId: ctx.session.user.id,
        authorImage: ctx.session.user.image,
      }
      const response = await ctx.db.snippets.create({ ...input, ...userInfo })
      return response
    }),
})
