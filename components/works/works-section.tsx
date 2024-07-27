'use client'

import { useTranslator } from "@/hooks/use-translator"

import { WorkCard } from "./work-card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import { ArrowRight } from "lucide-react"


const projects = [
    'ecommerceStore',
    'ecommerceAdmin',
    'weather',
    'jotion',
    'onebitflix',
    'onebitx',
]


export const WorksSection = () => {
    const language = useTranslator(lg => lg.language)
    return (
        <>
            <div className="h-auto flex flex-col mt-40 justify-center px-5 lg:px-20 xl:px-40" id='works'>
                <p className="font-bold text-3xl sm:text-5xl text-blue pb-5" data-aos='fade-right'>
                    {language === 'en' ? 'Main Works' : 'Principais Trabalhos'}
                </p>
                <div className="flex gap-x-1 items-center justify-center mt-10 sm:hidden" data-aos='zoom-out'>
                    <p className="text-sm text-gray">{language === 'en' ? 'Swipe to see more' : 'Deslize para ver mais'} </p>
                    <ArrowRight className="w-4 h-4 text-gray" />
                </div>
                <div className="flex flex-col gap-5 sm:mt-10" data-aos='zoom-out'>
                    <Carousel className="sm:hidden">
                        <CarouselContent>
                            {projects.map((currentProject, index) => (
                                <CarouselItem key={index} className="basis">
                                    <WorkCard key={currentProject} work={currentProject} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="hidden sm:block">
                    <div className="grid sm:grid-cols-1 gap-y-20 justify-center">
                        {projects.map((currentProject, index) => (
                            <WorkCard work={currentProject} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}