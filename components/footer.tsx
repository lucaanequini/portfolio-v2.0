'use client'

import { useTranslator } from "@/hooks/use-translator"

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

import Link from "next/link"

export const Footer = () => {
    const language = useTranslator(lg => lg.language)

    return (
        <div className="w-full flex-col flex gap-y-2 items-center border-t border-black mt-20 pb-2">
            <div className="flex gap-x-2 mt-5">
                <Link href='https://www.github.com/lucaanequini' target="_blank">
                    <GitHubLogoIcon className=" h-10 w-10 hover:text-blue duration-300" />
                </Link>
                <Link href='https://www.linkedin.com/in/luca-anequini-antoniazzi/' target="_blank">
                    <LinkedInLogoIcon className=" h-10 w-10 hover:text-blue duration-300" />
                </Link>
            </div>
            <div className="text-center">
                <p>Luca Anequini Antoniazzi © 2024</p>
                <p>{language === 'en' ? 'All rights reserved' : 'Todos os direitos reservados'}</p>
            </div>
        </div>
    )
}