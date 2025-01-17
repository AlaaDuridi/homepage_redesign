import { createTheme , type ThemeOptions} from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    paper: string;
  }

  interface Palette {
    bright: Palette['primary'];
  }

  interface PaletteOptions {
    bright: PaletteOptions['primary'];
  }
}
export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    contrastThreshold: 2,
    primary: {
      main: '#F0DE75',
      light: '#f3e490',
      dark: '#a89b51',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7bb9ce',
      light: '#95c7d7',
      dark: '#568190',
      contrastText: '#ffffff',
    },
    bright: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#4F4F4F',
      disabled: '#9ea6c2',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
    },

    divider: '#E9EAF2',
  },
  typography: {
    fontFamily: [
      'Tajawal',
      'Cairo',
      'Roboto', // fallback
      'Arial',  // fallback
      'sans-serif',
    ].join(','),
    h6: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '1.3rem',
    },
    h4: {
      fontSize: '1.7rem',
      marginBottom: '1.5rem',
    },
    body2: {
      marginBottom: '0.2rem',
    },
    allVariants: {
      textTransform: 'none',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
          borderRadius: '18px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          paddingBlock: '.9rem',
          paddingInline: '1.5rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '4px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: ``,
    },
    MuiLink:{
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:hover': {
              color: theme.palette.secondary.main,
              textDecoration: 'underline',
              textUnderlineOffset: '5px',
              textDecorationThickness: '2px',
            },
          }),
        },
    }
  },
};

export const rtlTheme = createTheme({
  ...themeOptions,
  direction: 'rtl',
});

// English (LTR) theme
export const ltrTheme = createTheme({
  ...themeOptions,
  direction: 'ltr',
});
