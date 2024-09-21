import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<Layout/>}/>
        </Routes>
      </Router>
    </DarkModeProvider>
  </StrictMode>,
)
