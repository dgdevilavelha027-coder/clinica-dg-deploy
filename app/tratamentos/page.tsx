import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'
import { supabase, Treatment } from '@/lib/supabase'
import { getScheduleLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Tratamentos',
  description: 'Conheça todos os tratamentos estéticos da Clínica DG: faciais, corporais, injetáveis e semipermanentes. Protocolos personalizados para cada cliente.',
}

const categoryImages: Record<string, string> = {
  Facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
  Corporal: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80',
  Injetáveis: 'https://images.unsplash.com/photo-1614859324967-bdf413c09402?w=700&q=80',
  Semipermanente: 'https://images.unsplash.com/photo-1487412947147-5cebf100d7fb?w=700&q=80',
}

const categoryOrder = ['Facial', 'Corporal', 'Injetáveis', 'Semipermanente']

export default async function TratamentosPage() {
  const { data: treatments } = await supabase
    .from('treatments')
    .select('*')
    .order('order_index')

  const grouped = categoryOrder.reduce<Record<string, Treatment[]>>((acc, cat) => {
    acc[cat] = (treatments as Treatment[])?.filter((t) => t.category === cat) || []
    return acc
  }, {})

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=80"
            alt="Tratamentos"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container-clinic relative z-10 text-center">
          <p className="section-tag mb-5">Portfólio de Serviços</p>
          <h1 className="heading-xl max-w-2xl mx-auto mb-6">
            Tratamentos que<br />
            <em className="text-rose-deep">transformam</em>
          </h1>
          <p className="font-body font-light text-stone-warm max-w-xl mx-auto leading-relaxed">
            Cada protocolo é cuidadosamente desenvolvido para as suas necessidades específicas,
            utilizando técnicas avançadas e produtos de alto desempenho.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      {categoryOrder.map((category) => {
        const items = grouped[category]
        if (!items || items.length === 0) return null
        return (
          <section key={category} className="py-20 odd:bg-cream-50 even:bg-cream-100">
            <div className="container-clinic">
              <div className="flex items-center gap-6 mb-12">
                <div>
                  <p className="section-tag mb-1">{category}</p>
                  <div className="divider-rose" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((t) => (
                  <div key={t.id} className="group bg-cream-50 flex flex-col sm:flex-row overflow-hidden border border-cream-200 hover:border-rose-blush transition-colors duration-300">
                    <div className="relative sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <Image
                        src={categoryImages[t.category] || categoryImages['Facial']}
                        alt={t.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-2xl font-light text-stone-charcoal leading-tight">
                          {t.name}
                        </h3>
                        <span className="text-2xl flex-shrink-0">{t.icon}</span>
                      </div>
                      <p className="font-body text-sm font-light text-stone-warm leading-relaxed mb-5 flex-1">
                        {t.short_description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                        <div className="flex items-center gap-4">
                          {t.duration_minutes && (
                            <span className="flex items-center gap-1.5 text-xs font-body text-stone-warm">
                              <Clock size={12} />
                              {t.duration_minutes} min
                            </span>
                          )}
                          {t.price_from && (
                            <span className="text-xs font-body text-rose-deep font-medium">
                              A partir de R$ {t.price_from.toFixed(0)}
                            </span>
                          )}
                        </div>
                        <a
                          href={getScheduleLink(t.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-stone-charcoal hover:text-rose-deep transition-colors group/btn"
                        >
                          Agendar
                          <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-20 bg-stone-charcoal text-center">
        <div className="container-clinic">
          <p className="section-tag text-rose-blush mb-4">Dúvidas?</p>
          <h2 className="font-display text-4xl font-light text-cream-50 mb-4">
            Não sabe qual tratamento escolher?
          </h2>
          <p className="font-body font-light text-cream-200/70 max-w-md mx-auto mb-8">
            Agende uma avaliação gratuita e nossa especialista indicará o protocolo ideal para você.
          </p>
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Quero uma Avaliação Gratuita
          </a>
        </div>
      </section>
    </>
  )
}
