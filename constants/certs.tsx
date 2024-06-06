interface CertsType {
    [key: string]: {
        titleBr: string
        titleEn: string
        company: string
        date: string
        link: string
    }
}

export const certs: CertsType = {
    fullStack: {
        titleBr: 'FullStack JavaScript',
        titleEn: 'FullStack JavaScript',
        company: 'OneBitCode',
        date: '22/04/2024',
        link: 'https://drive.google.com/file/d/19TFwDDZYSgUmGUsXQf2qjwtuLsUNduO4/view?usp=sharing'
    },
    frontEnd: {
        titleBr: 'Imersão Front-End',
        titleEn: 'Front-End Immersion',
        company: 'Alura',
        date: '06/02/2024',
        link: 'https://drive.google.com/file/d/1VfiMtlvFVYWRsjdzRba5qjsL_2iRM0ig/view?usp=sharing'
    },
    python: {
        titleBr: 'Imersão Python: do Excel à Análise de Dados',
        titleEn: 'Python Immersion: from Excel to Data Analysis',
        company: 'Alura',
        date: '08/04/2024',
        link: 'https://drive.google.com/file/d/1Oe-a8WaKRMQxG3Hbukx_f6ZP6Yq0-Rcm/view?usp=sharing'
    }
}