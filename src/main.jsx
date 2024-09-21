import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { path } from 'framer-motion/client'
import ProjectPage from './pages/ProjectPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <HomePage/>
//       },
//       {
//         path: '/project/:id',
//         element: <ProjectPage/>
//       }
//     ]
//   },
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<Layout/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
