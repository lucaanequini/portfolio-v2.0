'use client'

import Image from "next/image"
import Link from "next/link"

import { useScrollTop } from "@/hooks/use-scroll"
import { useTranslator } from "@/hooks/use-translator"

import { cn } from "@/lib/utils"

import { Settings, Menu, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"


export const Navbar = () => {
    const scrolled = useScrollTop()
    const language = useTranslator(lg => lg.language)
    const minWidth = window.innerWidth > 1024


    const onLanguageChange = useTranslator((lg) => lg.onChange)

    return (
        <div className={cn(scrolled && "lg:flex lg:items-center lg:justify-center")}>
            <div className={cn(scrolled && minWidth && `z-50 fixed top-5 w-[40%] py-4 bg-white rounded-full`)}>
                <nav className={cn("flex justify-between items-center px-5 xl:px-32", scrolled && 'justify-center xl:px-0')}>
                    <div className={cn("lg:w-[170px]", scrolled && 'hidden')}>
                        <div className={cn("flex items-center w-16 h-16 xl:w-20 xl:h-20", scrolled && 'lg:hidden')}>
                            <Image src='/logo.svg' alt='logo' layout="responsive" width={100} height={100} />
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-20 text-blue font-semibold">
                        <Link href='/'><p>Home</p></Link>
                        <Link href='/'><p>Bio</p></Link>
                        <Link href='/'><p>{language === 'en' ? 'Works' : 'Projetos'}</p></Link>
                        <Link href='/'><p>Certs</p></Link>
                    </div>
                    <div className={cn("hidden lg:flex gap-x-5 items-center", scrolled && 'lg:hidden')}>
                        <Dialog>
                            <DialogTrigger>
                                <Button variant='blue'><Settings className="h-6 w-6" /></Button>
                            </DialogTrigger>
                            <DialogContent className="w-72 flex flex-col gap-y-7">
                                <DialogHeader>
                                    <DialogTitle>{language === 'en' ? 'Settings' : 'Preferências'}</DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
                                    <div className="flex items-center gap-x-2">
                                        <p className="text-black">{language === 'en' ? 'Language' : 'Idioma'}:</p>
                                        <Button size='sm' onClick={() => onLanguageChange(language)} className="flex gap-x-2" variant='ghostBlue'>{language === 'en' ? 'English' : 'Português'}<Globe className="h-4 w-4" /></Button>
                                    </div>
                                </DialogDescription>
                                <DialogClose asChild>
                                    <Button variant='blue' size='sm'>Close</Button>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>

                        <Button variant='blue'>{language === 'en' ? 'Contact' : 'Contato'}</Button>
                    </div>
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Button className="lg:hidden" variant='blue'><Menu className="h-6 w-6" /></Button>
                            </SheetTrigger>
                            <SheetContent className="w-full">
                                <SheetHeader className="border-b border-blue py-5">
                                    <div className="flex mx-auto items-center w-16 h-16 xl:w-20 xl:h-20">
                                        <Image src='/logo.svg' alt='logo' layout="responsive" width={100} height={100} />
                                    </div>
                                </SheetHeader>
                                <div className="font-semibold text-blue text-lg flex flex-col items-center justify-center gap-y-10 border-b border-blue py-5">
                                    <Link href='/'><p>Home</p></Link>
                                    <Link href='/'><p>Bio</p></Link>
                                    <Link href='/'><p>{language === 'en' ? 'Works' : 'Projetos'}</p></Link>
                                    <Link href='/'><p>Certs</p></Link>
                                </div>
                                <div className="flex justify-center py-5 gap-x-5">
                                    <Button variant='blue'>{language === 'en' ? 'Contact' : 'Contato'}</Button>
                                    <Button onClick={() => onLanguageChange(language)} className="flex gap-x-2" variant='blue'>{language === 'en' ? 'Translate' : 'Traduzir'} <Globe className="h-4 w-4" /></Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </div >
    )
}