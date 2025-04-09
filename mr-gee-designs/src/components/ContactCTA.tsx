// src/components/ContactCTA.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactCTA: React.FC = () => {
  return (
    <Box id="contact" sx={{ my: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have a project in mind? Let's talk!
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/yourNumber" // Replace 'yourNumber' with your WhatsApp number
      >
        Chat on WhatsApp
      </Button>
    </Box>
  );
};

export default ContactCTA;
