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
        <Toolbar disableGutters sx={{ py: 1, justifyContent: 'space-between' }}>
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
                edge="end"
                aria-haspopup="true" // Accessibility improvement
                aria-label="Open navigation menu" // Added aria-label for better accessibility
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: { mt: 2, width: 'auto', borderRadius: '8px' }, // Smooth transition effect
                }}
              >
                {navLinks.map((link) => (
                  <MenuItem 
                    key={link.name} 
                    onClick={handleMenuClose}
                    component="a"
                    href={link.href}
                    sx={{ px: 2.5, py: 1 }}
                    aria-label={link.name} // Added aria-label for accessibility
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
              marginLeft: 'auto', 
              marginRight: '20px'
            }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  color="inherit" 
                  href={link.href}
                  sx={{ 
                    fontWeight: 'bold',
                    px: 2,
                    py: 1,
                    fontSize: '1rem', // Adjusted font size for better readability
                    '&:hover': {
                      transform: 'translateY(-2px)', 
                      transition: 'transform 0.3s ease',
                    }
                  }}
                  aria-label={link.name} // Added aria-label for accessibility
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
