import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { getServerAuthSession } from "@/server/auth"
import { TRPCReactProvider } from "@/trpc/react"

import { SiteHeader } from "@/components/site-header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()
  console.log("session", session)
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <SiteHeader />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}
