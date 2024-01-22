import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { getServerAuthSession } from "@/server/auth"
import { TRPCReactProvider } from "@/trpc/react"

import { Toaster } from "@/components/ui/sonner"
import { NextThemeProvider, SessionProvider } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider session={session}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <NextThemeProvider>
            <SiteHeader />
            <div className="px-8 sm:px-24 py-4">{children}</div>
            <Toaster />
            <SiteFooter />
          </NextThemeProvider>
        </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
