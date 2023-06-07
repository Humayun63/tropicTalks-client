import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
      <Toaster/>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
