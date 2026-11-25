# Portfólio — Bianca Teixeira

React 18 + TypeScript + Vite (SWC) + React Router + Tailwind CSS + shadcn/ui + lucide-react.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Onde editar

- **Conteúdo** (sobre, competências, experiências, formação, certificações, projetos, contato): `src/data/profile.ts`. Os trechos com `[EDITAR]` ainda precisam ser preenchidos.
- **Cores da marca**: variáveis em `src/index.css` (marinho, céu, rosa, rosa claro, papel). No Tailwind: `bg-marinho`, `bg-ceu`, `bg-rosa`, `bg-rosa-claro`, `bg-papel`.
- **Fontes**: Bricolage Grotesque Bold (títulos, classe `font-display`) e DM Sans (textos), carregadas em `index.html`.
- **Logo**: `src/components/logo.tsx`. Sempre uma só cor: marinho em fundo claro, branco em fundo escuro.
- **Componentes de UI** (shadcn/ui): `src/components/ui/`. Para adicionar mais: `npx shadcn@latest add <componente>`.

## Páginas

- `/` — apresentação, sobre e competências, experiência, formação, certificações, projetos em destaque e contato
- `/projetos` — todos os projetos com filtro por tag
- `/projetos/:slug` — detalhe de um projeto
