import React from 'react';
import { Box, Typography, Container, Divider, Stack } from '@mui/material';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Diecast', logo: '/clients/diecast.png' },
  { name: 'Holiday Hype', logo: 'clients/holiday_hype.png' },
  { name: 'Roxiie', logo: '/clients/roxiie.png' },
  { name: 'Safaricom', logo: '/clients/safcom.png' },
  { name: 'KCB Bank', logo: '/clients/kcb.png' },
  { name: 'Nairobi Hospital', logo: '/clients/nbohos.png' },
];

export const Clients: React.FC = () => {

  return (
    <Box 
      id="clients" 
      component="section"
      sx={{ 
        py: 8,
        bgcolor: 'background.paper',
        borderTop: 1, 
        borderColor: 'divider' 
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" textAlign="center" fontWeight={800}>
            Trusted By Industry Leaders
          </Typography>

          <Divider sx={{ width: 80, height: 4, bgcolor: 'primary.main' }} />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(3, 1fr)', 
                md: 'repeat(6, 1fr)' 
              },
              gap: 4,
              width: '100%',
              alignItems: 'center',
              justifyItems: 'center'
            }}
          >
            {clients.map((client, index) => (
              <Box
                key={index}
                sx={{
                  width: '100%',
                  height: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  transition: 'all 0.3s ease',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 2,
                    bgcolor: 'background.default'
                  }
                }}
              >
                <Box
                  component="img"
                  src={client.logo}
                  alt={`${client.name} logo`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: 80,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1
                    }
                  }}
                />
              </Box>
            ))}
          </Box>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            Partnering with visionary organizations worldwide
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};