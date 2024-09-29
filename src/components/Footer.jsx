// src/components/Footer.jsx

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          SaaSify Marketplace &copy; 2024. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact Us | Terms of Service | Privacy Policy
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
