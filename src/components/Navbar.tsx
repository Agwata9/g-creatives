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
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAboutMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAboutAnchorEl(null);
  };

  const navLinks = [
    { 
      name: 'Home', 
      href: '/',
      subItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonials', href: '/testimonials' }
      ]
    },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '/portfolio' },
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
                  <div key={link.name}>
                    {link.subItems ? (
                      <>
                        <MenuItem 
                          onClick={handleMenuClose}
                          sx={{ 
                            px: 3,
                            py: 1.5,
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                          }}
                        >
                          <Typography variant="body2">{link.name}</Typography>
                          <ExpandMore sx={{ ml: 1 }} />
                        </MenuItem>
                        {link.subItems.map((subItem) => (
                          <MenuItem 
                            key={subItem.name}
                            component={Link}
                            to={subItem.href}
                            onClick={handleMenuClose}
                            sx={{ pl: 4 }}
                          >
                            {subItem.name}
                          </MenuItem>
                        ))}
                      </>
                    ) : (
                      <MenuItem 
                        key={link.name}
                        component={Link}
                        to={link.href}
                        onClick={handleMenuClose}
                      >
                        {link.name}
                      </MenuItem>
                    )}
                  </div>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    <>
                      <Button
                        color="inherit"
                        endIcon={<ExpandMore />}
                        onClick={handleAboutMenuOpen}
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
                      <Menu
                        anchorEl={aboutAnchorEl}
                        open={Boolean(aboutAnchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          sx: {
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        {link.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.name}
                            component={Link}
                            to={subItem.href}
                            onClick={handleMenuClose}
                            sx={{
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)'
                              }
                            }}
                          >
                            {subItem.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      to={link.href}
                      color="inherit"
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
                  )}
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="#contact"
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