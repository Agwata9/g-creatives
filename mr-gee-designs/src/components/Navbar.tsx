import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Slide } from '@mui/material';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll <= 10 || currentScroll < prevScroll);
      prevScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slide direction="down" in={show}>
      <AppBar position="relative" color="primary" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Mr. Gee Designs
            </Typography>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#services">Services</Button>
            <Button color="inherit" href="#portfolio">Portfolio</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
