import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './utils/scrollToTop'

const Layout = () => {

  const location = useLocation()

  return (
    <div className='font-poppins flex flex-col items-center dark:bg-black'>
      <ScrollToTop/>
        <Navbar/>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage/>} />
            <Route path='/project/:id' element={<ProjectPage/>} />
          </Routes>
        </AnimatePresence>
        <Footer/>
          
    </div>
)
}

export default Layout