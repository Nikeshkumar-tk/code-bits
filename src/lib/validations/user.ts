import { z } from "zod"

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
  username: z.string(),
  bio: z.string().optional(),
  dob: z.date(),
  language: z.string(),
})
export type UserType = z.infer<typeof userSchema>
