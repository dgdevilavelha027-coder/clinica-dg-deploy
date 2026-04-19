import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Clínica DG | Estética & Bem-Estar',
    template: '%s | Clínica DG',
  },
  description:
    'Clínica DG — Referência em estética avançada, tratamentos faciais, corporais e injetáveis em Vila Velha, ES. Agende sua avaliação gratuita.',
  keywords: ['clínica estética', 'tratamentos faciais', 'botox', 'peeling', 'estética Vila Velha', 'DG estética'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Clínica DG',
    title: 'Clínica DG | Estética & Bem-Estar',
    description: 'Referência em estética avançada em Vila Velha, ES.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://clinica-estetica-dg.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="grain font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
