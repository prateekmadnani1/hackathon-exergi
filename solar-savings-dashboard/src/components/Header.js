// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1b5e20' }}>
    <Toolbar>
      <Typography variant="h6">Solar Savings Insights Dashboard</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
