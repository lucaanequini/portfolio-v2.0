'use client'

import Image from "next/image"
import { useTranslator } from "@/hooks/use-translator"

import { TechStack } from "./tech/tech-stack"

export const About = () => {
    const language = useTranslator(lg => lg.language)

    return (
        <>
            <div className="h-auto justify-center w-full px-5 flex flex-col lg:px-20 xl:px-40 lg:gap-y-10" id='bio'>
                <p className="font-bold text-3xl sm:text-5xl text-blue" data-aos='fade-right'>Bio</p>
                <div className="flex flex-col gap-10 items-center justify-center pt-5 sm:flex-row xl:justify-between">
                    <div className="flex items-center w-60 h-60 sm:h-80 sm:w-80" data-aos='fade-right'>
                        <Image
                            src='/bio.jpg'
                            alt='bio'
                            height={200}
                            width={200}
                            layout='responsive'
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-y-5 sm:gap-y-10 sm:w-[40%] xl:w-[60%]" data-aos='fade-left'>
                        <p className="text-justify">
                            {language === 'en' ?
                                <>
                                    Hello, my name is <span className="text-blue font-bold">Luca Anequini Antoniazzi</span>, i&apos;m <span className="text-blue font-bold">19</span> years old, I&apos;m from São Paulo, SP, Brazil and currently I&apos;m studying <span className="text-blue font-bold">Computer Science</span> at FEI. I have about 6 months of experience in <span className="text-blue font-bold">FullStack JavaScript</span> development with freelances and personal projects.
                                </>
                                :
                                <>
                                    Olá, me chamo <span className="text-blue font-bold">Luca Anequini Antoniazzi</span>, tenho <span className="text-blue font-bold">19</span> anos e sou natural de São Paulo, SP, Brasil e atualmente estou estudando <span className="text-blue font-bold">Ciência da Computação</span> na FEI. Tenho cerca de 6 meses de experiência com desenvolvimento <span className="text-blue font-bold">FullStack JavaScript</span> que adquiri por meio de freelances e projetos pessoais.
                                </>
                            }
                        </p>
                        <p className="text-justify">
                            {language === 'en' ?
                                <>
                                    In my graduation I already studied some program languages, such as:  <span className="text-blue font-bold">Python, C and Java</span>. I&apos;m also seeking <span className="text-blue font-bold">new opportunities</span> to expand my skills and contribute to innovative projects. If you like my job and have an opportunity, please feel free to <span className="text-blue font-bold">contact me</span>.
                                </>
                                :
                                <>
                                    Em minha graduação já estudei algumas linguagens de programação, como: <span className="text-blue font-bold">Python, C e Java</span>. Eu também estou procurando por <span className="text-blue font-bold">novas oportunidades</span> para melhorar minhas habilidades e contribuir para projetos inovadores. Se você gostou do que viu aqui e tem uma oportunidade, por favor <span className="text-blue font-bold">entre em contato</span>.'
                                </>
                            }
                        </p>
                    </div>
                </div>
                <div className="mt-14 sm:mt-0">
                    <TechStack />
                </div>
            </div >
        </>
    )
}