import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc400',
      contrastText: '#fff',
    },
    secondary: {
      main: '#30336B',
    },
    error: {
      main: '#EB4D4B',
    },
  },
});

export default theme;
