import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <div className='sticky top-0 left-0 right-0'>
        <nav className='px-10 py-5 flex justify-between'>
            <div href="">
                <Link>Rhys Lopez</Link>
            </div>

            <button onClick={toggleMenuOpen}>
                {menuOpen ? <X/> : <Menu/> }
            </button>

            {/* Menu Links Animate IN */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul 
                    initial={{scaleY: 0, transformOrigin: 'top'}}
                    animate={{scaleY: 1, transformOrigin: 'top'}}
                    exit={{scaleY: 0}}
                    className='h-[30vh] flex flex-col justify-center items-start gap-3 absolute top-0 left-0 right-0 -z-10 px-10 bg-neutral-400'>
                        <li><Link>Projects</Link></li>
                        <li><Link>Experience</Link></li>
                        <li><Link>Hire Me</Link></li>
                    </motion.ul>
                )}
            </AnimatePresence>

        </nav>
    </div>
  )
}
