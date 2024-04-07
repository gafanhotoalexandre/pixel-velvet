import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

import { cn } from '@/lib/utils'
import './globals.css'

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-imb-plex',
})

export const metadata: Metadata = {
  title: 'PixelVelvet',
  description: 'Gerador de imagens com Inteligência Artificial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#624cf5' },
      }}
      localization={ptBR}
    >
      <html lang="pt-br">
        <body className={cn('font-IMBPlex antialiased', IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
