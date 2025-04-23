import React from 'react';
import Box from '@mui/material/Box';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTheme } from '@mui/material/styles';

const ExpertSessionHero: React.FC = () => {
  const theme = useTheme();

  // Scroll to form
  const scrollToForm = () => {
    const formSection = document.getElementById('book-session-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        py: [8, 10], // Increased padding on top and bottom for more space
        px: 2,
        bgcolor: 'primary.main',
        color: 'common.white',
        textAlign: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 100%)`, // Gradient Background
        mt: [6, 8], // Increased margin-top for more space above the hero section
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: [2, 4],
        }}
      >
        {/* Title */}
        <Box 
          component="h1" 
          sx={{ 
            typography: 'h3', 
            fontWeight: 700, 
            mb: 2, 
            fontSize: ['2rem', '3rem'], 
            lineHeight: 1.2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adds a shadow for better readability
          }}
        >
          Expert Session
        </Box>

        {/* Subtitle */}
        <Box 
          component="p" 
          sx={{ 
            typography: 'h6', 
            fontSize: ['1.25rem', '1.5rem'], 
            maxWidth: 800, 
            mx: 'auto', 
            color: 'grey.300', 
            mb: 4, // Add margin bottom for space
          }}
        >
          Join our experts to gain valuable insights and knowledge.
        </Box>

        {/* Scroll Indicator with hover effect */}
        <Box
          onClick={scrollToForm}  // Makes it clickable
          sx={{
            mt: 6,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-15px)' },
            },
            cursor: 'pointer',  // Shows that it's clickable
            '&:hover': {
              transform: 'scale(1.1)', // Add scale effect when hovered
            },
          }}
        >
          <KeyboardDoubleArrowDownIcon 
            fontSize="large" 
            aria-label="Scroll to booking form"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ExpertSessionHero;
