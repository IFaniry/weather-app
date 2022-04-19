import React from 'react';
import ReactDOM from 'react-dom/client';
// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { createClient, Provider } from 'urql';

import bg from './images/bg2.jpg';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CityProvider from './providers/CityProvider';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const API_URL = 'https://txjsitczd7.execute-api.us-east-1.amazonaws.com/dev';
const graphqlClient = createClient({
  url: API_URL,
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // width: 100%;
          // min-height: 100vh;
          color: grey[900],
          background: `url(${bg}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        },
      },
    },
  },
  palette: {
    info: {
      main: grey[900],
    },
    error: {
      main: red.A700,
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider value={graphqlClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CityProvider>
          <App />
        </CityProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
