import React from 'react'
import Button from '../Button/Button'
import { motion } from 'framer-motion'

const Project = ({src, title, description}) => {
  return (
    <motion.div 
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
    className='flex flex-col gap-10 p-5'>
        <div className='aspect-square border rounded-3xl bg-neutral-500'>
            <img src={src} alt="" className='rounded-3xl' />
        </div>

        <div className='flex justify-between items-center'>
            <div className='w-4/6 flex flex-col gap-3'>
                <h3 className='text-xl font-medium'>{title}</h3>
                <p>{description}</p>
            </div>

            <Button/>
        </div>
    </motion.div>
  )
}

export default Project