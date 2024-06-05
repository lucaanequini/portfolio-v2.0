'use client'

import { useTranslator } from "@/hooks/use-translator"

import { WorkCard } from "./work-card"
import { WorksPagination } from "./pagination"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import { ArrowRight } from "lucide-react"

const projects = [
    'jotion',
    'onebitflix',
    'onebitflix',
    'jotion',
    'onebitflix',
    'jotion'
]


export const WorksSection = () => {
    const language = useTranslator(lg => lg.language)
    return (
        <div className="h-screen px-5 lg:px-20 xl:px-40" id='works'>
            <p className="font-bold text-3xl md:text-5xl text-blue pb-5">
                {language === 'en' ? 'Works' : 'Trabalhos'}
            </p>
            <div className="flex gap-x-1 items-center justify-center">
                <p className="text-sm text-gray">{language === 'en' ? 'Swipe to see more' : 'Deslize para ver mais'} </p>
                <ArrowRight className="w-4 h-4 text-gray" />
            </div>
            <div className="flex flex-col gap-5">
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
                <WorksPagination />
            </div>
        </div >
    )
}