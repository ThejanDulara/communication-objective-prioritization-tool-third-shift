import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 🔒 Import the auth check utility
import { checkAuth } from './authCheck.js'

// ✅ Run login check before rendering the app
checkAuth()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
