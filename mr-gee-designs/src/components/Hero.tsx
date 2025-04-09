import React from 'react';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section
      id="hero"
      style={{
        width: '100%',
        background: 'linear-gradient(-45deg, #f97316, #000000, #1f2937, #f59e0b)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        paddingTop: isMobile ? '4rem' : '6rem',
        paddingBottom: isMobile ? '4rem' : '6rem',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h2'}
        fontWeight="bold"
        gutterBottom
      >
        Mr. Gee Designs
      </Typography>
      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        gutterBottom
      >
        Creativity in every pixel.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get in Touch
      </Button>

      {/* Background animation keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
