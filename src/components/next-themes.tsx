"use client"

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
