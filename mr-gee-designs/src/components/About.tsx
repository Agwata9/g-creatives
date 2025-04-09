// src/components/About.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ my: 8 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Hi, I’m Mr. Gee, a creative designer passionate about crafting stunning digital experiences. With extensive expertise in graphic design, web development, and UX/UI design, I transform ideas into visually engaging realities.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
