import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoutes from './Routes/AllRoutes.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AllRoutes/>
  </BrowserRouter>
)
