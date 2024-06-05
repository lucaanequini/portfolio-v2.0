'use client'

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

import { useTranslator } from "@/hooks/use-translator"

export const Forms = () => {
    const language = useTranslator(lg => lg.language)

    return (
        <div>
            <form action="" className="flex flex-col gap-y-3">
                <Input className="border-blue rounded-xl active:border-blue" type="text" placeholder={language === 'en' ? 'Name' : 'Nome'} />
                <Input className="border-blue rounded-xl active:border-blue" type="text" placeholder={language === 'en' ? 'Email' : 'E-mail'} />
                <Input className="border-blue rounded-xl active:border-blue" type="text" placeholder={language === 'en' ? 'Phone (optional)' : 'Celular (opcional)'} />
                <Textarea className="border-blue rounded-xl active:border-blue" placeholder={language === 'en' ? 'Your Message' : 'Sua Mensagem'} />
                <Button size='sm' variant='blue' className="rounded-xl">{language === 'en' ? 'Send' : 'Enviar'}</Button>
            </form>
        </div>
    )
}