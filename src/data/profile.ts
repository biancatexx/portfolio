/**
 * Todo o conteúdo do portfólio fica aqui.
 * Fontes: perfil do LinkedIn e guia de identidade visual. Trechos com [EDITAR] ainda precisam de você.
 *
 * Tom de voz da marca: curiosa, clara (frases curtas, sem jargão) e inovadora (mostra o porquê).
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail";
};

export type Service = {
  title: string;
  description: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const profile = {
  name: "Bianca Teixeira",
  role: "UX/UI Designer · Front-end",
  location: "Fortaleza, CE",
  tagline: "Do desenho ao código.",
  headline: "Experiências digitais, do desenho ao código.",
  intro:
    "Sou Bianca Teixeira, UX/UI Designer e front-end em Fortaleza. Gosto de projetos que trazem mudança e inovação.",
  email: "", // [EDITAR] ex.: "contato@seudominio.com" (vazio = não aparece)
  whatsapp: "", // [EDITAR] só números com DDI e DDD, ex.: "5585999999999" (vazio = não aparece)
  linkedin: { label: "/in/biancatex", href: "https://www.linkedin.com/in/biancatex/" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/biancatex/", icon: "linkedin" },
  ] satisfies SocialLink[],
};

export const services: Service[] = [
  { title: "UX e pesquisa", description: "Pesquisa com usuários, arquitetura da informação e fluxos." },
  { title: "UI e protótipos", description: "Telas e protótipos navegáveis para validar antes de construir." },
  { title: "Front-end", description: "Interfaces implementadas com fidelidade ao design." },
  { title: "Design systems", description: "Identidade, componentes e padrões para o produto crescer." },
];

export const timeline: TimelineItem[] = [
  { period: "2020 — hoje", title: "UX/UI Designer", place: "Grupo Educacional Aqui Você Pode" },
  { period: "2018 — 2019", title: "UX/UI Designer", place: "SuperAvaliação" },
  { period: "2017 — 2018", title: "Desenvolvedora Web", place: "SuperAvaliação" },
  { period: "2024", title: "Pós-graduação em Experiência do Usuário", place: "Anhanguera" },
  { period: "2016 — 2023", title: "Sistemas para Internet", place: "UniGrande" },
];

// [EDITAR] o LinkedIn lista 11 certificações; o PDF mostrou só estas 2
export const certifications: Certification[] = [
  { name: "SEO para Iniciantes", issuer: "Mirago Marketing Digital", date: "2024" },
  { name: "Arquitetura da informação e Projeto de sistemas", issuer: "TIM Brasil", date: "2019" },
];

/**
 * [EDITAR] Cases do portfólio. Enquanto a lista estiver vazia, a seção e o link "Projetos" ficam escondidos.
 * Exemplo:
 * {
 *   slug: "app-matriculas",
 *   title: "App de matrículas",
 *   summary: "Uma frase curta sobre o problema resolvido.",
 *   description: "O desafio, o que você fez, as decisões e o resultado.",
 *   tags: ["UX", "Pesquisa"],
 *   link: "https://...",
 * },
 */
export const projects: Project[] = [];
