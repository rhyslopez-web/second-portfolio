import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className='font-poppins'>
        <Navbar/>
        <div className='flex justify-center'>
          <Outlet/>
        </div>
    </div>
)
}

export default Layout