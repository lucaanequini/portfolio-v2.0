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
                                    Hello, my name is <span className="text-blue font-bold">Luca Anequini Antoniazzi</span>, i&apos;m <span className="text-blue font-bold">19</span> years old, I&apos;m from São Paulo, SP, Brazil. I&apos;m studying <span className="text-blue font-bold">Computer Science</span> at FEI Iand always looking to improve my skills, especially in <span className="text-blue font-bold">software development</span>. Right now, I&apos;m an intern at <span className="text-blue font-bold">Robotec Solutions</span>, where I work on full-stack development using Blazor, .NET, APIs, and Distributed Systems.
                                </>
                                :
                                <>
                                    Olá, me chamo <span className="text-blue font-bold">Luca Anequini Antoniazzi</span>, tenho <span className="text-blue font-bold">19</span> anos e sou natural de São Paulo, SP, Brasil. Atualmente, estou cursando <span className="text-blue font-bold">Ciência da Computação</span> na FEI e sempre em busca de aprimorar meus conhecimentos principalmente na área de desenvolvimento de software, para isso estou atuando como estagiário na <span className="text-blue font-bold">Robotec Solutions</span>, onde atuo no desenvolvimento fullstack com foco em Blazor, .NET, APIs e Sistema Distribuídos.
                                </>
                            }
                        </p>
                        <p className="text-justify">
                            {language === 'en' ?
                                <>
                                    In my graduation and through courses, I've learned several program languages, like <span className="text-blue font-bold">Python, TypeScript (React and NodeJS), C and Java</span>, which I fell comfortable working with them. I&apos;m always looking for <span className="text-blue font-bold">new challenges</span> to grow and contribute to exciting projects. If you&apos;re interested on my work, please feel free to <span className="text-blue font-bold">contact me</span>.
                                </>
                                :
                                <>
                                    Durante minha graduação e através de cursos já estudei algumas outras linguagens de programação, que também tenho grande domnínio como: <span className="text-blue font-bold">Python, TypeScript (React e NodeJS), C e Java</span>. Estou sempre a procura de <span className="text-blue font-bold">novos desafios</span> para melhorar minhas habilidades e contribuir para projetos inovadores. Se você gostou do que viu aqui e se interessa em meu trabalho, por favor <span className="text-blue font-bold">entre em contato</span>.
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