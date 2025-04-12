import { Box, Typography, Button, useTheme, useMediaQuery, Stack, Fade, Zoom } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Screens less than 600px

  return (
    <Box
      id="hero"
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(135deg, 
          rgba(249, 115, 22, 0.8) 0%, 
          rgba(0, 0, 0, 0.9) 50%, 
          rgba(31, 41, 55, 0.9) 100%),
          url('/hero-bg-pattern.svg')`,
        backgroundSize: 'cover, 120%',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        textAlign: 'center',
        color: '#fff',
        px: 2,
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.3))',
          zIndex: 1,
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
          animation: 'pulse 8s ease infinite alternate',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
          animation: 'pulse 12s ease infinite alternate-reverse',
        }}
      />

      <Fade in timeout={1000}>
        <Stack spacing={isMobile ? 3 : 5} alignItems="center" sx={{ zIndex: 2 }}>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 700,
              maxWidth: isMobile ? '90%' : '80%',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              mb: isMobile ? 1 : 2,
              lineHeight: 1.3,
              fontSize: isMobile ? '2.25rem' : '3rem',
            }}
          >
            Transforming visions into stunning digital experiences with pixel-perfect precision
          </Typography>

          <Zoom in timeout={800} style={{ transitionDelay: '300ms' }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://wa.me/message/UMFDNJDDPTZUA1"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsApp />}
                aria-label="Hire Me on WhatsApp"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(249, 115, 22, 0.6)',
                    backgroundColor: '#25D366',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Hire Me
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#portfolio"
                aria-label="View Portfolio"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Portfolio
              </Button>
            </Stack>
          </Zoom>

          {/* Additional CTA for projects */}
          <Zoom in timeout={1000} style={{ transitionDelay: '600ms' }}>
            <Button
              variant="text"
              color="inherit"
              size="medium"
              href="#contact"
              endIcon={<ArrowDownward />}
              sx={{
                fontWeight: 'bold',
                textTransform: 'none',
                letterSpacing: 'normal',
                '&:hover': {
                  color: theme.palette.primary.light,
                },
              }}
            >
              Start Your Project
            </Button>
          </Zoom>
        </Stack>
      </Fade>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          animation: 'bounce 2s infinite',
        }}
      >
        <ArrowDownward sx={{ fontSize: '2rem' }} />
      </Box>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;