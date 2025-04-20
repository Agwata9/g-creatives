import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    if (location.pathname !== '/portfolio') {
      navigate('/portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  const navLinks = [
    { name: 'Home', action: handleHomeClick },
    { name: 'About', action: () => handleScrollTo('about') },
    { name: 'Services', action: () => handleScrollTo('services') },
    { name: 'Portfolio', action: handlePortfolioClick },
  ];

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'black', 
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ 
          py: 1, 
          justifyContent: 'space-between',
          minHeight: '80px'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={handleHomeClick}
              sx={{
                p: 0,
                '&:hover': { backgroundColor: 'transparent' }
              }}
            >
              <img 
                src="/logo.png" 
                alt="Gee Designs Logo" 
                style={{ 
                  height: '45px', 
                  marginRight: '12px',
                  objectFit: 'contain'
                }} 
              />
            </Button>
          </Box>

          {isMobile ? (
            <>
              <IconButton 
                color="inherit" 
                onClick={handleMenuOpen}
                edge="end"
                aria-label="Open navigation menu"
              >
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: { 
                    mt: 2, 
                    width: '200px', 
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }
                }}
              >
                {navLinks.map((link) => (
                  <MenuItem 
                    key={link.name}
                    onClick={link.action}
                    sx={{
                      color: 'white',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    {link.name}
                  </MenuItem>
                ))}
                <MenuItem 
                  onClick={() => handleScrollTo('contact')}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  color="inherit"
                  onClick={link.action}
                  sx={{
                    fontWeight: 600,
                    textTransform: 'none',
                    color: 'white',
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleScrollTo('contact')}
                sx={{
                  px: 3,
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}`
                  }
                }}
              >
                Hire Me
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;