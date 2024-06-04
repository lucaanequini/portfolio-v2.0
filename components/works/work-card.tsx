import { works } from '@/constants/works'

import { useTranslator } from '@/hooks/use-translator'

import Image from 'next/image'

interface WorkCardProps {
    work: string
}


export const WorkCard = ({ work }: WorkCardProps) => {
    const language = useTranslator(lg => lg.language)
    const currentWork = works[work]
    return (
        <div className='bg-white border-2 border-blue rounded-xl'>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='p-5 sm:p-8'>
                    <div className='flex flex-wrap gap-2'>
                        {currentWork.techStack.map((tech, index) => (
                            <p className='text-sm bg-light-blue rounded-full px-1' key={index}>{tech}</p>
                        ))}
                    </div>
                    <p className='font-bold text-blue text-2xl sm:text-3xl pt-2'>{currentWork.title}</p>
                    <p className='pt-2'>{language === 'en' ? currentWork.descriptionEn : currentWork.descriptionBr}</p>
                </div>
                <div className='flex items-end justify-end pl-5 py-5 sm:py-8'>
                    <div className='min-w-[350px] h-auto sm:min-w-[350px]'>
                        <Image src={currentWork.imgUrl} alt='jotionImg' layout='responsive' width={1175} height={783}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}