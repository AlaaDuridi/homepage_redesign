import { FC } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguageContext } from '../../../contexts/LanguageContext';
import { getExperts } from '../../../constants/experts.constant.ts';
import { t } from '../../../utils/translate.ts';
import SlideContent from './SlideContent.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExpertsSlideshow: FC = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  const experts = getExperts(language);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[100],
        borderRadius: theme.spacing(2),
        textAlign: 'center',
        maxWidth: '100%',
        mx: 'auto',
        pb: theme.spacing(2),
      }}
    >
      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        loop={true}
        effect={'fade'}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {experts.map((expert, index) => (
          <SwiperSlide key={index}>
            <SlideContent expert={expert} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* All Experts Button */}
      <Button
        variant='contained'
        sx={{
          mt: theme.spacing(4),
          borderRadius: '50px',
          px: theme.spacing(4),
        }}
        href='https://www.360moms.net/ar/experts'
        target='_blank'
        endIcon={
          theme.direction === 'rtl' ? (
            <ArrowBackIcon color={'action'} />
          ) : (
            <ArrowForwardIcon color={'action'} />
          )
        }
      >
        {t('home.all_experts', language)}
      </Button>
    </Box>
  );
};

export default ExpertsSlideshow;
