import { toast } from 'sonner';
import { create } from 'zustand';

type LanguagesType = {
    language: 'pt-br' | 'en';
    onChange: (lg: 'pt-br' | 'en') => void;
};

export const useTranslator = create<LanguagesType>((set) => ({
    language: 'en',
    onChange: (lg) => {
        set({ language: lg === 'en' ? 'pt-br' : 'en' });
        toast.success(lg === 'en' ? 'Linguagem alterada para PT-BR com sucesso!' : 'Language changed to EN successfully!');
    },
}));