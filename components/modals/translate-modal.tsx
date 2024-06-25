'use client'

import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { useTranslator } from "@/hooks/use-translator"

interface TranslateModalProps {
    isOpen: boolean
    onClose: () => void
}

export const TranslateModal: React.FC<TranslateModalProps> = ({
    isOpen,
    onClose
}) => {
    const language = useTranslator(lg => lg.language)

    const onLanguageChange = useTranslator((lg) => lg.onChange)

    return (
        <Modal
            title="Translate"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex items-center gap-x-2">
                <p className="text-black">
                    {language === 'en' ? 'Language' : 'Idioma'}:
                </p>
                <Button
                    size='sm'
                    onClick={() => onLanguageChange(language)}
                    className="flex gap-x-2" variant='ghostBlue'
                >
                    {language === 'en' ? 'English' : 'Português'}<Globe className="h-4 w-4" />
                </Button>
            </div>
        </Modal>
    )

}