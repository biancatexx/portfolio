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

- **Conteúdo** (nome, sobre, experiências, formação, competências, projetos, links): `src/data/profile.ts`. Os trechos com `[EDITAR]` são exemplos.
- **Cores** (tema claro e escuro): variáveis em `src/index.css`.
- **Componentes de UI** (shadcn/ui): `src/components/ui/`. Para adicionar mais: `npx shadcn@latest add <componente>`.
- **Foto**: coloque em `public/` e troque o bloco de iniciais em `src/components/sections/hero.tsx`.

## Páginas

- `/` — início, sobre, experiência, projetos em destaque e contato
- `/projetos` — todos os projetos com filtro por tecnologia
- `/projetos/:slug` — detalhe de um projeto
