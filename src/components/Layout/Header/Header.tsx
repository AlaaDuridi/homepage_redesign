import { useState, FC } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ArrowDropDown } from '@mui/icons-material';
import { LOGO, menu } from '../../../constants/layout.ts';
import { BACKEND_IMAGES } from '../../../constants/common.ts';
import { useLanguageContext } from '../../../contexts/LanguageContext.tsx';
import DesktopNav from './DesktopNav.tsx';
import MobileMenu from './MobileMenu.tsx';
import { t } from '../../../utils/translate.ts';
import { Language } from '../../../types/common.ts';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: '1px solid #ccc',
}));

const Header: FC = () => {
  const { language, setLanguage } = useLanguageContext();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Check if the screen is at least 'md' breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is 'sm' or smaller

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
  const handleSwitchLang = (lang: Language) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position='static' color='transparent'>
      <Toolbar
        sx={{
          flexWrap: 'wrap', // Allow wrapping for content
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left Section: Logo and Mobile Menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: theme.spacing(2),
            flex: isMobile ? '1 0 100%' : 'auto',
          }}
        >
          {!isDesktop && (
            <IconButton onClick={handleToggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          )}

          <Link href={'/'}>
            <Box
              component='img'
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              src={`${BACKEND_IMAGES}${LOGO[language]}`}
              sx={{
                width: isDesktop ? '150px' : '120px',
                maxHeight: 50,
                objectFit: 'contain',
              }}
            />
          </Link>
        </Box>

        {/* Middle Section: Desktop Navigation */}
        {isDesktop && (
          <Box sx={{ flex: 1 }}>
            <DesktopNav />
          </Box>
        )}

        {/* Right Section: Language, Login, Search */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flex: isMobile ? '1 0 100%' : 'auto',
            justifyContent: isMobile ? 'space-between' : 'flex-end',
            mt: isMobile ? 2 : 0, // Add spacing between rows on mobile
          }}
        >
          <Button
            variant='text'
            onClick={handleLangClick}
            endIcon={<ArrowDropDown />}
            sx={{
              fontWeight: 'medium',
              textTransform: 'none',
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
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: 'light',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
            href={'/login'}
          >
            <Typography variant='body2' noWrap fontWeight='medium'>
              {t('common.login', language)}
            </Typography>
          </Link>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <MobileMenu menu={menu} open={mobileOpen} onClose={handleToggleMobileMenu} />
    </StyledAppBar>
  );
};

export default Header;
