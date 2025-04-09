// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mr. Gee Designs
        </Typography>
        <Button color="inherit" href="#hero">Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#services">Services</Button>
        <Button color="inherit" href="#portfolio">Portfolio</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
