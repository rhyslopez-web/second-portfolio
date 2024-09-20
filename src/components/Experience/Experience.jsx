import React from 'react'

const Experience = ({title, startDate, endDate, description}) => {
  return (
    <div className='flex flex-col gap-5 w-full lg:w-5/6'>
        <div className='flex gap-3'>
            <span>{startDate}</span>
            -
            <span>{endDate}</span>
        </div>

        <h3 className='text-4xl font-medium'>{title}</h3>

        <p>{description}</p>
    </div>
  )
}

export default Experience