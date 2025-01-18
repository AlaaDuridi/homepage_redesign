import { FC, PropsWithChildren } from 'react';
import { Grid, Container, CssBaseline, GlobalStyles, useTheme } from '@mui/material';
import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { WHATSAPP_BACKGROUND } from '../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../constants/common.ts';

export const Layout: FC<PropsWithChildren<NonNullable<unknown>>> = ({ children }) => {
  const backgroundPath = `${BACKEND_IMAGES}${WHATSAPP_BACKGROUND}`;
  const theme = useTheme();
  return (
    <Container maxWidth='xl' sx={{ backgroundImage: backgroundPath, p: theme.spacing(14) }}>
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
      <Header />
      <Grid
        container
        sx={{
          width: '100%',
        }}
      >
        <Outlet />
        {children}
      </Grid>
    </Container>
  );
};
export default Layout;
