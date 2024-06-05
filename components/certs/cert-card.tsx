'use client'

import { certs } from "@/constants/certs"

import { useTranslator } from "@/hooks/use-translator"

import Link from "next/link"

interface CertProps {
    cert: string
}

export const CertCard = ({ cert }: CertProps) => {
    const language = useTranslator(lg => lg.language)
    const currentCert = certs[cert]
    return (
        <div className="flex flex-col gap-y-1 sm:mx-auto">
            <div className="h-52 sm:w-[280px] flex flex-col justify-between p-5 rounded-xl bg-gradient-to-r from-[#0075FF] via-[#0019FF] to-[#0075FF] text-white">
                <p className="font-semibold">
                    {language === 'en' ? currentCert.titleEn : currentCert.titleBr}
                </p>
                <p className="font-light">Luca Anequini Antoniazzi</p>
                <p className="font-light">{currentCert.company} - {currentCert.date}</p>
            </div>
            <Link href={currentCert.link} target="_blank" className="text-xs text-center text-gray">
                {language === 'en' ? 'Click to more details' : 'Clique para mais detalhes'}
            </Link>
        </div>
    )
}