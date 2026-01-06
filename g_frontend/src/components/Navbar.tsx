import React, { useState, useEffect } from 'react';
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
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateAndScroll = (path: string, sectionId?: string) => {
    const scrollToSection = () => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }

    handleMenuClose();
  };

  const navLinks = [
    { name: 'Home', action: () => handleNavigateAndScroll('/') },
    { name: 'About', action: () => handleNavigateAndScroll('/', 'about') },
    { name: 'Services', action: () => handleNavigateAndScroll('/', 'services') },
    { name: 'Portfolio', action: () => handleNavigateAndScroll('/portfolio') },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'background-color 300ms, border 300ms, backdrop-filter 300ms',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            px: 2, // 👈 Adds padding left & right
            py: 1,
            minHeight: '80px',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={() => handleNavigateAndScroll('/')}
              sx={{
                p: 0,
                minWidth: 'auto',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              <img
                src="/logo.png"
                alt="Gee Designs Logo"
                style={{
                  height: isMobile ? '38px' : '45px',
                  objectFit: 'contain',
                }}
              />
            </Button>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  onClick={link.action}
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.name}
                </Button>
              ))}

              <Button
                onClick={() => handleNavigateAndScroll('/book-expert')}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                    borderColor: 'transparent',
                  },
                }}
              >
                Book Session
              </Button>
            </Box>
          ) : (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleMenuOpen}
                aria-label="open menu"
                sx={{ ml: 1 }}
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
                    width: 200,
                    borderRadius: 2,
                    bgcolor: 'rgba(0,0,0,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  },
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
                        bgcolor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {link.name}
                  </MenuItem>
                ))}

                <MenuItem
                  onClick={() => handleNavigateAndScroll('/book-expert')}
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Book Session
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
