import { Box, Grid, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { ICONS } from '../../../constants/layout.ts';
import { t } from '../../../utils/translate.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';

const MidFooter: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { language } = useLanguageContext();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Grid
      container
      justifyContent={isLargeScreen ? 'space-around' : 'space-between'}
      alignItems={isLargeScreen ? 'space-around' : 'center'}
      sx={{ mt: 4 }}
    >
      {/* Links Section */}
      <Grid item xs={12} md={9}>
        <Grid container item justifyContent={'space-around'}>
          {[
            { label: t('footer.terms_conditions', language), href: '/terms-and-conditions' },
            { label: t('footer.privacy_policy', language), href: '/privacy-policy' },
            { label: t('footer.authors', language), href: '/authors' },
            { label: t('footer.our_values', language), href: '/our-values' },
            { label: t('footer.affiliate_form', language), href: '/become-an-affiliate' },
          ].map((item, index) => (
            <Grid item key={index}>
              <Link
                href={item.href}
                underline='hover'
                sx={{
                  color: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Social Media Section */}
      <Grid item xs={12} md={3} container direction='column' alignItems={'center'}>
        <Typography
          variant='body1'
          sx={{
            my: theme.spacing(2),
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textAlign: isLargeScreen ? 'right' : 'center',
          }}
        >
          {t('footer.follow_us', language)} :
        </Typography>
        <Box
          sx={{
            mb: 2,
          }}
        >
          {[
            {
              href: 'https://x.com/360moms?lang=en',
              src: `${BACKEND_IMAGES}${ICONS.TWITTER}`,
              alt: 'Twitter',
            },
            {
              href: 'https://www.facebook.com/360Moms',
              src: `${BACKEND_IMAGES}${ICONS.FACEBOOK}`,
              alt: 'Facebook',
            },
            {
              href: 'https://www.instagram.com/360moms',
              src: `${BACKEND_IMAGES}${ICONS.INSTAGRAM}`,
              alt: 'Instagram',
            },
            {
              href: 'https://www.youtube.com/c/360MomsINC',
              src: `${BACKEND_IMAGES}${ICONS.YOUTUBE}`,
              alt: 'Youtube',
            },
          ].map((social, index) => (
            <Link key={index} href={social.href} target='_blank' rel='noopener' underline='none'>
              <img
                style={{
                  transition: 'transform 0.3s ease',
                  transform: hovered === index ? 'scale(1.1)' : 'scale(1)',
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                src={social.src}
                alt={social.alt}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MidFooter;
