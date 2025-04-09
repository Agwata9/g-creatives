// src/components/Services.tsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Graphic Design',
      description: 'Custom logos, branding, and print design.',
      icon: <DesignServicesIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Web Development',
      description: 'Responsive websites built with modern frameworks.',
      icon: <WebIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Mobile Apps',
      description: 'User-friendly mobile app solutions for all platforms.',
      icon: <PhoneIphoneIcon fontSize="large" color="primary" />,
    },
  ];

  return (
    <Box id="services" sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              {service.icon}
              <Typography variant="h6" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
