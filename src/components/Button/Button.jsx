import React from 'react'
import { ArrowRight } from 'lucide-react'

const Button = ({children}) => {
  return (
    <button className='border px-5 py-3 flex justify-center items-center gap-3 rounded-full border-black hover:bg-black 
    hover:text-white transition duration-200'>
        {children}
        <ArrowRight/>
    </button>
)
}

export default Button