import type { CaseStudy } from "../profile";

const img = (nome: string) => `/projetos/aprender/${nome}.jpg`;

/**
 * Estudo de caso: redesign do site, portal do aluno e painel do Instituto Aprender.
 * Baseado na comparação do site antigo (apps/web, Next 12) com o novo (apps/site, Next 16).
 */
export const aprender: CaseStudy = {
  client: "Instituto Educacional Aprender",
  role: "UX/UI Designer e front-end",
  period: "jul. — nov. 2026",
  team: "Eu no design e no front-end, com dois desenvolvedores",
  platforms: ["Site e loja de cursos", "Portal do aluno", "Painel administrativo"],
  stack: ["v0", "Next.js 16", "React 19", "Tailwind CSS 4", "shadcn/ui", "lucide-react"],

  overview:
    "O Aprender vende cursos livres online e presenciais em várias cidades. O site é a vitrine e o caixa: é nele que o aluno escolhe, paga e depois acompanha os cursos. O painel é onde a equipe cuida de turmas, alunos, financeiro e notas fiscais. Redesenhei os três produtos e ajudei a construir a nova versão, que hoje está no ar.",

  challenge: {
    intro:
      "O site antigo funcionava, mas fazia o aluno trabalhar demais antes de comprar. Antes de desenhar qualquer tela, percorri os fluxos de ponta a ponta e anotei onde as pessoas travavam.",
    problems: [
      {
        title: "Uma porta antes da vitrine",
        text: "O site abria numa tela obrigatória de escolha de cidade. Quem só queria um curso online precisava escolher uma cidade antes de ver qualquer curso.",
        image: img("antes-cidade"),
      },
      {
        title: "Cards que diziam tudo ao mesmo tempo",
        text: "Cada card repetia seis bandeiras de pagamento, texto de parcelamento e endereço completo. Os filtros eram uma lista longa de caixas em letras maiúsculas. Comparar dois cursos dava trabalho.",
        image: img("antes-cursos"),
      },
      {
        title: "Uma marca, vários estilos",
        text: "Degradês, sombras e ilustrações de estilos diferentes, construídos com três formas de estilizar no mesmo projeto (Bootstrap, styled-components e Emotion). Cada tela nova saía um pouco diferente.",
        image: img("antes-carrinho"),
      },
      {
        title: "Painel espalhado",
        text: "O painel tinha 59 telas. Só o financeiro se dividia em cinco telas de boleto e seis de nota fiscal, cada uma com seu próprio caminho no menu.",
        image: img("antes-admin"),
      },
    ],
  },

  process: [
    {
      title: "Auditoria",
      text: "Mapeei as rotas, regras de compra e telas do site, do portal e do painel, incluindo o que precisava continuar igual: endereços, regras de matrícula e integrações.",
    },
    {
      title: "Protótipo navegável",
      text: "Montei o protótipo com o v0 e refinei à mão, em mais de 100 iterações. Ele virou o fluxo de telas usado por todo o time.",
    },
    {
      title: "Design system",
      text: "Organizei cores da marca, tipografia, botões, campos, cards e padrões de página numa página viva dentro do próprio site, com 12 seções de referência.",
    },
    {
      title: "Construção com o time",
      text: "Implementamos o app novo tela a tela sobre a API que já existia, sem mudar contratos. Assumi parte do front-end: filtros de cursos, certificados em PDF, perguntas frequentes e telas do painel.",
    },
    {
      title: "Migração sem quebrar links",
      text: "Endereços antigos que estavam em e-mails, QR Codes de certificados e favoritos passaram a redirecionar para as páginas novas.",
    },
  ],

  solutions: [
    {
      title: "Vitrine aberta",
      text: "A home mostra os cursos logo de cara. A cidade virou opcional: fica no topo e o site só pergunta a localização quando ela ajuda a mostrar turmas presenciais perto do aluno.",
      before: img("antes-cidade"),
      after: img("depois-home"),
    },
    {
      title: "Encontrar o curso certo",
      text: "Categorias em cards, busca sempre visível no topo e filtros em pílulas que ficam salvos no endereço da página, então dá para compartilhar uma busca pronta.",
      before: img("antes-inicio"),
      after: img("depois-home-categorias"),
    },
    {
      title: "Cards que ajudam a decidir",
      text: "Cada card mostra só o que pesa na escolha: modalidade, carga horária, alunos e preço. Formas de pagamento aparecem uma vez, no checkout.",
      before: img("antes-cursos"),
      after: img("depois-cursos"),
    },
    {
      title: "Checkout em três passos",
      text: "Carrinho, identificação e pagamento, com progresso visível. O Pix é acompanhado em tempo real e o boleto sai em PDF na hora.",
      before: img("antes-carrinho"),
      after: img("depois-checkout"),
    },
    {
      title: "Painel e portal no mesmo idioma",
      text: "O painel ganhou o mesmo visual do site. Boletos e notas fiscais viraram abas de uma tela só, e o portal do aluno passou a ter um endereço para cada área.",
      before: img("antes-admin"),
      after: img("depois-admin"),
    },
    {
      title: "Pensado para o celular",
      text: "No antigo, a foto do topo ocupava a tela inteira antes de qualquer curso. No novo, busca, cidade e carrinho ficam ao alcance do polegar.",
      before: img("antes-mobile"),
      after: img("depois-mobile"),
      mobile: true,
    },
  ],

  gallery: [
    { src: img("depois-curso"), caption: "Página do curso: conteúdo, formato das aulas, certificado e compra sempre à vista." },
    { src: img("depois-portal"), caption: "Portal do aluno: o que tem lá dentro aparece antes mesmo do login." },
    { src: img("depois-ds"), caption: "Design system vivo, usado como referência pelo time para criar telas novas." },
  ],

  results: [
    { value: "3 em 1", label: "site, portal e painel num só app e num só visual" },
    { value: "5 → 1", label: "telas de boleto agrupadas em abas" },
    { value: "6 → 1", label: "telas de nota fiscal agrupadas em um painel" },
    { value: "13", label: "endereços antigos redirecionados, sem link quebrado" },
  ],

  extras: [
    "Controles de contraste e tamanho de fonte no topo de todas as páginas",
    "Esqueletos de carregamento com o mesmo layout da tela real",
    "Validação pública de diploma por código ou QR Code",
    "Publicação com conferência automática de rotas e volta rápida para a versão anterior",
  ],

  learnings: [
    "Tirar uma barreira vale mais do que enfeitar uma tela. A escolha de cidade obrigatória era o maior atrito, e a solução foi deixar de pedir.",
    "Desenhar já pensando no código encurtou o caminho: o protótipo virou o design system, e o design system virou componentes.",
    "Em um redesign, o que não muda também é projeto. Manter endereços e regras de compra deu segurança para trocar todo o resto.",
  ],
};
