import { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { MOBILE_SCREEN } from '../../../constants/layout.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const HeroWhatsAppScreen: FC = () => {
  const { language } = useLanguageContext();
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: theme.spacing(2), md: 0 },
      }}
    >
      <img
        src={`${BACKEND_IMAGES}${MOBILE_SCREEN[language]}`}
        alt='WhatsApp screen'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '300px',
          borderRadius: '8px',
          boxShadow: theme.shadows[3],
        }}
      />
    </Box>
  );
};

export default HeroWhatsAppScreen;
