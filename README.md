# Sabrina de Souza — Landing Page (Next.js)

Landing page premium para personal trainer, construída com **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (paleta turquesa + branco + preto azulado)
- **Framer Motion** (split-text, reveal on scroll, parallax, stagger, tilt 3D)
- **lucide-react** (ícones)
- **next/font** (Inter + Anton servidas localmente)

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx       — fontes (Inter + Anton), metadata
  page.tsx         — composição das seções
  globals.css      — tailwind + reset + plan-card border gradient
components/
  Cursor.tsx       — cursor circular custom (aqua, mix-blend-difference)
  Nav.tsx          — nav fixa que vira glassmorphism ao scroll
  Hero.tsx         — split-text, foto da Sabrina sobre círculo aqua, badges flutuantes, parallax
  Marquee.tsx      — banner infinito preto/aqua
  About.tsx        — sobre com card foto + headline com chip aqua
  Method.tsx       — 3 cards 3D com tilt e gradient seguindo o mouse (fundo preto)
  Plans.tsx        — 3 planos premium (Essencial / Premium / Black) com plano destacado
  Testimonial.tsx  — depoimento com bubble aqua
  CTA.tsx          — chamada final em fundo aqua
  Footer.tsx       — rodapé escuro com sociais
public/
  imagem_sem_fundo-removebg-preview.png  — foto da Sabrina (hero)
lib/
  motion.ts        — variants reutilizáveis
tailwind.config.ts — paleta + animações marquee/floaty/blob + fontes
```

## Paleta

| Token       | Hex        | Uso                                  |
|-------------|------------|--------------------------------------|
| `ink`       | `#0A0F12`  | Preto azulado (texto/CTAs)           |
| `ink2`      | `#11181D`  | Background secundário escuro         |
| `bone`      | `#F6FBFC`  | Off-white principal                  |
| `bone2`     | `#E6F4F6`  | Off-white com toque ciano            |
| `aqua`      | `#3FC2D6`  | Turquesa do logo (accent principal)  |
| `aquaDeep`  | `#1B9FB5`  | Turquesa escuro (hover)              |
| `aquaSoft`  | `#A9E5EF`  | Turquesa pastel (backgrounds suaves) |
| `muted`     | `#6B7A82`  | Labels e textos discretos            |

## Tipografia

- **Anton** — display impactante (uppercase, condensed) para H1, H2, números e marquee
- **Inter** — texto corrido, navegação e UI

## Animações (estilo Framer/Webflow)

- Split-text palavra por palavra no hero
- Imagem da Sabrina sobre círculo aqua + ring tracejado girando
- Badges flutuantes com `floaty`
- Parallax na imagem do hero
- Reveal de imagens com clip-path
- Cards do método com tilt 3D + gradient radial seguindo o cursor
- Marquee infinito de palavras-chave
- Plan cards com border gradient mascarado (CSS) no hover/featured
- Cursor customizado (mix-blend-difference)

## Próximos passos

- Conectar botão "Falar no WhatsApp" ao número real (`https://wa.me/55...`)
- Adicionar links reais de Instagram (`@sabrinadesouza.personal`)
- Trocar a foto do "About" por foto real da Sabrina treinando
- Ajustar valores dos planos conforme tabela real
- Opcional: seção de antes/depois, FAQ, formulário de contato
