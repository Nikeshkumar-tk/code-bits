/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { userSchema, type UserType } from "@/lib/validations"

import { createTRPCRouter, protectedProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const response = (await ctx.db.users.findOne({
      email: ctx.session.user.email,
    })) as UserType
    return response
  }),
  update: protectedProcedure
    .input(userSchema.partial())
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.db.users.updateOne(
        {
          email: ctx.session.user.email,
        },
        {
          ...input,
        }
      )
      return response
    }),
})
