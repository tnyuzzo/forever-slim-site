import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forever Slim - Peptidi Dimagranti Swiss Research Lab',
  description: 'Scopri Forever Slim, il rivoluzionario kit di peptidi dimagranti sviluppato da Swiss Research Lab. Risultati visibili in poche settimane.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
