import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#263238',
      contrastText: '#ffc4bd'
    },
    secondary: {
      main: '#ffc4bd'
    }
  }
});

theme = responsiveFontSizes(theme);

export { theme };