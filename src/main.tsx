import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from './ContactPage/ContactPage'
import FrontPage from './FrontPage/FrontPage'
import AboutUs from './AboutUs/AboutUs'

 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutUs/>} />
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
