// src/components/Header.jsx

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate logged-in state
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SaaSify Marketplace
          </Typography>

          <Button color="inherit">Auctions</Button>
          <Button color="inherit">Vendors</Button>

          {isLoggedIn ? (
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <Avatar alt="Profile" src="/path-to-profile-pic.jpg" />
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                keepMounted
              >
                <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
              <Button color="inherit" onClick={() => navigate('/signup')}>Signup</Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
