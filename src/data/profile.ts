/**
 * Todo o conteúdo do portfólio fica aqui.
 * Os trechos marcados com [EDITAR] são exemplos: troque pelos dados reais do seu LinkedIn.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail";
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export type Education = {
  course: string;
  institution: string;
  period: string;
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
  initials: "BT",
  role: "Desenvolvedora de Software", // [EDITAR] seu título do LinkedIn
  location: "Brasil", // [EDITAR] cidade, estado
  headline:
    "Construo produtos digitais com foco em código limpo, boa experiência de uso e entrega de valor.", // [EDITAR]
  about: [
    // [EDITAR] cole aqui o "Sobre" do LinkedIn, um parágrafo por item
    "Sou desenvolvedora com experiência em criar aplicações web modernas, do planejamento à publicação. Gosto de transformar problemas de negócio em soluções simples e bem construídas.",
    "Trabalho bem em equipe, valorizo comunicação clara e estou sempre aprendendo novas tecnologias e boas práticas.",
  ],
  email: "seu-email@exemplo.com", // [EDITAR]
  resumeUrl: "", // [EDITAR] link para o currículo em PDF (deixe vazio para esconder o botão)
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/biancatex/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/", icon: "github" }, // [EDITAR]
  ] satisfies SocialLink[],
  stats: [
    // [EDITAR]
    { value: "X+", label: "anos de experiência" },
    { value: "X+", label: "projetos entregues" },
    { value: "X", label: "empresas" },
  ],
};

// [EDITAR] cole as competências do LinkedIn
export const skills: { group: string; items: string[] }[] = [
  { group: "Front-end", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Back-end", items: ["Node.js", "APIs REST", "SQL"] },
  { group: "Ferramentas", items: ["Git", "Vite", "Figma", "Scrum"] },
];

// [EDITAR] experiências do LinkedIn, da mais recente para a mais antiga
export const experiences: Experience[] = [
  {
    role: "Cargo atual",
    company: "Empresa atual",
    period: "2023 - atual",
    location: "Remoto",
    description: "Resumo das suas responsabilidades nesta posição.",
    highlights: ["Uma conquista com resultado mensurável", "Outra entrega relevante"],
  },
  {
    role: "Cargo anterior",
    company: "Empresa anterior",
    period: "2021 - 2023",
    description: "Resumo das suas responsabilidades nesta posição.",
    highlights: ["Uma conquista com resultado mensurável"],
  },
];

// [EDITAR] formação do LinkedIn
export const education: Education[] = [
  { course: "Nome do curso", institution: "Instituição", period: "Ano de início - Ano de conclusão" },
];

// [EDITAR] seus projetos
export const projects: Project[] = [
  {
    slug: "projeto-um",
    title: "Projeto Um",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões técnicas e o resultado alcançado.",
    tags: ["React", "TypeScript"],
    link: "",
    repo: "",
  },
  {
    slug: "projeto-dois",
    title: "Projeto Dois",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões técnicas e o resultado alcançado.",
    tags: ["Node.js", "API"],
  },
  {
    slug: "projeto-tres",
    title: "Projeto Três",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões técnicas e o resultado alcançado.",
    tags: ["Tailwind CSS", "UI"],
  },
];
