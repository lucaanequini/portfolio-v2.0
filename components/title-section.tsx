'use client'

import { useTranslator } from "@/hooks/use-translator"

export const TitleSection = () => {
    const language = useTranslator(lg => lg.language)
    return (
        <div className="flex flex-col gap-y-5 items-center justify-center my-auto" data-aos='fade-up'>
            <p className="text-lg bg-light-blue px-5 rounded-full text-center">{language === 'en' ? 'Software Developer' : 'Desenvolvedor de Software'}</p>
            <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-blue">Luca Antoniazzi</p>
        </div>
    )
}