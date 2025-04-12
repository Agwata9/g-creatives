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
  useTheme,
 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    
  ];

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'black', 
      width: '100%',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
        <Toolbar disableGutters sx={{ 
          py: 1, 
          justifyContent: 'space-between',
          minHeight: '80px'
        }}>
          {/* Logo Section - Centered more */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            ml: { xs: 1, sm: 2, md: 4 } // Reduced left margin
          }}>
            <img 
              src="/logo.png" 
              alt="Gee Designs Logo" 
              style={{ 
                height: '45px', 
                marginRight: '12px',
                objectFit: 'contain'
              }} 
            />
          
          </Box>

          {isMobile ? (
            <>
              <IconButton 
                color="inherit" 
                onClick={handleMenuOpen} 
                sx={{ p: 1, mr: 1 }} // Reduced right margin
                edge="end"
                aria-haspopup="true"
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
                  },
                }}
                MenuListProps={{
                  sx: { py: 0 }
                }}
              >
                {navLinks.map((link) => (
                  <MenuItem 
                    key={link.name} 
                    onClick={handleMenuClose}
                    component="a"
                    href={link.href}
                    sx={{ 
                      px: 3,
                      py: 1.5,
                      color: 'white',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                    aria-label={link.name}
                  >
                    {link.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ 
              display: 'flex', 
              gap: 3, // Reduced gap between items
              alignItems: 'center',
              mr: 3 // Reduced right margin
            }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  color="inherit" 
                  href={link.href}
                  sx={{ 
                    fontWeight: 600,
                    px: 0,
                    py: 1,
                    fontSize: '1rem',
                    textTransform: 'none',
                    letterSpacing: '0.5px',
                    color: 'white',
                    position: 'relative',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '100%'
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width 0.3s ease'
                    }
                  }}
                  aria-label={link.name}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}`
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Hire ME
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;