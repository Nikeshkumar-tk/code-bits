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
        username: ctx.session.user.username
      }
      console.log(userInfo)
      const response = await ctx.db.snippets.create({ ...input, ...userInfo })
      return response
    }),
  getAllSnippets: protectedProcedure.query(async ({ ctx }) => {
    const response = await ctx.db.snippets.find({}).sort({createdAt: -1})
    return response
  }),
})
