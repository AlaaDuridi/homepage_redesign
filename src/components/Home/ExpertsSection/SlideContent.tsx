import {FC} from 'react';
import {IExpertFE} from "../../../types/models/expert.model.ts";
import {Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {t} from "../../../utils/translate.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ISlideContentProps {
    expert: IExpertFE;
}

const SlideContent: FC<ISlideContentProps> = ({expert}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {language} = useLanguageContext();
    return (
        <Grid
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            p={5}
        >


            <Grid
                gap={2}
                item
                container
                justifyContent={'center'}
                alignItems={'center'}
                md={6} sm={12} direction='column'>
                <Grid container item
                      justifyContent={'center'}
                      alignItems={'center'}>
                    <Typography variant={'h4'} fontWeight={'bold'}> {t('home.experts_title', language)}</Typography>
                </Grid>
                <Grid item justifyContent={'center'}
                      alignItems={'center'} container sm={12}
                      display={isMobile ? 'flex' : 'none'}
                >
                    <img src={expert.image} alt={expert.name}
                         style={{width: '50%', borderRadius: '100%', height: 'auto'}}/>
                </Grid>
                <Typography variant={'h3'} fontWeight={'bold'} color={'primary'}>{expert.name}</Typography>
                <Typography variant={'h4'} fontWeight={'bold'}>{expert.specification}</Typography>
                <Typography variant={'h5'}>{expert.functional_description}</Typography>

                <Button fullWidth
                        variant="text"
                        color="secondary"
                        target="_blank"
                        href={expert.readMoreLink}
                        endIcon={theme.direction === 'rtl' ? <ArrowBackIcon color={'secondary'}/> :
                            <ArrowForwardIcon color={'secondary'}/>}
                >
                    <Typography noWrap variant={'h5'} color={'secondary'}>
                        {t('home.read_more', language)}
                    </Typography>
                </Button >

            </Grid>
            <Grid item justifyContent={'center'}
                  alignItems={'center'} container md={6} display={isMobile ? 'none' : 'flex'}>
                <img src={expert.image} alt={expert.name}
                     style={{width: '50%', borderRadius: '100%', height: 'auto'}}/>
            </Grid>
        </Grid>
    )
}

export default SlideContent;