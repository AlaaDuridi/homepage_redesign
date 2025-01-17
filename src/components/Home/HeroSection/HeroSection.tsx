import { FC } from 'react';
import { Box, Typography, Button, useTheme, Grid } from '@mui/material';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { MOBILE_SCREEN, WHATSAPP_SVG } from '../../../constants/layout.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import { t } from '../../../utils/translate.ts';
import MobileApps from './MobileApps.tsx';
import FeaturesSection from './FeaturesSection.tsx';
import HeroButtons from './HeroButtons.tsx';

const HeroSection: FC = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <Grid container spacing={2} justifyContent='center'>
      {/* Text Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          p: theme.spacing(3),
        }}
      >
        <Typography variant='h3' fontWeight='bold' sx={{ color: theme.palette.primary.main }}>
          AI Parents Advisor
        </Typography>
        <Typography variant='body1' sx={{ mt: theme.spacing(2) }}>
          {t('home.text', language)}
          <a href='/'>
            <img src={`${BACKEND_IMAGES}${WHATSAPP_SVG}`} />
          </a>
        </Typography>
        <HeroButtons />
        <FeaturesSection />
      </Grid>

      {/* Image Section */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
        }}
        direction={'column'}
      >
        <Box
          sx={{
            maxWidth: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`${BACKEND_IMAGES}${MOBILE_SCREEN[language]}`}
            alt='mobile screen'
            style={{
              width: '100%', // Scales the image responsively
              height: 'auto', // Maintains aspect ratio
              maxWidth: '300px', // Sets a maximum width
            }}
          />
        </Box>

        <MobileApps />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
