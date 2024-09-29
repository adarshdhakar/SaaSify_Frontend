// src/App.jsx

import React from 'react';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline, Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          width: '100%',
        }}
      >
        <FrontPage />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
