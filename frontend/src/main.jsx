import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ThemeProvider, createTheme, CssBaseline, Box} from '@mui/material';

const theme = createTheme({
  // Customize your theme here
  typography:{
    fontFamily:     'poppins',
   
  },
  palette: {
    primary: {
      main: '#2E2661',
    },
    secondary: {
      main: '#000000',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Box
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingX: 5,
        paddingY: 24,
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      }}
    />
   
    </ThemeProvider>
    
  </React.StrictMode>
);
