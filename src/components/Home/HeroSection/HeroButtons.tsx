import { Grid, Button, Typography, useTheme } from '@mui/material';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const HeroButtons = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{ mb: theme.spacing(4) }}
    >
      <Grid item>
        <Button variant='contained' color='primary' sx={{ borderRadius: '50px' }}>
          {t('home.start_trial', language)}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          sx={{ borderRadius: '50px', borderColor: theme.palette.grey[400] }}
        >
          {t('home.corporate_experience', language)}
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeroButtons;
