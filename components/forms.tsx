'use client'

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

import { useTranslator } from "@/hooks/use-translator"

import emailjs from '@emailjs/browser'
import { useState } from "react"

import { toast } from 'sonner'


export const Forms = () => {
    const language = useTranslator(lg => lg.language)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            email: email,
            phone: phone,
            message: message
        }

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
            .then(() => {
                toast.success(language === 'en' ? 'Message sent successfully' : 'Mensagem enviada com sucesso')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
            })
            .catch(() => {
                toast.error(language === 'en' ? 'Failed to send message' : 'Falha ao enviar a mensagem')
            })
    }

    return (
        <div data-aos='fade-left'>
            <form onSubmit={sendEmail} className="flex flex-col gap-y-3">
                <Input
                    className="border-blue rounded-xl active:border-blue"
                    type="text"
                    placeholder={language === 'en' ? 'Name' : 'Nome'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    className="border-blue rounded-xl active:border-blue"
                    type="text"
                    placeholder={language === 'en' ? 'Email' : 'E-mail'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className="border-blue rounded-xl active:border-blue"
                    type="number"
                    placeholder={language === 'en' ? 'Phone (optional)' : 'Celular (opcional)'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Textarea
                    className="border-blue rounded-xl active:border-blue"
                    placeholder={language === 'en' ? 'Your Message' : 'Sua Mensagem'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    size='sm'
                    variant='blue'
                    className="rounded-xl"
                    type="submit">
                    {language === 'en' ? 'Send' : 'Enviar'}
                </Button>
            </form>
        </div>
    )
}