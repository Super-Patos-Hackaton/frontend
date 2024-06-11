import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { fontMono, fontSans } from "@/styles/fonts"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Desafio do Pato",
  description: "Plataforma de gestão de desafios"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={cn(fontSans, fontMono)}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
