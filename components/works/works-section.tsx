'use client'

import { useTranslator } from "@/hooks/use-translator"
import { WorkCard } from "./work-card"

const projects = [
    'jotion',
    'onebitflix'
]

export const WorksSection = () => {
    const language = useTranslator(lg => lg.language)
    return (
        <div className="h-screen px-5 lg:px-40">
            <p className="font-bold text-3xl sm:text-5xl text-blue pb-10">
                {language === 'en' ? 'Works' : 'Trabalhos'}
            </p>
            <div className="flex flex-col gap-5">
                {projects.map((currentProject) => (
                    <WorkCard key={currentProject} work={currentProject} />
                ))}
            </div>
        </div>
    )
}