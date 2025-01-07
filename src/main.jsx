import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookieConsentProvider } from './components/ui/CookieBanner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookieConsentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookieConsentProvider>
  </StrictMode>,
)
