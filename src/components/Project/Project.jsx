import React from 'react'
import Button from '../Button/Button'

const Project = ({src, title, description}) => {
  return (
    <div className='flex flex-col gap-10 p-5'>
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
    </div>
  )
}

export default Project