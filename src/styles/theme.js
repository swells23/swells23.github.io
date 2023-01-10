import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#273035',
      contrastText: '#EF9A9A',
    },
    secondary: {
      main: '#EF9A9A',
      contrastText: '#273035'
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#263238',
          color: '#F5F5F5'
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;