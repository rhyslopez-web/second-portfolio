import React from 'react'

const Experience = ({title, startDate, endDate, description, company}) => {
  return (
    <div className='flex flex-col gap-5 w-full lg:w-5/6 py-10 border-b border-black border-dashed'>
        <div className='flex gap-3'>
            <span>{startDate}</span>
            -
            <span>{endDate}</span>
        </div>

        <h3 className='text-3xl lg:text-4xl'>{title}, <span className='font-medium'>{company}</span></h3>

        <p>{description}</p>
    </div>
  )
}

export default Experience