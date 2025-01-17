import {FC, PropsWithChildren} from 'react'
import {Grid, CssBaseline, useTheme} from '@mui/material'
import Header from "./Header/Header.tsx";
import {Outlet} from 'react-router-dom';


export const Layout: FC<PropsWithChildren<NonNullable<unknown>>> = ({children}) => {
    const theme= useTheme();
    return (
        <Grid container>
            <CssBaseline/>
            <Header/>
            <Grid
                container
                sx={{
                    m: theme.spacing(3),
                }}
            >
                <Outlet />
                {children}
            </Grid>

        </Grid>
    )
}
export default Layout