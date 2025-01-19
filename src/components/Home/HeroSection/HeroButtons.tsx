import { Button, Typography, useTheme, Box } from '@mui/material';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroButtons = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: { xs: 'center', md: 'flex-start' },
        flexDirection: { lg: 'row', md: 'row', xs: 'column', sm: 'column' },
      }}
    >
      <Button
        fullWidth
        variant='contained'
        color='primary'
        endIcon={
          theme.direction === 'rtl' ? (
            <ArrowBackIcon color={'action'} />
          ) : (
            <ArrowForwardIcon color={'action'} />
          )
        }
      >
        <Typography variant={'h5'} color={'text.primary'}>
          {t('home.start_trial', language)}
        </Typography>
      </Button>
      <Button
        fullWidth
        variant='contained'
        color='secondary'
        endIcon={
          theme.direction === 'rtl' ? (
            <ArrowBackIcon color={'action'} />
          ) : (
            <ArrowForwardIcon color={'action'} />
          )
        }
      >
        <Typography variant={'h5'} color={'text.primary'}>
          {t('home.corporate_experience', language)}
        </Typography>
      </Button>
    </Box>
  );
};

export default HeroButtons;
