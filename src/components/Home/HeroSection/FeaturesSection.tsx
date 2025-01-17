import { FC } from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ICONS } from '../../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const FeaturesSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile
  const { language } = useLanguageContext();

  // Features array for reusability
  const features = [
    {
      icon: `${BACKEND_IMAGES}${isMobile ? ICONS.AI_Mobile : ICONS.AI}`,
      text: t('home.answer_ai', language),
    },
    {
      icon: `${BACKEND_IMAGES}${isMobile ? ICONS.LIST_MOBILE : ICONS.LIST}`,
      text: t('home.answer_timer', language),
    },
    {
      icon: `${BACKEND_IMAGES}${isMobile ? ICONS.CHECKED_PERSON_MOBILE : ICONS.CHECKED_PERSON}`,
      text: t('home.answer_checked_person', language),
    },
    {
      icon: `${BACKEND_IMAGES}${isMobile ? ICONS.PERSON_MOBILE : ICONS.PERSON}`,
      text: t('home.answer_person', language),
    },
    {
      icon: `${BACKEND_IMAGES}${isMobile ? ICONS.TIMER_MOBILE : ICONS.TIMER}`,
      text: t('home.answer_list', language),
    },
  ];

  return (
    <Grid
      container
      direction='column'
      spacing={2}
      alignItems='center'
      justifyContent='center'
      sx={{
        marginTop: '1rem',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Grid item xs={12} alignSelf={'flex-start'} m={1}>
        <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
          {t('home.question', language)}
        </Typography>
      </Grid>

      {/* Features */}
      <Grid item xs={12} sm={8} md={8}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(2),
                textAlign: 'right', // RTL alignment
              }}
            >
              <Box
                component='img'
                src={feature.icon}
                alt={feature.text}
                sx={{
                  width: isMobile ? 40 : 50,
                  height: isMobile ? 40 : 50,
                }}
              />
              <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                {feature.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturesSection;
