import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Shield, Sparkles, Heart } from 'lucide-react'
import { supabase, Treatment, Testimonial } from '@/lib/supabase'
import { getScheduleLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Clínica DG | Estética & Bem-Estar',
  description:
    'Clínica DG — Referência em estética avançada em Vila Velha. Tratamentos faciais, corporais e procedimentos injetáveis com ciência e cuidado.',
}

const categoryImages: Record<string, string> = {
  'Facial': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  'Corporal': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  'Injetáveis': 'https://images.unsplash.com/photo-1614859324967-bdf413c09402?w=600&q=80',
  'Semipermanente': 'https://images.unsplash.com/photo-1487412947147-5cebf100d7fb?w=600&q=80',
}

export default async function HomePage() {
  const { data: treatments } = await supabase
    .from('treatments')
    .select('*')
    .eq('featured', true)
    .order('order_index')
    .limit(4)

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=85"
            alt="Clínica DG — Ambiente"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/90 to-cream-50/40" />
        </div>

        {/* Decorative vertical line */}
        <div className="absolute left-[52%] top-0 bottom-0 w-px bg-cream-200 hidden lg:block" />

        <div className="container-clinic relative z-10 pt-28 pb-20 lg:pb-28">
          <div className="max-w-2xl">
            <p className="section-tag mb-6 animate-fade-in">Clínica DG · Estética Avançada</p>
            <h1 className="heading-xl mb-6" style={{ animationDelay: '0.1s' }}>
              Sua beleza,<br />
              <em className="italic text-rose-deep not-italic">elevada</em> pela<br />
              ciência & arte.
            </h1>
            <div className="divider-rose mb-6" />
            <p className="font-body text-base md:text-lg font-light leading-relaxed text-stone-warm mb-10 max-w-lg">
              Procedimentos estéticos personalizados para revelar sua versão mais radiante.
              Aqui, cada detalhe importa — do ambiente ao resultado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={getScheduleLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
              <Link href="/tratamentos" className="btn-outline">
                Ver Tratamentos
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-cream-200">
              {[
                { value: '5+', label: 'Anos de Experiência' },
                { value: '1.200+', label: 'Clientes Satisfeitas' },
                { value: '98%', label: 'Índice de Satisfação' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-light text-stone-charcoal">{s.value}</div>
                  <div className="text-[10px] font-body tracking-widest uppercase text-stone-warm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85"
            alt="Tratamento facial"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-transparent to-transparent" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-stone-charcoal py-5">
        <div className="container-clinic">
          <div className="flex flex-wrap gap-x-16 gap-y-3 justify-center">
            {[
              '✦ Tratamentos Personalizados',
              '◈ Profissionais Certificadas',
              '◇ Ambiente Acolhedor',
              '○ Resultados Comprovados',
            ].map((t) => (
              <span key={t} className="text-[11px] font-body tracking-[0.25em] uppercase text-cream-200/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-24 bg-cream-50">
        <div className="container-clinic">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="section-tag mb-4">Nossos Serviços</p>
              <h2 className="heading-lg">Tratamentos em<br />destaque</h2>
            </div>
            <Link
              href="/tratamentos"
              className="flex items-center gap-2 text-sm font-body tracking-widest uppercase text-stone-warm hover:text-rose-deep transition-colors group"
            >
              Ver todos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(treatments as Treatment[])?.map((t, i) => (
              <Link
                key={t.id}
                href="/tratamentos"
                className="group relative overflow-hidden bg-cream-100 aspect-[3/4] flex flex-col justify-end"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Image
                  src={categoryImages[t.category] || categoryImages['Facial']}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-charcoal/80 via-stone-charcoal/20 to-transparent" />
                <div className="relative p-6 text-cream-50">
                  <span className="text-2xl mb-2 block">{t.icon}</span>
                  <h3 className="font-display text-xl font-light leading-snug">{t.name}</h3>
                  <p className="text-xs font-body tracking-widest uppercase text-cream-200/70 mt-1">{t.category}</p>
                  {t.price_from && (
                    <p className="text-sm font-body font-light text-rose-soft mt-2">
                      A partir de R$ {t.price_from.toFixed(0)}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-cream-100">
        <div className="container-clinic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85"
                  alt="Clínica DG — Diferenciais"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-stone-charcoal text-cream-50 p-8 hidden md:block">
                <div className="font-display text-5xl font-light">5+</div>
                <div className="text-xs font-body tracking-widest uppercase text-cream-200/70 mt-1">
                  Anos de<br />Excelência
                </div>
              </div>
            </div>

            <div>
              <p className="section-tag mb-5">Por Que Nos Escolher</p>
              <h2 className="heading-lg mb-6">
                Cuidado além<br />da aparência
              </h2>
              <div className="divider-rose mb-8" />
              <p className="font-body font-light text-stone-warm leading-relaxed mb-10">
                Na Clínica DG, acreditamos que a verdadeira beleza emerge quando saúde, ciência e bem-estar se encontram.
                Cada cliente recebe um protocolo exclusivo, desenvolvido para suas necessidades únicas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Segurança em 1º Lugar', desc: 'Protocolos rigorosos e produtos certificados para sua total tranquilidade.' },
                  { icon: Sparkles, title: 'Resultados Naturais', desc: 'Técnicas avançadas que realçam sua beleza preservando sua essência.' },
                  { icon: Heart, title: 'Atendimento Humanizado', desc: 'Uma equipe apaixonada que cuida de cada detalhe da sua experiência.' },
                  { icon: Star, title: 'Tecnologia de Ponta', desc: 'Equipamentos modernos e produtos premium para resultados superiores.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-rose-soft/30 mt-0.5">
                      <Icon size={16} className="text-rose-deep" />
                    </div>
                    <div>
                      <h4 className="font-body font-medium text-stone-charcoal text-sm mb-1">{title}</h4>
                      <p className="text-sm font-body font-light text-stone-warm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 bg-cream-50">
          <div className="container-clinic">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Depoimentos</p>
              <h2 className="heading-lg">O que nossas<br />clientes dizem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(testimonials as Testimonial[]).map((t) => (
                <div key={t.id} className="bg-cream-100 p-8 flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < t.rating ? 'text-rose-deep fill-rose-deep' : 'text-cream-300'}
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl font-light leading-relaxed text-stone-charcoal mb-6 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="border-t border-cream-200 pt-5">
                    <p className="font-body font-medium text-sm text-stone-charcoal">{t.name}</p>
                    <p className="font-body text-xs text-stone-warm tracking-wide mt-0.5">{t.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/depoimentos" className="btn-outline">
                Ver todos os depoimentos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80"
          alt="Agende sua consulta"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-charcoal/75" />
        <div className="container-clinic relative z-10 text-center">
          <p className="section-tag text-rose-soft mb-5">Sua Transformação Começa Agora</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream-50 mb-6 leading-tight">
            Agende sua avaliação<br />
            <em className="text-rose-soft">gratuita</em>
          </h2>
          <p className="font-body font-light text-cream-200/80 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Nossa especialista irá analisar sua pele e indicar o protocolo ideal para seus objetivos, sem compromisso.
          </p>
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Quero Minha Avaliação Gratuita
          </a>
        </div>
      </section>
    </>
  )
}
