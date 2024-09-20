import React from 'react'
import { twMerge } from 'tailwind-merge'

const SecondaryHeading = ({children, className}) => {
  return (
    <h1 className={twMerge('text-2xl lg:text-4xl leading-normal lg:leading-relaxed font-medium' , className)}>
        {children}
    </h1>
)
}

export default SecondaryHeading