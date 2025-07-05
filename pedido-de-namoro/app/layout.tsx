import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Um Pedido Especial para Edlany 💕",
  description: "Um pedido de namoro especial feito com muito amor",
  keywords: ["namoro", "pedido", "amor", "romance"],
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    title: "Um Pedido Especial para Edlany 💕",
    description: "Um pedido de namoro especial feito com muito amor",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
