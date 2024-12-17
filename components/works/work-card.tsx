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
        <div className='sm:flex justify-between items-center bg-white rounded-xl' data-aos='zoom-out'>
            <div className='flex flex-col p-5 max-w-[500px]'>
                <div className='flex flex-wrap gap-2'>
                    {currentWork.techStack.map((tech, index) => (
                        <p className='text-xs md:text-sm bg-light-blue rounded-full px-1' key={index}>{tech}</p>
                    ))}
                </div>
                <p className='font-semibold text-blue text-2xl lg:text-3xl pt-2'>{currentWork.title}</p>
                <p className='w-full text-sm lg:text-regular pt-2'>{language === 'en' ? currentWork.descriptionEn : currentWork.descriptionBr}</p>
                <div className='flex gap-2 mt-5'>
                    {currentWork.link && (
                        <Link href={currentWork.link} target='_blank'>
                            <Button variant='blue' className='flex gap-x-2'>
                                Live Site
                                <ExternalLink className='h-4 w-4 ' />
                            </Button>
                        </Link>
                    )}
                    {currentWork.github && (
                        <Link href={currentWork.github} target='_blank'>
                            <Button variant='blue' className='flex gap-x-2'>
                                GitHub
                                <GitHubLogoIcon className='h-4 w-4' />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
            <div className='flex items-end justify-end py-3'>
                <div className='w-[250px] sm:w-[300px]'>
                    <Image src={currentWork.imgUrl} alt='jotionImg' width={1175} height={783}></Image>
                </div>
            </div>
        </div >
    )
}