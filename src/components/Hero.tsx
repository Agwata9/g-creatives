import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, OutMode } from 'tsparticles-engine';
import { Box, Typography, Button, useTheme, useMediaQuery, Stack, Fade, Zoom } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), []);

  const particlesConfig = {
    particles: {
      number: {
        value: isMobile ? 30 : 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#f97316"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 2,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#f97316",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none" as const,
        out_mode: "bounce" as OutMode,
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  };

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
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 30%, rgba(31,41,55,0.95) 100%)',
      }}
    >
      {/* Network Connection Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* Content Layer */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Stack spacing={isMobile ? 3 : 5} alignItems="center">
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              sx={{
                fontWeight: 700,
                maxWidth: isMobile ? '90%' : '80%',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: 1.3,
                fontSize: isMobile ? '2.25rem' : '3rem',
              }}
            >
              Transforming Visions Into Digital Experiences
            </Typography>

            <Zoom in timeout={800} style={{ transitionDelay: '300ms' }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  href="https://wa.me/message/UMFDNJDDPTZUA1"
                  startIcon={<WhatsApp />}
                  sx={{
                    backgroundColor: '#25D366',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#128C7E',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Project
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href="#portfolio"
                  sx={{
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  View Work
                </Button>
              </Stack>
            </Zoom>
          </Stack>
        </Fade>
      </Box>

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
        <ArrowDownward sx={{ fontSize: '2rem', color: '#f97316' }} />
      </Box>

      <style>{`
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