'use client'

import { useTranslator } from "@/hooks/use-translator"

import Link from "next/link"

import { Button } from "./ui/button"

import { LinkedInLogoIcon, ChatBubbleIcon, DownloadIcon } from "@radix-ui/react-icons"

import { Forms } from "./forms"

import { toast } from "sonner"

export const ContactSection = () => {
    const language = useTranslator(lg => lg.language)

    const handleDownloadClick = () => {
        toast.success(language === 'en' ? 'Download started!' : 'Download iniciado!')
    }

    return (
        <>
            <div className="mb-40 lg:mb-48" id="contact" />
            <div className="h-screen flex flex-col gap-10 sm:gap-32 px-5 lg:px-20 xl:px-40">
                <p className="font-bold text-3xl sm:text-5xl text-blue">
                    {language === 'en' ? 'Contact' : 'Contato'}
                </p>
                <div className="flex flex-col sm:items-center gap-10 sm:grid grid-cols-2 lg:gap-20 xl:gap-32">
                    <div className="flex flex-col gap-y-5">
                        <p className="font-semibold text-2xl sm:text-3xl">
                            {language === 'en' ? "Let's work together!" : 'Vamos trabalhar juntos!'}
                        </p>
                        <p className="text-justify">
                            {language === 'en' ?
                                "If you are interested in working with me, or have any opportunity, please fill out this form. Or just send a message on one of my networks below!"
                                :
                                'Se você está interessado em trabalhar comigo, ou tem alguma oportunidade, por favor preencha este formulário. Ou apenas envie uma mensagem em uma das minhas redes abaixo!'
                            }
                        </p>
                        <p>
                            {language === 'en' ? "Thank's, hope see you soon!" : 'Obrigado, espero te ver em breve!'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 items-center">
                            <div className="flex gap-x-3">
                                <Link href='https://www.linkedin.com/in/luca-anequini-antoniazzi/' target="_blank">
                                    <Button variant='blue'><LinkedInLogoIcon className='w-6 h-6' /></Button>
                                </Link>
                                <Link href='https://wa.me/11942948562' target='_blank'>
                                    <Button variant='blue'><ChatBubbleIcon className='w-6 h-6' /></Button>
                                </Link>
                            </div>
                            <div>
                                <Button variant='blue'>
                                    <a href='/cv.pdf'
                                        download={'Currículo-Luca-Antoniazzi.pdf'}
                                        onClick={() => handleDownloadClick()}
                                        className="flex gap-x-2 items-center"
                                    >
                                        {language === 'en' ? 'Download CV' : 'Baixar Currículo'}
                                        <DownloadIcon className="h-6 w-6" />
                                    </a>
                                </Button>
                            </div>

                        </div>
                    </div>
                    <Forms />
                </div>
            </div>
        </>
    )
}