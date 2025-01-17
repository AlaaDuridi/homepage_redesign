import { FC } from 'react';
import {Box, Grid, Link, Typography} from '@mui/material';
import {menu} from '../../../constants/layout.ts';
import {t} from "../../../utils/translate.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";



const DesktopNav: FC = () => {
    const {language} =useLanguageContext();

    return (
        <Grid container item gap={2} justifyContent="center">
            {menu.map((item) => (
                <Grid item key={item.text}>
                    <Box
                        sx={{ cursor: 'pointer' }}
                    >
                        <Link >
                            <Typography variant="body1">
                                {t(`menu.${item.text}`, language)}
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default DesktopNav;
