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
    <div className='sticky top-0 left-0 right-0 w-full'>
        <nav className='px-5 py-5 flex justify-between'>
            <div href="">
                <Link>
                    <img src="/favicon.png" width='45px' alt="" />
                </Link>
            </div>

            <button onClick={toggleMenuOpen}>
                {menuOpen ? <X/> : <Menu/> }
            </button>

            {/* Menu Links Animate IN */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul 
                    initial={{scaleY: 0, opacity: 0, transformOrigin: 'top'}}
                    animate={{scaleY: 1, opacity: 1, transformOrigin: 'top'}}
                    exit={{scaleY: 0}}
                    className='h-[50vh] flex flex-col justify-center items-start gap-3 absolute top-0 left-0 right-0 -z-10 px-5 bg-neutral-100'>
                        <li><Link>01. Projects</Link></li>
                        <li><Link>02. Experience</Link></li>
                        <li><Link>03. Hire Me</Link></li>
                    </motion.ul>
                )}
            </AnimatePresence>

        </nav>
    </div>
  )
}
