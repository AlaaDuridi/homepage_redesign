import './App.css';
import { useLanguageContext } from '../../contexts/LanguageContext.tsx';
import { useMemo } from 'react';
import { ltrTheme, rtlTheme } from '../../theme';
import { createLtrCache, createRtlCache } from '../../rtlCache.ts';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import {t} from "../../utils/translate.ts";
import Header from "../../components/Header/Header.tsx";
function App() {
  const { language, setLanguage } = useLanguageContext();
  const isArabic = language === 'ar';

  // Pick the theme based on current language
  const currentTheme = useMemo(() => {
    return isArabic ? rtlTheme : ltrTheme;
  }, [isArabic]);

  // Pick the correct emotion cache
  const currentCache = useMemo(() => {
    return isArabic ? createRtlCache() : createLtrCache();
  }, [isArabic]);

  // Also, set the <html dir="rtl" or "ltr"> at runtime
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
  document.title = `${t('common.app_title',language)}`;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };
  return (
    <>
      <CacheProvider value={currentCache}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
<Header/>

        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
