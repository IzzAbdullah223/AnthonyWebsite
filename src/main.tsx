import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ContactPage from './ContactPage/ContactPage'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage></ContactPage>
  </StrictMode>,
)
