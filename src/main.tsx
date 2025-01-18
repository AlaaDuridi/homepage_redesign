import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './views/app/App.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <App />
    </LanguageProvider>
  </StrictMode>,
);
