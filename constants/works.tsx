interface ProjectType {
    [key: string]: {
        title: string
        descriptionEn: string
        descriptionBr: string
        techStack: string[]
        link: string | null
        github: string | null
        imgUrl: string
    }
}


export const works: ProjectType = {
    ecommerceStore: {
        title: 'Ecommerce Store: Online Store',
        descriptionEn: 'Online store, where you can see the products, add them to the cart, remove, choose size and buy it.',
        descriptionBr: 'Loja online, onde você pode ver os produtos, adicioná-los ao carrinho, remover, escolher o tamanho e comprá-lo.',
        techStack: ['TypeScript', 'React', 'Stripe', 'NextJS', 'RestAPI', 'Tailwind CSS',],
        link: 'https://ecommerce-store-gamma-eight.vercel.app/',
        github: 'https://github.com/lucaanequini/ecommerce-store',
        imgUrl: '/ecommerce-store.png'
    },
    ecommerceAdmin: {
        title: 'Ecommerce Admin: Admin Panel',
        descriptionEn: 'Admin panel, where you can manage everything about the products, see the orders and have an overview about your sales.',
        descriptionBr: 'Painel de administração, onde você pode gerenciar tudo sobre os produtos, ver os pedidos e visualizar um resumo de suas vendas.',
        techStack: ['TypeScript', 'React', 'NextJS', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
        link: 'https://ecommerce-admin-gamma-eight.vercel.app/',
        github: 'https://ecommerce-admin-six-lac.vercel.app/',
        imgUrl: '/ecommerce-admin.png'
    },
    jotion: {
        title: 'Jotion: Notion Clone',
        descriptionEn: 'Notion clone, with all the features! You can create a new note, introduce images, different types of text and even share them with your friends!',
        descriptionBr: 'Clone do Notion, com todos os recursos! Você pode criar uma nova nota, introduzir imagens, diferentes tipos de texto e até compartilhá-los com seus amigos!',
        techStack: ['React', 'TypeScript', 'Convex', 'TailwindCSS'],
        link: 'https://note-taking-app-woad-eight.vercel.app/',
        github: 'https://github.com/lucaanequini/notion-clone',
        imgUrl: '/jotion.png'
    },
    onebitflix: {
        title: 'OneBitFlix: Course Platform',
        descriptionEn: "That's a full course platform, inspired by Netflix. You can create an account, login, watch episodes from different courses, favorite an episode and many others features. With the admin login you can also manage everything.",
        descriptionBr: 'Plataforma de cursos, inspirada na Netflix. Você pode criar uma conta, fazer login e assistir episódios de diferentes cursos, favoritar um episódio e muitas outras funcionalidades. Com o login de administrador, você também pode gerenciar tudo.',
        techStack: ['TypeScript', 'React', 'Bootstrap', 'Express', 'Sequelize', 'NodeJS', 'AdminJS', 'PostgreSQL'],
        link: null,
        github: 'https://github.com/lucaanequini/onebitflix-backend/blob/main/package.json',
        imgUrl: '/onebitflix.png'
    },
    onebitx: {
        title: 'OneBitX: SpaceX Clone',
        descriptionEn: 'SpaceX landings pages clone, with all informations about the launches, rockets and capsules.',
        descriptionBr: 'Clone das páginas de pousos da SpaceX, com todas as informações sobre os lançamentos, foguetes e cápsulas.',
        techStack: ['HTML', 'SASS'],
        link: null,
        github: 'https://github.com/lucaanequini/OneBitX',
        imgUrl: '/onebitx.png'
    },
    weather: {
        title: 'Live Weather: Weather App',
        descriptionEn: 'Weather app, where you can see the current weather for your location or search for a city and also you can see some breaking weather news.',
        descriptionBr: 'Aplicativo de clima, onde você pode ver o clima atual para sua localização ou pesquisar por uma cidade e também pode ver algumas notícias sobre clima.',
        techStack: ['TypeScript', 'React', 'REST APIs', 'Tailwind CSS'],
        link: 'https://live-weather-project.vercel.app/',
        github: 'https://github.com/lucaanequini/live-weather',
        imgUrl: '/live-weather.png'
    },
    smartprop: {
        title: 'SmartProp: Real Trade Market Platform',
        descriptionEn: 'An intuitive platform for managing trading market plans, allowing clients to purchase plans and set their start dates, with optimized features to track the progress and performance of each plan',
        descriptionBr: 'Plataforma intuitiva para gerenciamento de planos de trade, permitindo que os clientes adquiram planos e definam a data de início conforme sua conveniência, com funcionalidades otimizadas para acompanhar o progresso e desempenho de cada plano contratado.',
        techStack: ['TypeScript', 'React', 'NextJS', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Mercado Pago'],
        link: 'https://mesasmartprop.com.br/',
        github: null,
        imgUrl: '/smartprop.png'
    }
}