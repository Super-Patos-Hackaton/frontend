import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { fontMono, fontSans } from "@/styles/fonts"

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
    <html lang="pt-BR">
      <body className={cn(fontSans, fontMono)}>{children}</body>
    </html>
  )
}
