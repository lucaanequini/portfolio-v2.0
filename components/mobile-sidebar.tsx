'use client'

import { useState } from "react"

import { useTranslator } from "@/hooks/use-translator"

import Image from "next/image"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "./ui/button"

import { Menu, Globe } from "lucide-react"


export const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const language = useTranslator(lg => lg.language)
    const onLanguageChange = useTranslator(lg => lg.onChange)

    const closeSheet = () => {
        setIsOpen(false);
    };

    return (
        < Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <Button variant='blue'><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader className="border-b border-blue py-5">
                    <div className="flex mx-auto items-center w-16 h-16 xl:w-20 xl:h-20">
                        <Image src='/logo.svg' alt='logo' layout="responsive" width={100} height={100} />
                    </div>
                </SheetHeader>
                <div className="font-semibold text-blue text-lg flex flex-col items-center justify-center gap-y-10 border-b border-blue py-5">
                    <a href='#home'
                        onClick={closeSheet}
                        className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300"
                    >
                        Home
                    </a>
                    <a href='#bio'
                        onClick={closeSheet}
                        className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300"
                    >
                        Bio
                    </a>
                    <a href='#works'
                        onClick={closeSheet}
                        className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300"
                    >
                        {language === 'en' ? 'Works' : 'Projetos'}
                    </a>
                    <a href='/'
                        onClick={closeSheet}
                        className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300"
                    >
                        Certs
                    </a>
                </div>
                <div className="flex justify-center py-5 gap-x-5">
                    <Button variant='blue'>{language === 'en' ? 'Contact' : 'Contato'}</Button>
                    <Button onClick={() => onLanguageChange(language)} className="flex gap-x-2" variant='blue'>
                        {language === 'en' ? 'Translate' : 'Traduzir'}
                        <Globe className="h-4 w-4" />
                    </Button>
                </div>
            </SheetContent>
        </Sheet >
    )
}