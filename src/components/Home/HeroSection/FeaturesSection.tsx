import {FC} from 'react';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@mui/material';
import {ICONS} from '../../../constants/layout.ts';
import {BACKEND_IMAGES} from '../../../constants/common.ts';
import {t} from '../../../utils/translate.ts';
import {useLanguageContext} from '../../../contexts/LanguageContext.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const FeaturesSection: FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect if the screen is mobile
    const {language} = useLanguageContext();

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
            item
            direction='column'
            justifyContent='center'
            sx={{
                marginTop: '1rem',
                textAlign: 'center',
                backgroundColor: isMobile?theme.palette.grey[200]:'',
                borderRadius: isMobile?theme.spacing(2):'',
                m: theme.spacing(4),
                py: theme.spacing(1),
            }}
        >
            {/* Title */}
            <Grid item xs={12} sx={{mt: theme.spacing(3)}}  alignSelf={isMobile?'center':'flex-start'} >
                <Typography variant='h4' >
                    {t('home.question', language)}
                </Typography>
            </Grid>

            {/* Features */}
            {isMobile ? (
                <Swiper
                    modules={[Pagination, EffectFade,Autoplay]}
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    style={{paddingBottom: theme.spacing(5),maxWidth: '50%', margin: '0 auto'}}
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    component='img'
                                    src={feature.icon}
                                    alt={feature.text}
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        marginBottom: theme.spacing(1),
                                    }}
                                />
                                <Typography variant='body1' sx={{fontWeight: 'bold'}}>
                                    {feature.text}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
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
                                    textAlign: theme.direction === 'rtl' ? 'right' : 'left',
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
                                <Typography variant='body1' sx={{fontWeight: 'bold'}}>
                                    {feature.text}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default FeaturesSection;
