import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { ArrowRightAlt, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const theme = useTheme();

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/agwata9', '_blank');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/path/to/your/hero-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: alpha(theme.palette.background.default, 0.85),
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: '2.3rem', md: '3.5rem' },
            }}
          >
            Creative Portfolio
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.secondary,
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              maxWidth: 600,
            }}
          >
            Showcasing Innovation in Digital Design & Development
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowRightAlt />}
                onClick={scrollToPortfolio}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<Email />}
                onClick={openLinkedIn}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Let’s Connect on LinkedIn
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          zIndex: 2,
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        }}
      >
        <ArrowRightAlt sx={{ fontSize: 40, transform: 'rotate(90deg)' }} />
      </Box>
    </Box>
  );
};

export default PortfolioHero;
