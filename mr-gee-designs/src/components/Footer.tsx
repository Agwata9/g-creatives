// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', p: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Mr. Gee Designs. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
