import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactPage from './ContactPage/ContactPage'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage></ContactPage>
  </StrictMode>,
)
