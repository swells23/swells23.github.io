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
        backgroundColor: '#ffb3b3',
        boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)',
        position: 'sticky',
        bottom: 0
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: '#263238',
        '&.Mui-selected': {
          color: '#990033'
        }
      }
    },
    MuiCard: {
      root: {
        backgroundColor: '#263238'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#263238'
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export { theme };