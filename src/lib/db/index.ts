import { env } from "@/env"
import mongoose from "mongoose"

import { Snippet, User } from "./schema"

class DB {
  private static instance: DB
  users: typeof User
  snippets: typeof Snippet
  private constructor() {
    this.connect()
      .then(() => console.log("connected to DB"))
      .catch((err) => console.log(err))
    this.users = User
    this.snippets = Snippet
  }
  private async connect() {
    await mongoose.connect(env.MONGODB_URI)
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new DB()
    }
    return this.instance
  }
}

export const db = DB.getInstance()
