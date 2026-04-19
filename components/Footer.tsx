import Link from 'next/link'
import { Instagram, Phone, MapPin, Clock } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="bg-stone-charcoal text-cream-200">
      <div className="container-clinic py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-4xl font-light tracking-[0.15em] text-cream-50">DG</div>
              <div className="text-[9px] font-body tracking-[0.35em] uppercase text-rose-blush -mt-0.5">Clínica Estética</div>
            </div>
            <p className="text-sm font-body font-light leading-relaxed text-cream-200/70 mb-6">
              Referência em estética avançada, cuidando da sua beleza com ciência, arte e carinho desde o primeiro atendimento.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-blush hover:text-cream-50 transition-colors"
            >
              <Instagram size={18} />
              <span className="text-xs tracking-widest uppercase">@clinicadg</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-body tracking-[0.3em] uppercase text-rose-blush mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: '/sobre', label: 'Sobre Nós' },
                { href: '/tratamentos', label: 'Tratamentos' },
                { href: '/blog', label: 'Blog' },
                { href: '/depoimentos', label: 'Depoimentos' },
                { href: '/contato', label: 'Contato' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-body font-light text-cream-200/70 hover:text-cream-50 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tratamentos */}
          <div>
            <h4 className="text-xs font-body tracking-[0.3em] uppercase text-rose-blush mb-6">Tratamentos</h4>
            <ul className="space-y-3">
              {[
                'Limpeza de Pele',
                'Hidratação Facial',
                'Peeling Químico',
                'Toxina Botulínica',
                'Preenchimento',
                'Massagem Relaxante',
              ].map((t) => (
                <li key={t}>
                  <Link
                    href="/tratamentos"
                    className="text-sm font-body font-light text-cream-200/70 hover:text-cream-50 transition-colors tracking-wide"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-body tracking-[0.3em] uppercase text-rose-blush mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-rose-blush mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body font-light text-cream-200/70 leading-relaxed">
                  Vila Velha, Espírito Santo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-rose-blush flex-shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body font-light text-cream-200/70 hover:text-cream-50 transition-colors"
                >
                  (27) 99653-9413
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-rose-blush mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body font-light text-cream-200/70 leading-relaxed">
                  Seg–Sex: 9h às 19h<br />Sábado: 9h às 14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-200/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-cream-200/40 tracking-wide">
            © {new Date().getFullYear()} Clínica DG. Todos os direitos reservados.
          </p>
          <p className="text-xs font-body text-cream-200/30 tracking-wide">
            Beleza com ciência & cuidado
          </p>
        </div>
      </div>
    </footer>
  )
}
