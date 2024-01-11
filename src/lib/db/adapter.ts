/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
// @ts-nocheck
import { env } from "@/env"
import { MongoClient } from "mongodb"

if (!env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = env.MONGODB_URI
const options = {}

let client
let mongoClient: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  mongoClient = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  mongoClient = client.connect()
}

export default mongoClient
