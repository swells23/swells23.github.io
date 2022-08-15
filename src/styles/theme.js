import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#263238',
      contrastText: '#FFC4BD'
    },
    secondary: {
      main: '#FFC4BD'
    }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: '#FFCFCA'
      }
    },
    MuiCard: {
      root: {
        backgroundColor: '#263238'
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export { theme };