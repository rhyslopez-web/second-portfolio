import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <div className='sticky top-0 left-0 right-0 w-full z-20 bg-white dark:bg-black'>
        <nav className='px-5 py-5 flex justify-between'>
            <div href="">
                <Link>
                    <img className='dark:invert' src="/favicon.png" width='45px' alt="" />
                </Link>
            </div>

            <button className='dark:text-neutral-200' onClick={toggleMenuOpen}>
                {menuOpen ? <X/> : <Menu/> }
            </button>

            {/* Menu Links Animate IN */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul 
                    initial={{scaleY: 0, opacity: 0, transformOrigin: 'top'}}
                    animate={{scaleY: 1, opacity: 1, transformOrigin: 'top'}}
                    exit={{scaleY: 0}}
                    className='h-[50vh] flex flex-col justify-center items-start gap-3 absolute top-0 left-0 right-0 -z-10 px-5 bg-white dark:bg-black dark:text-neutral-200'>
                        <li><a href='#project-section' onClick={toggleMenuOpen} >01. Projects</a></li>
                        <li><a href='#experience-section' onClick={toggleMenuOpen} >02. Experience</a></li>
                        <li><a href='emailto:rhys.paulino@gmail.com' target='_blank' onClick={toggleMenuOpen}>03. Hire Me</a></li>
                    </motion.ul>
                )}
            </AnimatePresence>

        </nav>
    </div>
  )
}
