import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, OutMode } from 'tsparticles-engine';
import { Box, Typography, Button, useTheme, useMediaQuery, Stack, Fade, Zoom, Container } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
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
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Content Layer */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Stack spacing={isMobile ? 2.5 : 4} alignItems={isMdUp ? 'flex-start' : 'center'}>
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              sx={{
                fontWeight: 800,
                maxWidth: isMdUp ? '60%' : '90%',
                textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                lineHeight: 1.05,
                fontSize: { xs: '1.8rem', sm: '2.25rem', md: '3rem' },
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Transforming visions into memorable digital experiences
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.92)',
                maxWidth: isMdUp ? '50%' : '90%',
                fontSize: { xs: '0.975rem', md: '1.125rem' },
              }}
            >
              I design and build brand-forward websites, visual identities and ICT solutions that help
              businesses grow. Let’s create something that elevates your online presence.
            </Typography>

            <Zoom in timeout={800} style={{ transitionDelay: '300ms' }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => window.open('https://wa.me/message/UMFDNJDDPTZUA1', '_blank')}
                  startIcon={<WhatsApp />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    px: 4,
                    py: 1.25,
                    borderRadius: '999px',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'translateY(-3px)'
                    },
                    transition: 'all 0.25s ease'
                  }}
                >
                  Start Project
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/portfolio')}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.18)',
                    borderWidth: 2,
                    px: 3,
                    py: 1.25,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' },
                  }}
                >
                  View Work
                </Button>
              </Stack>
            </Zoom>
          </Stack>
        </Fade>
      </Container>

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