import type { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { supabase, Testimonial } from '@/lib/supabase'
import { getScheduleLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Depoimentos',
  description: 'Veja o que nossas clientes dizem sobre os tratamentos e experiências na Clínica DG.',
}

export default async function DepoimentosPage() {
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('approved', true)
    .order('created_at', { ascending: false })

  const featured = (testimonials as Testimonial[])?.filter((t) => t.featured)
  const rest = (testimonials as Testimonial[])?.filter((t) => !t.featured)

  const avgRating = testimonials
    ? (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)
    : '5.0'

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-cream-100">
        <div className="container-clinic text-center">
          <p className="section-tag mb-5">Histórias Reais</p>
          <h1 className="heading-xl mb-6">
            Transformações que<br />
            <em className="text-rose-deep">falam por si</em>
          </h1>
          <p className="font-body font-light text-stone-warm max-w-lg mx-auto leading-relaxed">
            A satisfação de cada cliente é nossa maior conquista. Aqui estão algumas das histórias
            que nos motivam a sempre fazer o melhor.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-12 pt-12 border-t border-cream-200">
            {[
              { value: avgRating, label: 'Avaliação Média', suffix: '/ 5' },
              { value: testimonials?.length.toString() || '0', label: 'Avaliações', suffix: '+' },
              { value: '98', label: 'Recomendariam', suffix: '%' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-end justify-center gap-1">
                  <span className="font-display text-5xl font-light text-stone-charcoal">{s.value}</span>
                  <span className="font-display text-2xl font-light text-rose-deep mb-1">{s.suffix}</span>
                </div>
                <div className="text-[10px] font-body tracking-widest uppercase text-stone-warm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && featured.length > 0 && (
        <section className="py-20 bg-cream-50">
          <div className="container-clinic">
            <p className="section-tag mb-10">Em Destaque</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((t) => (
                <div key={t.id} className="bg-cream-100 p-8 relative">
                  <Quote size={32} className="text-rose-soft mb-5" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={i < t.rating ? 'text-rose-deep fill-rose-deep' : 'text-cream-300'}
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl font-light leading-relaxed text-stone-charcoal mb-8 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="border-t border-cream-200 pt-5">
                    <p className="font-body font-semibold text-sm text-stone-charcoal">{t.name}</p>
                    <p className="font-body text-xs text-rose-deep tracking-wide uppercase mt-0.5">{t.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REST */}
      {rest && rest.length > 0 && (
        <section className="py-20 bg-cream-100">
          <div className="container-clinic">
            <p className="section-tag mb-10">Mais Avaliações</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rest.map((t) => (
                <div key={t.id} className="bg-cream-50 p-7 flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-soft/30 flex items-center justify-center text-rose-deep font-display text-xl font-light">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-body font-medium text-sm text-stone-charcoal">{t.name}</p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={10} className={i < t.rating ? 'text-rose-deep fill-rose-deep' : 'text-cream-300'} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs font-body text-rose-deep uppercase tracking-wide mb-3">{t.treatment}</p>
                    <p className="font-body font-light text-sm text-stone-warm leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-stone-charcoal text-center">
        <div className="container-clinic">
          <p className="section-tag text-rose-blush mb-4">Sua Vez</p>
          <h2 className="font-display text-4xl font-light text-cream-50 mb-4">
            Pronta para sua transformação?
          </h2>
          <p className="font-body font-light text-cream-200/70 max-w-md mx-auto mb-8">
            Junte-se às mais de 1.200 clientes satisfeitas da Clínica DG.
          </p>
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Agendar Minha Consulta
          </a>
        </div>
      </section>
    </>
  )
}
