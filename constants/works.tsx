interface ProjectType {
    [key: string]: {
        title: string
        descriptionEn: string
        descriptionBr: string
        techStack: string[]
        link: string | null
        github: string
        imgUrl: string
    }
}


export const works: ProjectType = {
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
    }
}