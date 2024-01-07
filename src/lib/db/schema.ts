import mongoose from "mongoose"

import type { SnippetType, UserType } from "./validations"

export const userSchema = new mongoose.Schema<UserType>({}, { strict: false })
export const snippetSchema = new mongoose.Schema<SnippetType>({
  title: String,
  description: String,
  code: String,
  language: String,
  authorId: String,
  authorName: String,
  authorImage: String,
  likes: Number,
  comments: Number,
  peopleLiked: Array,
})

export const User = mongoose.model("users", userSchema)
export const Snippet = mongoose.model("snippets", snippetSchema)
