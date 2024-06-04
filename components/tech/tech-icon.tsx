'use client'

import { icons } from "@/constants/icons"

import { useState } from "react"

export type Icons = 'html' | 'css' | 'javascript' | 'typescript' | 'react' | 'next' | 'node' | 'postgres' | 'tailwind' | 'java' | 'springboot'
interface TechIconProps {
    icon: Icons
    color: '#202020' | '#0019ff'
}

const viewBox = ['html', 'css', 'react', 'node']
const viewBoxJava = ['java']
const viewBoxSpring = ['springboot']

export const TechIcon = ({ icon, color }: TechIconProps) => {
    const [currentColor, setCurrentColor] = useState('#202020')
    return (
        <div className='h-full w-20 hover:-mt-2 duration-300'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={`0 0 ${viewBoxJava.includes(icon) ? '160' : viewBoxSpring.includes(icon) ? 45 : viewBox.includes(icon) ? '30' : '50'} ${viewBoxJava.includes(icon) ? '130' : viewBoxSpring.includes(icon) ? 35 : viewBox.includes(icon) ? '30' : '50'}`}
                fill={currentColor}
                className='w-full h-auto hover:-translate-y-6 transition duration-500'
                onMouseEnter={() => setCurrentColor('#0019ff')}
                onMouseLeave={() => setCurrentColor('#202020')}
            >
                {icons[icon]}
            </svg>
        </div >
    )
}