'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getScheduleLink } from '@/lib/whatsapp'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/tratamentos', label: 'Tratamentos' },
  { href: '/blog', label: 'Blog' },
  { href: '/depoimentos', label: 'Depoimentos' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-clinic flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-3xl font-light tracking-[0.15em] text-stone-charcoal">DG</span>
          <span className="text-[9px] font-body tracking-[0.35em] uppercase text-stone-warm -mt-0.5">Clínica Estética</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-body tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname === href
                  ? 'text-rose-deep'
                  : 'text-stone-warm hover:text-stone-charcoal'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[11px] px-6 py-2.5"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-charcoal"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-cream-50/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen border-t border-cream-200 pb-8' : 'max-h-0'
        }`}
      >
        <nav className="container-clinic flex flex-col pt-6 gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-body tracking-[0.2em] uppercase ${
                pathname === href ? 'text-rose-deep' : 'text-stone-warm'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={getScheduleLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 justify-center text-[11px]"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  )
}
