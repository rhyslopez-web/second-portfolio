import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='p-5 lg:max-w-7xl w-full overflow-hidden mb-10'>
        <footer className='flex flex-col gap-10'>

            {/* footer heading and animated arrow */}
            <div className='flex flex-wrap justify-between gap-10'>
                <MainHeading>
                    Let's 
                    <br/>
                    Collaborate
                </MainHeading>

                <motion.button
                animate={{rotate: '-45deg'}}
                transition={{
                    repeat: Infinity,       // Infinite repeat
                    repeatDelay: 2,         // Delay between repeats
                    repeatType: 'reverse',  // Reverse animation to go back to the original state
                    ease: 'easeInOut',
                }} 
                className='border border-7 border-black rounded-full w-24 h-24 lg:h-64 lg:w-64 flex 
                justify-center items-center hover:bg-black hover:text-white transition duration-200'>
                    <ArrowRight size='150' strokeWidth='0.4'/>
                </motion.button>
            </div>

            {/* Social Links */}
            <ul className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <li><SocialLink label='LinkedIn'/></li>
                <li><SocialLink label='Github'/></li>
                <li><SocialLink label='Email'/></li>
                <li><SocialLink label='Instagram'/></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer


const SocialLink = ({label, href}) => {
    return(
        <motion.button
        layout
        whileHover={{ 
            borderBottomWidth: '1px',  // Width of the bottom border on hover
            borderBottomColor: '#737373',  // Color of the bottom border on hover
        }}
        transition={{ 
            duration: 0.3,  // Animation duration
            ease: 'easeInOut'  // Optional easing for smoothness
        }}
        style={{
            boxSizing: 'inherit',
            borderBottom: '0px solid transparent' // Initial border is invisible
        }}
        className='text-2xl text-neutral-500' href={href}>
            {label}
        </motion.button>
    )
}
