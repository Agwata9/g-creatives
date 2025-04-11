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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', width: '100%', py: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ 
          py: 1,
          justifyContent: 'space-between', // This will balance the space between logo and nav
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="Gee Designs Logo" 
              style={{ height: '45px', marginRight: '15px' }} 
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton 
                color="inherit" 
                onClick={handleMenuOpen} 
                sx={{ p: 1 }}
                edge="end" // Aligns the icon to the end
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{ sx: { mt: 2 } }}
              >
                {navLinks.map((link) => (
                  <MenuItem 
                    key={link.name} 
                    onClick={handleMenuClose}
                    component="a"
                    href={link.href}
                    sx={{ px: 2.5, py: 1 }}
                  >
                    {link.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              marginLeft: 'auto', // Pushes the nav items closer to the logo
              marginRight: '20px' // Adds some space from the right edge
            }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  color="inherit" 
                  href={link.href}
                  sx={{ 
                    fontWeight: 'bold',
                    px: 1.5,
                    py: 0.5,
                    fontSize: '0.95rem',
                    '&:hover': {
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;