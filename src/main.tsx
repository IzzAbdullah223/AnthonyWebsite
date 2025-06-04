import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from './ContactPage/ContactPage'
import FrontPage from './FrontPage/FrontPage'
import AboutUs from './AboutUs/AboutUs'
import Layout from './Layout'

 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
