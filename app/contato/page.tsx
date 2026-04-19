'use client'
import { useState } from 'react'
// Metadata is defined in layout.tsx (server component)
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { getScheduleLink, getWhatsAppLink } from '@/lib/whatsapp'

type Status = 'idle' | 'loading' | 'success' | 'error'

const subjects = [
  'Agendamento de Consulta',
  'Informações sobre Tratamentos',
  'Orçamento',
  'Dúvidas Gerais',
  'Outro',
]

export default function ContatoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Ocorreu um erro. Tente novamente.')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      }
    } catch {
      setStatus('error')
      setErrorMsg('Falha na conexão. Verifique sua internet e tente novamente.')
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-cream-100">
        <div className="absolute right-0 top-0 w-1/3 bottom-0 bg-cream-200/40 hidden lg:block pointer-events-none" />
        <div className="container-clinic relative z-10">
          <p className="section-tag mb-4">Fale Conosco</p>
          <h1 className="heading-xl max-w-xl">
            Estamos aqui<br />
            para <em className="text-rose-deep">cuidar de você</em>
          </h1>
          <p className="font-body font-light text-stone-warm mt-5 max-w-md leading-relaxed">
            Entre em contato pelo formulário, WhatsApp ou telefone. Respondemos com carinho e agilidade.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 bg-cream-50">
        <div className="container-clinic">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* INFO SIDEBAR */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="section-tag mb-6">Informações</p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-rose-soft/30 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-rose-deep" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-sm text-stone-charcoal mb-0.5">Localização</p>
                      <p className="font-body font-light text-sm text-stone-warm leading-relaxed">
                        Vila Velha, Espírito Santo
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-rose-soft/30 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-rose-deep" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-sm text-stone-charcoal mb-0.5">WhatsApp</p>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-light text-sm text-stone-warm hover:text-rose-deep transition-colors"
                      >
                        (27) 99653-9413
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-rose-soft/30 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-rose-deep" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-sm text-stone-charcoal mb-0.5">Horários</p>
                      <p className="font-body font-light text-sm text-stone-warm leading-relaxed">
                        Segunda a Sexta: 9h às 19h<br />
                        Sábado: 9h às 14h<br />
                        <span className="text-xs text-stone-warm/60">Domingo: Fechado</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-rose-soft/30 flex items-center justify-center flex-shrink-0">
                      <Instagram size={16} className="text-rose-deep" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-sm text-stone-charcoal mb-0.5">Instagram</p>
                      <a
                        href="https://instagram.com/clinicadg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-light text-sm text-stone-warm hover:text-rose-deep transition-colors"
                      >
                        @clinicadg
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-stone-charcoal p-8">
                <p className="font-display text-2xl font-light text-cream-50 mb-3">
                  Prefere agendar pelo WhatsApp?
                </p>
                <p className="font-body font-light text-cream-200/70 text-sm mb-6 leading-relaxed">
                  Mais rápido e prático. Nossa equipe responde em minutos durante o horário de atendimento.
                </p>
                <a
                  href={getScheduleLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-[11px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <p className="section-tag mb-6">Envie uma Mensagem</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-sage-light/20 border border-sage-light">
                  <CheckCircle size={48} className="text-sage-dark mb-5" />
                  <h3 className="font-display text-3xl font-light text-stone-charcoal mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="font-body font-light text-stone-warm max-w-sm leading-relaxed">
                    Obrigada pelo contato! Nossa equipe retornará em breve pelo e-mail ou WhatsApp informado.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-8 text-xs"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body tracking-widest uppercase text-stone-warm mb-2">
                        Nome completo <span className="text-rose-deep">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full bg-cream-100 border border-cream-200 focus:border-rose-blush outline-none px-4 py-3.5 font-body text-sm text-stone-charcoal placeholder:text-stone-warm/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body tracking-widest uppercase text-stone-warm mb-2">
                        E-mail <span className="text-rose-deep">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="w-full bg-cream-100 border border-cream-200 focus:border-rose-blush outline-none px-4 py-3.5 font-body text-sm text-stone-charcoal placeholder:text-stone-warm/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body tracking-widest uppercase text-stone-warm mb-2">
                        WhatsApp / Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(27) 99999-9999"
                        className="w-full bg-cream-100 border border-cream-200 focus:border-rose-blush outline-none px-4 py-3.5 font-body text-sm text-stone-charcoal placeholder:text-stone-warm/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body tracking-widest uppercase text-stone-warm mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-cream-100 border border-cream-200 focus:border-rose-blush outline-none px-4 py-3.5 font-body text-sm text-stone-charcoal transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Selecione...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-stone-warm mb-2">
                      Mensagem <span className="text-rose-deep">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Conte-nos sobre o que você precisa..."
                      className="w-full bg-cream-100 border border-cream-200 focus:border-rose-blush outline-none px-4 py-3.5 font-body text-sm text-stone-charcoal placeholder:text-stone-warm/40 transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-rose-soft/20 border border-rose-blush/30 px-4 py-3.5">
                      <AlertCircle size={16} className="text-rose-deep flex-shrink-0" />
                      <p className="font-body text-sm text-rose-deep">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-cream-50/30 border-t-cream-50 rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="text-xs font-body text-stone-warm/50 text-center leading-relaxed">
                    Seus dados estão seguros. Não compartilhamos suas informações com terceiros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP placeholder */}
      <section className="h-72 bg-cream-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-rose-blush mx-auto mb-3" />
            <p className="font-display text-2xl font-light text-stone-warm">Vila Velha · ES</p>
            <p className="font-body text-sm text-stone-warm/60 mt-1">Agende e receba o endereço pelo WhatsApp</p>
          </div>
        </div>
      </section>
    </>
  )
}
