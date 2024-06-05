import { works } from '@/constants/works'

import { useTranslator } from '@/hooks/use-translator'

import Image from 'next/image'

import { Button } from '../ui/button'

import { ExternalLink } from 'lucide-react'

import Link from 'next/link'

import { GitHubLogoIcon } from '@radix-ui/react-icons'


interface WorkCardProps {
    work: string
}


export const WorkCard = ({ work }: WorkCardProps) => {
    const language = useTranslator(lg => lg.language)
    const currentWork = works[work]
    return (
        <div className='bg-white border-2 border-blue rounded-xl lg:max-w-[1200px] lg:mx-auto'>
            <div className='flex flex-col sm:flex-row gap-y-5'>
                <div className='p-5 sm:p-8'>
                    <div className='flex flex-wrap gap-2'>
                        {currentWork.techStack.map((tech, index) => (
                            <p className='text-xs md:text-sm bg-light-blue rounded-full px-1' key={index}>{tech}</p>
                        ))}
                    </div>
                    <p className='font-bold text-blue text-2xl lg:text-3xl pt-2'>{currentWork.title}</p>
                    <p className='text-sm lg:text-regular pt-2 lg:max-w-[800px]'>{language === 'en' ? currentWork.descriptionEn : currentWork.descriptionBr}</p>
                    <div className='flex gap-2 mt-5'>
                        {currentWork.link && (
                            <Link href={currentWork.link} target='_blank'>
                                <Button variant='blue' className='flex gap-x-2'>
                                    Live Site
                                    <ExternalLink className='h-4 w-4 ' />
                                </Button>
                            </Link>
                        )}
                        <Link href={currentWork.github} target='_blank'>
                            <Button variant='blue' className='flex gap-x-2'>
                                GitHub
                                <GitHubLogoIcon className='h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-end justify-end sm:items-center py-5 lg:py-8'>
                    <div className='min-w-[250px] h-auto lg:min-w-[300px] lg:max-w-[300px]'>
                        <Image src={currentWork.imgUrl} alt='jotionImg' layout='responsive' width={1175} height={783}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}