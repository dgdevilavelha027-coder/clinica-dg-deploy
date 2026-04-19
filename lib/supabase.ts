import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Treatment = {
  id: string
  slug: string
  name: string
  description: string
  short_description: string
  duration_minutes: number
  price_from: number
  category: string
  icon: string
  image_url: string | null
  featured: boolean
  order_index: number
  created_at: string
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  cover_image_url: string | null
  author: string
  tags: string[]
  published: boolean
  published_at: string
  created_at: string
}

export type Testimonial = {
  id: string
  name: string
  treatment: string
  rating: number
  content: string
  avatar_url: string | null
  featured: boolean
  approved: boolean
  created_at: string
}
