interface IProject {
    id: string;
    background: string;
    title: string;
    description: string;
    linkproject: string;
    linkgithub: string;
}

export const project: IProject[] = [
    {
        id: String(Math.random()),
        background: "devhall.jpeg",
        title: "Dev Hall - Imobiliária",
        description: "O projeto consiste em um sistema de imobiliária com parte de administração, onde o cliente pode adicionar seus imóveis e corretores, rotas autenticadas com token JWT e também uma área de site institucional, onde o público alvo pode acessar e verificar os imóveis disponíveis e até favoritar eles!",
        linkproject: "https://devhall-frontend.vercel.app/",
        linkgithub: "https://github.com/leonardohernandesq/devhall-frontend",
    },
    {
        id: String(Math.random()),
        background: "barberpro.png",
        title: "BarberPro - Sistema Barbearia",
        description: "Esse é um projeto que consiste em um sistema de barbearia com CRUD de serviços, fila de clientes, rotas autenticadas com token JWT, sistema gratuito e premium integrado com Gateway de pagamento da Stripe para efetuar a assinatura do cliente!",
        linkproject: "https://github.com/leonardohernandesq",
        linkgithub: "https://github.com/leonardohernandesq/barbershop-system",
    },
    {
        id: String(Math.random()),
        background: "finansystem.jpeg",
        title: "FinanSystem - Controle",
        description: "Cansado de não saber para onde vai o seu dinheiro?. O Finansystem é responsável por auxiliar você a ficar de olho onde e como você está gastando o seu dinheiro, o sistema possui um CRUD de finanças com categorias e tudo mais.",
        linkproject: "https://github.com/leonardohernandesq",
        linkgithub: "https://github.com/leonardohernandesq/finansystem",
    },
    {
        id: String(Math.random()),
        background: "sistemadechamados.png",
        title: "Sistema de Chamados",
        description: "Sistema de registros de chamados, consiste em uma dashboard com os chamados onde conseguimos visualizar, editar e excluir o chamado. O projeto foi criado com React e FireBase.",
        linkproject: "https://sistemadechamados.vercel.app/",
        linkgithub: "https://github.com/leonardohernandesq/sistemadechamados",
    },

]