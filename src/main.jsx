import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'swiper/css'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router";
import UserProvider from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
