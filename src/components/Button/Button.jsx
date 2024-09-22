import React from 'react'
import { ArrowRight } from 'lucide-react'

const Button = ({children, href}) => {
  return (
    <a href={href} target='_blank' className='border dark:border-neutral-200 dark:text-neutral-200 px-5 py-3 flex justify-center items-center gap-3 rounded-full border-black hover:bg-black dark:hover:bg-neutral-200 dark:hover:text-[#121212]
    hover:text-white transition duration-200'>
        {children}
        <ArrowRight/>
    </a>
)
}

export default Button