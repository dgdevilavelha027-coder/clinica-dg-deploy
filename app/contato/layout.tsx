import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Clínica DG. Agende sua consulta, tire dúvidas ou envie uma mensagem. Atendemos em Vila Velha, ES.',
}

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
