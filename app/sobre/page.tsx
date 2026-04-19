import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { getScheduleLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a Clínica DG — nossa história, filosofia e a equipe apaixonada por transformar vidas através da estética avançada em Vila Velha, ES.',
}

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-cream-100 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cream-200/50 hidden lg:block" />
        <div className="container-clinic relative z-10">
          <p className="section-tag mb-4">Nossa História</p>
          <h1 className="heading-xl max-w-3xl">
            Beleza que transforma,<br />
            <em className="text-rose-deep">cuidado</em> que permanece.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-cream-50">
        <div className="container-clinic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag mb-5">Sobre a Clínica</p>
              <h2 className="heading-lg mb-6">Mais de 5 anos cuidando<br />de quem importa</h2>
              <div className="divider-rose mb-8" />
              <div className="space-y-5 font-body font-light text-stone-warm leading-relaxed">
                <p>
                  A Clínica DG nasceu de um sonho simples e poderoso: oferecer tratamentos estéticos de alto padrão com o acolhimento de um espaço íntimo e personalizado. Fundada em Vila Velha, ES, nossa clínica é um refúgio de beleza e bem-estar no coração da cidade.
                </p>
                <p>
                  Acreditamos que cada pessoa é única, e é por isso que criamos protocolos exclusivos para cada cliente. Não seguimos tendências às cegas — estudamos, desenvolvemos e aplicamos técnicas que realmente funcionam, com respeito à individualidade de cada pele e cada história.
                </p>
                <p>
                  Nossa equipe é formada por profissionais apaixonadas, em constante atualização, comprometidas com resultados seguros, naturais e duradouros. Do ambiente sereno ao produto cuidadosamente selecionado, cada detalhe da sua experiência é pensado com carinho.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=85"
                  alt="Clínica DG — Equipe"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-rose-soft/80 backdrop-blur-sm p-8 hidden md:block">
                <div className="font-display text-4xl font-light text-stone-charcoal">1.200+</div>
                <div className="text-xs font-body tracking-widest uppercase text-stone-warm mt-1">
                  Clientes<br />Transformadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-cream-100">
        <div className="container-clinic">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">Nossos Valores</p>
            <h2 className="heading-lg">O que nos guia todos os dias</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ciência & Inovação',
                desc: 'Investimos continuamente em formação e nas mais modernas tecnologias para oferecer o melhor em estética avançada.',
                num: '01',
              },
              {
                title: 'Ética & Transparência',
                desc: 'Só indicamos o que é realmente necessário. Seu bem-estar e saúde sempre vêm antes de qualquer resultado comercial.',
                num: '02',
              },
              {
                title: 'Acolhimento & Cuidado',
                desc: 'Cada cliente é recebida como uma amiga especial. A experiência na clínica deve ser tão boa quanto o resultado do tratamento.',
                num: '03',
              },
            ].map((v) => (
              <div key={v.title} className="bg-cream-50 p-10 relative overflow-hidden">
                <div className="absolute top-4 right-6 font-display text-7xl font-light text-cream-200 select-none">
                  {v.num}
                </div>
                <h3 className="heading-md text-2xl mb-4 relative">{v.title}</h3>
                <div className="divider-rose mb-5" />
                <p className="font-body font-light text-stone-warm leading-relaxed relative">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-cream-50">
        <div className="container-clinic">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">Nossa Equipe</p>
            <h2 className="heading-lg">Profissionais que amam o que fazem</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Dra. Carolina Mendes',
                role: 'Médica Esteticista · CRM 12345/ES',
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
                certs: ['Especialista em Medicina Estética', 'Pós-graduada em Dermatologia', 'Certificada em Injetáveis'],
              },
              {
                name: 'Ana Paula Freitas',
                role: 'Esteticista · CREFITO 9876',
                img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
                certs: ['Especialista em Tratamentos Faciais', 'Certificada em Peelings Químicos', 'Formada em Cosmetologia'],
              },
              {
                name: 'Juliana Costa',
                role: 'Especialista Corporal',
                img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
                certs: ['Especialista em Massoterapia', 'Certificada em Drenagem Linfática', 'Formada em Estética Corporal'],
              },
            ].map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-square overflow-hidden mb-5 relative">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl font-light text-stone-charcoal">{m.name}</h3>
                <p className="text-xs font-body tracking-wide text-rose-deep uppercase mt-1 mb-4">{m.role}</p>
                <ul className="space-y-2">
                  {m.certs.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm font-body font-light text-stone-warm">
                      <CheckCircle2 size={13} className="text-sage flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-charcoal text-center">
        <div className="container-clinic">
          <p className="section-tag text-rose-blush mb-4">Pronta para Começar?</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream-50 mb-6">
            Venha nos conhecer pessoalmente
          </h2>
          <p className="font-body font-light text-cream-200/70 max-w-lg mx-auto mb-10 leading-relaxed">
            Agende sua avaliação gratuita e descubra como podemos transformar sua rotina de beleza.
          </p>
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </section>
    </>
  )
}
