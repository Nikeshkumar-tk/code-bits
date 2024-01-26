/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import mongoose from "mongoose"

import type { SnippetType, UserType } from "../validations"

export const userSchema = new mongoose.Schema<UserType>({}, { strict: false })
export const snippetSchema = new mongoose.Schema<SnippetType>(
  {
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
    username: String,
  },
  { timestamps: true }
)

export const User =
  (mongoose.models.users as mongoose.Model<UserType>) ||
  mongoose.model("users", userSchema)
export const Snippet =
  (mongoose.models.snippets as mongoose.Model<SnippetType>) ||
  mongoose.model("snippets", snippetSchema)
