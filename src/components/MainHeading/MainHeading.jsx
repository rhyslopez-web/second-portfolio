import React from 'react'
import { twMerge } from 'tailwind-merge'
import { easeIn, motion } from 'framer-motion'

const MainHeading = ({children, className}) => {
  return (
    <motion.h1 
    initial={{
      opacity: 0,
      y: 200
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
    }}
    className={twMerge('text-3xl lg:text-7xl leading-normal lg:leading-relaxed font-medium' , className)}>
        {children}
    </motion.h1>
  )
}

export default MainHeading