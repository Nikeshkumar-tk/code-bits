"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

export const NextThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export { SessionProvider }
