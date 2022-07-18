
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Style from './App.css'
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <MainContent/>
    </ThemeProvider>
  );
}

export default App;
