import { FC, PropsWithChildren } from 'react';
import { Grid, Container, CssBaseline, GlobalStyles, useTheme } from '@mui/material';
import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { WHATSAPP_BACKGROUND } from '../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../constants/common.ts';
import Footer from './Footer';

export const Layout: FC<PropsWithChildren<NonNullable<unknown>>> = ({ children }) => {
  const backgroundPath = `${BACKEND_IMAGES}${WHATSAPP_BACKGROUND}`;
  const theme = useTheme();
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              position: 'relative',
              backgroundImage: `url(${backgroundPath})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 70%',
              backgroundPosition: 'top right',
            },
          }}
        />
        <Grid
          container
          sx={{
            width: '100%',
            backgroundImage: backgroundPath,
            p: theme.spacing(14),
          }}
        >
          <Outlet />
          {children}
        </Grid>
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
