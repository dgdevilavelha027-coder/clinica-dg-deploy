# Clínica DG — Estética & Bem-Estar

Site completo da Clínica DG, desenvolvido com Next.js 14, Supabase e Tailwind CSS.

## 🛠 Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Estilo:** Tailwind CSS + Fontes Google (Cormorant Garamond + Jost)
- **Backend/DB:** Supabase (PostgreSQL + Row Level Security)
- **Deploy:** Vercel
- **Agendamento:** Integração WhatsApp

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero, tratamentos em destaque, depoimentos e CTA |
| `/sobre` | História, equipe e valores da clínica |
| `/tratamentos` | Listagem dinâmica de tratamentos por categoria |
| `/blog` | Posts do blog com slugs dinâmicos |
| `/depoimentos` | Galeria de avaliações de clientes |
| `/contato` | Formulário de contato conectado ao Supabase |

## 🚀 Setup local

```bash
npm install
cp .env.example .env.local
# Preencha as variáveis de ambiente
npm run dev
```

## 🔑 Variáveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```
