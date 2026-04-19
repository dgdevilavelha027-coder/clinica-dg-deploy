import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { supabase, BlogPost } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas, novidades e artigos sobre estética, skincare e bem-estar da equipe da Clínica DG.',
}

const coverImages = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100d7fb?w=800&q=80',
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-cream-100">
        <div className="container-clinic">
          <p className="section-tag mb-4">Conteúdo & Inspiração</p>
          <h1 className="heading-xl max-w-xl">
            Blog<br />
            <em className="text-rose-deep">Clínica DG</em>
          </h1>
          <p className="font-body font-light text-stone-warm mt-4 max-w-md leading-relaxed">
            Dicas, tendências e tudo que você precisa saber para cuidar da sua beleza com ciência e amor.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20 bg-cream-50">
        <div className="container-clinic">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-3xl font-light text-stone-warm">Em breve, novos conteúdos!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(posts as BlogPost[]).map((post, i) => (
                <article key={post.id} className="group flex flex-col">
                  <div className="relative aspect-video overflow-hidden mb-5">
                    <Image
                      src={post.cover_image_url || coverImages[i % coverImages.length]}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.tags && post.tags[0] && (
                      <div className="absolute top-4 left-4 bg-cream-50/90 backdrop-blur-sm px-3 py-1">
                        <span className="flex items-center gap-1.5 text-[10px] font-body tracking-widest uppercase text-rose-deep">
                          <Tag size={9} />
                          {post.tags[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-body text-stone-warm">
                      <Calendar size={11} />
                      {formatDate(post.published_at)}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-body text-stone-warm">
                      <Clock size={11} />
                      5 min de leitura
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-light text-stone-charcoal mb-3 leading-snug group-hover:text-rose-deep transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm font-light text-stone-warm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="border-t border-cream-200 pt-4 flex items-center justify-between">
                    <span className="text-xs font-body text-stone-warm">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-body tracking-widest uppercase text-rose-deep hover:text-stone-charcoal transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
