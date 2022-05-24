import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#000',
      secondary: '#fff',
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