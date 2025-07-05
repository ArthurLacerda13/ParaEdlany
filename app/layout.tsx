import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <head>
        {/* Fontes Românticas */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Pacifico&family=Sacramento&family=Satisfy&family=Kaushan+Script&family=Amatic+SC:wght@400;700&family=Caveat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
