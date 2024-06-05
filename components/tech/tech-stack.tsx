'use client'

import { Icons, TechIcon } from "./tech-icon"

import { useState } from "react"

import { useTranslator } from "@/hooks/use-translator"


const techIcons: Icons[] = ['html', 'css', 'javascript', 'typescript', 'react', 'tailwind', 'next', 'node', 'java', 'springboot', 'postgres']

export const TechStack = () => {
    const language = useTranslator(lg => lg.language)

    return (
        <div className="h-auto mb-20 sm:h-screen sm:mb-0 min-[1340px]:h-[90vh] justify-center items-center px-5 lg:px-20 xl:px-40 pt-10 sm:pt-0">
            <p className="font-bold text-3xl sm:text-5xl text-blue">Tech Stack</p>
            <div className="w-full flex flex-wrap items-center mt-10 justify-center gap-3">
                {techIcons.map((icon, index) => (
                    <TechIcon
                        icon={icon}
                        key={index}
                        color="#202020"
                    />
                ))}
            </div>
            <p className="text-justify pt-5 lg:mx-20 xl:mx-40 xl:pt-8">
                {language === 'en' ?
                    <>
                        My tech stack is a broad combination of <span className="text-blue font-bold">web development</span>. <br /><br /> On front-end I dominate <span className="text-blue font-bold">HTML, CSS and SASS</span>.
                        I&apos;ve also been using <span className="text-blue font-bold">Boostrap and Tailwind CSS</span>, which allow me to create attractive and resposive applications.
                        I&apos;m very very familiar with <span className="text-blue font-bold">JavaScript and TypeScript</span>, as well as with <span className="text-blue font-bold">React</span> to make applications more interactive.
                        <br /><br />
                        On back-end I have been studyng <span className="text-blue font-bold">Java</span> with <span className="text-blue font-bold">Springboot</span>, but I have strongs skills with <span className="text-blue font-bold">NodeJS</span>, along with <span className="text-blue font-bold">SQL (MySQL and PostgreSQL)</span> or <span className="text-blue font-bold">NoSQL (MongoDB)</span> databases.
                        Some other allies in my daily life are: <span className="text-blue font-bold">NextJS</span> for building these applications and <span className="text-blue font-bold">Git and GitHub</span> for versioning.
                    </>
                    :
                    <>
                        Minha tech stack é uma combinação ampla de tecnologias de <span className="text-blue font-bold">desenvolvimento web</span>. No front-end domino <span className="text-blue font-bold">HTML, CSS e SASS</span>.
                        Também tenho utilizado bastante <span className="text-blue font-bold">Bootstrap e Tailwind CSS</span> que me permitem criar interfaces atrantes e responsivas. Tenho grande familiaridade com <span className="text-blue font-bold">JavaScript e TypeScript</span>,
                        assim como com React para deixar as aplicações mais interativas. No back-end venho estudando <span className="text-blue font-bold">Java</span> com <span className="text-blue font-bold">Springboot</span>, mas tenho forte habilidade com <span className="text-blue font-bold">NodeJS</span>, juntamente com
                        banco de dados <span className="text-blue font-bold">SQL (PostgreSQL e MySQL)</span> ou <span className="text-blue font-bold">NoSQL (MongoDB)</span>. Alguns outros aliados em meu dia a dia são: <span className="text-blue font-bold">NextJS</span> para a construção dessas aplicações e <span className="text-blue font-bold">Git e GitHub</span> para versionamento.

                    </>
                }
            </p>
        </div>
    )
}