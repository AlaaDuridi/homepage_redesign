import { FC } from 'react';
import { useTheme, Grid } from '@mui/material';
import MobileApps from './MobileApps.tsx';
import FeaturesSection from './FeaturesSection.tsx';
import HeroButtons from './HeroButtons.tsx';
import HeroTitle from './HeroTitle.tsx';
import HeroWhatsAppScreen from './HeroWhatsAppScreen.tsx';

const HeroSection: FC = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent='center' sx={{ border: '1px solid red' }}>
      {/* Text Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: theme.spacing(7),
        }}
      >
        <HeroTitle />
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
        <HeroWhatsAppScreen />
        <MobileApps />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
