import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppContextProvider} from './context/AppContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
