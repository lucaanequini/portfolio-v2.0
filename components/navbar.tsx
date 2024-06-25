'use client'

import Image from "next/image"

import { useScrollTop } from "@/hooks/use-scroll"
import { useTranslator } from "@/hooks/use-translator"

import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"

import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

import { MobileSidebar } from "./mobile-sidebar"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

import { DialogPortal } from "@radix-ui/react-dialog"
import { TranslateModal } from "./modals/translate-modal"


export const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false)

    const scrolled = useScrollTop()
    const language = useTranslator(lg => lg.language)

    const onLanguageChange = useTranslator((lg) => lg.onChange)

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className={cn("z-10 w-full px-5 lg:px-20 xl:px-40 flex items-center justify-between fixed top-0",
            scrolled && `backdrop-blur-xl`)}
            data-aos='fade-down'
        >
            <div className={cn("lg:w-[170px]")}>
                <div className={cn("flex items-center w-16 h-16 xl:w-20 xl:h-20")}>
                    <Image src='/logo.svg' alt='logo' layout="responsive" width={100} height={100} />
                </div>
            </div>
            <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-20 text-blue font-semibold">
                <a href='#home' className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300">
                    Home
                </a>
                <a href='#bio' className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300">
                    About
                </a>
                <a href='#works' className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300">
                    {language === 'en' ? 'Works' : 'Projetos'}
                </a>
                <a href='#certs' className="border-b-2 border-transparent hover:border-b-2 hover:text-blue/70 hover:border-blue transition duration-300">
                    Certs
                </a>
            </div>
            <div className="hidden lg:flex gap-x-5 items-center">
                <TranslateModal isOpen={open} onClose={() => setOpen(false)} />
                <Button variant='blue' onClick={() => setOpen(true)}>
                    <Settings />
                </Button>
                <a href='#contact'>
                    <Button variant='blue'>
                        {language === 'en' ? 'Contact' : 'Contato'}
                    </Button>
                </a>
            </div>
            <div className='lg:hidden'>
                <MobileSidebar />
            </div>
        </div >
    )
}