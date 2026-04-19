import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'
import { supabase, BlogPost } from '@/lib/supabase'
import { getScheduleLink } from '@/lib/whatsapp'

const coverImages: Record<string, string> = {
  'cuidados-pos-procedimento': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85',
  'tendencias-estetica-2026': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85',
  'importancia-protecao-solar': 'https://images.unsplash.com/photo-1487412947147-5cebf100d7fb?w=1200&q=85',
}

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt')
    .eq('slug', params.slug)
    .single()

  if (!post) return { title: 'Post não encontrado' }
  return { title: post.title, description: post.excerpt }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  const p = post as BlogPost
  const coverImg = p.cover_image_url || coverImages[p.slug] || coverImages['cuidados-pos-procedimento']

  // Simple markdown-like rendering for bold
  const renderContent = (text: string) =>
    text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} className="font-display text-2xl font-light text-stone-charcoal mt-8 mb-3">{line.replace(/\*\*/g, '')}</h3>
      }
      if (line.trim() === '') return <br key={i} />
      return <p key={i} className="font-body font-light text-stone-warm leading-relaxed mb-4">{line}</p>
    })

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-0 overflow-hidden">
        <div className="container-clinic pb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-stone-warm hover:text-rose-deep transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            Voltar ao Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {p.tags?.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-[10px] font-body tracking-widest uppercase text-rose-deep border border-rose-blush/40 px-3 py-1">
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="heading-xl max-w-3xl mb-6">{p.title}</h1>
          <div className="flex items-center gap-6 text-sm font-body text-stone-warm">
            <span className="flex items-center gap-2">
              <Calendar size={13} />
              {formatDate(p.published_at)}
            </span>
            <span>por <strong className="font-medium text-stone-charcoal">{p.author}</strong></span>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] mt-8">
          <Image src={coverImg} alt={p.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-cream-50">
        <div className="container-clinic max-w-3xl mx-auto">
          <div className="prose-clinic">
            {renderContent(p.content)}
          </div>

          {/* Share / CTA */}
          <div className="mt-16 pt-10 border-t border-cream-200">
            <div className="bg-cream-100 p-8 text-center">
              <p className="font-display text-2xl font-light text-stone-charcoal mb-3">
                Quer saber qual tratamento é ideal para você?
              </p>
              <p className="font-body font-light text-stone-warm mb-6 text-sm">
                Agende uma avaliação gratuita com nossa especialista.
              </p>
              <a
                href={getScheduleLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-outline">
              ← Mais artigos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
