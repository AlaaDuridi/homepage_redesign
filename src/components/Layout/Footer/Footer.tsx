import { FC } from 'react';
import { Box, Grid, useMediaQuery, Link, useTheme } from '@mui/material';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { FOOTER_LOGO } from '../../../constants/layout.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import MidFooter from './MidFooter.tsx';
import SubFooter from './SubFooter.tsx';

const Footer: FC = () => {
  const { language } = useLanguageContext();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#1C2536',
          color: '#FFFFFF',
          py: 4,
          px: 2,
          mt: 4,
        }}
      >
        {/* Top Section */}
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Link href={'/'}>
              <Box
                component='img'
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                src={`${BACKEND_IMAGES}${FOOTER_LOGO[language]}`}
                sx={{
                  width: isDesktop ? '150px' : '120px', // Adjust as needed
                  maxHeight: 50,
                  objectFit: 'contain',
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <MidFooter />
      </Box>
      <SubFooter />
    </>
  );
};

export default Footer;
