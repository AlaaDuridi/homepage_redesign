import './App.css';
import { useLanguageContext } from '../../contexts/LanguageContext.tsx';
import { useMemo, FC } from 'react';
import { ltrTheme, rtlTheme } from '../../theme';
import { createLtrCache, createRtlCache } from '../../rtlCache.ts';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, Grid } from '@mui/material';
import { t } from '../../utils/translate.ts';
import Routes from '../../router';

const App: FC = () => {
  const { language } = useLanguageContext();
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
  document.title = `${t('common.app_title', language)}`;

  return (
    <>
      <CacheProvider value={currentCache}>
        <ThemeProvider theme={currentTheme}>
          <Grid container>
            <Routes />
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
