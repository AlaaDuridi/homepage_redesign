import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './views/app/App.tsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { rtlTheme } from './theme';
import { CacheProvider } from '@emotion/react';
import { createRtlCache } from './rtlCache';

const rtlCache = createRtlCache();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CacheProvider value={rtlCache}>
          <ThemeProvider theme={rtlTheme}>
              <CssBaseline />
              <App />
          </ThemeProvider>
      </CacheProvider>
  </StrictMode>,
)
