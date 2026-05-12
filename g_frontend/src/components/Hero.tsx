import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, OutMode } from 'tsparticles-engine';
import { Box, Typography, Button, useTheme, useMediaQuery, Stack, Container } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine as never), []);

  const particlesConfig = {
    particles: {
      number: {
        value: isMobile ? 20 : isTablet ? 35 : 50,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: isMdUp ? 'left' : 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(31, 41, 55, 0.97) 50%, rgba(15, 23, 42, 0.98) 100%)`,
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Gradient Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack
            spacing={{ xs: 2.5, sm: 3, md: 4 }}
            alignItems={isMdUp ? 'flex-start' : 'center'}
          >
            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <MotionTypography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  maxWidth: isMdUp ? '70%' : '95%',
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                  lineHeight: { xs: 1.05, md: 1.1 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                Transforming Visions into Memorable Digital Experiences
              </MotionTypography>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(241, 245, 249, 0.9)',
                  maxWidth: isMdUp ? '65%' : '95%',
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                I design and build brand-forward websites, visual identities, and ICT solutions that help businesses grow. Let's create something that elevates your online presence.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 2 }}
                sx={{
                  mt: { xs: 1, md: 2 },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => window.open('https://wa.me/message/UMFDNJDDPTZUA1', '_blank')}
                    startIcon={<WhatsApp />}
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.5 },
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      boxShadow: `0 8px 20px rgba(249, 115, 22, 0.3)`,
                      width: { xs: '100%', sm: 'auto' },
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: `0 12px 30px rgba(249, 115, 22, 0.4)`,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    Start Project
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/portfolio')}
                    sx={{
                      color: 'white',
                      borderColor: theme.palette.primary.main,
                      borderWidth: 2,
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.5 },
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      width: { xs: '100%', sm: 'auto' },
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: `rgba(249, 115, 22, 0.1)`,
                        borderColor: theme.palette.primary.light,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    View Work
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          cursor: 'pointer',
        }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDownward
          sx={{
            fontSize: { xs: '1.75rem', md: '2rem' },
            color: theme.palette.primary.main,
            filter: 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.3))',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
