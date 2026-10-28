import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Project } from "./type";

export const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const socials: { label: string; href: string; icon: IconType }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardo-hernandes/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/leonardohernandesq",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=351922269284&type=phone_number&app_absent=0",
    icon: FaWhatsapp,
  },
];

export const skills = [
  { name: "HTML", icon: "/stacks/html.png" },
  { name: "CSS", icon: "/stacks/css.png" },
  { name: "JavaScript", icon: "/stacks/js.png" },
  { name: "TypeScript", icon: "/stacks/typescript.png" },
  { name: "React", icon: "/stacks/react.png" },
  { name: "Next.js", icon: "/stacks/next.png" },
  { name: "Node.js", icon: "/stacks/nodejs.png" },
  { name: "Firebase", icon: "/stacks/firebase.png" },
  { name: "MongoDB", icon: "/stacks/mongodb.png" },
  { name: "PostgreSQL", icon: "/stacks/postgresql.png" },
  { name: "WordPress", icon: "/stacks/wordpress.png" },
  { name: "Git", icon: "/stacks/git.svg" },
];

export const experiences = [
  {
    company: "ITSector",
    role: "Desenvolvedor Front-end",
    period: "Set 2025 — Atual",
    location: "Lisboa, Portugal",
    description:
      'Desenvolvo e evoluo funcionalidades da app bancária de uma instituição financeira portuguesa, distinguida com o Prémio Cinco Estrelas em "Apps Bancárias" por 4 anos consecutivos. Analiso problemas e entrego soluções com autonomia, trabalho com equipes multidisciplinares e participo ativamente das revisões de código.',
    stack: ["React", "Typescript", "Trabalho em equipa", "Design System"],
  },
  {
    company: "Lusodados",
    role: "Desenvolvedor Full Stack",
    period: "Mar 2023 — Set 2025",
    location: "Lisboa, Portugal",
    description:
      "Liderei o desenvolvimento de projetos web de ponta a ponta: interfaces em React, APIs em Node.js e integração com bancos de dados. Aplico técnicas de SEO para aumentar o tráfego orgânico dos clientes e garanto a qualidade de cada entrega com testes antes de ir para produção.",
    stack: ["React", "Node.js", "Bancos de dados", "SEO"],
  },
  {
    company: "C7 Business",
    role: "Desenvolvedor Front-end",
    period: "Ago 2022 — Dez 2022",
    location: "Portugal",
    description:
      "Desenvolvi o front-end de sistemas web e entreguei dois aplicativos móveis em React Native, com foco em design responsivo e usabilidade, adaptando rápido aos feedbacks para cumprir prazo e orçamento.",
    stack: ["React", "React Native", "Mobile"],
  },
  {
    company: "Phoenix Publicidade",
    role: "Desenvolvedor Front-end",
    period: "Mar 2020 — Abr 2022",
    location: "Suzano, Brasil",
    description:
      "Participei de todo o ciclo de sites e aplicativos, do planejamento à entrega. Integrei APIs e serviços externos, otimizei desempenho e tempo de carregamento e mantive os projetos estáveis em diferentes dispositivos e navegadores.",
    stack: ["Sites", "Aplicativos", "Performance", "APIs"],
  },
];

export const projects: Project[] = [
  {
    title: "Nails Lux",
    description:
      "Site de um estúdio de unhas em Portugal, com serviços, portfólio e um fluxo de marcação em que a cliente escolhe serviço, data e hora e o pedido chega direto no WhatsApp.",
    image: "/projects/nailslux.png",
    tags: ["Landing page", "Agendamento", "WhatsApp"],
    live: "https://nailslux.vercel.app/",
  },
  {
    title: "Casa em Dia",
    description:
      "App mobile para organizar as contas da casa e garantir que nenhuma fique para trás: toda conta paga, todo mês. Cada pessoa tem a sua conta com login próprio.",
    image: "/projects/casaemdia.png",
    tags: ["Mobile", "Finanças pessoais", "Autenticação"],
    live: "https://contasemdia-chi.vercel.app/",
    mobile: true,
  },
  {
    title: "Restaurante Spumoni",
    description:
      "Cardápio digital do Restaurante & Sorveteria Spumoni, com pratos organizados por categoria, carrinho de pedidos e indicação de aberto ou fechado.",
    image: "/projects/pumoni.png",
    tags: ["Cardápio digital", "Carrinho", "Pedidos"],
    live: "https://site.restaurantespumoni.com.br/",
  },
  {
    title: "ARP GOV",
    description:
      "Plataforma de vendas para órgãos públicos com catálogo de atas de registro de preços, categorias, busca, filtros e carrinho para solicitar adesão.",
    image: "/projects/arpgov.png",
    tags: ["Catálogo", "Busca e filtros", "B2G"],
    live: "https://arpgov.com.br/",
  },
  {
    title: "Korn Translations",
    description:
      "Site institucional multilíngue de uma empresa de traduções com 30 anos de mercado, com páginas de serviços, certificações ISO, blog e pedido de orçamento.",
    image: "/projects/korn.png",
    tags: ["Institucional", "Multilíngue", "Blog"],
    live: "https://korntranslations.com/",
  },
  {
    title: "Barbearia Hernandes",
    description:
      "Site one-page de uma barbearia em São Paulo, com identidade visual marcante, apresentação da equipe, serviços e agendamento online ou pelo WhatsApp.",
    image: "/projects/barbeariahernandes.png",
    tags: ["One-page", "Agendamento", "Branding"],
    live: "https://www.barbeariahernandes.com.br/",
  },
  {
    title: "InvestSmart",
    description:
      "Landing page de consultoria de investimentos com gráficos interativos, ticker de ações, cripto e ETFs, etapas do serviço e formulário de captação de leads.",
    image: "/projects/infoproducts.png",
    tags: ["Landing page", "Gráficos", "Leads"],
    live: "https://lp-infoproducts.vercel.app/",
  },
  {
    title: "BarberPro",
    description:
      "Sistema de barbearia com CRUD de serviços, fila de clientes, rotas autenticadas com JWT e planos gratuito e premium integrados ao gateway de pagamento da Stripe.",
    image: "/barberpro.png",
    tags: ["SaaS", "Stripe", "JWT"],
    github: "https://github.com/leonardohernandesq/barbershop-system",
  },
  {
    title: "Sistema de Chamados",
    description:
      "Dashboard de registro de chamados onde é possível visualizar, editar e excluir cada atendimento. Construído com React e Firebase.",
    image: "/sistemadechamados.png",
    tags: ["React", "Firebase", "Dashboard"],
    github: "https://github.com/leonardohernandesq/sistemadechamados",
    live: "https://sistemadechamados.vercel.app/",
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "Anos de experiência" },
  { value: 4, suffix: "", label: "Empresas no Brasil e em Portugal" },
  { value: 75, suffix: "+", label: "Projetos construídos" },
];
