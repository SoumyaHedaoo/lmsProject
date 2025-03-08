import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppContextProvider} from './context/AppContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {ClerkProvider,} from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
