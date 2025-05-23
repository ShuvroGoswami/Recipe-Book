import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import router from './pages/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ThemeProvider from './provider/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
    <RouterProvider router={router} />

      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
