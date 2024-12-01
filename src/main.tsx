import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home/Home'
import './main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Snowfall from 'react-snowfall'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Snowfall />
    <RouterProvider router={router} />
  </StrictMode>,
)
