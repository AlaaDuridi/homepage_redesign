import  { useState,FC } from 'react';
import {
    Toolbar,
    Box,
    IconButton,
    useMediaQuery,
    useTheme,
    Button,
    MenuItem,
    Menu,
    Link,
    Typography,
    styled,

} from '@mui/material';
import {Menu as MenuIcon, Search as SearchIcon,ArrowDropDown} from '@mui/icons-material';
import {LOGO, menu} from "../../../constants/layout.ts";
import {BACKEND_IMAGES} from "../../../constants/common.ts";
import {useLanguageContext} from "../../../contexts/LanguageContext.tsx";
import DesktopNav from "./DesktopNav.tsx";
import MobileMenu from "./MobileMenu.tsx";
import {t} from "../../../utils/translate.ts";
import {Language} from "../../../types/common.ts";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Header :FC= ()=>{
    const {language, setLanguage} =useLanguageContext();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openLangMenu = Boolean(anchorEl);
    const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLangClose = () => {
        setAnchorEl(null);
    };
    const handleSwitchLang = (lang:Language) => {
        setLanguage(lang);
        setAnchorEl(null);
    };
    return (
        <AppBar position="static" color="inherit" sx={{ boxShadow: 'none' }}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #ccc',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {!isDesktop && (
                        <IconButton onClick={handleToggleMobileMenu}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Logo */}
                    <Link href={'/'}>
                    <Box
                        component="img"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        src={`${BACKEND_IMAGES}${LOGO[language]}`}
                        sx={{
                            width: isDesktop ? '150px' : '120px', // Adjust as needed
                            maxHeight: 50,
                            objectFit: 'contain',

                        }}
                    />
                    </Link>
                </Box>
                {isDesktop && <DesktopNav />}
                <Box sx={{ display: 'flex', alignItems: 'center',  gap: 2,
                    whiteSpace: 'nowrap',}} m={1} >
                    <Button
                        variant="text"
                        onClick={handleLangClick}
                        endIcon={<ArrowDropDown />}
                        sx={{
                            fontWeight: 'medium',
                            textTransform: 'none',
                            // noWrap approach
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {language === 'ar' ? 'عربي' : 'English'}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={openLangMenu}
                        onClose={handleLangClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem onClick={() => handleSwitchLang('ar')}>عربي</MenuItem>
                        <MenuItem onClick={() => handleSwitchLang('en')}>English</MenuItem>
                    </Menu>
                    <Link
                        sx={{
                            cursor:'pointer',
                            textDecoration: 'none',
                                fontWeight: 'light',
                                '&:hover': {
                                    textDecoration: 'none',
                                }
                        }}
                        href={'/login'}
                    >
                        <Typography variant="body2" noWrap fontWeight="medium">
                        {t('common.login', language)}
                        </Typography>
                    </Link>
                    {/* Search Icon */}
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>

            </Toolbar>
            <MobileMenu
                menu={menu}
                open={mobileOpen}
                onClose={handleToggleMobileMenu}
            />
        </AppBar>
    );
}
export default Header;