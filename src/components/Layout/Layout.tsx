import { FC, PropsWithChildren } from 'react';
import { Grid, CssBaseline, useTheme, GlobalStyles } from '@mui/material';
import Header from './Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { WHATSAPP_BACKGROUND } from '../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../constants/common.ts';

export const Layout: FC<PropsWithChildren<NonNullable<unknown>>> = ({ children }) => {
  const theme = useTheme();
  const backgroundPath = `${BACKEND_IMAGES}${WHATSAPP_BACKGROUND}`;
  console.log(backgroundPath);
  return (
    <Grid container sx={{ backgroundImage: backgroundPath }}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            position: 'relative',
            backgroundImage: `url(${backgroundPath})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom left',
          },
        }}
      />
      <Header />
      <Grid
        container
        sx={{
          m: theme.spacing(3),
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default Layout;
