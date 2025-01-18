import {Typography, Box,useTheme} from "@mui/material";
import {t} from "../../../utils/translate.ts";
import {BACKEND_IMAGES} from "../../../constants/common.ts";
import {WHATSAPP_SVG} from "../../../constants/layout.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";
import {FC} from 'react';
const HeroTitle: FC = () => {
    const theme = useTheme();
    const { language } = useLanguageContext();

    return (
        <Box
        sx={{
            m: theme.spacing(4),
            gap: 2,
            justifyContent: {xs: 'center', md: 'flex-start'},
            flexDirection: {md: 'row', sm: 'column'}
        }}
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                    color: theme.palette.primary.main,
                    textAlign: { xs: 'center', md: 'left' },
                    maxWidth: '100%',
                }}
            >
                AI Parents Advisor
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    mt: theme.spacing(2),
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                {t('home.text', language)}
                <a href="/" style={{ marginLeft: theme.spacing(1) }}>
                    <img
                        src={`${BACKEND_IMAGES}${WHATSAPP_SVG}`}
                        alt="WhatsApp"
                        style={{ verticalAlign: 'middle' }}
                    />
                </a>
            </Typography>
        </Box>
    );
};
export default HeroTitle;