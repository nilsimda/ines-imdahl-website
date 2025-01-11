import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookieConsentProvider } from '@monorepo/shared/components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookieConsentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookieConsentProvider>
  </StrictMode>,
)
