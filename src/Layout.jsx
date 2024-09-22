import React, { useContext, useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './utils/scrollToTop'
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle'

const Layout = () => {

  const location = useLocation()

  const { isDarkMode } = useContext(DarkModeContext)
  
  return (
      <div className={isDarkMode ? 'dark' : ''}>
        <div className='font-poppins flex flex-col items-center bg-[#f1f1f1] dark:bg-[#121212] transition-colors'>
          <ScrollToTop/>
            <Navbar/>
            <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage/>} />
                <Route path='/project/:id' element={<ProjectPage/>} />
              </Routes>
            </AnimatePresence>
            <DarkModeToggle/>
            <Footer/>
        </div>
      </div>
)
}

export default Layout