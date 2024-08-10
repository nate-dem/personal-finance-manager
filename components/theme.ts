import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8A2BE2', // Purple
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB6C1', // Light Pink
      contrastText: '#000000',
    },
    background: {
      default: '#262626', // Dark background
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#9A3FF2',
          },
        },
        outlinedPrimary: {
          color: '#FFB6C1',
          borderColor: '#FFB6C1',
          '&:hover': {
            backgroundColor: 'rgba(255, 182, 193, 0.04)',
            borderColor: '#FFC6D1',
          },
        },
      },
    },
  },
});

export default theme;