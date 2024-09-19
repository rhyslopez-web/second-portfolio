import React from 'react'
import { twMerge } from 'tailwind-merge'

const MainHeading = ({children, className}) => {
  return (
    <h1 className={twMerge('text-3xl lg:text-7xl leading-normal lg:leading-relaxed font-medium' , className)}>
        {children}
    </h1>
  )
}

export default MainHeading