import { z } from "zod"

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
})
export type UserType = z.infer<typeof userSchema>
