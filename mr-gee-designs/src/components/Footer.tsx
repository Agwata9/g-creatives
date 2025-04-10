import { Box, Typography, Link, Container, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4,
        width: '100%',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ textAlign: 'center' }}
        >
          {/* Copyright */}
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            © {new Date().getFullYear()} Mr. Gee Designs
          </Typography>

          {/* Links Stack */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{
              '& .MuiLink-root:not(:last-child)::after': {
                content: { sm: '"|"' },
                color: 'rgba(255,255,255,0.3)',
                px: { sm: 1 }
              }
            }}
          >
            <Link 
              href="/privacy-policy" 
              color="inherit" 
              underline="hover"
              sx={{
                fontWeight: 'bold',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Privacy Policy
            </Link>
            
            <Link 
              href="/terms-of-service" 
              color="inherit" 
              underline="hover"
              sx={{
                fontWeight: 'bold',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Terms of Service
            </Link>
            
            <Link 
              href="#contact" 
              color="inherit" 
              underline="hover"
              sx={{
                fontWeight: 'bold',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              Contact
            </Link>
          </Stack>

          {/* Tagline */}
          <Typography 
            variant="body2" 
            sx={{ 
              mt: 1,
              opacity: 0.8,
            }}
          >
            Creativity in every pixel.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;