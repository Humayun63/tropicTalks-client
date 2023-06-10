import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Toaster />
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider client={queryClient}>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
