import { z } from "zod"

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
})

export const snippetSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string(),
  language: z.string(),
  authorId: z.string(),
  authorName: z.string(),
  authorImage: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  likes: z.number(),
  comments: z.number(),
  peopleLiked: z.array(z.string()),
})
export type SnippetType = z.infer<typeof snippetSchema>
export type UserType = z.infer<typeof userSchema>
