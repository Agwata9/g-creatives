import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

    setMobileDrawerOpen(false);
  };

  const navLinks = [
    { name: 'Home', action: () => handleNavigateAndScroll('/') },
    { name: 'About', action: () => handleNavigateAndScroll('/', 'about') },
    { name: 'Services', action: () => handleNavigateAndScroll('/', 'services') },
    { name: 'Portfolio', action: () => handleNavigateAndScroll('/portfolio') },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(249, 115, 22, 0.1)' : 'none',
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border 300ms ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          zIndex: 100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 1.25, md: 1.5 },
              minHeight: { xs: '70px', md: '80px' },
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleNavigateAndScroll('/')}
                sx={{
                  p: 0,
                  minWidth: 'auto',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Gee Designs Logo"
                  sx={{
                    height: { xs: '40px', md: '48px' },
                    objectFit: 'contain',
                    transition: 'all 200ms ease-in-out',
                  }}
                />
              </Button>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={1} alignItems="center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Button
                      onClick={link.action}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 2,
                        py: 1,
                        position: 'relative',
                        transition: 'color 200ms ease-in-out',
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: 'transparent',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 200ms ease-in-out',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {link.name}
                    </Button>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={() => handleNavigateAndScroll('/book-expert')}
                    variant="contained"
                    sx={{
                      ml: 2,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1rem',
                      px: 3,
                      py: 1,
                      borderRadius: '50px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      boxShadow: `0 4px 15px rgba(249, 115, 22, 0.3)`,
                      transition: 'all 300ms ease-in-out',
                      '&:hover': {
                        boxShadow: `0 8px 25px rgba(249, 115, 22, 0.4)`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Book Session
                  </Button>
                </motion.div>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.div
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={() => setMobileDrawerOpen(true)}
                  aria-label="open menu"
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.5rem',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobile && (
          <Drawer
            anchor="right"
            open={mobileDrawerOpen}
            onClose={() => setMobileDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '280px',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(10px)',
                borderLeft: '1px solid rgba(249, 115, 22, 0.1)',
              },
            }}
            ModalProps={{
              sx: {
                '& .MuiBackdrop-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(4px)',
                },
              },
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                onClick={() => setMobileDrawerOpen(false)}
                sx={{ color: 'text.primary' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Stack spacing={0.5} sx={{ px: 1.5, pb: 3 }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    onClick={link.action}
                    fullWidth
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      py: 1.5,
                      px: 2,
                      borderRadius: theme.shape.borderRadius,
                      transition: 'all 200ms ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        color: theme.palette.primary.main,
                        pl: 3,
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => handleNavigateAndScroll('/book-expert')}
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    py: 1.5,
                    borderRadius: '50px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 4px 15px rgba(249, 115, 22, 0.3)`,
                    transition: 'all 200ms ease-in-out',
                    '&:hover': {
                      boxShadow: `0 8px 25px rgba(249, 115, 22, 0.4)`,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Book Session
                </Button>
              </motion.div>
            </Stack>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
