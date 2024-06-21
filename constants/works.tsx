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
}