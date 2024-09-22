import React, { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { DarkModeContext } from '../../context/DarkModeContext'
import { AnimatePresence, motion } from 'framer-motion'

const DarkModeToggle = () => {

  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <button 
    onClick={toggleDarkMode}
    className='w-14 h-14 p-2 flex justify-center items-center bg-black dark:bg-neutral-200 rounded-full fixed 
    bottom-5 right-5 lg:bottom-10 lg:right-10'
    >
      <AnimatePresence>
        <div>
        {isDarkMode ? <Sun fill='#1111'/> : <Moon fill='#f1f1f1'/>}
        </div>
      </AnimatePresence>
    </button>
  )
}

export default DarkModeToggle