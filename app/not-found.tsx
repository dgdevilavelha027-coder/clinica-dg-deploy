import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
      <div className="text-center">
        <p className="section-tag mb-5">Página não encontrada</p>
        <div className="font-display text-[120px] font-light leading-none text-cream-200 select-none mb-6">
          404
        </div>
        <h1 className="heading-md mb-4 text-stone-charcoal">Ops! Esta página não existe.</h1>
        <p className="font-body font-light text-stone-warm mb-10 max-w-sm mx-auto">
          A página que você está procurando pode ter sido movida ou não existe mais.
        </p>
        <Link href="/" className="btn-primary">
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
