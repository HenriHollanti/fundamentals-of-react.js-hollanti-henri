import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TitleUpdater from './exercises/titleUpdater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TitleUpdater />
  </StrictMode>,
)
