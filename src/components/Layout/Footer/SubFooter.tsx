import { FC } from 'react';
import { Grid, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const SubFooter: FC = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Grid
        sx={{ backgroundColor: theme.palette.primary.main }}
        container
        justifyContent={isLargeScreen ? 'space-around' : 'space-between'}
        alignItems={isLargeScreen ? 'space-around' : 'center'}
      >
        <Grid container item md={6} justifyContent={'space-around'}>
          <Typography variant='body2' sx={{ textAlign: isLargeScreen ? 'left' : 'center' }}>
            {t('footer.rights_reserved', language)} @ {new Date().getFullYear()}{' '}
            {t('common.brand', language)}
          </Typography>
        </Grid>
        <Grid md={6} container item justifyContent={'space-around'}>
          {[
            { label: t('footer.terms_conditions', language), href: '#' },
            { label: t('footer.privacy', language), href: '#' },
            { label: t('footer.laws', language), href: '#' },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline='hover'
              sx={{ color: 'inherit', fontSize: '0.8rem' }}
            >
              {item.label}
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default SubFooter;
