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
  location: "Fortaleza, Ceará, Brasil",
  tagline: "Do desenho ao código.",
  headline: "Experiências digitais, do desenho ao código.",
  about: [
    "Me empenho em estar sempre envolvida em projetos que possam trazer mudanças e inovação. Estou em constante busca de coisas que me façam repensar minhas certezas e me impulsionem a explorar novas possibilidades.",
    "Sou UX/UI Designer desde 2018, formada em Sistemas para Internet e pós-graduada em Experiência do Usuário. Comecei desenvolvendo sites e sistemas web, e hoje levo essa base técnica para o design: pesquisa de usuário, arquitetura da informação e interfaces pensadas para serem construídas.",
  ],
  email: "", // [EDITAR] ex.: "contato@seudominio.com" (vazio = não aparece)
  whatsapp: "", // [EDITAR] só números com DDI e DDD, ex.: "5585999999999" (vazio = não aparece)
  resumeUrl: "", // [EDITAR] link para o currículo em PDF (vazio = botão escondido)
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/biancatex/", icon: "linkedin" },
    // { label: "GitHub", href: "https://github.com/seu-usuario", icon: "github" }, // [EDITAR]
  ] satisfies SocialLink[],
  stats: [
    { value: "8+", label: "anos com UX/UI" },
    { value: "11", label: "certificações" },
    { value: "3", label: "empresas" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "UX / UI",
    items: [
      "Design de experiência do usuário (UX)",
      "Design de interface (UI)",
      "Pesquisa de usuário",
      "Arquitetura da informação",
      "Protótipos navegáveis",
      "Design systems",
    ],
  },
  { group: "Front-end", items: ["Desenvolvimento de sites", "Sistemas web"] }, // [EDITAR] tecnologias (HTML, CSS, JS, React...)
  { group: "Métodos e marketing", items: ["Scrum", "SEO", "Google Ads", "Google Analytics"] },
];

export const experiences: Experience[] = [
  {
    role: "UX / UI Designer",
    company: "Grupo Educacional Aqui Você Pode",
    period: "fev. 2020 - atual",
    location: "Tempo integral",
    description: "Design de experiência do usuário (UX) e de interfaces para os produtos digitais do grupo.",
    highlights: [], // [EDITAR] principais entregas e resultados
  },
  {
    role: "UX / UI Designer",
    company: "SuperAvaliação",
    period: "mar. 2018 - nov. 2019",
    description: "Design de experiência do usuário (UX).",
    highlights: ["Pesquisa de usuário", "Arquitetura de informações"],
  },
  {
    role: "Desenvolvedora Web",
    company: "SuperAvaliação",
    period: "ago. 2017 - mar. 2018",
    description: "Desenvolvimento web com foco na experiência do usuário.",
    highlights: ["Desenvolvimento de sites", "Desenvolvimento de sistema web de leilão de veículos"],
  },
  {
    role: "Marketing Digital",
    company: "CARMAIS",
    period: "fev. 2016 - jul. 2017",
    location: "Fortaleza e Região",
    description: "Gestão e acompanhamento de canais digitais.",
    highlights: ["Acompanhamento de campanhas do Google Adwords", "Monitoramento de sites pelo Google Analytics"],
  },
  {
    role: "Administrativo",
    company: "CARMAIS",
    period: "jan. 2014 - jan. 2016",
    location: "Fortaleza e Região",
    description: "Rotinas operacionais do segmento de seguros de veículos.",
    highlights: [
      "Execução de rotinas operacionais de seguros de veículos",
      "Apoio na implantação do sistema de gestão TELEPORT",
    ],
  },
];

// [EDITAR] o LinkedIn lista 4 formações; o PDF mostrou só estas 2
export const education: Education[] = [
  {
    course: "Pós-graduação Lato Sensu em Experiência do Usuário (UX)",
    institution: "Anhanguera Educacional",
    period: "abr. 2024 - out. 2024",
  },
  {
    course: "Graduação Tecnológica em Sistemas para Internet",
    institution: "UNIGRANDE - Centro Universitário da Grande Fortaleza",
    period: "ago. 2016 - dez. 2023",
  },
];

// [EDITAR] o LinkedIn lista 11 certificações; o PDF mostrou só estas 2
export const certifications: Certification[] = [
  { name: "SEO para Iniciantes", issuer: "Mirago Marketing Digital", date: "jan. 2024" },
  { name: "Arquitetura da informação e Projeto de sistemas", issuer: "TIM Brasil", date: "ago. 2019" },
];

// [EDITAR] seus projetos (estes ainda são exemplos)
export const projects: Project[] = [
  {
    slug: "projeto-um",
    title: "Projeto Um",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões e o resultado alcançado.",
    tags: ["UX", "Pesquisa"],
  },
  {
    slug: "projeto-dois",
    title: "Projeto Dois",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões e o resultado alcançado.",
    tags: ["UI", "Design System"],
  },
  {
    slug: "projeto-tres",
    title: "Projeto Três",
    summary: "Uma frase curta explicando o que o projeto resolve.",
    description:
      "Descrição completa do projeto: o problema, o que você fez, as decisões e o resultado alcançado.",
    tags: ["Front-end", "Web"],
  },
];
